import {
	BrainCircuit,
	BriefcaseBusiness,
	FileSearch,
	FileText,
	Globe2,
	MailPlus,
	ScanText,
	Sparkles,
	Store,
	TrendingUp,
} from "lucide-react";

const SOON_ITEMS = [
	{
		title: "AI",
		description: "Помощник по данным компании, стройке, продажам и финансам.",
		icon: BrainCircuit,
	},
	{
		title: "Документы",
		description: "Хранилище, версии, согласования и связь с договорами.",
		icon: FileText,
	},
	{
		title: "Генерация договоров",
		description: "Шаблоны договоров, автозаполнение и выпуск пакета документов.",
		icon: Sparkles,
	},
	{
		title: "OCR",
		description: "Распознавание счетов, актов, паспортов и первичных документов.",
		icon: ScanText,
	},
	{
		title: "Маркетплейс",
		description: "Отдельный продукт для поставщиков, заявок, заказов и витрины.",
		icon: Store,
	},
	{
		title: "Тендеры",
		description: "Сбор предложений подрядчиков и поставщиков по заявкам проекта.",
		icon: BriefcaseBusiness,
	},
	{
		title: "AI-рассылки",
		description: "Сегменты, тексты и автоматические сценарии коммуникаций.",
		icon: MailPlus,
	},
	{
		title: "Публичные витрины",
		description: "Публичные страницы проектов и доступных юнитов.",
		icon: Globe2,
	},
	{
		title: "Продвинутые порталы",
		description: "Расширенные кабинеты контрагентов с документами и оплатами.",
		icon: FileSearch,
	},
	{
		title: "Прогнозирование",
		description: "Прогноз продаж, кассовых разрывов, сроков и отклонений бюджета.",
		icon: TrendingUp,
	},
];

export default function SettingsSoon() {
	return (
		<div className="mx-auto max-w-6xl space-y-6">
			<div>
				<p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
					Настройки
				</p>
				<h1 className="mt-2 text-2xl font-bold text-slate-950">Скоро</h1>
				<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
					Функции вынесены из срочного релиза, чтобы основной поток DomIQ быстрее
					принял реальные данные проекта и клиентов.
				</p>
			</div>

			<div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
				{SOON_ITEMS.map((item) => {
					const Icon = item.icon;
					return (
						<div
							key={item.title}
							className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
						>
							<div className="flex items-start gap-3">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950 text-white">
									<Icon className="h-5 w-5" />
								</div>
								<div className="min-w-0">
									<h2 className="text-sm font-semibold text-slate-950">
										{item.title}
									</h2>
									<p className="mt-1 text-sm leading-5 text-slate-500">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
