import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FitPlate Web Designer",
    description: "A collaborative software project for calculating calories and providing healthy food recipes",
    image: "/FitPlate (2).png",
    tags: ["React", "TailwindCSS", "Typescript","Figma","Flask","Firebase","Cloudinary"],
    demoUrl: "https://github.com/Jasonnn13/FitPlate",
    githubUrl: "https://github.com/Jasonnn13/FitPlate",
  },
  {
    id: 2,
    title: "CateringZ",
    description:
      "A simply beautiful catering website project",
    image: "/CateringZ.png",
    tags: ["HTML","CSS","JS","Figma"],
    demoUrl: "https://github.com/TheoZachary/CateringZ-Project",
    githubUrl: "https://github.com/TheoZachary/CateringZ-Project",
  },
  {
    id: 3,
    title: "Comparative Analysis of Classical Machine Learning Models and Deep Learning in Rose Leaf Disease Classification",
    description:
      "Research paper about rose leaf disease, contributed as a writer and making the machine learning model",
    image: "/Research Paper.png",
    tags: ["Research","Machine Learning","Computer Vision"],
    demoUrl: "/Final Paper - Kelompok 18.pdf",
    githubUrl: "https://github.com/TheoZachary/Machine-Learning-rose-leaf-disease-detection-models",
  },
  {
    id: 4,
    title: "LyriGist AI",
    description:
      "Song genre classification by the lyrics, Contributed as Machine learning engineer",
    image: "/SVM.png",
    tags: ["SVM","Machine Learning","NLP"],
    demoUrl: "https://github.com/TheoZachary/NLP-project",
    githubUrl: "https://github.com/TheoZachary/NLP-project",
  },
  {
    id:5,
    title: "Data Structure Final Project",
    description:
      "A simply program using data structure",
    image: "/images (1).jpeg",
    tags: ["C","Data Structure"],
    demoUrl: "https://github.com/TheoZachary/Data-Structure-Final-Project",
    githubUrl: "https://github.com/TheoZachary/Data-Structure-Final-Project",
  },{
    id:5,
    title: "HeartCare",
    description:
      "Random Forest Heart Disease Detection",
    image: "/UI heartPredictor.jpg",
    tags: ["Machine Learning","Random Forest"],
    demoUrl: "https://github.com/TheoZachary/HeartCare",
    githubUrl: "https://github.com/TheoZachary/HeartCare",
  }
];

export const ProjectSection = () => {
  return (
    <section id="Projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover gradient-border"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/TheoZachary"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};