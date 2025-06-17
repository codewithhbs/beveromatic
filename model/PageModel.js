import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a page title"],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Please provide page content"],
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  image: {
    url: String,
    public_id: String,
    fileType: String,
  },
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
}, { timestamps: true });


const PageModel = mongoose.models.Page || mongoose.model("Page", pageSchema);
export default PageModel;
