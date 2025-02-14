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
      <div className="flex flex-col lg:flex-row items-center justify-center m-8">
        <div className="relative bg-white min-h-96 p-8 flex flex-col gap-4 w-full lg:max-w-lg mt-8 transform lg:translate-x-6">
          <h1 className="text-orange-900 font-bold text-4xl">Sobre mim</h1>
          <p>Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais. </p>
          <p>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. </p>
          <button className="mt-auto lg:self-start text-zinc-500 border-2 border-orange-50 py-2 px-4 rounded-sm  hover:bg-orange-50 hover:text-orange-900">Saber mais</button>
        </div>
        <Image
          className=""
          src="/pexels-alex-green-5699456 (1).jpg"
          alt="Description of the image"
          width={500}
          height={300}
          style={{ height: "512px", width: "500px" }}
        />
      </div>
      <section className="border-t-2 border-gray-500/50 border w-full flex flex-col items-center gap-8 text-center">
        <h1 className="text-2xl mt-8">Áreas de intervenção</h1>
        <ul className="list-none text space-y-4">
          <img src="/Icons/mood-swings.png" alt="Description of the image" />
          <li>Perturbações de Humor</li>
          <img src="/Icons/mental-disorder.png" alt="Description of the image" />
          <li>Perturbações de Ansiedade</li>
          <img src="/Icons/personality-disorder.png" alt="Description of the image" />
          <li>Perturbação de Personalidade Borderline</li>
          <img src="/Icons/emotional.png" alt="Description of the image" />
          <li>Perturbação Dependente de Personalidade</li>
          <img src="/Icons/stress.png" alt="Description of the image" />
          <li>Problemas interpessoais</li>
          <img src="/Icons/self.png" alt="Description of the image" />
          <li>Baixa auto-estima</li>
          <img src="/Icons/work.png" alt="Description of the image" />
          <li>Crises de vida</li>
          <img src="/Icons/emotional (1).png" alt="Description of the image" />
          <li>Distress emocional</li>
        </ul>
      </section>
    </main>
  );
}