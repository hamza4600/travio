export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-02-06";
// if (!process.env.SANITY_STUDIO_PROJECT_ID) {
//   throw new Error("Missing environment variable: SANITY_STUDIO_PROJECT_ID");
// }

// if (!process.env.SANITY_STUDIO_DATASET) {
//   throw new Error("Missing environment variable: SANITY_STUDIO_DATASET");
// }

export const dataset = process.env.SANITY_STUDIO_PROJECT_ID;

export const projectId = process.env.SANITY_STUDIO_DATASET;

export const useCdn = false;
