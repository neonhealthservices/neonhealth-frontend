import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'neonhealthservices6@gmail.com';

export async function POST(request: Request) {
    try {
        const { fullName, email, message } = await request.json();

        // Basic validation
        if (!fullName || !email || !message) {
            return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Neon Health <contact@email.neonhealth.services>',
            to: [CONTACT_EMAIL],
            subject: `New Contact from ${fullName}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #1a7f7a;">
          ${message.replace(/\n/g, '<br/>')}
        </blockquote>
      `,
            replyTo: email,
        });

        if (data.error) {
            return NextResponse.json({ message: data.error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error: any) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
