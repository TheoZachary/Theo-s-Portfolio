import { useEffect, useState } from "react"

export const StarBackground = () => {
    const [stars, setStars] = useState([]); 
    const [meteors, setMeteors] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(()=>{
        generateStars();
        generatMeteors();

        const handleResize = () => {
            generateStars();
        }

        const handleMouseMove = (e) => {
            // Get mouse position as percentage of screen
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            setMousePosition({ x, y });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };

    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = []

        for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 4 + 3,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
                // Add mouse sensitivity factor for each star
                mouseSensitivity: Math.random() * 0.5 + 0.2, // 0.2 to 0.7
            });
        }
        setStars(newStars);
    };

    const generatMeteors = () => {
        const numberOfMeteors = 8;
        const newMeteors = []
        
        for (let i = 0; i < numberOfMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
                mouseSensitivity: Math.random() * 0.3 + 0.1, // 0.1 to 0.4
            });
        }
        setMeteors(newMeteors);
    };

    // Calculate mouse-influenced position for each element
    const getMouseInfluencedPosition = (originalX, originalY, sensitivity) => {
        const deltaX = (mousePosition.x - 50) * sensitivity; // Center mouse at 50%
        const deltaY = (mousePosition.y - 50) * sensitivity;
        
        return {
            x: originalX + deltaX,
            y: originalY + deltaY
        };
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Stars */}
            {stars.map((star) => {
                const influencedPos = getMouseInfluencedPosition(
                    star.x, 
                    star.y, 
                    star.mouseSensitivity
                );
                
                return (
                    <div 
                        key={star.id} 
                        className="star animate-pulse-subtle absolute rounded-full transition-all duration-300 ease-out" 
                        style={{
                            width: star.size + "px",
                            height: star.size + "px",
                            left: `calc(${influencedPos.x}% - ${star.size/2}px)`,
                            top: `calc(${influencedPos.y}% - ${star.size/2}px)`,
                            opacity: star.opacity,
                            animationDuration: star.animationDuration + "s",
                            transform: `translate(${(mousePosition.x - 50) * star.mouseSensitivity * 0.2}px, ${(mousePosition.y - 50) * star.mouseSensitivity * 0.2}px)`,
                        }}
                    />
                );
            })}

            {/* Meteors */}
            {meteors.map((meteor) => {
                const influencedPos = getMouseInfluencedPosition(
                    meteor.x, 
                    meteor.y, 
                    meteor.mouseSensitivity
                );
                
                return (
                    <div 
                        key={meteor.id} 
                        className="meteor animate-meteor absolute bg-gradient-to-r from-white via-white to-transparent rounded-full opacity-70 transition-all duration-500 ease-out"
                        style={{
                            width: meteor.size * 30 + "px",
                            height: meteor.size + "px",
                            left: `calc(${influencedPos.x}% - ${meteor.size * 15}px)`,
                            top: `calc(${influencedPos.y}% - ${meteor.size/2}px)`,
                            animationDelay: 0 + "s",
                            animationDuration: meteor.animationDuration + "s",
                            transform: `translate(${(mousePosition.x - 50) * meteor.mouseSensitivity * 0.3}px, ${(mousePosition.y - 50) * meteor.mouseSensitivity * 0.3}px) rotate(45deg)`,
                        }}
                    />
                );
            })}
        </div>
    );
};