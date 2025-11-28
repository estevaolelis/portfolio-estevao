"use client";

import Link from "next/link";
import {
  CenterUnderline,
  ComesInGoesOutUnderline,
} from "@/components/ui/underline-animation";

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black/40 border-t border-zinc-800 py-24">
      <div className="font-tech flex flex-col items-center text-white space-y-10">
        <h3 className="text-4xl font-bold tracking-tight text-zinc-400">
          Contact
        </h3>

        <div className="flex gap-10 text-xl md:text-2xl">
          <Link href="https://linkedin.com/in/estevaolelis" target="_blank">
            <CenterUnderline label="LinkedIn" />
          </Link>
          
          <Link href="https://instagram.com/estevaolelis" target="_blank">
            <CenterUnderline label="Instagram" />
          </Link>
        </div>

        <div className="text-2xl md:text-3xl pt-4">
          <Link href="mailto:estevaolelis@gmail.com">
            <ComesInGoesOutUnderline 
              label="estevaolelis@gmail.com" 
              direction="right" 
            />
          </Link>
        </div>

      </div>

      <p className="font-sans text-xs text-zinc-600 mt-16">
        © 2025 Estêvão Lélis.
      </p>
    </div>
  );
}

export { Footer };