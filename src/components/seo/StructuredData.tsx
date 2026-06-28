"use client";

import { portfolioData } from "@/data/portfolio";

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioData.name,
    jobTitle: portfolioData.role,
    description: portfolioData.about,
    url: "https://williamweiming.com/",
    image: "https://williamweiming.com/images/profile.jpg",
    sameAs: portfolioData.social
      .filter((s) => s.platform !== "Email")
      .map((s) => s.url),
    worksFor: {
      "@type": "Organization",
      name: "US Companies",
    },
    knowsAbout: [
      "Bittensor",
      "Web Development",
      "Mobile App Development",
      "Game Development",
      "AI Development",
      "Reverse Engineering",
      "Cryptocurrency",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${portfolioData.name} Portfolio`,
    description: portfolioData.about,
    url: "https://williamweiming.com/",
    author: {
      "@type": "Person",
      name: portfolioData.name,
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2020-05-18",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      name: portfolioData.name,
      description: portfolioData.about,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}
