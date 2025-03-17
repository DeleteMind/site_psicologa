import Link from "next/link";

export default function BlogAndArticles() {
  return (
    <main className="container mx-auto px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blogs Section */}
        <section className="md:col-span-2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Blog</h2>
          <Link href="https://24.sapo.pt/opiniao/artigos/seremos-realmente-todos-um-bocadinho-psicologos-os-psis-e-os-pseudopsis" target="_blank">

            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow">
              <img src="https://thumbs.web.sapo.io/?W=775&H=0&png=1&delay_optim=1&webp=1&epic=NzM2QhNt4au+L2O5NSIRhhlx+5IRiCS9ZIRtQYFQzgHqYpR7QyqU/v7puvJbDfiXpw4pNyG7MjEKCR9ZP9K0azEGX9ntuvE+Hp/OFsyOTONt+DI=" alt="Blog 1" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-lg font-medium">(Psinove) Sapo24: Seremos tos realmente um bocadinho psicólogos? Os psis e os pseudopsis</p>
            </div>
          </Link>
          <Link href="https://24.sapo.pt/opiniao/artigos/bem-te-quero-mal-me-quero-quando-o-nosso-bem-estar-parece-depender-dos-outros" target="_blank">
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow">
              <img src="/blog2.jpg" alt="Blog 2" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-lg font-medium">(Psinove) Sapo24: Bem te quero, mal te quero? Quando o nosso bem estar parece depender dos outros</p>
            </div>
          </Link>
          <Link href="https://lifestyle.sapo.pt/vida-e-carreira/comportamento/artigos/conecte-se-com-o-que-importa-neste-natal" target="_blank">
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow">
              <img src="https://thumbs.web.sapo.io/?W=775&H=0&delay_optim=1&webp=1&epic=YTQ5GcXg+q/aoigpLlsWpxA04oDUsT26e8YTKu7nRJO7c6yRFTd/EdTJijo/cTsLuurhB+iqSXIWG5anqAqva9Oi7sq8n4M09pFW6awGiPnUDRY=" alt="Blog 3" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-lg font-medium">(Psinove) Sapo Lifestyle: Conecte-se com o que importa neste neste Natal</p>
            </div>
          </Link>
          <Link href="https://lifestyle.sapo.pt/vida-e-carreira/comportamento/artigos/estar-no-aqui-e-no-agora-como-passar-da-critica-a-aceitacao-de-nos-proprios" target="_blank">
            <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow">
              <img src="https://thumbs.web.sapo.io/?W=775&H=0&delay_optim=1&webp=1&epic=ZTFjv5K7FXHXpClOfg54xGuunwcUUg3pMgsV2Z/HxTRblXK0yitw4zb0Uy5gHmeGiJ5G8jJpZ+bPB6T8qcns1SxevIKWLcNW7kanoID4u5MUawY=" alt="Blog 4" className="w-24 h-24 object-cover rounded-md" />
              <p className="text-lg font-medium">(Psinove) Sapo Lifestyle: Estar no aqui e no agora: como passar da "crítica" à "aceitação" de nós próprios?</p>
            </div>
          </Link>
        </section>

        {/* Articles Section */}
        <section className="flex flex-col bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Featured Article</h2>
          <div className="flex flex-col">
            <p className="text-gray-700">
              This is an example of an article. You can add more text here to give a short preview.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
