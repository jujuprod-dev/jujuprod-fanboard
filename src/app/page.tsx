"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import { jujuMainWebsiteURL, newTabProps } from "@/config/constants";
import { Container } from "@/components/molecules/container";
import { fetchProjects } from "@/lib/get-docs";

export default function Home() {
  const { data, isLoading, error } = useQuery(["projects"], fetchProjects);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const projectsListContent = data?.docs.map((project) => {
    return (
      <section
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-full"
        key={project.id}
      >
        <div className="w-full h-52 lg:h-64 relative">
          <div className="relative w-full h-full">
            <Image
              fill
              alt={project.title}
              className="object-cover object-left rounded-md"
              src={project.imageURL}
            />
          </div>

          <div className="flex absolute top-0 w-full h-full">
            {/* Colored */}
            <div
              className={`basis-[${project.progress}%] h-full text-white flex justify-center items-center text-3xl grayscale z-10 bg-black/50 rounded-l-md`}
            >
              {project.progress} %
            </div>
            {/* Black and White */}
            <div
              className={`basis-[${
                100 - project.progress
              }%] h-full grayscale z-10 bg-transparent rounded-r-md`}
            />
          </div>

          <button className="w-fit break-all z-10 p-4 bg-gray-400 text-white absolute m-5 rounded-md bottom-0 right-0">
            <a
              href={project.notionLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Contribute
            </a>
          </button>

          <h1 className="mt-4">{project.title}</h1>
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>
      </section>
    );
  });

  return (
    <Container>
      {/* Header */}
      <section className="mb-20 flex flex-wrap gap-4 w-full items-center justify-between">
        <div>
          <h1 className="text-4xl">Contribute</h1>
          <p className="text-gray-500">
            Come contribute, get shouted out and points.
          </p>
        </div>
        <a
          className="underline break-all"
          href={jujuMainWebsiteURL}
          {...newTabProps}
        >
          {jujuMainWebsiteURL}
        </a>
      </section>

      {/* Projects */}
      {projectsListContent}
    </Container>
  );
}
