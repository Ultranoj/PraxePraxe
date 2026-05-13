"use client";
import { Anchor, Container, Divider, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";

type Props = { locale: string };

export function BazarFooter({ locale }: Props) {
  return (
    <Container size="xl" component="footer" py="xl" mt="xl">
      <Divider mb="xl" />
      <Group justify="space-between" align="flex-start" wrap="wrap" gap="xl">
        <Stack gap={4} maw={220}>
          <Text fw={700} size="lg" c="orange">
            blogic
          </Text>
          <Text size="xs" c="dimmed" lh={1.6}>
            Interní bazar pro zaměstnance Blogic Store.
          </Text>
        </Stack>

        <Stack gap="xs">
          <Text size="xs" fw={600} tt="uppercase" c="dimmed">
            Bazar
          </Text>
          <Anchor component={Link} href={`/${locale}`} size="sm" c="dimmed">
            Přehled nabídek
          </Anchor>
          <Anchor component={Link} href={`/${locale}/novy`} size="sm" c="dimmed">
            Přidat nabídku
          </Anchor>
        </Stack>

        <Stack gap="xs">
          <Text size="xs" fw={600} tt="uppercase" c="dimmed">
            Pomoc
          </Text>
          <Anchor component={Link} href="#" size="sm" c="dimmed">
            Jak to funguje
          </Anchor>
          <Anchor component={Link} href="#" size="sm" c="dimmed">
            Pravidla bazaru
          </Anchor>
        </Stack>
      </Group>
      <Divider my="lg" />
      <Group justify="space-between" wrap="wrap">
        <Text size="xs" c="dimmed">
          © 2025 Blogic Store — Interní bazar
        </Text>
        <Text size="xs" c="dimmed">
          Next.js + Mantine UI
        </Text>
      </Group>
    </Container>
  );
}
