
import { Resend } from 'resend';

const resend = process.env.EMAIL_SERVICE_API_KEY
    ? new Resend(process.env.EMAIL_SERVICE_API_KEY)
    : null;

interface EmailOptions {
    to: string | string[];
    subject: string;
    html: string;
    from?: string;
}

export const sendEmail = async (options: EmailOptions) => {
    const from = options.from || process.env.ADMIN_EMAIL || 'onboarding@resend.dev';

    if (!resend) {
        console.log('--- Email Mock ---');
        console.log(`From: ${from}`);
        console.log(`To: ${options.to}`);
        console.log(`Subject: ${options.subject}`);
        console.log('--- Body ---');
        console.log(options.html);
        console.log('------------------');
        return { success: true, id: 'mock-id' };
    }

    try {
        const data = await resend.emails.send({
            from,
            to: options.to,
            subject: options.subject,
            html: options.html,
        });

        return { success: true, data };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
};
