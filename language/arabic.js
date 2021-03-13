/* eslint-disable no-unused-vars */
//arabic
const { prefix, owner } = require("../config.js"),
	emojis = require("../emojis.json"),
	e = emojis;

module.exports = {
	start: {
		perms: `${e.error} ليس لديك إذن \`MANAGE_MESSAGES\` يمكنك إنشاء رتبة للتنفيذ باسم \`Giveaway Manger\` واعطائها للشخص اللذي يريد التعديل او يمكنك تحديد رتبة من سيرفرك عبر استخدام الامر التالي \`${prefix}setrole [on/off] {role name}\``,
		duration: `${e.error} اكتب \`وقت\`صالح رجاء!\n> Ex: \`1d (1 day)\`, \`1h (1 hour)\`, \`1m (1 minute)\`, \`1s (1 seconds)\`!`,
		argswinners: `${e.error} اكتب \`عدد الفائزين\` رجاء\n> Ex: \`${prefix}start 1h 4(4: number of winers) Nitro\``,
		prize: `${e.error} اكتب \`الجائزة\` رجاء!\n> Ex: ${prefix}start 1h 1 \`Nitro(Nitro: the prize)\``
	},

	create: {
		perms: `${e.error} ليس لديك إذن \`MANAGE_MESSAGES\` يمكنك إنشاء رتبة للتنفيذ باسم \`Giveaway Manger\` واعطائها للشخص اللذي يريد التعديل او يمكنك تحديد رتبة من سيرفرك عبر استخدام الامر التالي \`${prefix}setrole [on/off] {role name}\``,
		channel: `${e.error} يجب ان تفوم بفعل منشن \`لروم صالح\` لتثبيت القيف اوي فيه\n> مثال: ${prefix}create \`#giveawaychannel (giveawaychannel: هذة الغرفة)\``,
		otherServer: `${e.error} .!لا يمكنك انشاء \`قيف اوي\` في خادم اخر غير هذا`,
		duration: `${e.error} عليك ادخال \`وقت صالح\`\n مثا: 1d`,
		argswinners: `${e.error} عليك ادخال عدد \`فائزين صالح\`\n> مثال: ${prefix}create #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
		prize: `${e.error} ادخل ماهي \`الجائزة\` رجاء\n> مثال: ${prefix}create #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
		good: `${e.success} ** تم انشاء \`القيف اوي\` في الغرفة التالية ↘↘:**`,

		giveaway: `${e.gift} القيف اوي بدء ${e.gift}`,
		giveawayEnded: `${e.end} القيف اوي انتهى ${e.end}`,

		timeRemaining: `** الوقت المتبقي ${e.time}:** **{duration}**`,
		inviteToParticipate: (message) => ".!اضغط على🎉 للدخول الى القيف اوي",
		winMessage: (message) => "🎉 {winners} ،مبروك ! **{prize}** : لقد فزت",
		embedFooter: "** ManageGift **",
		noWinner: "❌ .تم الغاء القيف اوي لا يوجد عدد مشاركين كافي",
		hostedBy: `**{user}**: ${e.hoste}** صانع القيف اوي**`,
		winners: ": الفائز/ون",
		endedAt: "انتهت في ↪",
	},

	units: {
		seconds: "ثانية",
		minutes: "دقيقة",
		hours: "ساعة",
		days: "يوم",
	},

	lastchance: { content: `${e.warning} **اخر حظ للدخول للقيف اوي !** ${e.warning}` },

	end: {
		perms: `${e.error} ليس لديك إذن \`MANAGE_MESSAGES\` يمكنك إنشاء رتبة للتنفيذ باسم \`Giveaway Manger\` واعطائها للشخص اللذي يريد التعديل او يمكنك تحديد رتبة من سيرفرك عبر استخدام الامر التالي \`${prefix}setrole [on/off] {role name}\``,
		msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
		err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
		errmod: `${e.error} هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`,
		good: `${e.success} هذه ابقيف اوي سوف تنتهي خلال:`
	},

	reroll: {
		perms: `${e.error} ليس لديك إذن \`MANAGE_MESSAGES\` يمكنك إنشاء رتبة للتنفيذ باسم \`Giveaway Manger\` واعطائها للشخص اللذي يريد التعديل او يمكنك تحديد رتبة من سيرفرك عبر استخدام الامر التالي \`${prefix}setrole [on/off] {role name}\``,
		msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
		err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
		good: ":tada: فائز/ين جدد : {winners} ! مبروك !.",
		parts: `${e.error} لم يكن هناك عدد مشاركين كافي في القيف اوي لا يمكنني الاختيار !.`
	},

	edit: {
		perms: `${e.error} ليس لديك إذن \`MANAGE_MESSAGES\` يمكنك إنشاء رتبة للتنفيذ باسم \`Giveaway Manger\` واعطائها للشخص اللذي يريد التعديل او يمكنك تحديد رتبة من سيرفرك عبر استخدام الامر التالي \`${prefix}setrole [on/off] {role name}\``,
		msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
		wipr: `${e.error} تحتاج إما إلى تعديل الجائزة أو الفائزين!`,
		argswinners: `${e.error} عليك ادخال عدد \`فائزين صالح\`\n> مثال: ${prefix}edit {giveawayid} winners \`4 (4: عدد الفائزين)\``,
		prize: `${e.error} ادخل ماهي \`الجائزة\` رجاء\n> مثال: ${prefix}edit {giveawayid} prize \`Nitro(Nitro: الجائزة)\``,
		timepr: (numberOfSecondsMax) => `${e.success} سوف يتم تغيير الجائزة حالا بعد \`${numberOfSecondsMax}\` ثواني.`,
		timwi: (numberOfSecondsMax) => `${e.success} سوف يتم تغيير عدد الفائزون حالا بعد \`${numberOfSecondsMax}\` ثواني.`,
		err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
		errmod: `${e.error} هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`
	},

	delete: {
		done: `${e.success} تم سوف يتم مسح القيف اوي حالاً`,
		otherServer: `${e.error} لا يمكنك التحكم في سحب شخص آخر على هذا الخادم!`,
		otherUser: `${e.error} لا يمكنك التحكم في هذا السحب لأنك لست مالكه!`
	},

	lang: {
		perms: `${e.error} ليس لديك إذن \`MANAGE_MESSAGES\` يمكنك إنشاء رتبة للتنفيذ باسم \`Giveaway Manger\` واعطائها للشخص اللذي يريد التعديل او يمكنك تحديد رتبة من سيرفرك عبر استخدام الامر التالي \`${prefix}setrole [on/off] {role name}\``,
		msg: `${e.error} الرجاء ادخال لغة صالحة مثال: (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
	},

	set: {
		args: `${e.error} | يرجى تحديد \`on \` او \` off \``,
		mon: `${e.success} | تم تفعيل الأمر بشكل صحيح !.`,
		moff: `${e.success} | تم تعطيل الامر بشكل صحيح !.`,
		rlargs: `${e.error} | يرجى التحديد \`on\` او \`off\` واسم الرتبة!`,
		rlerr: `${e.error} | لا يوجد رتبة بهذا الاسم`,
		ron: `${e.success} | تم تفعيل الامر بشكل صحيح !.`,
		roff: `${e.success} | تم تعطيل الامر بشكل صحيح !.`
	},

	invite: {
		main: "الروابط الاساسية",
		disc: `للحصول على رابط قابل للنسخ اكتب الامر التالي \n \`${prefix}invite copy\``,
		web: `${e.link} رابط موقع ManageGift's BoT`,
		inv: `${e.add} رابط اضافة ManageGift's BoT`,
		vote: `${e.vote} التصويت ل ManageGift's BoT`,
		sup: `${e.supp} سيرفر الدعم الفني`
	},

	help: {
		title: "Help Documents Overview:",
		disc: "● هنا يمكنك ان تجد جميع `ManageGift Commands`",
		giveawaycmd: `${e.givcmd} أوامر القيف آوي - (٦)`,
		featuredcmd: `${e.featured} أوامر المميزه - (٦)`,
		infocmd: `${e.info} أوامر المعلومات - (٤)`,
		ownerbot: `${e.owner} أوامر صاحب البوت - (٢)`,
		link: `__${e.link} :الروابط__`
	},

	stats: {
		title: "ManageGift's Information:",
		info: `انه بوت مفتوح المصدر، يسمح لك بانشاء القيف اوي بسهولة تامة ويوفر لك العديد من المميزات. \n :تم برمجة البوت بلغة \`javascript language\` :وايضا بواسطة ${owner.name}`,
		stats: `__${e.stats} :الاحصائيات__`,
		stat: "`:إجمالي السيرفرات`",
		set: "`:إجمالي المستخدمين`",
		ch: "`:إجمالي الرومات`",
		ver: `__${e.ver} :الإصدارات__`,
		ram: `__${e.ram} الرامات__`,
		on: `${e.on} • __نشّط__`,
		for: "**نشّط لمدة** ",
		moreinfo: `__${e.info} :المزيد من المعلومات__`,
		comd: "`:مجموع الأوامر` ",
		giv: "`:جميع القيف اويات` ",
	},
	prefixerror: `${e.error} اكتب بادئه صالحه!.`,
	prefixerrcarc: `${e.error} | يجب ان تكون البادئة مكونة من 5 رموز فقط!`,
	setprefix: `${e.success} البادئه الان في هذا السيرفر اصبحت  `,

	info: {
		ping: `> ${e.ping} سرعة استجابة البوت  `,
	},
	cooldown: {
		err: `${e.error} | ** يجب ان تنتظر \`4 ثواني\` لاعادة استعمال هذا الامر**`
	},
	myprefix: {
		hello: `${e.info} |  مرحبا `,
		prefixis: (guildData) => ` البادئة في هذا السيرفر هي \`${guildData.prefix}\`.استخدم \`${guildData.prefix}help\` للحصول على قائمة الاوامر!`,
	},
	blacklist: {
		blacklist: ":lock: | **لا يمكنك استخدام`ManageGift Commands` لانك ممنوع بسبب مخالفتك قوانين البوت"
	}
};