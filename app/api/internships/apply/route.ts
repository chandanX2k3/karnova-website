
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { internshipApplicationSchema } from '@/lib/validators';
import { saveFile } from '@/lib/services/storage';
import { sendEmail } from '@/lib/services/email';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        // Extract fields
        const data: any = {};
        for (const [key, value] of formData.entries()) {
            if (key !== 'resume' && typeof value === 'string') {
                data[key] = value;
            }
        }

        const {
            fullName,
            email,
            phone,
            linkedinUrl,
            portfolioUrl,
            coverLetter,
            position,
            preferredStartDate
        } = data;

        // Validate fields using Zod
        const validationResult = internshipApplicationSchema.safeParse({
            fullName,
            email,
            phone,
            linkedinUrl: linkedinUrl || undefined,
            portfolioUrl: portfolioUrl || undefined, // Zod optional() handles undefined best
            coverLetter,
            position,
            preferredStartDate
        });

        if (!validationResult.success) {
            return errorResponse('Validation Error', validationResult.error.flatten(), 400);
        }

        // Handle resume upload
        const resumeFile = formData.get('resume') as File | null;
        let resumeUrl = null;

        if (resumeFile && resumeFile.size > 0) {
            if (resumeFile.size > 5 * 1024 * 1024) {
                return errorResponse('Resume file too large (max 5MB)', null, 400);
            }
            try {
                resumeUrl = await saveFile(resumeFile, 'internships/resumes');
            } catch (err) {
                return errorResponse('Failed to upload resume', err, 500);
            }
        } else {
            return errorResponse('Resume is required', null, 400);
        }

        // Save to DB
        const application = await prisma.internshipApplication.create({
            data: {
                fullName,
                email,
                phone,
                linkedinUrl,
                portfolioUrl,
                coverLetter,
                position,
                preferredStartDate: preferredStartDate ? new Date(preferredStartDate) : null,
                resumeUrl,
                status: 'pending'
            }
        });

        // Send confirmation email
        await sendEmail({
            to: email,
            subject: `Application Received: ${position} - Karnova Technologies`,
            html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for applying for the <strong>${position}</strong> internship at Karnova Technologies.</p>
        <p>We have received your application and resume. Our team will review it and get back to you soon.</p>
        <br>
        <p>Best regards,</p>
        <p>Recruitment Team</p>
      `
        });

        // Notify Admin via Email
        await sendEmail({
            to: process.env.ADMIN_EMAIL || 'karnovatechnologies@gmail.com',
            subject: `New Internship Application: ${position} from ${fullName}`,
            html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedinUrl || 'N/A'}</p>
        <p><strong>Portfolio:</strong> ${portfolioUrl || 'N/A'}</p>
        <p><strong>Resume:</strong> ${resumeUrl ? `<a href="${process.env.SITE_URL || 'http://localhost:3000'}${resumeUrl}">Download</a>` : 'Not uploaded'}</p>
      `
        });

        return successResponse(application, 'Application submitted successfully', 201);
    } catch (error) {
        console.error('Internship Apply Error:', error);
        return errorResponse('Internal Server Error', error instanceof Error ? error.message : String(error));
    }
}
