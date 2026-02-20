export default function About() {
  return (
    <header className="w-full min-h-screen">
      <div className="mx-auto max-w-xl px-6 pt-8">
        <h1 className="text-white text-2xl font-bold">About me</h1>

        <div className="space-y-6 text-m text-gray-300 leading-relaxed">
          <p>
            I'm a{" "}
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
            For me, software engineering isn't just about making things
            work—it's about writing{" "}
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
