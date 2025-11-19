import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Java", category: "Backend" },
  { name: "mySql", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "C", category: "Backend" },

  // Tools
  { name: "Git/GitHub", category: "Tools" },
  { name: "Figma", category: "Tools" },
  { name: "VS Code", category: "Tools" },

  //Ai
  { name: "Machine Learning", category: "AI" },
  { name: "Deep Learning", category: "AI" },
  { name: "IoT", category: "AI" },

  { name: "Guitar", category: "Hobby"},

];

const categories = ["all", "Frontend", "Backend","AI","Tools", "Hobby"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="Skilss" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover gradient-border"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};