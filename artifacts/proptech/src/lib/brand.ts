/** Брендинг платформы (не названия tenant-компаний в БД). */
export const BRAND = {
	name: "DomIQ",
	shortName: "DomIQ",
	tagline: "Аналитика и управление активами",
	taglineShort: "Платформа управления",
	supportEmail: "support@domiq.app",
	infoEmail: "info@domiq.app",
	copyright: (year = new Date().getFullYear()) =>
		`© ${year} DomIQ. Все права защищены.`,
} as const;
