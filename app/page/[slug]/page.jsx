import axios from "axios";
import PageClient from "./PageClient";

export async function generateMetadata({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/pages/${params.slug}`
  );

  const data = res.data;
  const post = data.blog;

  return {
    title: post?.metaTitle || post?.title,
    description: post?.metaDescription,
    keywords: post?.metaKeywords,
  };
}

export default function BlogDetailPage({ params }) {
  return <PageClient slug={params.slug} />;
}
