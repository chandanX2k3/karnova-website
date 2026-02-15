
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { contactSchema } from '@/lib/validators';
import { sendEmail } from '@/lib/services/email';
import { successResponse, errorResponse } from '@/lib/api-response';
import { ValidationError } from '@/lib/exceptions';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate input
        const validationResult = contactSchema.safeParse(body);
        if (!validationResult.success) {
            return errorResponse('Validation Error', validationResult.error.flatten(), 400);
        }

        const { name, email, phone, serviceType, message } = validationResult.data;

        // Rate limiting check (simplified for now, ideally use a middleware or Redis)
        // const ip = req.headers.get('x-forwarded-for') || 'unknown';
        // Check recent submissions from IP...

        // Store in database
        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                serviceType,
                message,
                ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
            },
        });

        // Send notification email to admin
        await sendEmail({
            to: process.env.ADMIN_EMAIL || 'karnovatechnologies@gmail.com',
            subject: `New Inquiry: ${serviceType} - ${name}`,
            html: `
        <h1>New Contact Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        // Send auto-reply to user
        await sendEmail({
            to: email,
            subject: 'We received your inquiry - Karnova Technologies',
            html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Karnova Technologies. We have received your message regarding <strong>${serviceType}</strong> services.</p>
        <p>Our team will review your inquiry and get back to you shortly.</p>
        <br>
        <p>Best regards,</p>
        <p>Karnova Technologies Team</p>
      `,
        });

        return successResponse(contact, 'Inquiry submitted successfully', 201);
    } catch (error) {
        console.error('Contact API Error:', error);
        return errorResponse('Internal Server Error');
    }
}
