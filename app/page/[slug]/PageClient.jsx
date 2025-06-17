"use client";
import React, { useEffect, useState } from "react";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import axios from "axios";


const PageClient = ({ slug }) => {
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const page = await axios.get(`/api/pages/${slug}`);
        setPage(page.data.page);
      } catch (error) {
        console.error("Failed to fetchpage:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  
  return (
    <div className="min-h-screen bg-blue-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-1">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="relative mb-8">
              <Image
                src={page?.image?.url}
                alt="Container shipping port"
                width={1200}
                height={800}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl"
              />
              
            </div>

           
            {/* Article Content */}
            <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
             
              {/* Article Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {page?.title}
              </h1>

              {/* Article Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: page?.content }}
              />

             
            </article>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PageClient;
