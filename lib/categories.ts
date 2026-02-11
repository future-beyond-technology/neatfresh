export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Phenyl Products",
    slug: "phenyl-products",
    description: "Concentrated and ready-to-use phenyl variants for daily floor hygiene.",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
    productCount: 4,
  },
  {
    id: 2,
    name: "Chemical Powder",
    slug: "chemical-powder",
    description: "Bleaching and dish care powders for powerful household cleaning.",
    image:
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80",
    productCount: 6,
  },
  {
    id: 3,
    name: "Castor Oil",
    slug: "castor-oil",
    description: "Multi-use castor oil range with regular, organic, and cold-pressed options.",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
    productCount: 5,
  },
  {
    id: 4,
    name: "Rose Water",
    slug: "rose-water",
    description: "Refreshing rose water products in multiple bottle sizes.",
    image:
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=900&q=80",
    productCount: 4,
  },
  {
    id: 5,
    name: "Omum Water",
    slug: "omum-water",
    description: "Traditional omum water variants for daily wellness use.",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
    productCount: 3,
  },
  {
    id: 6,
    name: "Ayurvedic Oil",
    slug: "ayurvedic-oil",
    description: "Ayurvedic essentials including oils and functional care products.",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=900&q=80",
    productCount: 4,
  },
  {
    id: 7,
    name: "Dishwash Products",
    slug: "dishwash-products",
    description: "Dishwash liquids and bars for grease-free, sparkling utensils.",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80",
    productCount: 3,
  },
  {
    id: 8,
    name: "Fabric Conditioner",
    slug: "fabric-conditioner",
    description: "Softening and freshness boosters for everyday laundry care.",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
    productCount: 2,
  },
  {
    id: 9,
    name: "Cleaning Liquid",
    slug: "cleaning-liquid",
    description: "General purpose cleaning liquids for toilet and surface hygiene.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    productCount: 3,
  },
];
