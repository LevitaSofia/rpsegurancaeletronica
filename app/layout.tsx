import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "800"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "RP Sistemas - Segurança Inteligente",
  description: "Soluções avançadas em segurança, monitoramento e infraestrutura de TI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Suprime erros de extensões do Chrome no overlay do Next.js */}
        <Script id="suppress-extension-errors" strategy="beforeInteractive">{`
          (function() {
            var origOnError = window.onerror;
            window.onerror = function(msg, src) {
              if (src && src.indexOf('chrome-extension://') === 0) return true;
              if (origOnError) return origOnError.apply(this, arguments);
            };
            var origAddEventListener = EventTarget.prototype.addEventListener;
            EventTarget.prototype.addEventListener = function(type, listener, options) {
              if (type === 'unhandledrejection') {
                var wrapped = function(e) {
                  if (e.reason && e.reason.message === 'Origin not allowed') { e.stopImmediatePropagation(); return; }
                  listener.call(this, e);
                };
                return origAddEventListener.call(this, type, wrapped, options);
              }
              return origAddEventListener.call(this, type, listener, options);
            };
          })();
        `}</Script>
      </head>
      <body style={{ backgroundColor: '#050505', color: '#e2e8f0', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

