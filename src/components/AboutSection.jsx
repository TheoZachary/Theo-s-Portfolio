import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () =>{

    return <section id="About" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About<span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Computer Science Undergraduate</h3>

                    <p className="text-muted-foreground ">
                        I am a Computer Science undergraduate with a strong interest in technology, problem-solving, 
                        and creative innovation. My academic journey has given me a solid foundation in programming, 
                        software development, and computer systems, while my personal projects have allowed me to 
                        explore areas such as artificial intelligence, web development, and modern frameworks. 
                        I enjoy building applications that combine functionality with design, and I am eager to apply 
                        my skills to real-world challenges. With a passion for continuous learning, I aim to grow into 
                        a professional who contributes to impactful solutions in the tech industry.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#Contacs" className="cosmic-button">
                            Get in touch
                        </a>
                        <a href="/CV Theo.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary-foreground transition-colors duration-300">
                            Download CV
                        </a>

                    </div>

                </div>
    
                <div>
                    <img src="PhotoProfile.png" className="flex items-start image-display gradient-border p-10 card-hover"></img>
                </div>


            </div>
                <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10 py-8">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Machine Learning
                                </h4>
                                <p className="text-muted-foreground">
                                    Model
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Software Developer
                                </h4>
                                <p className="text-muted-foreground">
                                    Design and Development
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Project Coordiantor
                                </h4>
                                <p className="text-muted-foreground">
                                    Organizational Experience
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
        </div>
    </section>
}