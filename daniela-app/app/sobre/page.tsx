import Image from 'next/image';

export default function SobrePage() {
  return (
    <main className="text-black text-lg flex justify-center flex-col lg:flex-row p-4 sm:p-12 lg:mx-4 xl:mx-8">
        {/* Title */}
        <div className="flex flex-col text-right lg:mx-10 pt-6 gap-4 sm:gap-16 lg:w-1/2 mt-20">
          <h1 className=" text-6xl lg:text-8xl ">Daniela Sousa</h1>
          <div className=" text-justify text-sm sm:text-base">
            <p>o	Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais. </p>
            <p><br></br>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. Considero importante ajustar as formas de intervenção às individualidades de cada um, por sermos todos únicos e não gostar de catalogar. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança. </p>
            <p><br></br>Frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais,  tendo especial interesse pela Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática.</p>
            
          </div>
        </div>
        {/* Image and about */}
        <section className="mt-20 flex flex-col items-center lg:items-start gap-4 w-full lg:w-1/2">
          <Image
            src="/Snapinst.app_368680928_270420565750050_196321165440213060_n_1080.jpg"
            alt="Sobre"
            width={500}
            height={1080}
            className="rounded-lg shadow-md w-full max-w-[450px] h-auto object-cover"
          />
          <div className="mt-2 space-y-2">
            <h2 className="border-b w-52 text-xl sm:text-2xl">Psicóloga Clínica</h2>
            <p className="text-sm sm:text-base">Cédula Profissional nº26868 da Ordem dos Psicólogos Portugueses</p>
          </div>
        </section>
    </main>
  );
}


