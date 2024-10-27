
import Hero from "./components/hero"; // Adjust the path according to your project structure
import About from "./components/about";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

export default function Home() {
  return (
  <div>
  <Hero />
  <About />
  <Skills />
  <Portfolio />
  <Contact />
  </div>
  );
  }

