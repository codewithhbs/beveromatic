import connectDB from "@/lib/mongodb";
import PageModel from "@/model/PageModel";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    let page = null;

    if (isValidObjectId(params.id)) {
      page = await PageModel.findById(params.id);
    } else {
      page = await PageModel.findOne({ slug: params.id });
    }

    if (!page) {
      return NextResponse.json({ error: "page not found" }, { status: 404 });
    }


    return NextResponse.json(
      { page },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json(
      { error: "Failed to fetch page" },
      { status: 500 }
    );
  }
}
export async function PUT(request, { params }) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, content, image, ...rest } = body;

    console.log("Updating page with body:", body);

    if (!title || !content ) {
      return NextResponse.json(
        { error: "Title and content are required." },
        { status: 400 }
      );
    }

    // Fetch existing page
    const existingPage = await PageModel.findById(params.id);
    if (!existingPage) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    let imageData = existingPage.image;

    // Upload only if a new base64 image is provided
    if (image && image.startsWith("data:image/")) {
      try {
        console.log("Uploading image to Cloudinary...");
        imageData = await uploadImage(image, "page-images");
        console.log("Image uploaded successfully:", imageData.url);
      } catch (uploadError) {
        console.error("Image upload failed:", uploadError);
        return NextResponse.json(
          { error: `Image upload failed: ${uploadError.message}` },
          { status: 500 }
        );
      }
    }

    const updatedPage = await PageModel.findByIdAndUpdate(
      params.id,
      {
        title,
        content,
        image: imageData,
        ...rest,
      },
      { new: true }
    );

    return NextResponse.json(updatedPage, { status: 200 });
  } catch (error) {
    console.error("Error updating page:", error);
    return NextResponse.json(
      { error: "Failed to update page" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const page = await PageModel.findByIdAndDelete(params.id);

    if (!page) {
      return NextResponse.json({ error: "page not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Page deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete page" },
      { status: 500 }
    );
  }
}
