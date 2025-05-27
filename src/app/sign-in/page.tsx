import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "~/lib/auth";
import { DiscordSignInButton } from "./discord-sign-in-button";

const SignInPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    redirect("/");
  }

  return (
    <main className="grid min-h-dvh place-content-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="grid w-full max-w-md gap-6 rounded-md bg-white/80 p-8 text-center shadow-xl backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-gray-800">Bem vindo 👋</h1>
        <p className="text-base leading-relaxed text-pretty text-gray-600">
          Antes de começares a votar nos teus filmes favoritos, precisas de
          fazer login. É super rápido e fácil com o Discord! 😊
        </p>
        <DiscordSignInButton />
      </div>
    </main>
  );
};

export default SignInPage;
