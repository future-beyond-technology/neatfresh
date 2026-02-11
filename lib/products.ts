export type Product = {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "750ml Rose Brand Black Phenyl Concentrate",
    slug: "750ml-rose-brand-black-phenyl-concentrate",
    category: "Phenyl Products",
    description: "Concentrated black phenyl for deep floor cleaning and odor control.",
    price: "₹145",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "1L Rose Brand White Phenyl",
    slug: "1l-rose-brand-white-phenyl",
    category: "Phenyl Products",
    description: "White phenyl floor cleaner for daily home and institutional hygiene.",
    price: "₹160",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "750ml Rose Brand Pink Phenyl",
    slug: "750ml-rose-brand-pink-phenyl",
    category: "Phenyl Products",
    description: "Pink phenyl with fresh fragrance for clean and pleasant floors.",
    price: "₹150",
    image:
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "750ml Rose Brand White Phenyl",
    slug: "750ml-rose-brand-white-phenyl",
    category: "Phenyl Products",
    description: "Compact-size white phenyl ideal for regular household cleaning.",
    price: "₹138",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "100g Firose Pure Bleaching Powder",
    slug: "100g-firose-pure-bleaching-powder",
    category: "Chemical Powder",
    description: "Bleaching powder for stain lifting and disinfection support.",
    price: "₹55",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "100g Firose Gemaxine Powder",
    slug: "100g-firose-gemaxine-powder",
    category: "Chemical Powder",
    description: "Gemaxine powder blend for intensive cleaning applications.",
    price: "₹60",
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Dish Wash Powder",
    slug: "dish-wash-powder",
    category: "Chemical Powder",
    description: "Dish wash powder formulated to cut grease and food residue.",
    price: "₹68",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Dishwash Clean Powder",
    slug: "dishwash-clean-powder",
    category: "Chemical Powder",
    description: "Everyday dish cleaning powder for utensils and kitchenware.",
    price: "₹72",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    name: "Gemaxine Bleaching Powder",
    slug: "gemaxine-bleaching-powder",
    category: "Chemical Powder",
    description: "High-activity bleaching powder for advanced stain treatment.",
    price: "₹75",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    name: "200g Firose Stain Remover Powder",
    slug: "200g-firose-stain-remover-powder",
    category: "Chemical Powder",
    description: "Extra powder variant for heavy-duty stain removal tasks.",
    price: "₹92",
    image:
      "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    name: "100ml Firose Castor Oil",
    slug: "100ml-firose-castor-oil",
    category: "Castor Oil",
    description: "Multi-purpose castor oil packed for regular personal care use.",
    price: "₹85",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    name: "Cold Pressed Castor Oil",
    slug: "cold-pressed-castor-oil",
    category: "Castor Oil",
    description: "Cold-pressed castor oil processed for high-purity application.",
    price: "₹140",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 13,
    name: "Organic Castor Oil",
    slug: "organic-castor-oil",
    category: "Castor Oil",
    description: "Organic castor oil variant suitable for everyday wellness routines.",
    price: "₹155",
    image:
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 14,
    name: "50ml Castor Oil",
    slug: "50ml-castor-oil",
    category: "Castor Oil",
    description: "Travel-friendly castor oil pack for convenient carry.",
    price: "₹52",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 15,
    name: "100ml Castor Oil",
    slug: "100ml-castor-oil",
    category: "Castor Oil",
    description: "Standard castor oil bottle for routine use.",
    price: "₹78",
    image:
      "https://images.unsplash.com/photo-1593253787226-567eda4ad32d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 16,
    name: "1L Firose Rose Water",
    slug: "1l-firose-rose-water",
    category: "Rose Water",
    description: "Large-pack rose water for domestic and commercial needs.",
    price: "₹180",
    image:
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 17,
    name: "500ml Rose Water",
    slug: "500ml-rose-water",
    category: "Rose Water",
    description: "Refreshing rose water bottle for daily use.",
    price: "₹105",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 18,
    name: "Rose Water Bottle",
    slug: "rose-water-bottle",
    category: "Rose Water",
    description: "Convenient rose water bottle with balanced freshness.",
    price: "₹95",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 19,
    name: "200ml Firose Rose Water",
    slug: "200ml-firose-rose-water",
    category: "Rose Water",
    description: "Compact rose water option for personal care routines.",
    price: "₹60",
    image:
      "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 20,
    name: "200ml Rose Omum Water",
    slug: "200ml-rose-omum-water",
    category: "Omum Water",
    description: "Omum water in compact bottle for everyday use.",
    price: "₹58",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 21,
    name: "750ml Rose Omum Water",
    slug: "750ml-rose-omum-water",
    category: "Omum Water",
    description: "Larger omum water pack for family usage.",
    price: "₹120",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 22,
    name: "700ml Oma Water",
    slug: "700ml-oma-water",
    category: "Omum Water",
    description: "Oma water variant for routine household consumption.",
    price: "₹115",
    image:
      "https://images.unsplash.com/photo-1593253787226-567eda4ad32d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 23,
    name: "120ml Femisan Gripe Water",
    slug: "120ml-femisan-gripe-water",
    category: "Ayurvedic Oil",
    description: "Traditional femisan gripe water in a compact bottle.",
    price: "₹88",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 24,
    name: "100ml Mustard Oil",
    slug: "100ml-mustard-oil",
    category: "Ayurvedic Oil",
    description: "Mustard oil in small pack for daily wellness applications.",
    price: "₹70",
    image:
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 25,
    name: "100ml Neem Oil",
    slug: "100ml-neem-oil",
    category: "Ayurvedic Oil",
    description: "Neem oil formulation for multipurpose care routines.",
    price: "₹95",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 26,
    name: "100g Mediliv Liver Syrup",
    slug: "100g-mediliv-liver-syrup",
    category: "Ayurvedic Oil",
    description: "Mediliv syrup variant listed under ayurvedic essentials.",
    price: "₹110",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 27,
    name: "500ml Firose Dishwash Liquid",
    slug: "500ml-firose-dishwash-liquid",
    category: "Dishwash Products",
    description: "Liquid dish cleaner that removes grease with minimal effort.",
    price: "₹99",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 28,
    name: "250g Super Villu Extim White Dish Wash Bar",
    slug: "250g-super-villu-extim-white-dish-wash-bar",
    category: "Dishwash Products",
    description: "Heavy-use dish wash bar suitable for tough utensil cleaning.",
    price: "₹52",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 29,
    name: "160g Super Villu Extim White Dish Wash Bar",
    slug: "160g-super-villu-extim-white-dish-wash-bar",
    category: "Dishwash Products",
    description: "Compact dish wash bar for everyday kitchen cleaning.",
    price: "₹38",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 30,
    name: "500ml Firose Fabric Conditioner",
    slug: "500ml-firose-fabric-conditioner",
    category: "Fabric Conditioner",
    description: "Fabric conditioner for softer feel and long-lasting freshness.",
    price: "₹145",
    image:
      "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 31,
    name: "1L Firose Fabric Conditioner",
    slug: "1l-firose-fabric-conditioner",
    category: "Fabric Conditioner",
    description: "Value-size fabric conditioner for routine laundry care.",
    price: "₹265",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 32,
    name: "Black Phenyl",
    slug: "black-phenyl",
    category: "Cleaning Liquid",
    description: "General cleaning black phenyl for floor hygiene and freshness.",
    price: "₹135",
    image:
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 33,
    name: "500ml Glowmex Toilet Cleaning Liquid",
    slug: "500ml-glowmex-toilet-cleaning-liquid",
    category: "Cleaning Liquid",
    description: "Toilet cleaning liquid formulated for stain and odor control.",
    price: "₹102",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 34,
    name: "1L Firose Cleaning Liquid",
    slug: "1l-firose-cleaning-liquid",
    category: "Cleaning Liquid",
    description: "Multipurpose cleaning liquid for broad household applications.",
    price: "₹188",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80",
  },
];
