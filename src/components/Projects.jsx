import React from "react";

const projects = [
  { title: "Designing Dashboards", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
  { title: "Vibrant Portraits of 2020", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." },
  { title: "36 Days of Malayalam type", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." }
];

export default function Projects() {
  return (
    <section className="px-8 py-12">
      <h3 className="text-2xl font-bold mb-6">Projetos</h3>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-b pb-4">
            <h4 className="font-semibold">{project.title}</h4>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
