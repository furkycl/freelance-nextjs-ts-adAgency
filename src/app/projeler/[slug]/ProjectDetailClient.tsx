"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FadeIn } from "../../../../components/FadeIn";
import { Project } from "../../../../data/projects";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = project.gallery.map((imgUrl: string) => ({ src: imgUrl }));

  return (
    <>
      <div className="bg-white text-slate-900">
        <div className="container mx-auto px-6 py-40 text-center">
          <p className="text-lg text-slate-500 mb-2">{project.category}</p>
          <h1 className="text-5xl font-bold">{project.title}</h1>
        </div>
        <div className="container mx-auto px-6 mb-12">
          <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="container mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-12 overflow-hidden">
          <FadeIn direction="up" className="md:col-span-2">
            <div>
              <h2 className="text-3xl font-bold mb-4">Proje Hakkında</h2>
              <p className="text-lg leading-relaxed text-slate-700">
                {project.description}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="md:col-span-1">
            <div>
              <h3 className="text-2xl font-bold mb-4">Galeri</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((imgUrl: string, i: number) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} galeri görseli ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
      />
    </>
  );
}
