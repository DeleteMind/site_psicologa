import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {/* <div className="w-full relative pb-16 overflow-hidden">
        <Image
          className="ml-[11px] shrink-0 min-w-fit"
          src="/header-daniela-big2.png"
          alt="Description of the image"
          width={949}
          height={86}
        />
        <div className="flex flex-col items-center gap-12 lg:gap-2 absolute inset-x-0 top-0 mt-8">
          <h1 className="text-xl md:text-2xl tracking-wider text-center">
            SESSÕES DE PSICOLOGIA
          </h1>
          <Link
            className=" bg-white hover:bg-orange-50 font-semibold
           text-orange-900  hover:text-orange-800 border-2 border-orange-100  px-4 py-2 rounded-md text-center"
            href="/consultas"
          >
            Marca aqui
          </Link>
        </div>
      </div> */}
      {/* Sobre mim and photo */}
      <div className="flex flex-col lg:flex-row items-center justify-center m-8 text-justify">
        <div className="relative rounded-md bg-white min-h-[450px] lg:min-h-[530px] p-8 flex flex-col gap-4 w-full lg:max-w-lg mt-82">
          <h1 className="text-4xl">Sobre mim</h1>
          <hr className=" border-b-2 w-1/2" />
          <p>
            Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia
            Cognitiva - Comportamental e Integrativa, pela Faculdade de
            Psicologia da Universidade de Lisboa. Interesso-me especialmente
            pelas relações humanas e pela forma como o nosso sistema nervoso se
            modifica à medida que vamos criando novas relações interpessoais.
          </p>
          <p>
            Na sala da terapia, importa-me acolher cada pessoa no seu todo, com
            aceitação e curiosidade para conhecer as suas vulnerabilidades,
            defesas e recursos.
          </p>
          <div className="flex-grow"></div>{" "}
          {/* This div will take up the remaining space */}
          <Link href="/sobre">
            <button className="w-full lg:w-auto mt-4 lg:self-start border-2 border-orange-50 py-2 px-4 rounded-sm hover:bg-orange-50 hover:text-orange-900">
              Saber mais
            </button>
          </Link>
        </div>
        <Image
          className="w-full max-w-[400px] h-auto object-cover rounded-r-md"
          src="/1000055737.jpg"
          alt="Description of the image"
          width={500}
          height={500}
        />
      </div>
      <section className="border-t-2 w-3/4 flex flex-col items-center gap-8 text-center my-12">
        <h1 className="text-4xl my-8">Áreas de intervenção</h1>
        <ul className="list-none space-y-4">
          {[
            { src: "/Icons/mood-swings.png", text: "Perturbações de Humor" },
            {
              src: "/Icons/mental-disorder.png",
              text: "Perturbações de Ansiedade",
            },
            {
              src: "/Icons/personality-disorder.png",
              text: "Perturbações de Personalidade",
            },
            { src: "/Icons/stress.png", text: "Problemas interpessoais" },
            { src: "/Icons/self.png", text: "Baixa auto-estima" },
            { src: "/Icons/work.png", text: "Crises de vida" },
            { src: "/Icons/emotional (1).png", text: "Distress emocional" },
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-4">
              <Image
                src={item.src}
                alt={item.text}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
