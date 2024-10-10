import { useState, useEffect } from "react";
import living from "../../assets/living.jpg";
import living2 from "../../assets/living2.jpg";

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActive(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    setActive(id.substring(1)); // Set active state without the '#'

    // Smooth scroll to the section
    const section = document.querySelector(id);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Update the URL hash
    window.history.pushState(null, null, id);
  };

  return (
    <header className="flex flex-col justify-between"> 
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="bg-black text-white px-2 py-1">Viva</span>Decor
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a 
              href="#home" 
              onClick={(e) => handleClick(e, "#home")} 
              className={`text-gray-600 hover:text-black font-semibold ${active === "home" ? "text-black font-semibold" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => handleClick(e, "#services")} 
              className={`text-gray-600 hover:text-black font-semibold ${active === "services" ? "text-black font-semibold" : ""}`}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={(e) => handleClick(e, "#contact")} 
              className={`text-gray-600 hover:text-black font-semibold ${active === "contact" ? "text-black font-semibold" : ""}`}
            >
              Testimonial
            </a>
          </li>
          <li>
            <a 
              href="#support" 
              onClick={(e) => handleClick(e, "#support")} 
              className={`text-gray-600 hover:text-black font-semibold ${active === "support" ? "text-black font-semibold" : ""}`}
            >
              Support
            </a>
          </li>
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
      </nav>

      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Interior Design</h1>
          <p className="text-gray-600 mb-6">
            Step into a world where the art of Interior Design is meticulously crafted to bring together timeless elegance and cutting-edge modern innovation. Allowing you to transform your living spaces into the epitome of luxury and sophistication.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded">Start Project</button>
        </div>
        <div className="md:w-1/2 relative">
          <img 
            src={living}
            alt="Interior Design Showcase" 
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute bottom-0 right-0 bg-white p-4 rounded-tl-lg shadow-lg">
            <img 
              src={living2}
              alt="Interior Design Detail"
              className="rounded w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 flex justify-around text-center">
        <div>
          <h2 className="text-4xl font-bold">400+</h2>
          <p className="text-gray-600">Project Complete</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">600+</h2>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">100+</h2>
          <p className="text-gray-600">Unique Styles</p>
        </div>
      </div>
    </header>
  );
}
