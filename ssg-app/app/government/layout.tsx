import React from 'react';
import SideNavigation from "@/components/SideNav/SideNavigation";
import {linkPair} from "@/lib/link_types";

type LayoutProps = {
  children: React.ReactNode;
}

const links : linkPair[] = [
  { name: "Officers", href: "/government/officers" },
  { name: "Executive",        href: "/government/executive" },
  { name: "Legislative",      href: "/government/legislative" },
  { name: "Judiciary",        href: "/government/judiciary" },
  { name: "Constitution",     href: "/government/constitution" },
]

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full px-4 md:px-8 mb-20 md:mb-30 lg:mb-40 lg:px-16 gap-8">
      <SideNavigation links={links} />
      <section className="flex justify-center items-center w-full h-full lg:ml-50">
        <div className="flex max-w-[960px] grow">
          {children}
        </div>
      </section>
    </div>
  );
}

export default Layout;