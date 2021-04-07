/* eslint-disable no-unused-vars */
//russian
const { prefix, owner } = require("../config.js"),
	emojis = require("../emojis.json"),
	e = emojis;

module.exports = {
	start: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit ...\` или установите свою роль, используя команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
		duration: `${e.error} Введите корректное значение \`времени\`!\n> Пример: \`1d (1 день)\`, \`1h (1 час)\`, \`1m (1 минута)\`, \`1s (1 секунда)\`!`,
		argswinners: `${e.error} Введите корректное значение \`кол-ва победителей\`!\n> Пример: \`${prefix}start 1h 4(Кол-во победителей) Nitro\``,
		prize: `${e.error} Добавьте к розыгрышу \`приз\`!\n> Пример: ${prefix}start 1h 1 \`Nitro(Ваш приз)\``
	},

	create: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit ...\` или установите свою роль, используя команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
		channel: `${e.error} Вы должны указать \`канал\`!\n> Пример: ${prefix}create \`#channel (Канал для розыгрыша)\` 1h 1 Nitro!`,
		otherServer: `${e.error} Вы не можете создать \`розыграши\` на других серверах!`,
		duration: `${e.error} Укажите корректное \`время\`!\n> Пример: \`1d (1 день)\`, \`1h (1 час)\`, \`1m (1 минута)\`, \`1s (1 секунда)\`!`,
		argswinners: `${e.error} Укажите \`кол-во победителей\`!\n> Пример: \`${prefix}create #channel 1h 4(Кол-во победителей) Nitro\``,https://github.com/LWJerri/ManageGift/network/members
		prize: `${e.error} Добавьте \`приз\`!\n> Пример: ${prefix}create #channel 1h 1 \`Nitro(Ваш приз)\``,
		good: `${e.success} ** Я запустил \` розыгрыш \` в указанном чате: **`,

		giveaway: `${e.gift} **РОЗЫГРЫШ НАЧАТ** ${e.gift}`,
		giveawayEnded: `${e.end} **РОЗЫГРЫШ ОКОНЧЕН** ${e.end}`,

		timeRemaining: `${e.time} **Конец через:** **{duration}**!`,
		inviteToParticipate: (message) => "НАЖМИ НА 🎉 ДЛЯ УЧАСТИЯ В РОЗЫГРАШЕ!",
		winMessage: (message) => "🎉 | Поздравляем, {winners}! Ты выиграл: **{prize}**!",
		embedFooter: "ManageGift",
		noWinner: "❌ Розыгрыш отменён, т.к недостаточно участников :(",
		hostedBy: `${e.hoste} **Владелец розыгрыша:** {user}`,
		winners: "Победитель(ей) 🎉",
		endedAt: "Закончился в",
	},

	units: {
		seconds: "секунд(ы)",
		minutes: "минут(ы)",
		hours: "час(ов)",
		days: "день(ей)",
	},

	lastchance: { content: `${e.warning} **НЕ УПУСТИ СВОЙ ШАНС!** ${e.warning}` },

	end: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit ...\` или установите свою роль, используя команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
		msg: `${e.error} Вам необходимо указать корректный ID сообщения с розыгрышем.`,
		err: `${e.error} Ошибка при получении данных розыграша: `,
		errmod: `${e.error} Данный розыгрыш окочен или удалён!`,
		good: `${e.success} Розыгрыш будет окончен через:`
	},

	reroll: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit ...\` или установите свою роль, используя команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
		msg: `${e.error} Вам необходимо указать корректный ID сообщения с розыгрышем.`,
		err: `${e.error} Ошибка при получении данных розыграша: `,
		good: ":tada: Новый(е) победитель(и): {winners}! Поздравляем!",
		parts: `${e.error} Недостаточно участников в розыграше, чтобы выбирать новых победителей!`
	},

	edit: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit ...\` или установите свою роль, используя команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
		msg: `${e.error} Вам необходимо указать корректный ID сообщения с розыгрышем.`,
		wipr: `${e.error} Вам необходимо указать кол-во победителей!`,
		argswinners: `${e.error} Укажите \`кол-во победителей\`!\n> Пример: \`${prefix}edit {giveawayid} winners 2(Кол-во победителей)\``,
		prize: `${e.error} Добавьте \`приз\`!\n> Пример: ${prefix}edit {giveawayid} prize \`Nitro (Ваш приз)\``,
		timepr: (numberOfSecondsMax)=> `${e.success} Приз розыгрыша будет обновлён через \`${numberOfSecondsMax}\` секунд.`,
		timwi: (numberOfSecondsMax)=> `${e.success} Кол-во победителей будет обновлено через \`${numberOfSecondsMax}\` секунд.`,
		err: `${e.error} Ошибка при получении данных розыгрыша: `,
		errmod: `${e.error} Ничего не найдено по данному ID. Возможно данный розыгрыш завершён или был удалён.`
	},

	delete: {
		done: `${e.success} Розыгрыш был успешно удалён!`,
		otherServer: `${e.error} Вы не можете управлять данным \`розыгрышем\` на этом сервере!`,
		otherUser: `${e.error} Вы не можете управлять данным \`розыгрышем\`, т.к Вы не есть его владельцем!`
	},

	lang: {
		perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль с названием \`Giveaway Manger\` и дать доступ к командам \`start & create & edit ...\` или установите свою роль, используя команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
		msg: `${e.error} Введите корректный язык! Список доступных языков - (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
	},

	set: {
		args: `${e.error} | Введите \`on\` или \`off\``,
		mon: `${e.success} | setmention команда успешно активирована!`,
		moff: `${e.success} | setmention команда успешно отключена!`,
		rlargs: `${e.error} | Введите \`on\`, \`off\` или роль!`,
		rlerr: `${e.error} | Роль с указанным названием не найдена!`,
		ron: `${e.success} | Роль менеджер активирован!`,
		roff: `${e.success} | Роль менеджер отключён!`
	},

	invite: {
		main: "Главные ссылки",
		disc: `Введите \`${prefix}invite copy\`, чтобы получить ссылку для копирования!`,
		web: `${e.link} ManageGift сайт`,
		inv: `${e.add} Пригласить бота на сервер`,
		vote: `${e.vote} Отдать свой голос за бота`,
		sup: `${e.supp} Присоединиться к серверу поддержки`
	},

	help: {
		title: "Справочник по боту:",
		disc: "● Здесь Вы можете найти все команды для `ManageGift` бота",
		giveawaycmd: `${e.givcmd} Команды для проведения розыгрышей - (6)`,
		featuredcmd: `${e.featured} Команды для настройки бота - (4)`,
		infocmd: `${e.info} Информационные команды - (4)`,
		ownerbot: `${e.owner} Команды для владельца бота - (2)`,
		link: `${e.link} Ссылки:`
	},

	stats: {
		title: "ManageGift информация:",
		info: `Это бот с открытым исходным кодом, который позволяет с легкостью создавать розыгрыши и предоставляет множество различных функций. Бот разработан на \`javascript\` языке. Разработчик: ${owner.name}`,
		stats: `${e.stats} • __Статистика:__`,
		stat: "`Серверов:`",
		set: "`Участников:`",
		ch: "`Каналов:`",
		ver: `${e.ver} • __Версия:__`,
		ram: `${e.ram} • __RAM__`,
		on: `${e.on} • __В сети__`,
		for: "**В сети уже** ",
		moreinfo: `${e.info} • __Доп. информация:__`,
		comd: "`Всего команд:`",
		giv: "`Проведено розыграшей:`",
	},

	prefixerror: `${e.error} Введите корректный префикс!`,
	prefixerrcarc: `${e.error} | Префикс не может быть больше 5-ти символов!`,
	setprefix: `${e.success} Префикс был изменён на `,

	info: {
		ping: `> ${e.ping} Мой пинг `,
	},
	
	cooldown: {
		err: `${e.error} | **Вы должны подождать \`4 секунды\` ${e.time} для повторного использования данной команды!**`
	},
	
	myprefix: {
		hello: `${e.info} | Привет `,
		prefixis: (guildData) => ` мой префис на данном сервере: \`${guildData.prefix}\`. Используйте команду \`${guildData.prefix}help\`, чтобы получить список всех команд!`,
	},
	
	blacklist: {
		blacklist: ":lock: **Вы не можете использовать `ManageGift команды`, т.к Ваш сервер был добавлён в `чёрный список`!**"
	}
};
