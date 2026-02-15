
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { blogPostSchema } from '@/lib/validators';
import { prisma } from '@/lib/db';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');
        const tag = searchParams.get('tag');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = parseInt(searchParams.get('offset') || '0');

        const whereClause: any = {
            isPublished: true,
        };

        if (category) {
            whereClause.category = category;
        }
        // Tag filtering needs JSON logic or simple string contains if stored as stringified JSON
        if (tag) {
            whereClause.tags = {
                contains: tag,
            };
        }

        const posts = await prisma.blogPost.findMany({
            where: whereClause,
            take: limit,
            skip: offset,
            orderBy: {
                publishedDate: 'desc',
            },
            select: {
                id: true,
                title: true,
                slug: true,
                excerpt: true,
                featuredImage: true,
                author: true,
                publishedDate: true,
                readTime: true,
                tags: true,
                category: true,
            },
        });

        const total = await prisma.blogPost.count({ where: whereClause });

        return successResponse({ posts, total, limit, offset }, 'Blog posts retrieved successfully');
    } catch (error) {
        console.error('Blog API Error:', error);
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
        const validation = blogPostSchema.safeParse(body);

        if (!validation.success) {
            return errorResponse('Validation Error', validation.error.flatten(), 400);
        }

        const { tags, ...rest } = validation.data as any;

        const post = await prisma.blogPost.create({
            data: {
                ...rest,
                tags: JSON.stringify(tags || []),
            },
        });

        return successResponse(post, 'Blog post created successfully', 201);
    } catch (error) {
        console.error('Create Blog Post Error:', error);
        return errorResponse('Internal Server Error', error instanceof Error ? error.message : String(error));
    }
}
