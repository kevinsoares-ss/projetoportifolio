import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import kevin from "../../assets/kevin.jpeg";
import Trabalhos from "../../assets/Chat.png.png";
import Ingride from "../../assets/Ingride.png";

export default function Portfolio() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : true;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    setTimeout(() => setLoading(false), 800);

    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="animate-pulse text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div
      className={
        dark
          ? "bg-gradient-to-br from-black via-[#2A1450] to-black text-white min-h-screen scroll-smooth transition-colors duration-500"
          : "bg-white text-black min-h-screen scroll-smooth transition-colors duration-500"
      }
    >
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md border-b z-50 ${
          dark ? "bg-black/40 border-white/10" : "bg-white/70 border-black/10"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg" data-aos="fade-down">
            Kevin.dev
          </h1>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setDark(!dark)}
              className="text-xl hover:scale-110 transition"
              data-aos="fade-down"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              data-aos="fade-down"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="hidden md:flex gap-8 text-sm">
              <a href="#" data-aos="fade-down" data-aos-delay="100">
                Home
              </a>
              <a href="#sobre" data-aos="fade-down" data-aos-delay="150">
                Sobre
              </a>
              <a href="#projetos" data-aos="fade-down" data-aos-delay="200">
                Projetos
              </a>
              <a href="#contato" data-aos="fade-down" data-aos-delay="250">
                Contato
              </a>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/90 p-6 flex flex-col gap-4">
            <a data-aos="fade-left" href="#sobre">
              Sobre
            </a>
            <a data-aos="fade-left" data-aos-delay="100" href="#projetos">
              Projetos
            </a>
            <a data-aos="fade-left" data-aos-delay="200" href="#contato">
              Contato
            </a>
          </div>
        )}
      </nav>

      {/* HERO INFO */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <div className="relative mb-6" data-aos="zoom-in">
          <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20 rounded-full"></div>

          <img
            src={kevin}
            alt="Kevin"
            className="relative w-40 h-40 rounded-full object-cover"
          />
        </div>

        <h2 className="text-3xl font-bold mb-3" data-aos="fade-up">
          Vamos trabalhar juntos?
        </h2>

        <p
          className="max-w-md opacity-70"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Disponível para oportunidades como Desenvolvedor Front-End.
        </p>

        <div
          className="flex gap-5 mt-6 text-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button>
            <a href="https://github.com/">
              {" "}
              <FaGithub />
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/kevin-soares-448568395/">
              {" "}
              <FaLinkedin />
            </a>
          </button>
          <button>
            {" "}
            <a href="https://web.whatsapp.com/">
              {" "}
              <FaWhatsapp />
            </a>
          </button>
        </div>
      </section>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-between max-w-6xl mx-auto px-6 pt-24">
        <div className="max-w-xl">
          <h1
            className="text-5xl font-bold leading-tight mb-6"
            data-aos="fade-right"
          >
            Desenvolvedor Front-End
          </h1>

          <p
            className="text-lg leading-relaxed opacity-70"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Crio interfaces modernas, responsivas e focadas em experiência do
            usuário. Trabalho com React, JavaScript, HTML e CSS, e estou em
            constante evolução como desenvolvedor.
          </p>
        </div>

        <div className="w-[650px] h-[650px]" data-aos="zoom-in">
          <spline-viewer
            className="w-full h-full"
            url="https://prod.spline.design/nbqscIv-pl32GSAn/scene.splinecode"
          />
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Sobre mim
        </h2>

        <p
          className="max-w-2xl mx-auto opacity-70 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Desenvolvedor Front-End focado em React e interfaces modernas. Busco
          evolução constante e oportunidades reais na área.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
          Ferramentas
        </h2>

        <img
          src={Trabalhos}
          className="max-w-xl mx-auto w-full"
          data-aos="zoom-in"
          data-aos-delay="150"
        />
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
          Projetos
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Projeto Web", "Landing Page", "Landing Page"].map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:scale-[1.03] transition"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <h3
                className="text-xl font-bold mb-2"
                data-aos="fade-up"
                data-aos-delay={i * 150 + 50}
              >
                {p}
              </h3>

              {i === 0 && <img src={Ingride} alt="Projeto Web" />}

              <a
                href="https://kevinsoares-ss.github.io/projetowebsite/"
                className="bg-purple-600 px-4 py-2 rounded-lg inline-block"
                data-aos="fade-up"
                data-aos-delay={i * 150 + 150}
              >
                Ver projeto
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
          Contato
        </h2>

        <p className="opacity-70" data-aos="fade-up" data-aos-delay="150">
          Kevinsoares474@gmail.com
        </p>
      </section>

      {/* BOTÃO TOPO */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-purple-600 p-3 rounded-full hover:scale-110 transition"
          data-aos="zoom-in"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
