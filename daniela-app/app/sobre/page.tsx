import Image from 'next/image';

export default function SobrePage() {
  return (
    <main className="text-black text-lg flex justify-center p-4 sm:p-12 lg:mx-4 xl:mx-8">
      <section className="flex flex-col lg:flex-row">
        {/* Title */}
        
        <div className="flex items-center lg:items-end mx-10 p-6 flex-col gap-4 sm:gap-16 lg:w-1/2 mt-20">
          <h1 className="text-right text-6xl lg:text-8xl ">Daniela Santos Sousa</h1>
          <div className=" text-justify text-sm sm:text-base">
            <p>Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais.</p>
            <p>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. Considero importante ajustar as formas de intervenção às individualidades de cada um, por sermos todos únicos e não gostar de catalogar. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança.</p>
            <p>Dou consultas em Lisboa e Leiria, na tentativa de manter o equilíbrio entre o crescimento e a estabilidade, entre a cidade e o campo.</p>
            <p>Atualmente frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais e a repetição dos mesmos, tendo especial carinho e interesse por Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática.</p>
          </div>
        </div>
        {/* Image and about */}
        <section className="mt-20 flex flex-col items-center lg:items-start gap-4 sm:gap-8 w-full lg:w-1/2">
          <Image
            src="/Snapinst.app_368680928_270420565750050_196321165440213060_n_1080.jpg"
            alt="Sobre"
            width={500}
            height={1080}
            className="rounded-lg shadow-md w-full max-w-[600px] h-auto object-cover"
          />
          <div className="mt-2 space-y-2">
            <h2 className="border-b  w-52 text-xl sm:text-2xl">Psicóloga Clínica</h2>
            <p className="text-sm sm:text-base">Cédula Profissional nº26868 da Ordem dos Psicólogos Portugueses</p>
          </div>
        </section>
      </section>
    </main>
  );
}


