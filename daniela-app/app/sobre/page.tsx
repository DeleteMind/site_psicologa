import Image from 'next/image';

export default function SobrePage() {
  return (
    <main className="text-black text-lg flex flex-col justify-between min-h-screen p-4 sm:p-12 lg:mx-4 xl:mx-8">
      {/* Title and Image */}
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4 justify-center items-end mx-auto gap-x-16 ">
        <div className="space-y-2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center lg:text-right">Daniela Sousa</h1>
          <div className="pt-8 sm:pt-16 lg:pt-24">
            <h2 className="mb-4 sm:mb-8 text-lg sm:text-xl lg:text-4xl text-center lg:text-left">Psicóloga Clínica</h2>
            <p className="text-xs sm:text-sm lg:text-base text-center lg:text-left">Cédula Profissional nº26868 da Ordem dos Psicólogos Portugueses</p>
          </div>
        </div>
        <Image
          src="/Snapinst.app_368680928_270420565750050_196321165440213060_n_1080.jpg"
          alt="Sobre"
          width={500}
          height={1080}
          className="rounded-lg shadow-md w-full max-w-[450px] h-auto object-cover"
        />
      </div>

      {/* Section at the bottom */}
      <section className="mt-10 text-justify text-xs sm:text-sm lg:text-base border-t border-gray-300/50 gap-x-8 grid grid-cols-1 sm:grid-cols-2 pt-8">
        <p className="mb-4">Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais.</p>
        <p className="mb-4">Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. Considero importante ajustar as formas de intervenção às individualidades de cada um, por sermos todos únicos e não gostar de catalogar. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança.</p>
        <p className="mb-4">Frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais, tendo especial interesse pela Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática.</p>
      </section>
    </main>
  );
}


