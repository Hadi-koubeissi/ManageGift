//russian
let config = require(`../config.js`);
let e = config.emojis;

module.exports = {
    start: {
        perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль для использования данной команды:`,
        channel: `${e.error} Вы должны указать \`правильный канал!\`\n> Пример: %gstart \`#giveawaychannel (giveawaychannel: канал для сообщения)\` 1h 1 Nitro!`,
        duration: `${e.error} Укажите корректное \`время\`, пожалуйста!\n> Пример: \`1d (1 день)\`, \`1h (1 час)\`, \`1m (1 минута)\`, \`1s (1 секунда)\`!`,
        argswinners: `${e.error} Укажите \`кол-во побидителей!\`\n> Пример: \`%gstart #giveawaychannel 1h 4(4: кол-во побидителей) Nitro\``,
        prize: `${e.error} Добавьте \`приз\`, пожалуйста!\n> Пример: %gstart #giveawaychannel 1h 1 \`Nitro(Nitro: приз)\``,
        good: `${e.success} **Я запустил \`розыгрыш\` в канале:**`,
  
        giveaway: `${e.gift} **РОЗЫГРЫШ НАЧАЛСЯ** ${e.gift}`,
        giveawayEnded: `${e.end} **РОЗЫГРЫШ ОКОНЧЕН** ${e.end}`,
  
        timeRemaining: `**ОКОНЧАНИЕ ЧЕРЕЗ ${e.time}:** **{duration}**!`, 
        inviteToParticipate: (message) => `НАЖМИТЕ НА ${config.reaction}, ЧТОБЫ УЧАСТВОВАТЬ!`,
        winMessage: (message) => `${config.reaction} | Поздравляем, {winners}! Ты выиграл: **{prize}**!`,
        embedFooter: `**РОЗЫГРЫШ**`,
        noWinner: `❌ Розыгрыш отменён, так как недостаточно участников :(`,
        hostedBy: `**ИНИЦИАТОР ${e.hoste}:** {user}`,
        winners: `ПОБИДИТЕЛЕЙ`,
        endedAt: `ЗАКОНЧИЛСЯ В`,
      },
    
      units: {
        seconds: `секунд(ы)`,
        minutes: `минут(ы)`,
        hours: `час(ов)`,
        days: `день(ей)`,
      },
  
      end: {
        perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль для использования данной команды:`,
        msg: `${e.error} Укажите корректный ID!`,
        err: `${e.error} Неизвестный ID для розыграша:`,
        errmod: `${e.error} Этот розыграш окончен или удалён!`,
        good: `${e.success} Розыграш будет окочен через:`
      },
  
      reroll: {
        perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль для использования данной команды:`,
        msg: `${e.error} Укажите корректный ID!`,
        err: `${e.error} Неизвестный ID для розыграша:`,
        good: `:tada: Новый побидитель(и): {winners} ! Поздравляем!`,
        parts: `${e.error} В розыграше участвовало недостаточно участников!`
      },
  
      edit: {
        perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль для использования данной команды:`,
        msg: `${e.error} Укажите корректный ID!`,
        argswinners: `${e.error} укажите \`кол-во побидителей!\`\n> Пример: \`%gstart #giveawaychannel 1h 2(2: кол-во побидителей) Nitro\``,
        prize:  `${e.error} добавьте \`приз\`, пожалуйста!\n> Пример: %gstart #giveawaychannel 1h 2 \`Nitro(Nitro: приз)\``,
        err: `${e.error} Неизвестный ID для розыграша:`,
        good: `${e.success} В розыграш были внесены изменения. Изменения вступят в силу через 5 секунд!`,
        errmod: `${e.error} Что-то не так. Возможно этот розыграш был удалён или окончен?!`
      },
  
      lang: {
        perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль для использования данной команды:`,
        msg: `${e.error} пожалуйста, укажите язык (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
        err: `${e.error} Указанный язык уже установлен на сервере! Может Вы хотите установить другой?!`
      },
  
      set: {
        perms: `${e.error} У Вас нет права \`MANAGE_MESSAGES\`, Вы можете создать роль для использования данной команды:`,
        msg: `${e.error} Укажите раздел для изменения настроек! Параметр \`mention\` будет оповещать пользователей когда розыгрыш начался, \`logs\` для логирования розыграшей и \`role\` для предоставления доступа к командам розыграша.`,
        args: `${e.error} Укажите \`on\` для активации и \`off\` для отключения.`,
        erroff: `${e.error} Данная функция уже отключена! Хотите её включить?`,
        erron: `${e.error} Данная функция уже включена! Хотите её отключить?`,
        mon: `${e.success} Я активирую \`everyone\` для следующих розыграшей.`,
        moff: `${e.success} Я отключу \`everyone\` для следующих розыграшей.`,
        channel: `${e.error} Укажите канал для логирования розыграшей!\n> Пример: %gset logs \`#logs\` логи бота и команд.`,
        chon: `${e.success} Канал логирования установлен! Канал: `,
        role: `${e.error} Укажите корректную роль!\n> Пример: %gset role \`@giveaways\` для установки роли.`,
        ron: `${e.success} Роль доступа к командам установлена:`,
      },
  
      logs: {
        raddtitle: "Новый участник",
        raddmsg1: "Участник",
        raddmsg2: "подключился к розыграшу",
        rremtitle: "Бывший участник",
        rremmsg1: "Участник",
        rremmsg2: "снял реакцию с розыграша",
      },

      invite: {
        main: `Главные ссылки`,
        disc: `Введите \`${config.prefix}invite copy\`, чтобы получить ссылку!`,
        web: `${e.link} ManageGift's сайт`,
        inv: `${e.add} Пригласить ManageGift's`,
        vote: `${e.vote} Голосовать за ManageGift's`,
        sup: `${e.supp} Сервер поддержки бота`
      },

    help:{
    title: `ManageGift's информация:`,
    disc: 'Это open-source проект для создания розыграшей с возможностью полной настройки. Бот написан на языке `javascript` и его сделал: ! -  HaDi KouBeIssI | 🇱🇧#4001! Перевод: LWJerri#3290',
    cm: `__${e.command} ManageGift's команды:__`,
    cmd: `**${config.prefix}start ${e.right} Начать розыграш.**\n**${config.prefix}end ${e.right} Окончить розыграш.**\n**${config.prefix}edit ${e.right} Изменить параметры розыграша.**\n**${config.prefix}reroll ${e.right} Выбрать нового победителя.**\n **${e.featured}__Полезные команды:__**\n**${config.prefix}setlang ${e.right} Установить язык.**\n**${config.prefix}set logs ${e.right} Установить канал для логов.**\n**${config.prefix}set mention on ${e.right} Активировать упоминания при розыграше.**\n**${config.prefix}set mention off ${e.right} Отключить упоминания при розыграше.**`,
    cmm: `__${e.command} Информация по командам__`,
    cmdd: `**${config.prefix}help ${e.right} Показать все команды бота.**\n**${config.prefix}ping ${e.right} Пинг бота.**\n**${config.prefix}invite ${e.right} Пригласительные ссылки.**`,
    stats: `__${e.stats} Статистика:__`,
    stat: `\`Серверов:\``,
    set: `\`Участников:\``,
    ver: `__${e.ver} Версии:__`,
    moreinfo: `__${e.info} Больше информации:__`,
    comd: `\`Кол-во команд:\``,
    giv: `\`Кол-во розыграшей:\``,
    link: `__${e.link} Ссылки:__`
      },
    prefixerror: `${e.error} Укажите желаемый префикс!`,
    setprefix: `${e.success} Префикс был изменён на `,
    info:{
        ping: `> ${e.ping} Мой пинг `,
    }
}