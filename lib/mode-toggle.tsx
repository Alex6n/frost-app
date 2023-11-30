"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UseThemeProps } from "next-themes/dist/types"

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const switchHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <Button onClick={switchHandler} variant="ghost" size="icon">
      {theme === "light" ?
        <Sun className="h-5 w-5 transition-all" />
        :
        <Moon className="h-5 w-5 transition-all" />
      }
    </Button>
  )
}
