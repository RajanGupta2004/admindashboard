import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "@/components/theamProvider/TheamProvider"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <div className="flex  ">
            <div className="hidden md:block h-[100vh] w-[300px]">
              <Sidebar />
            </div>
            <div className="p-5 w-full  md:max-w-[1140px]">
              {children}

            </div>
          </div>
          <Toaster />
        </ThemeProvider>

      </body>
    </html>
  );
}
