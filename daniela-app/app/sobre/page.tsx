import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="container mx-auto p-6">
      {/* Sobre mim e imagem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 ">
          <h1 className="text-2xl font-bold">Sobre mim</h1>
          <div className="space-y-2 text-justify">
            <p>Sou a Daniela Sousa, Psicóloga Clínica, mestre em Psicoterapia Cognitiva - Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais. </p>
            <p>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. Considero importante ajustar as formas de intervenção às individualidades de cada um, por sermos todos únicos e não gostar de catalogar. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança.</p>
            <p>Dou consultas em Lisboa e Leiria, na tentativa de manter o equilíbrio entre o crescimento e a estabilidade, entre a cidade e o campo.</p>
            <p>Atualmente frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais e a repetição dos mesmos,  tendo especial carinho e interesse por Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática.</p>
            <p>Cédula Profissional nº26868</p>
          </div>
        </div>
        <Image
          src="/1000052268.jpg"
          alt="Sobre"
          width={500}
          height={1080}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </section>

      {/* Experiencia e imagem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <Image
          src="/1000052270.jpg"
          alt="Curriculo"
          width={500}
          height={1080}
          className="rounded-lg shadow-md w-full h-auto"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Experiência profissional</h2>
          <ul className="">
            <li>Prática Privada na Psinove - Inovamos a Psicologia;</li>
            <li>Prática Privada em consultório em Leiria;</li>
            <li>Experiência na Avaliação Psicológica no âmbito de recrutamento e seleção;</li>
            <li>Experiência na Orientação Vocacional e de Carreira.</li>
          </ul>
        </div>
      </section>

      {/* Formação */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="space-y-2 text-justify">
          <h3 className="text-2xl font-bold">Formação</h3>
          <ul className="list-">
            <li>- Mestrado Integrado em Psicologia Clínica, núcleo de Psicoterapia Cognitiva-Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa;</li>
            <li>- Formação em &quot;Intervenção Psicológica nas Dependências Com e Sem Substâncias&quot;;</li>
            <li>- Formação em &quot;Intervenção Psicológica no Luto&quot;;</li>
            <li>- Treino introdutório em Somatic Experiencing;</li>
            <li>- Participação em workshops, colóquios e conferências: &quot;Workshop Chronic/Recurrent Suicidality: Implementing Interpersonal Reconstructive Therapy for Conceptualization, Safety Planning, & Reconstruction&quot;,&quot;Workshop Interpersonal Reconstructive Therapy for Facilitating Response to Cognitive-Behavioral Therapy with Challenging Cases.&quot;, &quot;Workshop: Therapist Self-care, the Therapeutic Relationships that Work and Therapist Responsiveness&quot;; &quot;Workshop: Case Conceptualization for Personality Disorders: How to Foster Therapist Responsiveness&quot;, &quot;Society for the Exploration of Psychotherapy Integration 35th Annual Conference&quot;;  e &quot;Seminário Fome Emocional e Compulsiva&quot;;</li>
            <li>- Membro da Society for the Exploration of Psychotherapy Integration;</li>
            <li>- Formadora Certificada pelo Instituto de Emprego e Formação Profissional (IEFP);</li>
            <li>- Frequência na Pós-graduação em Psicoterapia pela Associação Portuguesa de Terapias Comportamental, Cognitiva e Integrativa (APTCCI).</li>
          </ul>
        </div>
        <Image
          src="/1000052260.jpg"
          alt="Formação"
          width={500}
          height={1080}
          className="rounded-lg shadow-md w-full h-auto" />

      </section>
    </main>
  );
}
