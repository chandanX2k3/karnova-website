
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const featured = searchParams.get('featured') === 'true';

        const whereClause: any = {};
        if (featured) {
            whereClause.featured = true;
        }

        const testimonials = await prisma.testimonial.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'desc',
            },
            take: 20, // Limit to recent 20 for performance
        });

        return successResponse(testimonials, 'Testimonials retrieved successfully');
    } catch (error) {
        console.error('Testimonials API Error:', error);
        return errorResponse('Internal Server Error');
    }
}
