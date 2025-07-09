import React from 'react';
import SideNavigation from "@/components/SideNav/SideNavigation";
import {linkPair} from "@/lib/link_types";

type LayoutProps = {
  children: React.ReactNode;
}

const links : linkPair[] = [
  { name: "Sessions",            href: "/actions/sessions" },
  { name: "Projects",           href: "/actions/projects" },
  { name: "Resolutions",        href: "/actions/resolutions" },
  { name: "Executive orders",   href: "/actions/eo" },
  { name: "Letters of appeal",  href: "/actions/appeals" },
]

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 md:px-8 lg:px-16 gap-8 border">
      <SideNavigation links={links} />
      <section className="flex justify-center items-center w-full h-full">
        <div className="flex max-w-[920px] grow border border-dark-neutral">
          {children}
        </div>
      </section>
    </div>
  );
}

export default Layout;