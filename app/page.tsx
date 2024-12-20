import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border border-gray-300 px-4 py-2 text-black w-64 sm:w-80"
          />
          <button
            type="submit"
            className="rounded-lg bg-black text-white px-6 py-2 hover:bg-gray-800"
          >
            Sign up
          </button>
        </form>
      </header>

      <main className="flex flex-col items-center w-full">
      <Image
    src="/imagen/imagen.jpg"
    alt="Example design"
    width={800}
    height={400}
    className="w-full h-auto rounded-lg"
        />
      </main>

      <footer className="flex gap-4 justify-center flex-wrap">
        {["Portafolios", "Proyectos", "Colaboración", "Comunidad"].map((label) => (
          <button
            key={label}
            className="rounded-lg bg-black text-white px-4 py-2 hover:bg-gray-800"
          >
            {label}
          </button>
        ))}
      </footer>
    </div>
  );
}
