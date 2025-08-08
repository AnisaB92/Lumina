export const metadata = { title: "Lumina — AI Stylist", description: "Ваш дружелюбный AI-стилист." };
import "./../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
