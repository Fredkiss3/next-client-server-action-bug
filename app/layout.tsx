import * as React from "react";
import { getCookieCounter } from "./_action";

export const metadata = {
  title: "Next redirect server actions bug",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieCounter = await getCookieCounter();
  return (
    <html>
      <head />
      <body>
        <h2>ROOT LAYOUT (counter = {cookieCounter})</h2>
        {children}
      </body>
    </html>
  );
}
