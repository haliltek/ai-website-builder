import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ConvexClientProvider from "./ConvexClientProvider";


export const metadata = {
  title: "LuminaAI - Yapay Zeka Destekli Web Geliştirici",
  description: "LuminaAI Web Builder - Halil TEK Özel Sürümü",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning >
      <body>
        <ConvexClientProvider>
        <Provider>
        {children}
        </Provider>
        </ConvexClientProvider>
        
      </body>
    </html>
  );
}
