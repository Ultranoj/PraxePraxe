"use client";

import { Badge, Button, Card, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";
import type { Inzerat } from "@/db/schemas";

type Props = {
  inzerat: Inzerat;
  locale: string;
};

// Barva badgu podle stavu inzerátu
function stavColor(stav: string) {
  switch (stav) {
    case "Dostupné":
      return "green";
    case "Rezervováno":
      return "violet";
    case "Prodáno / předáno":
      return "gray";
    default:
      return "gray";
  }
}

export function InzeratCard({ inzerat, locale }: Props) {
  return (
    <Card withBorder radius="md" padding="md">
      <Stack gap="xs">
        {/* Název + stav */}
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Text fw={600} size="md">
            {inzerat.nazev}
          </Text>
          <Badge color={stavColor(inzerat.stav)} variant="light" size="sm" style={{ whiteSpace: "nowrap" }}>
            {inzerat.stav}
          </Badge>
        </Group>

        {/* Popis — max 2 řádky */}
        <Text size="sm" c="dimmed" lineClamp={2}>
          {inzerat.popis}
        </Text>

        {/* Kategorie + cena/zdarma */}
        <Group gap="xs">
          <Badge variant="outline" color="gray" size="sm">
            {inzerat.kategorie}
          </Badge>
          {inzerat.zdarma ? (
            <Badge color="teal" variant="light" size="sm">
              Zdarma
            </Badge>
          ) : (
            <Badge color="orange" variant="light" size="sm">
              {inzerat.cena} Kč
            </Badge>
          )}
        </Group>

        {/* Nabízející */}
        <Text size="xs" c="dimmed">
          Nabízí: {inzerat.kontakt}
        </Text>

        {/* Tlačítko odkazuje na detail: /cs/1 */}
        <Button component={Link} href={`/${locale}/${inzerat.id}`} variant="light" color="orange" fullWidth size="sm">
          Zobrazit detail
        </Button>
      </Stack>
    </Card>
  );
}
