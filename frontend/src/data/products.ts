export interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    color: string;
    category: string;
    isFeatured: boolean;
    isBestSeller: boolean;
    isNew: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Golden Honey Granola",
        price: "$12.00",
        description: "Organic rolled oats baked with wildflower honey and almonds.",
        color: "#F0EAD6",
        category: "Breakfast",
        isFeatured: true, // Favorites displayed on home screen
        isBestSeller: true,
        isNew: false
    },
    {
        id: 2,
        name: "Berry Antioxidant Mix",
        price: "$14.50",
        description: "A tart and sweet blend of dried goji berries, blueberries, and cranberries.",
        color: "#E6D7D7",
        category: "Snacks",
        isFeatured: true,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 3,
        name: "Matcha Energy Bites",
        price: "$10.00",
        description: "Raw energy balls made with dates, cashews, and premium matcha powder.",
        color: "#D8E2DC",
        category: "Snacks",
        isFeatured: true,
        isBestSeller: true,
        isNew: false
    },
    {
        id: 4,
        name: "Roasted Almonds",
        price: "$18.00",
        description: "Slow-roasted california almonds with a hint of sea salt.",
        color: "#E0D5C1",
        category: "Nuts",
        isFeatured: true,
        isBestSeller: false,
        isNew: false
    },
    {
        id: 5,
        name: "Dark Chocolate Quinoa",
        price: "$9.00",
        description: "Puffed quinoa coated in 70% dark chocolate.",
        color: "#8D7B68",
        category: "Treats",
        isFeatured: false,
        isBestSeller: false,
        isNew: true
    },
    {
        id: 6,
        name: "Spiced Pecans",
        price: "$22.00",
        description: "Pecans roasted with cinnamon, nutmeg, and a touch of maple.",
        color: "#C8B6A6",
        category: "Nuts",
        isFeatured: false,
        isBestSeller: true,
        isNew: false
    }
];
