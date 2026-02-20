import { CenterUnderline } from "./ui/underline-animation";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-xl px-1">
        <div className="flex h-20 items-center justify-between gap-5">
          <div className="text-white mb-2 font-bold">@ 2026 Estêvão Lélis</div>
          <Link href="https://github.com/estevaolelis">
            <CenterUnderline
              label="Github"
              className="text-xl text-gray-200 hover:text-white mb-2"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/estevaolelis">
            <CenterUnderline
              label="LinkedIn"
              className="text-xl text-gray-200 hover:text-white mb-2"
            />
          </Link>

          <Link href="https://www.instagram.com/estevaolelis?igsh=MXNlcG5ma2xuYzl0aw%3D%3D&utm_source=qr">
            <CenterUnderline
              label="Instagram"
              className="text-xl text-gray-200 hover:text-white mb-2"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
