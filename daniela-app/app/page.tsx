import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="relative bg-white w-full flex justify-center">
        <Image
          className="mb-10 object-cover"
          src="/pexels-alex-green-5699456 (1).jpg"
          alt="Description of the image"
          width={1200} // Set the desired width
          height={355} // Set the desired height
          style={{ height: "355px", width: "1743px" }}
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-50 text-4xl  lg:text-6xl 2xl:mt-4 font-bold text-center">
          <h1>Consultas de psicologia</h1>
        </div>
        <button className="absolute bottom-20 center-4  text-orange-50 border-2 border-orange-50 px-4 py-2 rounded-sm  hover:bg-orange-50 hover:text-orange-900">
          <p>Marca já</p>
        </button>
      </div>
      {/* Sobre mim and photo */}
      <div className="flex flex-col lg:flex-row items-center justify-center m-8 text-justify">
        <div className="relative bg-white min-h-[450px] lg:min-h-[530px] p-8 flex flex-col gap-4 w-full lg:max-w-lg mt-8 transform lg:translate-x-6 lg:translate-y-6">
          <h1 className="text-orange-900  text-4xl">Sobre mim</h1>
          <p>Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais. </p>
          <p>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. </p>
          <button className="mt-auto lg:self-start text-zinc-500 border-2 border-orange-50 py-2 px-4 rounded-sm  hover:bg-orange-50 hover:text-orange-900">Saber mais</button>
        </div>
        <Image
          className="w-full max-w-[500px] h-auto object-cover"
          src="/Snapinst.app_368680928_270420565750050_196321165440213060_n_1080.jpg"
          alt="Description of the image"
          width={500}
          height={512}
        />
      </div>
      <section className="border-t-2 border-gray-500/50 w-3/4 flex flex-col items-center gap-8 text-center my-12">
        <h1 className="text-4xl my-8">Áreas de intervenção</h1>
        <ul className="list-none space-y-4">
          {[
            { src: "/Icons/mood-swings.png", text: "Perturbações de Humor" },
            { src: "/Icons/mental-disorder.png", text: "Perturbações de Ansiedade" },
            { src: "/Icons/personality-disorder.png", text: "Perturbação de Personalidade Borderline" },
            { src: "/Icons/emotional.png", text: "Perturbação Dependente de Personalidade" },
            { src: "/Icons/stress.png", text: "Problemas interpessoais" },
            { src: "/Icons/self.png", text: "Baixa auto-estima" },
            { src: "/Icons/work.png", text: "Crises de vida" },
            { src: "/Icons/emotional (1).png", text: "Distress emocional" }
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-4">
              <img src={item.src} alt={item.text} className="w-8 h-8" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}