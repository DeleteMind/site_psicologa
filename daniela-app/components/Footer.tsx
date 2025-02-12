"use client";
import { FaInstagram } from "react-icons/fa";
import { PiLinktreeLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="flex flex-col md:flex-row items-center justify-center w-full bg-gray-500 text-white gap-6 p-4">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-2xl font-bold">Contactos</h1>
                    <p>Telefone: 913 444 303</p>
                    <p>Email: danielasousa.psicoterapia@gmail.com</p>
                </div>
                <div className="flex flex-row justify-center gap-4 items-center">
                    <h2 className="text-xl md:text-2xl">Redes Socias</h2>
                    <a href="https://www.instagram.com/danielasousapsi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ height: 30, width: 30 }} />
                    </a>
                    <a href="https://www.linktr.ee/danielasousapsicologia">
                        <PiLinktreeLogo style={{ height: 30, width: 30 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/daniela-santos-sousa">
                        <FaLinkedin style={{ height: 30, width: 30 }} />
                    </a>
                </div>
            </div>
            <p className="text-xs flex justify-center w-full bg-white p-2">©2025-{year} by Filipe Cordeiro.</p>
        </footer>
    );
}
