"use client";

import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");

  return (
    <ActionIcon
      variant="subtle"
      size="lg"
      onClick={() => setColorScheme(computedColorScheme === "light" ? "dark" : "light")}
      aria-label="Přepnout barevné schéma"
    >
      {computedColorScheme === "light" ? <IconMoon size={18} /> : <IconSun size={18} />}
    </ActionIcon>
  );
}
