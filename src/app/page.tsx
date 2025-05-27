import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "~/lib/auth";

const HomePage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></main>
  );
};

export default HomePage;
