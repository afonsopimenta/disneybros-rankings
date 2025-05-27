import "~/styles/globals.css";

import { type ReactNode } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Disney Bros Rankings",
  description:
    "Queres saber exatamente quais os maiores bangers da Pixar de acordo com o pessoal do Disney Bros? Vota aqui e descobre de uma forma super objetiva e nada biased quais os melhores e os piores filmes da Pixar.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
