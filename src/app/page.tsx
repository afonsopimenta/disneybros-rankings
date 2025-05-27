import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "~/lib/auth";

const MovieCard = ({ src }: { src: string }) => {
  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-xl transition-all duration-200 hover:scale-105">
      <Image src={src} alt="" width={1280} height={1920} />
    </div>
  );
};

const HomePage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="grid justify-center justify-items-center gap-4 px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">🎬 Batalha de filmes</h1>
      <p className="text-lg">
        Qual destes filmes preferes? Clica no teu favorito!
      </p>
      <div className="flex items-center gap-8 py-8">
        <MovieCard src="/brave.webp" />
        <div>
          <span className="text-4xl font-bold text-gray-800">VS</span>
        </div>
        <MovieCard src="/soul.webp" />
      </div>
    </main>
  );
};

export default HomePage;
