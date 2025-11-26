import "./globals.css";
//import Navbar from "../components/Navbar";
import Providers from "./providers";
import Footer from "@/components/Footer";


export const metadata = { title: "My App" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          
          {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  );
}
