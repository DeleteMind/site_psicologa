"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  Name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    Name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // New state

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true); // Disable further submissions

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Messagem enviada com sucesso!");
        setFormData({
          Name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Erro, falha no envio da mensagem.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Erro, falha no envio da mensagem.");
    } finally {
      setIsSubmitting(false); // Re-enable the button regardless of success or error
    }
  };

  return (
    <main className="w-full p-6 sm:p-8 flex flex-col justify-center items-center max-w-lg mx-auto gap-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col justify-start md:items-start p-10 sm:p-12 my-8 bg-white rounded-md shadow-md"
      >
        <h1 className="text-3xl sm:text-6xl mb-8">Fala comigo:</h1>
        <div className="flex flex-col w-full">
          <label className="text-left">Nome:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-left">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-col w-auto">
          <label className="text-left">Telefone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="^\+?[1-9]\d{1,14}$" // Optional validation pattern
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-left">Messagem:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full h-32 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <button
          className="w-full border-2  px-4 py-2 rounded-md hover:bg-orange-50 hover:text-orange-900"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "A enviar..." : "Enviar"}
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>


      <section className="flex flex-col gap-4 py-8 px-2 sm:px-8 mb-8 sm:mb-0 bg-white rounded-e-full shadow-md">
        <h2 className="text-2xl sm:text-3xl text-center mb-2">Contactos</h2>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img src="Icons/email.png" alt="Email Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          <p className="text-center sm:text-left text-xs sm:text-base">danielasousa.psicoterapia@gmail.com</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img src="Icons/iphone.png" alt="Phone Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          <p className="text-center sm:text-left text-xs sm:text-base">913 444 303</p>
        </div>
      </section>
    </main>
  );
}
