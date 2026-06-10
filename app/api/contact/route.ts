import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/src/lib/mongodb";
import Contact from "@/src/models/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      challenge,
      message,
    } = body;
if (
  !name?.trim() ||
  !email?.trim() ||
  !message?.trim()
) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email.trim())) {
  return NextResponse.json(
    { error: "Invalid email address" },
    { status: 400 }
  );
}

    await connectDB();
await Contact.create({
  name: name.trim(),
  email: email.trim(),
  company: company?.trim(),
  challenge,
  message: message.trim(),
});
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Challenge:</strong> ${challenge || "N/A"}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}