import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'light' || saved === 'dark'
      ? saved
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export const metadata = {
  title: customMetadata.title || aboutMe.nameText,
  description: customMetadata.description || aboutMe.description,
  icons: {
    icon: "/icons/site-icon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <SiteHeader />
        <ThemeToggle />
        <main className="layout-wrap page-shell">{children}</main>
        <footer className="site-footer">
          <div className="layout-wrap footer-wrap">
            <p>Copyright {aboutMe.nameText}.</p>
            <p>Built with Next.js.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

