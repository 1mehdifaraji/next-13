import React, { FC, ReactNode } from "react";
import { Header, Footer } from "@/components";
import "./global.css";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default MainLayout;
