"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Şemalarımızı `schemaTypes/index.ts` dosyasından import ediyoruz.
// Dosya yapına göre doğru yolun 'src/sanity/schemaTypes' olduğundan emin ol.
import { schemaTypes } from "./src/sanity/schemaTypes/index";

// Proje ID'si ve dataset'i .env.local dosyasından alıyoruz
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio", // Embedded studio'nun hangi adreste çalışacağını belirtir
  projectId,
  dataset,

  plugins: [
    structureTool(),
    // Vision, verileri GROQ ile test edebileceğin harika bir araçtır.
    // Geliştirme ortamında çok faydalıdır.
    visionTool(),
  ],

  // Şema tanımlarını buraya ekliyoruz
  schema: {
    types: schemaTypes,
  },
});
