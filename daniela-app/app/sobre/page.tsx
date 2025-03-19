'use client';

import Image from 'next/image';

export default function SobrePage() {
  return (
    <main className=" text-lg min-h-screen p-8 sm:p-16 lg:mx-4 xl:mx-8">
      {/* Title and Image */}
      <div className="p-4 flex flex-col-reverse md:flex-row w-full lg:w-3/4 justify-start items-center lg:items-end mx-auto gap-x-16">
        <div className="flex flex-col items-start">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center lg:text-right mt-8 lg:m-0">Daniela Sousa</h1>
          <div className="pt-8 sm:pt-16 lg:pt-24">
            <h2 className="mb-4 sm:mb-8 text-lg sm:text-xl lg:text-4xl">Psicóloga Clínica</h2>
            <p className="text-xs sm:text-sm lg:text-base">Cédula Profissional nº26868 da Ordem dos Psicólogos Portugueses</p>
          </div>
        </div>
        <Image
          src="/Snapinst.app_368680928_270420565750050_196321165440213060_n_1080.jpg"
          alt="Sobre"
          width={500}
          height={1080}
          className="rounded-full shadow-md w-full max-w-[450px] h-auto object-cover bg-white p-1"
        />
      </div>

      {/* Section at the bottom */}
      <section className="mt-10 pt-8 text-justify text-xs sm:text-sm lg:text-base border-t-2 gap-x-8">
        <h3 className="mb-2 text-2xl p-4">SÍNTESE CURRICULAR</h3>
        <div className="flex flex-col lg:w-1/2 bg-white/90 rounded-2xl shadow-md p-4">
          <p className='mb-4'>Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais.</p>
          <p className='mb-4'>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. Considero importante ajustar as formas de intervenção às individualidades de cada um, por sermos todos únicos e não gostar de catalogar. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança.</p>
          <p className='mb-4'>Frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais, tendo especial interesse pela Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática.</p>
            <a href="/Curriculum_DanielaSousa_PsicólogaClinica.pdf" target="_blank" rel="pdf_File" className='flex flex-row items-center justify-end gap-4 mt-4'>
            <img src="/Icons/pdf.png" alt='pdfIcons' className='w-6 h-6 sm:w-8 sm:h-8'></img>Curriculum
            </a>
        </div>
      </section>
    </main>
  );
}


