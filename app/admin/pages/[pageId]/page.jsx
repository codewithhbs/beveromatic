
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Heading from "@/components/shared/heading";
import PageForm from "@/components/admin/pages/page-form";
import axios from "axios";

export default function EditPagePage() {
  const params = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await axios.get(`/api/pages/${params.pageId}`);
        setPage(response.data.page);
      } catch (error) {
        console.error("Failed to fetch page:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [params.pageId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <Heading title="Edit Page" description="Update an existing page" />

      <PageForm initialData={page} />
    </div>
  );
}
