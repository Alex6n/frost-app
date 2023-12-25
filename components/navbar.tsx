"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Dot, Sparkles } from "lucide-react";
import { ModeToggle } from "@/lib/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
      <div className="flex justify-between w-full xl:px-44 lg:px-28 sm:px-6 px-2">
        <Link href="/">
          <img
            className="svg-shadow drop-shadow shadow-cyan-500/50 aspect-square h-16"
            alt="Frost"
            src="/logo.svg"
          />
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
              <Link href="/discord" className={navigationMenuTriggerStyle()}>
                Discord
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/status"
                className={cn(navigationMenuTriggerStyle(), "w-20 pr-6")}
              >
                <Dot
                  className={`${statusIndicator[status]} w-8 h-8 min-w-max`}
                />
                Status
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Avatar className="mt-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
