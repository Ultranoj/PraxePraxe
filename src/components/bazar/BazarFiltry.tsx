"use client";

import { Card, Group, NativeSelect, SegmentedControl, SimpleGrid, Stack, Text, TextInput } from "@mantine/core";
import { useState } from "react";
import type { Inzerat } from "@/db/schemas";
import { InzeratCard } from "./InzeratCard";

// Kategorie a stavy — stejné hodnoty jako v schématu
const KATEGORIE = ["Nábytek", "Dětské věci", "Oblečení", "Elektronika", "Knihy", "Ostatní"];
const STAVY = ["Dostupné", "Rezervováno", "Prodáno / předáno"];

type Props = {
  inzeraty: Inzerat[];
  locale: string;
};

export function BazarFiltry({ inzeraty, locale }: Props) {
  const [hledani, setHledani] = useState("");
  const [kategorie, setKategorie] = useState("");
  const [stav, setStav] = useState("");
  const [cenovy, setCenovy] = useState("vse");

  // Filtrování — projde každý inzerát a vyřadí ty co nesplňují podmínky
  const filtrovane = inzeraty.filter((i) => {
    if (
      hledani &&
      !i.nazev.toLowerCase().includes(hledani.toLowerCase()) &&
      !i.popis.toLowerCase().includes(hledani.toLowerCase())
    )
      return false;
    if (kategorie && i.kategorie !== kategorie) return false;
    if (stav && i.stav !== stav) return false;
    if (cenovy === "zdarma" && !i.zdarma) return false;
    if (cenovy === "placene" && i.zdarma) return false;
    return true;
  });

  return (
    <Stack gap="lg">
      {/* Filtry */}
      <Card withBorder radius="md" padding="md">
        <Stack gap="sm">
          <Group grow wrap="wrap" gap="sm">
            <TextInput
              placeholder="Hledat nabídku..."
              value={hledani}
              onChange={(e) => setHledani(e.currentTarget.value)}
            />
            <NativeSelect
              value={kategorie}
              onChange={(e) => setKategorie(e.currentTarget.value)}
              data={[{ value: "", label: "Kategorie" }, ...KATEGORIE.map((k) => ({ value: k, label: k }))]}
            />
            <NativeSelect
              value={stav}
              onChange={(e) => setStav(e.currentTarget.value)}
              data={[{ value: "", label: "Stav" }, ...STAVY.map((s) => ({ value: s, label: s }))]}
            />
          </Group>
          <SegmentedControl
            fullWidth
            value={cenovy}
            onChange={setCenovy}
            data={[
              { value: "vse", label: "Vše" },
              { value: "zdarma", label: "Zdarma" },
              { value: "placene", label: "Placené" },
            ]}
          />
        </Stack>
      </Card>

      {/* Výsledky */}
      {filtrovane.length === 0 ? (
        <Text c="dimmed" ta="center" py="xl">
          Žádné nabídky neodpovídají zvoleným filtrům.
        </Text>
      ) : (
        // 1 sloupec na mobilu, 2 na tabletu, 3 na desktopu
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {filtrovane.map((i) => (
            <InzeratCard key={i.id} inzerat={i} locale={locale} />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
}
