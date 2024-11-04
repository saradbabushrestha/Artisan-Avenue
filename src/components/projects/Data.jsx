// Data.jsx
import Project1 from "../../assets/ecommerce.png";
import Project1Hover from "../../assets/ehover.jpg"; // Hover image for Project 1
import Project2 from "../../assets/kurakani.jpg";
import Project2Hover from "../../assets/kurakanihover.png"; // Hover image for Project 2
import Project3 from "../../assets/Wepark.png";
import Project3Hover from "../../assets/weparkhove.png";
import Project4 from "../../assets/imageai.png";
import Project4Hover from "../../assets/imagehover.png";
import Project5 from "../../assets/waiwai.jpg";
import Project5Hover from "../../assets/waiwai.jpg";
import Project6 from "../../assets/dice.jpg";
import Project6Hover from "../../assets/dhover.jpg";
import Project7 from "../../assets/newar.png";
import Project7Hover from "../../assets/newarhover.png";
import Project8 from "../../assets/conta.png";
import Project8Hover from "../../assets/contacthove.png";

export const projectsData = [
  {
    id: 1,
    image: Project1,
    hoverImage: Project1Hover,
    title: "E-Commerce",
    description: "Full-featured e-commerce app",
    hoverDescription:
      "A full-featured e-commerce app with MongoDB, Redis, Stripe payments, and an admin dashboard.",
    category: "Web",
  },
  {
    id: 2,
    image: Project2,
    hoverImage: Project2Hover,
    title: "Kurakhani Live Chat",
    description: "A real-time chat application.",
    hoverDescription: "Connect and chat in real-time with ease!",
    category: "App",
  },
  {
    id: 3,
    image: Project3,
    hoverImage: Project3Hover,
    title: "WePark",
    description: "An AI-powered parking solution.",
    hoverDescription:
      "Real time license detection and parking management system ",
    category: "AI/ML",
  },
  {
    id: 4,
    image: Project4,
    hoverImage: Project4Hover,
    title: "DALLE-2.0",
    description: "AAI Image Generation App",
    hoverDescription:
      "Users can create images from prompts, save them, and view other users' creations.",
    category: "AI/ML",
  },
  {
    id: 5,
    image: Project5,
    hoverImage: Project5Hover,
    title: "BrandPage",
    description: "Wai Wai BrandPage",
    hoverDescription:
      "Showcased waiwai products and services in a visually appealing way.",
    category: "Web",
  },
  {
    id: 6,
    image: Project6,
    hoverImage: Project6Hover,
    title: "Dicegame",
    description: "Easy to play dice game",
    hoverDescription: "my first dice game using React JS! ",
    category: "Web",
  },
  {
    id: 7,
    image: Project7,
    hoverImage: Project7Hover,
    title: "Newari Home",
    description: "Featuring delicious Newari dishes",
    hoverDescription:
      "Showcases a variety of traditional Newari dishes and its pricing. ",
    category: "Web",
  },
  {
    id: 8,
    image: Project8,
    hoverImage: Project8Hover,
    title: "Contact App",
    description: "FIREBASE CONTACT APP",
    hoverDescription:
      "Created a Contact App with Firebase, including CRUD, real-time updates, and a clean UI. ",
    category: "App",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Web",
  },
  {
    name: "App",
  },
  {
    name: "AI/ML",
  },
];
