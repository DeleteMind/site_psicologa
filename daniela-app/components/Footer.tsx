"use client";
import { FaInstagram } from "react-icons/fa";
import { PiLinktreeLogo } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="flex flex-col items-center justify-center w-full bg-gray-500 text-white p-4">
                <div className="flex flex-row justify-center gap-4 items-center">
                <h1 className="text-xl">Redes Sociais |</h1>
                    <a href="https://www.instagram.com/danielasousapsi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ height: 20, width: 20 }} />
                    </a>
                    <a href="https://www.linktr.ee/danielasousapsicologia" target="_blank" rel="noopener noreferrer">
                        <PiLinktreeLogo style={{ height: 20, width: 20 }} />
                    </a>
                    <a href="https://www.linkedin.com/in/daniela-santos-sousa" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{ height: 20, width: 20 }} />
                    </a>
                </div>
              

            </div>
            <p className="text-xs flex justify-center w-full bg-white p-2">©{year} by Filipe Cordeiro.</p>
        </footer>
    );
}
