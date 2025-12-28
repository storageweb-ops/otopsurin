import heroImage from "@/assets/hero-surin.jpg";
import silkImage from "@/assets/product-silk.jpg";
import handicraftImage from "@/assets/product-handicraft.jpg";
import foodImage from "@/assets/product-food.jpg";
import souvenirImage from "@/assets/product-souvenir.jpg";
import landscapeImage from "@/assets/surin-landscape.jpg";

// Product images
export { heroImage, silkImage, handicraftImage, foodImage, souvenirImage, landscapeImage };

// Mock products data
export const products = [
  {
    id: "1",
    name: "Mudmee Silk Fabric",
    nameThai: "ผ้าไหมมัดหมี่",
    category: "Silk & Textile",
    price: 2500,
    image: silkImage,
    description: "Traditional hand-woven mudmee silk with intricate patterns passed down through generations.",
    communityName: "Ban Tha Sawang Silk Group",
    communityId: "1",
  },
  {
    id: "2",
    name: "Handwoven Rattan Basket",
    nameThai: "ตะกร้าหวายสาน",
    category: "Handicraft",
    price: 450,
    image: handicraftImage,
    description: "Beautifully crafted rattan basket using traditional weaving techniques from Surin artisans.",
    communityName: "Prasat Handicraft Group",
    communityId: "2",
  },
  {
    id: "3",
    name: "Organic Rice Set",
    nameThai: "ข้าวหอมมะลิอินทรีย์",
    category: "Food & Herbal",
    price: 280,
    image: foodImage,
    description: "Premium organic jasmine rice from the fertile plains of Surin Province.",
    communityName: "Surin Organic Farmers",
    communityId: "3",
  },
  {
    id: "4",
    name: "Golden Elephant Figurine",
    nameThai: "ช้างทองคำจำลอง",
    category: "Souvenir",
    price: 1200,
    image: souvenirImage,
    description: "Handcrafted brass elephant figurine symbolizing the heritage of Surin elephant culture.",
    communityName: "Surin Artisan Collective",
    communityId: "4",
  },
  {
    id: "5",
    name: "Silk Scarf Collection",
    nameThai: "ผ้าพันคอไหมไทย",
    category: "Silk & Textile",
    price: 890,
    image: silkImage,
    description: "Elegant silk scarves featuring modern interpretations of traditional Isan patterns.",
    communityName: "Ban Tha Sawang Silk Group",
    communityId: "1",
  },
  {
    id: "6",
    name: "Herbal Tea Collection",
    nameThai: "ชาสมุนไพรพื้นบ้าน",
    category: "Food & Herbal",
    price: 350,
    image: foodImage,
    description: "A curated collection of traditional Thai herbal teas with healing properties.",
    communityName: "Surin Organic Farmers",
    communityId: "3",
  },
];

// Mock communities data
export const communities = [
  {
    id: "1",
    name: "Ban Tha Sawang Silk Group",
    nameThai: "กลุ่มผ้าไหมบ้านท่าสว่าง",
    location: "Tha Sawang, Surin",
    description: "A renowned silk weaving community preserving the ancient art of mudmee silk production for over 200 years.",
    image: landscapeImage,
    productTypes: ["Silk Fabric", "Scarves", "Traditional Wear"],
    memberCount: 45,
    contactInfo: {
      phone: "+66 44 XXX 001",
      email: "silk@thasawang.com",
    },
  },
  {
    id: "2",
    name: "Prasat Handicraft Group",
    nameThai: "กลุ่มหัตถกรรมปราสาท",
    location: "Prasat District, Surin",
    description: "Artisans specializing in traditional bamboo and rattan weaving, creating functional and decorative items.",
    image: landscapeImage,
    productTypes: ["Baskets", "Home Decor", "Furniture"],
    memberCount: 32,
    contactInfo: {
      phone: "+66 44 XXX 002",
      email: "craft@prasat.com",
    },
  },
  {
    id: "3",
    name: "Surin Organic Farmers",
    nameThai: "เกษตรกรอินทรีย์สุรินทร์",
    location: "Multiple Districts, Surin",
    description: "A cooperative of organic farmers producing premium rice, herbs, and natural food products.",
    image: landscapeImage,
    productTypes: ["Rice", "Herbs", "Organic Food"],
    memberCount: 120,
    contactInfo: {
      phone: "+66 44 XXX 003",
      email: "organic@surin.com",
    },
  },
  {
    id: "4",
    name: "Surin Artisan Collective",
    nameThai: "กลุ่มช่างฝีมือสุรินทร์",
    location: "Mueang Surin",
    description: "A collective of skilled craftsmen creating unique souvenirs and decorative items celebrating local culture.",
    image: landscapeImage,
    productTypes: ["Souvenirs", "Brass Work", "Wood Carving"],
    memberCount: 28,
    contactInfo: {
      phone: "+66 44 XXX 004",
      email: "artisan@surin.com",
    },
  },
];

// Categories data
export const categories = [
  {
    id: "silk",
    name: "Silk & Textile",
    nameThai: "ผ้าไหมและสิ่งทอ",
    description: "Traditional handwoven silk and textile products",
    image: silkImage,
    productCount: 24,
  },
  {
    id: "handicraft",
    name: "Handicraft",
    nameThai: "หัตถกรรม",
    description: "Handmade crafts and traditional artworks",
    image: handicraftImage,
    productCount: 18,
  },
  {
    id: "food",
    name: "Food & Herbal",
    nameThai: "อาหารและสมุนไพร",
    description: "Local food products and herbal remedies",
    image: foodImage,
    productCount: 32,
  },
  {
    id: "souvenir",
    name: "Souvenir",
    nameThai: "ของที่ระลึก",
    description: "Unique souvenirs and decorative items",
    image: souvenirImage,
    productCount: 15,
  },
];
