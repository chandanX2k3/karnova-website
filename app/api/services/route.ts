
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(req: NextRequest) {
    try {
        const services = await prisma.service.findMany({
            orderBy: {
                name: 'asc',
            },
        });

        return successResponse(services, 'Services retrieved successfully');
    } catch (error) {
        console.error('Services API Error:', error);
        return errorResponse('Internal Server Error');
    }
}
