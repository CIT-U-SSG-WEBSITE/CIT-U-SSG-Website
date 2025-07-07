import React from 'react';
import SideNavigation from "@/components/Government/SideNavigation";

type LayoutProps = {
  children: React.ReactNode;
}

const links : string[] = [
  "Executive",
  "Legislative",
  "Judiciary",
  "Constitution",
  "Officers"
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