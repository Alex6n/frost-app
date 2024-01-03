"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Dot, Sparkles } from "lucide-react";
import ProfileMenu from "./ProfileMenu";
import Image from "next/image";

const statusIndicator = {
  online: "text-green-400",
  partial: "text-orange-400",
  offline: "text-rose-600",
};

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const status = "online";

  const controlNavbar = React.useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }

      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <div
      className={`z-50 bg-gradient-to-b from-secondary/[50%] to-background/[50%] fixed w-full transition-transform ease-in-out duration-300 transform ${
        isOpen ? "-translate-y-0" : "-translate-y-28"
      } flex flex-col items-center p-4`}
    >
      {/* TODO : add bottom border when scrolling down only */}
      <div className="flex justify-between w-full xl:px-44 lg:px-28 sm:px-6 px-2">
        <Link href="/">
          <Image width="64" height="64" alt="Frost" src="/logo.svg" />
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/elite"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "dark:text-amber-400 dark:hover:text-amber-200 dark:hover:bg-amber-950/20 text-amber-600 hover:text-amber-900 hover:bg-orange-300/20"
                )}
              >
                <Sparkles className="w-4 mr-1" />
                Elite Access
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" className={navigationMenuTriggerStyle()}>
                Documentation
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/status"
                className={cn(navigationMenuTriggerStyle(), "w-24 pr-8")}
              >
                <Dot
                  className={`${statusIndicator[status]} w-8 h-8 min-w-max`}
                />
                Status
              </Link>
            </NavigationMenuItem>

            {/* TODO : make this functional and styled */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className={navigationMenuTriggerStyle()}>English</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Arabic</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ProfileMenu />
      </div>
    </div>
  );
}
