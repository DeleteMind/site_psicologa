import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="relative bg-white w-full flex justify-center">
        <Image
          className="mb-10"
          src="/pexels-alex-green-5699456 (1).jpg"
          alt="Description of the image"
          width={1200} // Set the desired width
          height={355} // Set the desired height
          style={{ height: "355px", width: "1743px" }}
        />
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-50 text-4xl  lg:text-6xl 2xl:mt-4 font-bold text-center">
          <h1>Consultas de psicólogia</h1>
        </div>
        <button className="absolute bottom-14 center-4  text-orange-50 border-2 border-orange-50 px-4 py-2 rounded-sm  hover:bg-orange-50 hover:text-orange-900">
          <p>Marca já</p>
        </button>
      </div>
      {/* Sobre mim and photo */}
      <div className="flex flex-col lg:flex-row items-center justify-center m-8">
        <div className="relative bg-white min-h-96 p-8 flex flex-col gap-4 w-full lg:max-w-lg mt-8 transform lg:translate-x-6">
          <h1 className="text-orange-900 font-bold text-4xl">Sobre mim</h1>
          <p>Sou a Daniela Sousa, Psicóloga Clínica, pela Faculdade de Psicologia da Universidade de Lisboa. Mestra na área de Psicoterapia Cognitiva - Comportamental e Integrativa.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat vel suscipit reprehenderit dolor alias! Exercitationem, minima ullam est molestias dignissimos incidunt. Ratione, amet! Error eum tempore consectetur dolor voluptatibus?</p>
          <button className="md:absolute mt-auto bottom-6  text-zinc-500 border-2 border-orange-50 px-4 py-2 rounded-sm  hover:bg-orange-50 hover:text-orange-900">Saber mais</button>
        </div>
        <Image
          className=""
          src="/pexels-alex-green-5699456 (1).jpg"
          alt="Description of the image"
          width={500}
          height={300}
          style={{ height: "512px", width: "500px" }}
        />
      </div>
    </main>
  );
}