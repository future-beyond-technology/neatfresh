import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Neat & Fresh | Hygiene & Housekeeping Products",
  description:
    "Premium hygiene and housekeeping products for everyday freshness.",
  metadataBase: new URL("https://neatfresh.online"),
  openGraph: {
    title: "Neat & Fresh | Hygiene & Housekeeping Products",
    description:
      "Premium hygiene and housekeeping products for everyday freshness.",
    url: "https://neatfresh.online",
    siteName: "Neat & Fresh",
    type: "website",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neat & Fresh",
  url: "https://neatfresh.online",
  parentOrganization: {
    "@type": "Organization",
    name: "FIROSE ENTERPRISES",
    url: "https://firoseenterprises.com",
  },
};
