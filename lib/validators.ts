
import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    serviceType: z.enum(['web', 'mobile', 'ai', 'other']),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const internshipApplicationSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(5, 'Phone number is required'),
    linkedinUrl: z.string().url().optional().or(z.literal('')),
    portfolioUrl: z.string().url().optional().or(z.literal('')),
    position: z.string().min(1, 'Position is required'),
    coverLetter: z.string().optional(),
    preferredStartDate: z.string().optional(), // Date string
});

export const newsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export const projectSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3),
    description: z.string().min(10),
    category: z.enum(['web', 'mobile', 'ai']),
    // other fields as needed for admin
});

export const blogPostSchema = z.object({
    title: z.string().min(3),
    slug: z.string().min(3),
    content: z.string().min(10),
    // other fields for admin
});
