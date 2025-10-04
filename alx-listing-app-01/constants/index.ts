import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/assets/image2.png",
    discount: "",
    description:
      "A luxurious villa with a private pool and stunning ocean views. Perfect for families or groups seeking relaxation in Bali.",
    reviews: [
      {
        user: "Sarah Lee",
        rating: 5,
        comment: "Absolutely stunning villa! The view was incredible.",
        avatar: "/assets/user1.png",
      },
      {
        user: "James Parker",
        rating: 4,
        comment: "Great location and amenities, but WiFi was spotty.",
        avatar: "/assets/user2.png",
      },
    ],
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/assets/image3.png",
    discount: "30",
    description:
      "Cozy chalet nestled in the mountains of Aspen. Enjoy skiing, hiking, and evenings by the fireplace.",
    reviews: [
      {
        user: "Sarah Lee",
        rating: 5,
        comment: "Absolutely stunning villa! The view was incredible.",
        avatar: "/assets/user1.jpg",
      },
      {
        user: "James Parker",
        rating: 4,
        comment: "Great location and amenities, but WiFi was spotty.",
        avatar: "/assets/user2.jpg",
      },
    ],
  },
  // 👉 include the rest of the property objects from the assignment here,
  // making sure each has a "description" field like above.
];
