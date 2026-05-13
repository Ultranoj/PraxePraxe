CREATE TABLE `inzerat` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`nazev` text NOT NULL,
	`popis` text NOT NULL,
	`cena` real,
	`zdarma` integer DEFAULT false NOT NULL,
	`kategorie` text NOT NULL,
	`stav` text DEFAULT 'Dostupné' NOT NULL,
	`kontakt` text NOT NULL,
	`createdAt` text NOT NULL
);
