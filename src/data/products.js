// Product data for The Umbrella Company
// Using premium locally generated umbrella images

// Import umbrella images
import heroUmbrella from '../assets/umbrellas/hero_umbrella.png';
import golfUmbrellaStorm from '../assets/umbrellas/golf_umbrella_storm.png';
import executiveUmbrella from '../assets/umbrellas/executive_umbrella.png';
import compactUmbrella from '../assets/umbrellas/compact_umbrella.png';
import fashionUmbrellaRed from '../assets/umbrellas/fashion_umbrella_red.png';
import golfTitanium from '../assets/umbrellas/golf_titanium.png';
import urbanShadow from '../assets/umbrellas/urban_shadow.png';
import azureGradient from '../assets/umbrellas/azure_gradient.png';
import travelCompact from '../assets/umbrellas/travel_compact.png';
import platinumPremium from '../assets/umbrellas/platinum_premium.png';
import meadowFloral from '../assets/umbrellas/meadow_floral.png';
import carbonElite from '../assets/umbrellas/carbon_elite.png';

export const categories = [
  { id: 'all', name: 'All Umbrellas' },
  { id: 'golf', name: 'Golf Umbrellas' },
  { id: 'compact', name: 'Compact & Travel' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'automatic', name: 'Automatic' },
  { id: 'premium', name: 'Premium Collection' }
];

export const products = [
  {
    id: 1,
    name: 'Royal Gold Classic',
    category: 'premium',
    price: 2499,
    originalPrice: 3499,
    description: 'Handcrafted luxury umbrella with 24K gold-plated handle and premium silk canopy.',
    features: ['24K Gold Handle', 'Silk Canopy', 'Lifetime Warranty'],
    image: heroUmbrella,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'Storm Shield Pro',
    category: 'golf',
    price: 1899,
    originalPrice: 2599,
    description: 'Professional grade golf umbrella with 60" canopy and wind-resistant frame.',
    features: ['60" Canopy', 'Wind Resistant', 'UV Protection'],
    image: golfUmbrellaStorm,
    badge: 'Premium'
  },
  {
    id: 3,
    name: 'Noir Executive',
    category: 'automatic',
    price: 1299,
    originalPrice: 1799,
    description: 'Sleek automatic open/close umbrella perfect for the modern professional.',
    features: ['Auto Open/Close', 'Carbon Fiber', 'Teflon Coating'],
    image: executiveUmbrella,
    badge: null
  },
  {
    id: 4,
    name: 'Petite Elegance',
    category: 'compact',
    price: 899,
    originalPrice: 1299,
    description: 'Ultra-compact travel umbrella that fits perfectly in your handbag.',
    features: ['Ultra Compact', 'Quick Dry', 'Ergonomic Handle'],
    image: compactUmbrella,
    badge: 'New'
  },
  {
    id: 5,
    name: 'Crimson Rose',
    category: 'fashion',
    price: 1599,
    originalPrice: 2199,
    description: 'Statement piece umbrella with hand-painted floral designs and bamboo handle.',
    features: ['Hand Painted', 'Bamboo Handle', 'Limited Edition'],
    image: fashionUmbrellaRed,
    badge: 'Limited'
  },
  {
    id: 6,
    name: 'Titanium Force',
    category: 'golf',
    price: 2199,
    originalPrice: 2999,
    description: 'Heavy-duty golf umbrella with titanium reinforced ribs for maximum durability.',
    features: ['Titanium Ribs', 'Double Canopy', 'Anti-Rust'],
    image: golfTitanium,
    badge: null
  },
  {
    id: 7,
    name: 'Urban Shadow',
    category: 'automatic',
    price: 999,
    originalPrice: 1499,
    description: 'Matte black automatic umbrella with stealth design for city dwellers.',
    features: ['Matte Finish', 'LED Light', 'Reflective Strip'],
    image: urbanShadow,
    badge: 'Popular'
  },
  {
    id: 8,
    name: 'Azure Dreams',
    category: 'fashion',
    price: 1399,
    originalPrice: 1899,
    description: 'Ocean-inspired umbrella with gradient blue canopy and pearl handle.',
    features: ['Gradient Design', 'Pearl Handle', 'Water Repellent'],
    image: azureGradient,
    badge: null
  },
  {
    id: 9,
    name: 'Voyager Mini',
    category: 'compact',
    price: 799,
    originalPrice: 1099,
    description: 'Lightweight travel companion with reinforced construction.',
    features: ['Ultra Light', 'Reinforced', 'Travel Case'],
    image: travelCompact,
    badge: null
  },
  {
    id: 10,
    name: 'Imperial Platinum',
    category: 'premium',
    price: 3999,
    originalPrice: 5499,
    description: 'Our flagship umbrella featuring platinum accents and Italian leather handle.',
    features: ['Platinum Accents', 'Italian Leather', 'Collector\'s Edition'],
    image: platinumPremium,
    badge: 'Exclusive'
  },
  {
    id: 11,
    name: 'Meadow Bloom',
    category: 'fashion',
    price: 1199,
    originalPrice: 1599,
    description: 'Spring-inspired floral umbrella with wooden curved handle.',
    features: ['Floral Print', 'Wooden Handle', 'UV Blocking'],
    image: meadowFloral,
    badge: 'Seasonal'
  },
  {
    id: 12,
    name: 'Carbon Elite',
    category: 'automatic',
    price: 1699,
    originalPrice: 2299,
    description: 'Premium automatic umbrella with full carbon fiber construction.',
    features: ['Full Carbon', 'Nano Coating', 'One-Touch'],
    image: carbonElite,
    badge: 'Tech'
  }
];

export default products;
