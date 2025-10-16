import ClientProviders from "@/component/ClientProvider";
import "../index.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
  title: "next + Vite + React",
  description: "My App is a...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <div id="root">
          <ClientProviders>{children}</ClientProviders>
        </div>
      </body>
    </html>
  );
}
