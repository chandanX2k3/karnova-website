
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(req: NextRequest) {
    try {
        const openings = await prisma.internshipPosition.findMany({
            where: {
                isActive: true,
            },
            orderBy: {
                postedDate: 'desc',
            },
        });

        return successResponse(openings, 'Active internship openings retrieved successfully');
    } catch (error) {
        console.error('Internship Openings Error:', error);
        return errorResponse('Internal Server Error');
    }
}
