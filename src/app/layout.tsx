"use client";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
          <div>
            <h1 className="bg-red-500 mt-1 h-0.5 w-full bottom-0" />
            <h1 className="text-center">
              © 2024 SUPRA. Developed by{" "}
              <Link
                href="https://github.com/wasif-arslan"
                className="text-red"
              >
                Wasif
              </Link>
            </h1>
          </div>
        </div>
      </body>
    </html>
  );
}
