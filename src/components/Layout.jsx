import React from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import "../index.css";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
