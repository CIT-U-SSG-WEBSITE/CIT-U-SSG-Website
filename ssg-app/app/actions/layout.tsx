"use client";

import React from "react";
import SideNavigation from "@/components/SideNav/SideNavigation";
import { linkPair } from "@/lib/link_types";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const links: linkPair[] = [
  { name: "Sessions", href: "/actions/sessions" },
  { name: "Projects", href: "/actions/projects" },
  { name: "Resolutions", href: "/actions/resolutions" },
  { name: "Executive orders", href: "/actions/eo" },
  { name: "Letters of appeal", href: "/actions/appeals" },
];

function Layout({ children }: LayoutProps) {
  // Modified border for sessions only because it was disrupting/overlapping the styles of the page
  const pathname = usePathname();
  const noBorderRoutes = ["/actions/sessions"];
  const isBorderless = noBorderRoutes.includes(pathname);

  return (
    <div className="flex flex-col lg:flex-row w-full px-4 md:px-8 mb-20 md:mb-30 lg:mb-40 lg:px-16 gap-8">
      <SideNavigation links={links} />
      <section className="flex justify-center items-center w-full h-full">
        <div
          className={`flex max-w-[920px] grow ${
            isBorderless ? "border-none" : "border border-dark-neutral"
          }`}
        >
          {children}
        </div>
      </section>
    </div>
  );
}

export default Layout;
