
import { uploadImage } from "@/lib/cloudinary";
import connectDB from "@/lib/mongodb";
import PageModel from "@/model/PageModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  
  try {
    await connectDB();
    const pages = await PageModel.find().sort({ createdAt: -1 });
    return NextResponse.json(pages, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch pages" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    if (!body.title || !body.content ) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    let imageData = null;

    
    if (body.image && body.image.startsWith("data:image/")) {
      console.log("Uploading image to Cloudinary...");
      try {
        imageData = await uploadImage(body.image, "beveromatic/page-images");
        console.log("Image uploaded successfully:", imageData.url);
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        return NextResponse.json(
          { error: `Image upload failed: ${uploadError.message}` },
          { status: 400 }
        );
      }
    } else if (body.image && !body.image.startsWith("http")) {
      imageData = {
        url: body.image,
      };
    }

    const page = await PageModel.create({ ...body, image: imageData });
    return NextResponse.json(page, { status: 201 });
  } catch (error) {
    console.error("Error creating page:", error);
    return NextResponse.json(
      { error: "Failed to create page" },
      { status: 500 }
    );
  }
}

