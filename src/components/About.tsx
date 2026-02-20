import Image from 'next/image'

export default function About() {
  return (
    <header className="w-full min-h-screen">
      <div className="mx-auto max-w-3xl px-1 py-16">
        <h1 className="text-white text-2xl font-bold">About me</h1>

        <div className="text-center space-y-6 mb-6 animate-fade-in">
          <div className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto border-4 border-zinc-800 shadow-2xl">
             <Image
                src="/eu.jpg"
                alt="Estevão Lelis"
                width={800}
                height={500}
              />
          </div>
        </div>

        <div className="space-y-6 text-m text-gray-300 leading-relaxed">
          <p>
            I&apos;m a{" "}
            <strong className="text-white font-semibold">
              Back-end Developer
            </strong>{" "}
            who enjoys solving complex logic puzzles. While I can handle React,
            my real strength lies in the server-side, building scalable
            architectures with{" "}
            <strong className="text-white font-semibold">C#</strong> and{" "}
            <strong className="text-white font-semibold">.NET</strong>.
          </p>

          <p>
            For me, software engineering isn&apos;t just about making things
            work—it&apos;s about writing{" "}
            <strong className="text-white font-semibold">
              clean, testable code
            </strong>{" "}
            that my future self (and my team) will thank me for.
          </p>

          <p>
            I constantly seek to develop myself as a professional, combining
            modern design with efficiency. I believe that{" "}
            <strong className="text-white font-semibold">
              simplicity is the key
            </strong>{" "}
            to a great user experience.
          </p>
        </div>
        
      </div>
    </header>
  );
}
