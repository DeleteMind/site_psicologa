import TiposConsultas from '../../components/PlanosConsultas';

export default function ConsultasPage() {
    return (
    <main>
      <TiposConsultas />
      <div className="border mb-20"></div> {/* Line */}
      <section className="max-w-4xl mx-auto mb-20 flex  items-center justify-center gap-12">
        <p className="text-center shadow-sm sm:text-lg bg-white/90 rounded-b-[100px] p-6">Faço acompanhamento psicológico sustentado numa relação terapêutica de empatia, aceitação e genuinidade.  As consultas online ou presenciais têm uma duração de 50 minutos, numa periodicidade regular acordada com o cliente. O modelo de intervenção em que <br /> a minha prática se sustenta é o Cognitivo-Comportamental e Integrativo.</p>
      </section>
    </main>
  );
  }