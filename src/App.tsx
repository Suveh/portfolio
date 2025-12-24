import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#e6e6e6]">
      <Navbar />

      <main className="space-y-32">
        <Hero />
        <Services />
        <Projects />
        <Resume />
        <Contact />
        <Footer />

      </main>
    </div>
  );
}

export default App;
