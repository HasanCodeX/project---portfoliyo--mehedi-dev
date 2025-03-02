import { Typewriter } from "react-simple-typewriter";
import { CodeXml  } from "lucide-react";

export default function Banner() {
  return (
    
    <div className="text-center py-10">
      <div className="flex justify-center items-center py-10">
  <CodeXml className="w-20 h-20" /> {/* Adjust size (w = width, h = height) */}
</div>

      
      <h1 className="text-3xl font-bold mt-4">Mehedi Hasan</h1>
      <p className="text-lg tracking-wide mt-2 font-medium">
        <Typewriter
          words={["Web Developer", "Frontend Engineer", "React Specialist", "Full Stack Developer"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
}
