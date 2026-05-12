import { Title } from "@mantine/core";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();
  return <Title>{t("page2.listings.title")}</Title>;
}
