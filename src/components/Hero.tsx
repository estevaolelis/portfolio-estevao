import { BlurFade } from "@/components/ui/blur-fade"

export function Hero() {
  return (
    <section id="header" className="bg-[url('https://images.unsplash.com/photo-1665856723112-b5b1adc93456')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
      <BlurFade delay={0.25} inView>
        <h2 className="flex flex-col text-3xl items-center justify-center font-bold text-white text-center tracking-tighter sm:text-5xl xl:text-6xl/none p-2.5">
          Estêvão Lélis
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-white block max-w-3xl text-pretty text-center tracking-tighter sm:text-3xl xl:text-4xl/none p-2.5">
          Clean code, seamless experiences, and digital products built to stand out.
        </span>
      </BlurFade>
    </section>
  )
}
