import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/react";

/* eslint-disable import/no-default-export */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Meu Pet Minha Vida - WIP</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
