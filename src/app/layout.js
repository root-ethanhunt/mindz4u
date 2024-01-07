import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/pages/Header.js";
import Footer from "./components/pages/Footer.js";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.wrapper}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
