"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
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
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error sending message.");
    } finally {
      setIsSubmitting(false); // Re-enable the button regardless of success or error
    }
  };

  return (
    <main className="w-full p-4 sm:p-8">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto flex flex-col justify-start items-start gap-8 py-8 px-4 sm:px-8 my-8 bg-white rounded-md shadow-md"
      >
        <h1 className="text-4xl sm:text-6xl text-orange-900">Fala comigo:</h1>
        <div className="flex flex-col w-auto">
          <label className="text-left">Primeiro Nome:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-col w-auto">
          <label className="text-left">Apelido:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex flex-col w-auto">
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
          className="w-full border-2 border-gray-950 px-4 py-2 rounded-md hover:bg-gray-200"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "A enviar..." : "Enviar"}
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </main>
  );
}
