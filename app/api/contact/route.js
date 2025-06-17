import { contactformsend } from "@/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const formData = await request.json();
        console.log(formData);
        await contactformsend(formData);
        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error parsing form data:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
