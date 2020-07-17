//ukranian
let config = require(`../config.js`);
let e = config.emojis;
let prefix = config.prefix;

module.exports = {

    start: {
        perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
        channel: `${e.error} Ви повинні вказати \`правильний канал!\` \n> Приклад: ${prefix}start \`#giveawaychannel (giveawaychannel: канал для повідомлення)\` 1h 1 Nitro!.`,
        duration: `${e.error} Вкажіть коректний \`час\`, будь ласка! \n> Приклад: \`1d (1 день)\`, \`1h (1 година)\`, \`1m (1 хвилина)\`, \`1s (1 секунда)\`!.`,
        argswinners: `${e.error} Вкажіть \`кол-во перемежців!\` \n> Приклад: \`${prefix}start #giveawaychannel 1h 4(4: кол-во переможців) Nitro\``,
        prize: `${e.error} Додайте \`приз\`, будь ласка! \n> Приклад: ${prefix}start #giveawaychannel 1h 1 \`Nitro(Nitro: приз)\``,
        good: `${e.success} **Я розпочав \`розіграш\` в каналі:**`,
  
        giveaway: `${e.gift} **РОЗІГРАШ ПОЧАВСЯ** ${e.gift}`,
        giveawayEnded: `${e.end} **РОЗІГРАШ ЗАКІНЧИВСЯ** ${e.end}`,
  
        timeRemaining: `**ЗАКІНЧЕННЯ ЧЕРЕЗ ${e.time}:** **{duration}** !`, 
        inviteToParticipate: (message) => `НАЖМІТЬ НА ${config.reaction}, ЩАБ ВЗЯТИ УЧАСТЬ!`,
        winMessage: (message) => `${config.reaction} | Вітаєм, {winners}! Ти виграв: **{prize}**!`,
        embedFooter: `**РОЗІГРАШ**`,
        noWinner: `❌ Розіграш відмінено, тому що недостатньо учасників.`,
        hostedBy: `**ІНІЦІАТОР ${e.hoste}:** {user}`,
        winners: `ПЕРЕМОЖЦІВ`,
        endedAt: `ЗАКІНЧЕТЬСЯ В`,
      },
    
      units: {
        seconds: `секунд(и)`,
        minutes: `хвилин(и)`,
        hours: `годин(и)`,
        days: `день(ів)`,
      },
  
      end: {
        perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
        msg: `${e.error} Вкажіть коректний ID!`,
        err: `${e.error} Невідомий ID для розіграша:`,
        errmod: `${e.error} Цей розіграш закінчений або видалений!`,
        good: `${e.success} Розіграш буде закінчений через:`
      },
  
      reroll: {
        perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
        msg: `${e.error} Вкажіть коректний ID!`,
        err: `${e.error} Невідомий ID для розіграша:`,
        good: `:tada: Новий переможець(і): {winners}! Вітаємо!`,
        parts: `${e.error} В розіграші взяло участь недостатньо учасників!`
      },
  
      edit: {
        perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
        msg: `${e.error} Вкажіть коректний ID!`,
        argswinners: `${e.error} укажіть \`кол-во переможців!\`\n> Приклад: \`${prefix}start #giveawaychannel 1h 2(2: кол-во переможців) Nitro\``,
        prize:  `${e.error} додайте \`приз\`, будь ласка!\n> Приклад: ${prefix}start #giveawaychannel 1h 2 \`Nitro(Nitro: приз)\``,
        err: `${e.error} Невідомий ID для розіграша:`,
        good: `${e.success} В розіграш були внесені зміни. Зміни вступлять в силу через 5 секунд!`,
        errmod: `${e.error} Щось не так. Можливо цей розіграш був видалений або закінчений?!`
      },
  
      lang: {
        perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
        msg: `${e.error} будь ласка, вкажіть мову (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
        err: `${e.error} Вказана мова вже встановлена на сервері! Може Ви хочете встановити іншу?!`
      },
  
      set: {
        perms: `${e.error} У Вас немає права \`MANAGE_MESSAGES\`, Ви можете зробити роль для використання цієї ролі:`,
        msg: `${e.error} Вкажіть розділ для зміни конфігурації! Параметр \`mention\` буде оповіщувать учасників коли розіграш буде починатися, \`logs\` для логів розіграшей, та \`role\` для видачі доступа до команд з розіграшами.`,
        args: `${e.error} Вкажіть \`on\` для активації або \`off\` для відключення.`,
        erroff: `${e.error} Дана функція вже відключена! Хочете її увімкнуть?`,
        erron: `${e.error} Дана функція вже включена! Хочете її відключить?`,
        mon: `${e.success} Я активую \`everyone\` для наступних розіграшів.`,
        moff: `${e.success} Я відключу \`everyone\` для наступних розіграшів.`,
        channel: `${e.error} Вкажіть канал для логування розіграшів!\n> Приклад: ${prefix}set logs \`#logs\` логи бота та команд.`,
        chon: `${e.success} Канал логування встановлений! Канал: `,
        role: `${e.error} Вкажіть коректну роль!\n> Приклад: ${prefix}set role \`@giveaways\` для встановки ролі.`,
        ron: `${e.success} Роль доступа до команд встановлена:`,
      },
  
      logs: {
        raddtitle: "Новий учасник",
        raddmsg1: "Учасник",
        raddmsg2: "подключився до розіграшу",
        rremtitle: "Минулий учасник",
        rremmsg1: "Учасник",
        rremmsg2: "зняв реакцію з розіграша",
      },

      invite: {
        main: `Головні посилання`,
        disc: `Введіть \`${prefix}invite copy\`, щоб отримати посилання!`,
        web: `${e.link} ManageGift's сайт`,
        inv: `${e.add} Запросити ManageGift's`,
        vote: `${e.vote} Голосувати за ManageGift's`,
        sup: `${e.supp} Сервер підтримки бота`
      },

    help:{
    title: `ManageGift's информація:`,
    disc: 'Це open-source проект для створення розіграшей с можливістю повной зміни конфігурації. Бот написаний на мові `javascript language` і розробив: ! -  HaDi KouBeIssI | 🇱🇧#4001! Перевод: LWJerri#3290',
    cm: `__${e.command} ManageGift's команди:__`,
    cmd: `**${prefix}start ${e.right} Розпочати розіграш.**\n**${prefix}end ${e.right} Закінчити розіграш.**\n**${prefix}edit ${e.right} Змінити параметри розіграша.**\n**${prefix}reroll ${e.right} Выбрати нового переможця.**\n **${e.featured}__Корисні команди:__**\n**${prefix}setlang ${e.right} Змінити мову.**\n**${prefix}set logs ${e.right} Встановити канал для логів.**\n**${prefix}set mention on ${e.right} Активувать повідомлення для розіграшів.**\n**${prefix}set mention off ${e.right} Відключіть повідомлення для розіграшів.**`,
    cmm: `__${e.command} Информація по командам__`,
    cmdd: `**${prefix}help ${e.right} Показати всі команди бота.**\n**${prefix}ping ${e.right} Пінг бота.**\n**${prefix}invite ${e.right} Запрошенні посилання.**`,
    stats: `__${e.stats} Статистика:__`,
    stat: `\`Серверів:\` `,
    set: `\`Учасників:\` `,
    ver: `__${e.ver} Версія:__`,
    moreinfo: `__${e.info} Більше информації:__`,
    comd: `\`Кол-во команд:\` `,
    giv: `\`Кол-во розіграшів:\` `,
    link: `__${e.link} Посиланння:__`
      },

    prefixerror: `${e.error} Вкажіть бажаємий префікс!`,
    setprefix: `${e.success} Префікс був змінений на `,
   
    info:{
        ping: `> ${e.ping} Мій пінг `,
    }
}