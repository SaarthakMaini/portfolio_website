import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/email-template";
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json(); 
    
    const message = `<h1>Saarthak! You have received a New Lead!</h1><br /><ul>
        <li>Name : ${body.name}</li>
        <li>Email: ${body.email}</li>
        <li>Phone Number: ${body.phone}</li>
        <li>Message : ${body.message}</li>
    </ul>`

    const userMessage = `<h1>${body.name}</h1><br /><br /><p>Thank you for showing your interest in working with Saarthak</p><br /><br /><p>Please expect to be reached out within 24-48 hours</p><br/><br/><p>Regards,</p><p>Saarthak Maini</p>`

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'saarthakmaini@gmail.com',
      subject: '📩 Portfolio Website - New Contact Request',
      html: message
    });

    await resend.emails.send({
      from: 'contact@saarthakmaini.com',
      to: `${body.email}`,
      subject: '📩 Saarthak Has Received Your Message',
      html: userMessage
    });

    return NextResponse.json({ success: true, message: "Form submitted", data: body });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
