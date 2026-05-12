import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inzerat = sqliteTable("inzerat", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),

  nazev: text().notNull(),
  popis: text().notNull(),
  cena: real(),
  zdarma: integer({ mode: "boolean" }).notNull().default(false),
  kategorie: text().notNull(),
  stav: text().notNull().default("Dostupné"),
  kontakt: text().notNull(),

  createdAt: text()
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
});

// Typy odvozené přímo z tabulky — TypeScript pak hlídá, že pracuješ se správnými daty
export type Inzerat = typeof inzerat.$inferSelect; // pro čtení z DB
export type NewInzerat = typeof inzerat.$inferInsert; // pro vkládání do DB
