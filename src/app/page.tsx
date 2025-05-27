import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { db } from "~/db";
import { moviesTable } from "~/db/schema";
import { auth } from "~/lib/auth";
import { MovieCard } from "./movie-card";

const getMovies = async () => {
  "use cache";

  return await db.select({ image: moviesTable.image }).from(moviesTable);
};

const getRandomMoviePair = (
  movies: { image: string }[],
): [{ image: string }, { image: string }] => {
  const getRandomIndex = () => Math.floor(Math.random() * movies.length);

  const index1 = getRandomIndex();
  const index2 = getRandomIndex();

  if (index1 == index2) return getRandomMoviePair(movies);
  return [movies[index1]!, movies[index2]!];
};

const HomePage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/sign-in");
  }

  const movies = await getMovies();
  const moviePair = getRandomMoviePair(movies);

  return (
    <main className="grid justify-center justify-items-center gap-4 px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800">🎬 Batalha de filmes</h1>
      <p className="text-lg">
        Qual destes filmes preferes? Clica no teu favorito!
      </p>
      <div className="flex items-center gap-8 py-8">
        <MovieCard src={moviePair[0].image} />
        <div>
          <span className="text-4xl font-bold text-gray-800">VS</span>
        </div>
        <MovieCard src={moviePair[1].image} />
      </div>
    </main>
  );
};

export default HomePage;
