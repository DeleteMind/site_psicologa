import Image from 'next/image';

export default function sobrePage() {
  return (
    <main className="container">
      {/* Sobre mim and image */}
      <div className='flex fle-row'>
        <div>
          <h1>Sobre mim</h1>
          <p>o	Sou a Daniela Sousa, Psicóloga Clínica, pela Faculdade de Psicologia da Universidade de Lisboa. Tirei o mestrado de Psicoterapia Cognitiva - Comportamental e Integrativa, por sermos todos únicos, não gostar de catalogar e considerar relevante ajustar-me às necessidades de cada um. Interesso-me especialmente pelas relações humanas e pela forma como o nosso sistema nervoso se modifica à medida que vamos criando novas relações interpessoais. </p>
          <p>Na sala da terapia, importa-me acolher cada pessoa no seu todo, com aceitação e curiosidade para conhecer as suas vulnerabilidades, defesas e recursos. É na relação terapêutica que se cria espaço para a consciência dos processos internos e, se potencia a mudança. </p>
          <p>Atualmente frequento a formação avançada em psicoterapia na Associação Portuguesa de Terapias Cognitiva, Comportamental e Integrativa (APTCCI). Paralelamente, tenho vindo a fazer formações que me permitem conhecer melhor a relação entre o corpo e a mente, e entender mais sobre processos interpessoais e a repetição dos mesmos,  tendo especial carinho e interesse por Terapia Focada na Emoções, Terapia Interpessoal Reconstrutiva, e Terapia Somática. <br /> Cédula Profissional nº26868
 </p>
        </div>
        <Image src="/DSC_0011.JPG" alt="Sobre" width={500} height={1080} />
      </div>
      {/* Curriculo and image */}
      <div className='flex fle-row'>
        <Image src="/DSC_0011.JPG" alt="Curriculo" width={500} height={1080} />
        <div>
        <h2>Curriculo</h2>
          <h3>Experiência profissional</h3>
          <li>Prática Privada na Psinove - Inovamos a Psicologia</li>
          <li>Prática Privada em consultório em Leiria</li>
          <li>Experiência na Avaliação Psicológica no âmbito de recrutamento e selecção</li>
          <li>Experiência na Orientação Vocacional e de Carreira</li>
        </div>
      </div>

      {/* Formação and image */}
      <h2>Formação</h2>
      <li>Mestrado Integrado em Psicologia Clínica, núcleo de Psicoterapia Cognitiva-Comportamental e Integrativa, pela Faculdade de Psicologia da Universidade de Lisboa</li>
      <li>Formação em "Intervenção Psicológica nas Dependências Com e Sem Substâncias"</li>
      <li>Formação em "Intervenção Psicológica no Luto"</li>
      <li>Treino introdutório em Somatic Experiencing </li>
      <li>Participação em workshops, colóquios e conferências: &quot;Workshop Chronic/Recurrent Suicidality: Implementing Interpersonal Reconstructive Therapy for Conceptualization, Safety Planning, & Reconstruction&quot;,&quot;Workshop Interpersonal Reconstructive Therapy for Facilitating Response to Cognitive-Behavioral Therapy with Challenging Cases.&quot;, &quot;Workshop: Therapist Self-care, the Therapeutic Relationships that Work and Therapist Responsiveness&quot;; &quot;Workshop: Case Conceptualization for Personality Disorders: How to Foster Therapist Responsiveness&quot;, &quot;Society for the Exploration of Psychotherapy Integration 35th Annual Conference&quot;;  e &quot;Seminário Fome Emocional e Compulsiva&quot;</li>
      <li>Membro da Society for the Exploration of Psychotherapy Integration</li>
      <li>Formadora Certificada pelo Instituto de Emprego e Formação Profissional (IEFP)</li>
      <li>Frequência na Pós-graduação em Psicoterapia pela Associação Portuguesa de Terapias Comportamental, Cognitiva e Integrativa (APTCCI)</li>
      <div>

      </div>
    </main>
  );
}