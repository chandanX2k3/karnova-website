
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { newsletterSchema } from '@/lib/validators';
import { sendEmail } from '@/lib/services/email';
import { successResponse, errorResponse } from '@/lib/api-response';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const validationResult = newsletterSchema.safeParse(body);
        if (!validationResult.success) {
            return errorResponse('Validation Error', validationResult.error.flatten(), 400);
        }

        const { email } = validationResult.data;

        // Check if already subscribed
        const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
            where: { email },
        });

        if (existingSubscriber) {
            if (existingSubscriber.isActive) {
                return successResponse(existingSubscriber, 'Already subscribed', 200);
            } else {
                // Reactivate subscription
                const updatedSubscriber = await prisma.newsletterSubscriber.update({
                    where: { email },
                    data: { isActive: true, unsubscribedAt: null },
                });
                return successResponse(updatedSubscriber, 'Subscription reactivated successfully', 200);
            }
        }

        const unsubscribeToken = uuidv4();
        const subscriber = await prisma.newsletterSubscriber.create({
            data: {
                email,
                unsubscribeToken,
            },
        });

        // Send welcome email
        await sendEmail({
            to: email,
            subject: 'Welcome to Karnova Technologies Newsletter',
            html: `
        <h1>Welcome!</h1>
        <p>Thank you for subscribing to our newsletter. You'll receive updates on our latest projects and tech insights.</p>
        <br>
        <p><a href="${process.env.SITE_URL}/api/newsletter/unsubscribe?token=${unsubscribeToken}">Unsubscribe</a> if you wish to opt-out.</p>
      `,
        });

        return successResponse(subscriber, 'Subscribed successfully', 201);
    } catch (error) {
        console.error('Newsletter Subscribe Error:', error);
        return errorResponse('Internal Server Error');
    }
}
