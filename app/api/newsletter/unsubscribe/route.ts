
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const token = searchParams.get('token');

        if (!token) {
            return errorResponse('Token is required', null, 400);
        }

        const subscriber = await prisma.newsletterSubscriber.findUnique({
            where: { unsubscribeToken: token },
        });

        if (!subscriber) {
            return errorResponse('Invalid token', null, 404);
        }

        await prisma.newsletterSubscriber.update({
            where: { id: subscriber.id },
            data: {
                isActive: false,
                unsubscribedAt: new Date(),
            },
        });

        return successResponse(null, 'Successfully unsubscribed from the newsletter');
    } catch (error) {
        console.error('Newsletter Unsubscribe Error:', error);
        return errorResponse('Internal Server Error');
    }
}
