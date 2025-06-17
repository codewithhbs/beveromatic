"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPages } from "@/lib/data-utils";
// import { DataTable } from "@/components/ui/data-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import { toast } from "sonner";
import Heading from "@/components/shared/heading";
import { DataTable } from "@/components/ui/data-table";
import axios from "axios";
import Link from "next/link";

export default function PagesPage() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [pageToDelete, setPageToDelete] = useState(null);


  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get("/api/pages");
        const data = response.data;
        console.log(data)
        setPages(data);
      } catch (error) {
        console.log(error)
        toast.error("Failed to load pages");
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);



  const handleDelete = (pageId) => {
    setPageToDelete(pageId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    axios.delete(`/api/pages/${pageToDelete}`);
    setPages((prev) => prev.filter((p) => p._id !== pageToDelete));
    toast.success("Page deleted successfully");
    setDeleteDialogOpen(false);
  };

  const columns = [
    { accessorKey: "title", header: "Title" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span
            className={`inline-block px-2 py-1 rounded text-xs font-medium ${status === "published"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
              }`}
          >
            {status === "published" ? "Published" : "Draft"}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const page = row.original;

        return (
          <div className="flex items-center gap-2">
            <Link
              href={`/page/${page.slug}`}
              target="_blank"
              className="text-blue-600 hover:underline"
              title="View"
            >
              <Eye size={16} />
            </Link>
            <button
              onClick={() => router.push(`/admin/pages/${page._id}`)}
              className="flex items-center  py-2 text-sm hover:bg-gray-100"
            >
              <Edit className="w-4 h-4 mr-2" />
            </button>
            <button
              onClick={() => handleDelete(page._id)}
              className="flex items-center  py-2 text-sm text-red-600 hover:bg-red-50"
            >
              <Trash className="w-4 h-4 mr-2" />
            </button>
          </div>
        );
      },
    },
  ];
  if (loading) {
    return <div>loading....</div>
  }
  return (
    <div className="p-6">
      <Heading
        title="Pages"
        description="Manage your website pages"
        button={true}
        buttonLabel="Add Page"
        buttonIcon={Plus}
        buttonAction={() => router.push("/admin/pages/add")}
      />

      <DataTable
        columns={columns}
        data={pages}
        searchKey="title"
        searchPlaceholder="Search by title..."
      />

      {deleteDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
            <h2 className="text-lg font-semibold mb-2">
              Are you absolutely sure?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              This action cannot be undone. This will permanently delete the
              page from your website.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-sm border rounded hover:bg-gray-100"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
