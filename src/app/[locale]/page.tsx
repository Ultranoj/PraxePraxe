import { Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BazarFiltry } from "@/components//bazar/BazarFiltry";
import { BazarFooter } from "@/components//bazar/BazarFooter";
import { db } from "@/db";
import { inzerat } from "@/db/schemas";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t("page.home.title"),
    description: t("page.home.description"),
  };
}

export default async function Page({ params }: PageProps<"/[locale]">) {
  // Načteme všechny inzeráty z databáze
  // db.select().from(inzerat) = SELECT * FROM inzerat
  const inzeraty = await db.select().from(inzerat);

  // Locale potřebujeme pro správné URL odkazy (např. /cs/bazar/1)
  const { locale } = await params;

  return (
    <>
      <Container size="xl" py="xl">
        <Stack gap="xl">
          {/* HLAVIČKA */}
          <Group justify="space-between" align="flex-start" wrap="wrap" gap="md">
            <Stack gap={4}>
              <Title order={1}>Bazar</Title>
              <Text c="dimmed" size="sm" maw={480}>
                Interní bazar Blogic Store. Nabízej věci kolegům k prodeji nebo zdarma. Platbu a předání si domluvíte
                přímo mezi sebou.
              </Text>
            </Stack>
            <Link href={`/${locale}/novy`}>
              <Button color="orange" leftSection="+">
                Přidat nabídku
              </Button>
            </Link>
          </Group>

          {/* FILTRY + KARTIČKY — client komponenta */}
          <BazarFiltry inzeraty={inzeraty} locale={locale} />
        </Stack>
      </Container>

      <BazarFooter locale={locale} />
    </>
  );
}
