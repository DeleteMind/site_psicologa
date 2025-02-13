import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="container mx-auto p-6">
      {/* Sobre mim e imagem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-2xl font-bold">Sobre mim</h1>
          <p>Sou a Daniela Sousa, Psicóloga Clínica, pela Faculdade de Psicologia da Universidade de Lisboa...</p>
          <p>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança. </p>
          <p>Atualmente frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais e a repetição dos mesmos,  tendo especial carinho e interesse por Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática. <br /> Cédula Profissional nº26868
          </p>
        </div>
        <Image
          src="/DSC_0011.JPG"
          alt="Sobre"
          width={500}
          height={1080}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </section>

      {/* Currículo e imagem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <Image
          src="/DSC_0011.JPG"
          alt="Curriculo"
          width={500}
          height={1080}
          className="rounded-lg shadow-md w-full h-auto"
        />
        <div>
          <h2 className="text-2xl font-bold">Currículo</h2>
          <h3 className="text-xl font-semibold mt-4">Experiência profissional</h3>
          <ul className="list-disc pl-6">
            <li>Prática Privada na Psinove - Inovamos a Psicologia</li>
            <li>Prática Privada em consultório em Leiria</li>
            <li>Experiência na Avaliação Psicológica no âmbito de recrutamento e seleção</li>
            <li>Experiência na Orientação Vocacional e de Carreira</li>
          </ul>
        </div>
      </section>

      {/* Formação */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">Formação</h2>
        <ul className="list-disc pl-6">
          <li>Mestrado Integrado em Psicologia Clínica, núcleo de Psicoterapia Cognitiva-Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa</li>
          <li>Formação em &quot;Intervenção Psicológica nas Dependências Com e Sem Substâncias&quot;</li>
          <li>Formação em &quot;Intervenção Psicológica no Luto&quot;</li>
          <li>Treino introdutório em Somatic Experiencing </li>
          <li>Participação em workshops, colóquios e conferências: &quot;Workshop Chronic/Recurrent Suicidality: Implementing Interpersonal Reconstructive Therapy for Conceptualization, Safety Planning, & Reconstruction&quot;,&quot;Workshop Interpersonal Reconstructive Therapy for Facilitating Response to Cognitive-Behavioral Therapy with Challenging Cases.&quot;, &quot;Workshop: Therapist Self-care, the Therapeutic Relationships that Work and Therapist Responsiveness&quot;; &quot;Workshop: Case Conceptualization for Personality Disorders: How to Foster Therapist Responsiveness&quot;, &quot;Society for the Exploration of Psychotherapy Integration 35th Annual Conference&quot;;  e &quot;Seminário Fome Emocional e Compulsiva&quot;</li>
          <li>Membro da Society for the Exploration of Psychotherapy Integration</li>
          <li>Formadora Certificada pelo Instituto de Emprego e Formação Profissional (IEFP)</li>
          <li>Frequência na Pós-graduação em Psicoterapia pela Associação Portuguesa de Terapias Comportamental, Cognitiva e Integrativa (APTCCI)</li>
        </ul>
      </section>
    </main>
  );
}
