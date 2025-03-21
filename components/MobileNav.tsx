"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu icon"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className=" cursor-pointer gap-1 px-4  items-center flex"
            >
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Finnance logo"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Finnance
              </h1>
            </Link>
            <div className="mobilenav-sheet-divider ">
              <SheetClose asChild>
                <nav className="flex h-full gap-6 flex-col pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      pathname === item.route ||
                      pathname.startsWith(`${item.route}`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn("mobilenav-sheet_close w-full ", {
                            "bg-bank-gradient ": isActive,
                          })}
                        >
                            <Image
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              className={cn({
                                "brightness-[3] invert-0": isActive,
                              })}
                            />
                          <p
                            className={cn("text-16 font-semibold text-black-2", {
                              "text-white": isActive,
                            })}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>

              <Footer user={user} type="mobile"/>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
