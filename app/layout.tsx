import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/global.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/Footer";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frost App",
  description: "Generated by create next app",
};

const appData = {
  serversJoined: 100,
  botUsers: 5000,
  eliteUsers: 100,
  websiteVisits: 5000,
  appCommands: 123,
};

const usefullLinks = [
  {
    label: "Website Map",
    links: [
      {
        title: "Membership",
        href: "/membership",
      },
      {
        title: "Dashboard",
        href: "/dashboard",
      },
      {
        title: "Documentation",
        href: "/docs",
      },
      {
        title: "Elite",
        href: "/elite",
      },
      {
        title: "Commands",
        href: "/commands",
      },
    ],
  },
  {
    label: "Policy",
    links: [
      {
        title: "Terms Of Use",
        href: "/terms-of-use",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Refund Policy",
        href: "/refund-policy",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          <Navbar />
          {children}
          <Footer appData={appData} usefullLinks={usefullLinks} />
        </ThemeProvider>
      </body>
    </html>
  );
}
