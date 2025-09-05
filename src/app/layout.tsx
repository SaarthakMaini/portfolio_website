import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Navigator from "./_components/Navigator"
import ChatbaseScript from "./_components/ChatbaseScript"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow px-2 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-8">{children}</main>
        <Navigator />
        <Footer />
        <ChatbaseScript />
      </body>
    </html>
  );
}
