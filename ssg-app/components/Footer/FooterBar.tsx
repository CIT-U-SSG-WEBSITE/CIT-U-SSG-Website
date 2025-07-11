import React from 'react';
import Image from "next/image";
import Link from "next/link";
import FooterNav from "@/components/Footer/FooterNav";


function FooterBar() {
  return (
    <footer className="w-full bg-maroon text-light-neutral p-8 sm:p-16 lg:p-20 flex flex-col gap-16 sm:gap-20">
      <div className="w-full flex flex-col lg:flex-row gap-16 sm:gap-20 lg:gap-0">
        <div className="w-full flex flex-col sm:flex-row lg:flex-col gap-10">
          <div className="w-full flex flex-col gap-6">
            <Image width={42} height={20} src="/icon_logo.png" alt="SSG Bridge the Gap logo"/>
            <div className="flex flex-col gap-0.5">
              <span className="font-serif">41st Supreme Student Government</span>
              <span className="text-sm">Cebu Institue of Technology - University</span>
            </div>
            <span className="text-sm">The sole representative and voice of the Technologians</span>
          </div>
          <div className="flex gap-4 h-5">
            <Link href="https://www.facebook.com/cituniversity.ssg">
              <Image width={20} height={20} src="/facebook_logo.svg" alt="Facebook logo"/>
            </Link>
            <Link href="/ssg-app/public">
              <Image width={20} height={20} src="/instagram_logo.svg" alt="Instagram logo"/>
            </Link>
            <Link href="/ssg-app/public">
              <Image width={20} height={20} src="/x_logo.svg" alt="X logo"/>
            </Link>
            <Link href="/ssg-app/public">
              <Image width={20} height={20} src="/outlook_logo.svg" alt="Outlook logo"/>
            </Link>
          </div>
        </div>

        <FooterNav />
      </div>

      <div
        className="border-t border-light-neutral pt-3 w-full flex max-sm:flex-col max-sm:gap-8 justify-between text-sm">
        <span>© 2025 All rights reserved</span>
        <div className="flex gap-8">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterBar;