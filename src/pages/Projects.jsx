import React from "react";
import skinCancerImg from "../assets/skin.png";
import checkInnImg from "../assets/checkIn.png";
import dryCleanerImg from "../assets/dry.png";
import oneDollarImg from "../assets/dollar.png";
import silverCrescentImg from "../assets/silver.png";
import MediBookImg from "../assets/MediBook.png";
import MyAppImg from "../assets/MyApp.png";


export default function Projects() {
  const projectList = [
    {
      title: "Skin Cancer Prediction",
      image: skinCancerImg,
      description:
        "A machine learning–based system that detects and classifies skin cancer from dermoscopic images using XGBoost and Random Forest algorithms. The model achieved an accuracy of 96%, providing reliable predictions to assist in early diagnosis and clinical decision-making.",
    },
    {
      title: "Check Inn",
      image: checkInnImg,
      link: "https://youcheckinn.com/",
      description:
        "An intelligent hotel management platform designed to optimize operations for property owners, guests, and concierge teams. It offers seamless room reservations, guest check-ins, service coordination, and administrative control through a unified digital interface.",
    },
    {
      title: "Dry Cleaner",
      image: dryCleanerImg,
      description:
        "A smart laundry management system to digitalize and automate laundry operations. It allows customers, shop owners, and delivery staff to manage orders, billing, and delivery scheduling through one platform.",
    },
    {
      title: "OneDollarShop",
      image: oneDollarImg,
      description:
        "A discount e-commerce platform that enables users to buy affordable products, and admins to manage orders, products, and users — featuring secure payments and delivery tracking.",
    },
    {
      title: "Silver Crescent",
      image: silverCrescentImg,
      link: "https://umerhakim1.pythonanywhere.com/",
      description:
        "A luxury perfume e-commerce web app that combines elegant UI/UX with a robust backend for managing products, inventory, and orders. Built for performance, scalability, and a premium shopping experience.",
    },
    {
      title: "MediBook",
      image: MediBookImg,
      link: "https://umerhakim99.pythonanywhere.com/",
      description:
        "MediBook is a web-based platform that enables patients to easily book appointments with doctors, while allowing doctors to manage schedules and provide consultations efficiently. The system improves healthcare accessibility by streamlining appointment handling, reducing wait times, and ensuring a smooth interaction between patients and medical professionals.",
    },
    {
      title: "MyApp",
      image: MyAppImg,
      link: "https://umer.pythonanywhere.com/",
      description:
        "The best place where you can store your personal data as well as your frieds data safe and secure.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 py-12 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-7xl">
        {projectList.map((project, index) => {
          const CardWrapper = project.link ? "a" : "div";

          return (
            <CardWrapper
              key={index}
              href={project.link}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="bg-white border rounded-2xl shadow overflow-hidden block hover:shadow-lg transition"
            >
              <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain md:object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
}