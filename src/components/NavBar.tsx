import { CenterUnderline } from "@/components/ui/underline-animation";

export default function NavBar() {
  return (
    <header>
      <div className="mx-auto max-w-xl px-6 pt-8">
        <nav className="flex h-20 items-center justify-between mt-12">
          <a className="text-3xl font-bold text-white cursor-pointer">Estêvão Lélis</a>
          <div className="flex items-center gap-5">
            <CenterUnderline
              label="Projects"  
              className="text-xl text-gray-200 hover:text-white"
            />
            <CenterUnderline
              label="Experience"
              className="text-xl text-gray-200 hover:text-white"
            />
            <CenterUnderline
              label="Hobbies"
              className="text-xl text-gray-200 hover:text-white"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
