export const CATEGORIES = [
  { id: 'coffee', label: 'Coffee & Brews' },
  { id: 'snacks', label: 'Snacks' },
  { id: 'sweets', label: 'Sweets' },
];

import MugsysFreddo from '../assets/mugsys-freddo.jpg';
import MugsysFreddoCappuccino from '../assets/mugsys-freddo-cappuccino.jpg';
import MugsysCappuccino from '../assets/mugsys-cappuccino.jpg';
import MugsysIcedTea from '../assets/mugsys-iced-tea.jpg';
import MugsysLemonade from '../assets/mugsys-lemonade.jpg';
import MugsysMuffin from '../assets/mugsys-muffin.jpg';
import MugsysSoftCookie from '../assets/mugsys-soft-cookie.jpg';
import MugsysGranolaBar from '../assets/mugsys-granola-bar.jpg';
import MugsysApplePie from '../assets/mugsys-apple-pie.jpg';

export const MENU_ITEMS = [
  // --- COFFEE ---
  { 
    id: 1, 
    category: 'coffee', 
    name: 'Freddo Espresso', 
    description: 'The Greek classic. Double shot, iced & whipped.',
    image: MugsysFreddo
  },
  { 
    id: 2, 
    category: 'coffee', 
    name: 'Freddo Cappuccino', 
    description: 'Topped with our signature velvety cold foam.',
    image: MugsysFreddoCappuccino
  },
  { 
    id: 3, 
    category: 'coffee', 
    name: 'Cappuccino', 
    description: 'Rich espresso with steamed milk and a foamy top.',
    image: MugsysCappuccino
  },
  { 
    id: 4, 
    category: 'coffee', 
    name: 'Iced Tea', 
    description: 'Chilled and refreshing iced tea.',
    image: MugsysIcedTea
  },
  {
    id: 5, 
    category: 'coffee', 
    name: 'Lemonade with Ginger', 
    description: 'Chilled and refreshing lemonade with a hint of ginger.',
    image: MugsysLemonade
  },
  // --- BRUNCH ---
  { 
    id: 6, 
    category: 'snacks', 
    name: 'Vanilla Muffin', 
    description: 'Soft muffin with vanilla glaze.',
    image: MugsysMuffin
  },
  { 
    id: 7, 
    category: 'snacks', 
    name: 'Soft Oatmeal Cookie', 
    description: 'Soft cookie with oats.',
    image: MugsysSoftCookie
  },
  { 
    id: 8, 
    category: 'snacks', 
    name: 'Chocolate Cereal Bar', 
    description: 'Crunchy and nutritious chocolate cereal bar.',
    image: MugsysGranolaBar
  },
  // --- SWEETS ---
  { 
    id: 9, 
    category: 'sweets', 
    name: 'Apple Pie', 
    description: 'Classic apple pie with a flaky crust and cinnamon-spiced filling.',
    image: MugsysApplePie
  },
];