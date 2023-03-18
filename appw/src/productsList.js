import img1 from "./assets/product1of1.jpg";
import img4 from "./assets/product3ofd.jpg";
import img2 from "./assets/product3of1.jpg";
import img3 from "./assets/product4of1.jpg";
const productsArr = [
  {
    id: 1,
    title: "Shirt",

    price: 400,
    ProductReview: [
      { name: "Jaimin", review: "Nice product !" },
      { name: "Nidhi", review: "recommended!" },
      { name: "Bharat", review: "Quality of product is not so good!" },
    ],
    imageUrl: img1,
  },

  {
    id: 2,
    title: "lower",

    price: 450,
    ProductReview: [
      { name: "Jaimin", review: "Nice product !" },
      { name: "Nidhi", review: "recommended!" },
      { name: "Bharat", review: "Quality of product is not so good!" },
    ],
    imageUrl: img2,
  },

  {
    id: 3,
    title: "Suit",

    price: 570,
    ProductReview: [
      { name: "John", review: "Price over !" },
      { name: "Noah", review: "Not recommended!" },
    ],
    imageUrl: img3,
  },

  {
    id: 4,
    title: "Saree",

    price: 800,
    ProductReview: [
      { name: "Otis", review: "Superbb !!!" },
      { name: "Meave", review: "Poor performance!" },
      { name: "Gerald", review: "Genuine company!" },
    ],
    imageUrl: img4,
  },
];

export default productsArr;
