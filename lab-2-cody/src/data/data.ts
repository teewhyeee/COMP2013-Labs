export interface ResortsLiteProps {
  id: number;
  image: string;
  location: string;
  resortName: string;
  rating: number;
  price: number;
}

const data: ResortsLiteProps[] = [
  {
    id: 1,
    image: "/src/assets/images/1.jpg",
    location: "Indonesia",
    resortName: "Gili Air Hotel",
    rating: 4.8,
    price: 589,
  },
  {
    id: 2,
    image: "/src/assets/images/2.jpg",
    location: "Seychelles",
    resortName: "Hilton Resort",
    rating: 4.2,
    price: 629,
  },
  {
    id: 3,
    image: "/src/assets/images/3.jpg",
    location: "Virgin Islands",
    resortName: "Goa Resort",
    rating: 3.5,
    price: 485,
  },
  {
    id: 4,
    image: "/src/assets/images/4.jpg",
    location: "Bahamas",
    resortName: "Kuredu Resort",
    rating: 4.2,
    price: 729,
  },
  {
    id: 5,
    image: "/src/assets/images/5.jpg",
    location: "Mauritius",
    resortName: "Tour D'eau Douce",
    rating: 4.9,
    price: 877,
  },
  {
    id: 6,
    image: "/src/assets/images/6.jpg",
    location: "Bermuda",
    resortName: "Staniel Cay Hotel",
    rating: 3.2,
    price: 365,
  },
];

export default data;
