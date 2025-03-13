"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";

/**
 * @todo Move to the global types
 *
 */
enum ThemeType {
  System = "system",
  Dark = "dark",
  Light = "light",
}

interface Icon {
  theme: ThemeType;
}

const IconsMap = {
  [ThemeType.System]: <SunMoon />,
  [ThemeType.Dark]: <MoonIcon />,
  [ThemeType.Light]: <SunIcon />,
};

const Icon = ({ theme }: Icon) => IconsMap[theme] || <SunIcon />;

interface Checkbox {
  label: keyof typeof ThemeType;
  theme: ThemeType;
}

const checkboxes: Checkbox[] = Object.entries(ThemeType).map(
  ([label, theme]) => ({
    label: label as keyof typeof ThemeType,
    theme,
  })
);

const ModeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (theme: ThemeType) => () => {
    setTheme(theme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Icon theme={theme as ThemeType} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {checkboxes.map((item) => {
          return (
            <DropdownMenuCheckboxItem
              className="cursor-pointer"
              key={item.label}
              checked={theme === item.theme}
              onClick={handleThemeChange(item.theme)}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
