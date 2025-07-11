import React from "react";

const projects = [
  {
    title: "Designing Dashboards",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://i.imgur.com/MN0F1pZ.png"
  },
  {
    title: "Vibrant Portraits of 2020",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://i.imgur.com/AbQ1o2J.png"
  },
  {
    title: "36 Days of Malayalam type",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: "https://i.imgur.com/3LZHS7E.png"
  }
];

export default function Projects() {
  return (
    <section className="px-8 py-12 max-w-screen-lg mx-auto">
      <h3 className="text-2xl font-bold mb-6">Projetos</h3>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start gap-6 border-b pb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-28 h-20 object-cover rounded-md shadow-sm"
            />
            <div>
              <h4 className="font-semibold mb-1">{project.title}</h4>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
