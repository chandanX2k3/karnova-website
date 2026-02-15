
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { projectSchema } from '@/lib/validators';
import { prisma } from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = parseInt(searchParams.get('offset') || '0');
        const featured = searchParams.get('featured') === 'true';

        const whereClause: any = {};
        if (category) {
            whereClause.category = category;
        }
        if (featured) {
            whereClause.featured = true;
        }

        const projects = await prisma.project.findMany({
            where: whereClause,
            take: limit,
            skip: offset,
            orderBy: {
                completionDate: 'desc',
            },
            select: {
                id: true,
                title: true,
                slug: true,
                description: true,
                images: true,
                techStack: true,
                category: true,
                clientName: true,
                completionDate: true,
                featured: true,
                // Exclude detailed fields like challenge, solution, results for list view
            }
        });

        const total = await prisma.project.count({ where: whereClause });

        return successResponse({ projects, total, limit, offset }, 'Projects retrieved successfully');
    } catch (error) {
        console.error('Projects API Error:', error);
        return errorResponse('Internal Server Error');
    }
}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || (session.user as any)?.role !== 'admin') {
            return errorResponse('Unauthorized', null, 401);
        }

        const body = await req.json();
        const validation = projectSchema.safeParse(body);

        if (!validation.success) {
            return errorResponse('Validation Error', validation.error.flatten(), 400);
        }

        const { images, techStack, ...rest } = validation.data as any;

        const project = await prisma.project.create({
            data: {
                ...rest,
                images: JSON.stringify(images || []),
                techStack: JSON.stringify(techStack || []),
            },
        });

        return successResponse(project, 'Project created successfully', 201);
    } catch (error) {
        console.error('Create Project Error:', error);
        return errorResponse('Internal Server Error', error instanceof Error ? error.message : String(error));
    }
}
