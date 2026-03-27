import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Museum",
  description: "18th Century Rural Life in Pennsylvania",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
        </body>
    </html>
  );
}
