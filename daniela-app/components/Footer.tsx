"use client";
import { FaInstagram } from "react-icons/fa";
import { PiLinktreeLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-center w-full bg-white gap-6 p-4">
            <div className="flex flex-col gap-2 items-center justify-center text-gray-500">
                <h1 className="text-2xl font-bold">Contactos</h1>
                <p>Telefone: 913 444 303</p>
                <p>Email: daniela.s.sousa2@gmail.com</p>
            </div>
            <div className="flex flex-row justify-center gap-4">
                <h2>Redes Socias</h2>
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
        </footer>
    );

}
