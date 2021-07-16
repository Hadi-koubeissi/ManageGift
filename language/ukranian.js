/* eslint-disable no-unused-vars */
//ukrainian
const { prefix, owner } = require("../config.js"),
  emojis = require("../emojis.json"),
  e = emojis;

module.exports = {
  start: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете створити роль з назвою \`Giveaway Manger\` та дати доступ до команд \`start & create & edit ...\` або встановіть свою роль, використовуючи команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
    duration: `${e.error} Введіть корректне значення \`часу\`!\n> Приклад: \`1d (1 день)\`, \`1h (1 година)\`, \`1m (1 хвилина)\`, \`1s (1 секунда)\`!`,
    argswinners: `${e.error} Введіть корректне значення \`числа переможів\`!\n> Приклад: \`${prefix}start 1h 4(Число переможців) Nitro\``,
    prize: `${e.error} Додайте до розіграшу \`нагороду\`!\n> Приклад: ${prefix}start 1h 1 \`Nitro(Ваша нагорода)\``,
  },

  create: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете створити роль з назвою \`Giveaway Manger\` та дати доступ до команд \`start & create & edit ...\` або встановіть свою роль, використовуючи команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
    channel: `${e.error} Ви повинні вказати \`канал\`!\n> Приклад: ${prefix}create \`#channel (Канал для розіграшу)\` 1h 1 Nitro!`,
    otherServer: `${e.error} Ви не можете створювати \`розіграші\` на других серверах!`,
    duration: `${e.error} Вкажіть корректний \`час\`!\n> Приклад: \`1d (1 день)\`, \`1h (1 година)\`, \`1m (1 хвилина)\`, \`1s (1 секунда)\`!`,
    argswinners: `${e.error} Вкажіть \`кіль-сть переможців\`!\n> Приклад: \`${prefix}create #channel 1h 4(Кіль-сть переможців) Nitro\``,
    prize: `${e.error} Додайте \`нагороду\`!\n> Приклад: ${prefix}create #channel 1h 1 \`Nitro(Ваша нагорода)\``,
    good: `${e.success} ** Я розпочав \` розіграш \` у вказанному каналі: **`,

    giveaway: `${e.gift} **РОЗІГРАШ РОЗПОЧАТО** ${e.gift}`,
    giveawayEnded: `${e.end} **РОЗІГРАШ ЗАВЕРШЕНО** ${e.end}`,

    timeRemaining: `${e.time} **Завершення через:** **{duration}**!`,
    inviteToParticipate: (message) => "КЛАЦНИ НА 🎉 ДЛЯ УЧАСТІ В РОЗІГРАШІ!",
    winMessage: (message) => "🎉 | Вітаємо, {winners}! Ти виграв: **{prize}**!",
    embedFooter: "ManageGift",
    noWinner: "❌ Розіграш відмінено, так як недостатньо участників :(",
    hostedBy: `${e.hoste} **Власник розіграшу:** {user}`,
    winners: "Переможець(ів) 🎉",
    endedAt: "Завершився в",
  },

  units: {
    seconds: "секунд(и)",
    minutes: "хвилин(и)",
    hours: "годин(и)",
    days: "день(ів)",
  },

  lastchance: { content: `${e.warning} **НЕ ВТРАТЬ СВІЙ ШАНС!** ${e.warning}` },

  end: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете створити роль з назвою \`Giveaway Manger\` та дати доступ до команд \`start & create & edit ...\` або встановіть свою роль, використовуючи команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
    msg: `${e.error} Вам необхідно вказати корректний ID повідомлення з розіграшом.`,
    err: `${e.error} Помилка при отриманні даних розіграша: `,
    errmod: `${e.error} Вказаний розіграш завершений або видалений!`,
    good: `${e.success} Розіграш буде завершений через:`,
  },

  reroll: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете створити роль з назвою \`Giveaway Manger\` та дати доступ до команд \`start & create & edit ...\` або встановіть свою роль, використовуючи команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
    msg: `${e.error} Вам необхідно вказати корректний ID повідомлення з розіграшом.`,
    err: `${e.error} Помилка при отриманні даних розіграша: `,
    good: ":tada: Новий(і) переможець(і): {winners}! Вітаємо!",
    parts: `${e.error} Недостатньо участників в розіграші, для обрання нового переможця!`,
  },

  edit: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете створити роль з назвою \`Giveaway Manger\` та дати доступ до команд \`start & create & edit ...\` або встановіть свою роль, використовуючи команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
    msg: `${e.error} Вам необхідно вказати корректний ID повідомлення з розіграшом.`,
    wipr: `${e.error} Вам необхідно вказати кіль-сть переможів!`,
    argswinners: `${e.error} Вкажіть \`кіь-сть переможців\`!\n> Приклад: \`${prefix}edit {giveawayid} winners 2(Кіль-сть переможців)\``,
    prize: `${e.error} Додайте \`нагороду\`!\n> Приз: ${prefix}edit {giveawayid} prize \`Nitro (Ваша нагорода)\``,
    timepr: (numberOfSecondsMax) =>
      `${e.success} Нагорода розіграша буде оновлена через \`${numberOfSecondsMax}\` секунд.`,
    timwi: (numberOfSecondsMax) =>
      `${e.success} Кіль-сть переможців буде оновлено через \`${numberOfSecondsMax}\` секунд.`,
    err: `${e.error} Помилка при отриманні даних розіграша: `,
    errmod: `${e.error} Нічого не знайдено по цьому ID. Можливо данийрозіграш завершено або видалено.`,
  },

  delete: {
    done: `${e.success} Розіграш був успішно видалений!`,
    otherServer: `${e.error} Ви не можете керувати цим \`розіграшем\` на цьому сервері!`,
    otherUser: `${e.error} Ви не можете керувати цим \`розіграшем\`, так як Ви не є його власником!`,
  },

  lang: {
    perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете створити роль з назвою \`Giveaway Manger\` та дати доступ до команд \`start & create & edit ...\` або встановіть свою роль, використовуючи команду \`${prefix}setrole [on / off] {Ваша роль}\`!`,
    msg: `${e.error} Вкажіть корректну мову! Список доступних мов - (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
  },

  set: {
    args: `${e.error} | Введіть \`on\` або \`off\``,
    mon: `${e.success} | setmention команда успішно активована!`,
    moff: `${e.success} | setmention команда успішно деактивована!`,
    rlargs: `${e.error} | Введіть \`on\`, \`off\` або роль!`,
    rlerr: `${e.error} | Роль з вказаною назвою не знайдена!`,
    ron: `${e.success} | Роль менеджер активований!`,
    roff: `${e.success} | Роль менеджер деактивований!`,
  },

  invite: {
    main: "Головні посилання",
    disc: `Введіть \`${prefix}invite copy\`, щоб отримаи посилання для копіювання!`,
    web: `${e.link} ManageGift веб-сейт`,
    inv: `${e.add} Запросити бота на сервер`,
    vote: `${e.vote} Віддати голос нза бота`,
    sup: `${e.supp} Підключитись до серверу підтримки`,
  },

  help: {
    title: "Довідник по боту:",
    disc: "● Тут Ви можете знайти всі команди для `ManageGift` бота",
    giveawaycmd: `${e.givcmd} Команди для проведення розіграшей - (6)`,
    featuredcmd: `${e.featured} Команди для налагодження бота - (4)`,
    infocmd: `${e.info} Інформаційні команди - (4)`,
    ownerbot: `${e.owner} Команди для власника бота - (2)`,
    link: `${e.link} Посилання:`,
  },

  stats: {
    title: "ManageGift інформація:",
    info: `Це бот з відкритим вихідним кодом, який дозволяє з легкістю створювати розіграші і надає безліч різних функцій. Бот розроблений на \`javascript\` мові. Розробник: ${owner.name}`,
    stats: `${e.stats} • __Статистика:__`,
    stat: "`Серверів:`",
    set: "`Участників:`",
    ch: "`Каналів:`",
    ver: `${e.ver} • __Версія:__`,
    ram: `${e.ram} • __RAM__`,
    on: `${e.on} • __В мережі__`,
    for: "**В мережі вже** ",
    moreinfo: `${e.info} • __Доп. інформація:__`,
    comd: "`Всього команд:`",
    giv: "`Проведено розіграшей:`",
  },

  prefixerror: `${e.error} Введіть корректний префікс!`,
  prefixerrcarc: `${e.error} | Префікс не може бути більше 5-ти символів!`,
  setprefix: `${e.success} Префікс було змінено на `,

  info: {
    ping: `> ${e.ping} Мій пінг `,
  },

  cooldown: {
    err: `${e.error} | **Ви повинні зачекати \`4 секунди\` ${e.time} перед повторним використанням команди!**`,
  },

  myprefix: {
    hello: `${e.info} | Привіт `,
    prefixis: (guildData) =>
      ` мій префікс на цьому сервері: \`${guildData.prefix}\`. Використовуйте команду \`${guildData.prefix}help\`, щоб отримати список всіх команд!`,
  },

  blacklist: {
    blacklist:
      ":lock: **Ви не можете використовувати `ManageGift команди`, так як Ваш сервер був доданий до `чорного списку`!**",
  },
};
