"use client";

import Link from "next/link";

export default function Recursos() {
  return (
    <main className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-10 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blogs Section */}
        <section className="md:col-span-2 flex flex-col gap-6 ">
          <h2 className="text-2xl">BLOG</h2>
          <Link href="https://24.sapo.pt/opiniao/artigos/seremos-realmente-todos-um-bocadinho-psicologos-os-psis-e-os-pseudopsis" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src="https://thumbs.web.sapo.io/?W=775&H=0&png=1&delay_optim=1&webp=1&epic=NzM2QhNt4au+L2O5NSIRhhlx+5IRiCS9ZIRtQYFQzgHqYpR7QyqU/v7puvJbDfiXpw4pNyG7MjEKCR9ZP9K0azEGX9ntuvE+Hp/OFsyOTONt+DI=" alt="Blog 1" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-xs sm:text-lg font-medium">(Psinove) Sapo24: Seremos todos realmente um bocadinho psicólogos? Os psis e os pseudopsis</p>
            </div>
          </Link>
          <Link href="https://24.sapo.pt/opiniao/artigos/bem-te-quero-mal-me-quero-quando-o-nosso-bem-estar-parece-depender-dos-outros" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src="https://thumbs.web.sapo.io/?W=640&H=320&delay_optim=1&tv=1&crop=center&webp=1&epic=NTQ5ze7vM94yw9Sfr3sb8koknThthSJzwhEZ6SxNB2ARAJaMk7wVKgbT8gOsmJDP364atNj1ypmbna26mJctzh0IDicLE4rkc/AvL/s45hke5FU=" alt="Blog 2" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-xs sm:text-lg font-medium">(Psinove) Sapo24: Bem te quero, mal te quero? Quando o nosso bem estar parece depender dos outros</p>
            </div>
          </Link>
          <Link href="https://lifestyle.sapo.pt/vida-e-carreira/comportamento/artigos/conecte-se-com-o-que-importa-neste-natal" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src="https://thumbs.web.sapo.io/?W=775&H=0&delay_optim=1&webp=1&epic=YTQ5GcXg+q/aoigpLlsWpxA04oDUsT26e8YTKu7nRJO7c6yRFTd/EdTJijo/cTsLuurhB+iqSXIWG5anqAqva9Oi7sq8n4M09pFW6awGiPnUDRY=" alt="Blog 3" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-xs sm:text-lg font-medium">(Psinove) Sapo Lifestyle: Conecte-se com o que importa neste neste Natal</p>
            </div>
          </Link>
          <Link href="https://lifestyle.sapo.pt/vida-e-carreira/comportamento/artigos/estar-no-aqui-e-no-agora-como-passar-da-critica-a-aceitacao-de-nos-proprios" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
              <img src="https://thumbs.web.sapo.io/?W=775&H=0&delay_optim=1&webp=1&epic=ZTFjv5K7FXHXpClOfg54xGuunwcUUg3pMgsV2Z/HxTRblXK0yitw4zb0Uy5gHmeGiJ5G8jJpZ+bPB6T8qcns1SxevIKWLcNW7kanoID4u5MUawY=" alt="Blog 4" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-xs sm:text-lg font-medium">(Psinove) Sapo Lifestyle: Estar no aqui e no agora: como passar da &quot;crítica&quot; à &quot;aceitação&quot; de nós próprios?</p>
            </div>
          </Link>
        </section>

        {/* Articles Section */}
        <section className="flex flex-col bg-white p-8 rounded-lg shadow mt-14">
          <h2 className="text-2xl font-bold mb-2">Artigos Científicos</h2>
          <div className="border w-1/2 mb-6"></div>
          <div className="flex flex-col">
            <p className="text-gray-700">
              Sousa, D. S., Silva, A. N. D., & Neto, D. D. (2024). Looking after myself while caring for others: A pilot study on self-care in psychologists working in palliative care.
            </p>
            <a href="https://www.redalyc.org/journal/180/18076225020/" target="_blank" rel="artigo">
            <button className="text-sm border-1 flex mt-4 p-1 ring-1 ring-orange-200 ring-inset text-[#555e5c]/80 hover:ring-orange-300 focus-visible:outline-orange-600 ">Ver mais</button>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
