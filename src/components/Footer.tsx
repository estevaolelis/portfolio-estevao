import { CenterUnderline } from "./ui/underline-animation";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-xl px-1">
        <div className="flex h-20 items-center justify-between gap-5">
          <div className="text-white mb-2 font-bold">@ 2026 Estêvão Lélis</div>
          <CenterUnderline
            label="Github"
            className="text-xl text-gray-200 hover:text-white mb-2"
          />
          <CenterUnderline
            label="LinkedIn"
            className="text-xl text-gray-200 hover:text-white mb-2"
          />
          <CenterUnderline
            label="Instagram"
            className="text-xl text-gray-200 hover:text-white mb-2"
          />
        </div>
      </div>
    </footer>
  );
}
