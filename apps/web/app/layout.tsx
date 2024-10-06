import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@repo/ui/globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@repo/ui/components/ui/navigation-menu";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio of my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <nav className="ui-px-4 ui-py-4 ui-shadow-sm">
        <div className="ui-container ui-mx-auto ui-flex ui-justify-between ui-items-center">
          <div className="ui-text-2xl ui-font-bold">
            <Link href="/">
                Portfolio
            </Link>
          </div>

          
          <NavigationMenu>
            <NavigationMenuList className="ui-flex ui-space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink href="/about" className="ui-text-gray-700 hover:text-gray-900 hover">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/experience" className="ui-text-gray-700 hover:text-gray-900">Experience</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/projects" className="ui-text-gray-700 hover:text-gray-900">Projects</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact" className="ui-text-gray-700 hover:text-gray-900">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
        {children}
      </body>
    </html>
  );
}
