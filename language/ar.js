//arabic
let config = require(`../config.js`);
let emojis = require(`../emojis.json`)
let e = emojis;
let prefix = config.prefix;

module.exports = {
  create: {
    perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    channel: `${e.error} يجب ان تفوم بفعل منشن \`لروم صالح\` لتثبيت القيف اوي فيه\n> مثال: ${prefix}create \`#giveawaychannel (giveawaychannel: هذة الغرفة)\``,
    otherServer: `${e.error} .!لا يمكنك انشاء \`قيف اوي\` في خادم اخر غير هذا`,
    duration: `${e.error} عليك ادخال \`وقت صالح\`\n مثا: 1d`,
    argswinners: `${e.error} عليك ادخال عدد \`فائزين صالح\`\n> مثال: ${prefix}create #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
    prize: `${e.error} ادخل ماهي \`الجائزة\` رجاء\n> مثال: ${prefix}create #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
    good: `${e.success} ** تم انشاء \`القيف اوي\` في الغرفة التالية ↘↘:**`,

    giveaway: `${e.gift} القيف اوي بدء ${e.gift}`,
    giveawayEnded: `${e.end} القيف اوي انتهى ${e.end}`,

    timeRemaining: `** الوقت المتبقي ${e.time}:** **{duration}**`,
    inviteToParticipate: (message) => `.!اضغط على🎉 للدخول الى القيف اوي`,
    winMessage: (message) => `🎉 {winners} ،مبروك ! **{prize}** : لقد فزت`,
    embedFooter: `** قيف اوي **`,
    noWinner: `❌ .تم الغاء القيف اوي لا يوجد عدد مشاركين كافي`,
    hostedBy: `**{user}**: ${e.hoste}** صانع القيف اوي**`,
    winners: `: الفائز/ون`,
    endedAt: `انتهت في ↪`,
  },

  units: {
    seconds: `ثانية`,
    minutes: `دقيقة`,
    hours: `ساعة`,
    days: `يوم`,
  },

  end: {
    perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
    err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
    errmod: `${e.error} هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`,
    good: `${e.success} هذه ابقيف اوي سوف تنتهي خلال:`
  },

  reroll: {
    perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
    err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
    good: `:tada: فائز/ين جدد : {winners} ! مبروك !.`,
    parts: `${e.error} لم يكن هناك عدد مشاركين كافي في القيف اوي لا يمكنني الاختيار !.`
  },

  delete: {
    done: `${e.success} تم سوف يتم مسح القيف اوي حالاً`,
    otherServer: `${e.error} لا يمكنك التحكم في سحب شخص آخر على هذا الخادم!`,
    otherUser: `${e.error} لا يمكنك التحكم في هذا السحب لأنك لست مالكه!`
  },
  edit: {
    perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
    time: `${e.error} الرجاء ادخال وقت صحيح \n> مثال: \`1m, 1h, 1d\``,
    errtime: `${e.error} يجب ان تكون مدة القيف اوي اقل من 10 ايام`,
    argswinners: `${e.error} عليك ادخال عدد \`فائزين صالح\`\n> مثال: ${prefix}create #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
    errwinners: `${e.error} يجب ان يكون عدد الفائزون بالقيف اوي اقل من 15 فائزاً`,
    prize: `${e.error} ادخل ماهي \`الجائزة\` رجاء\n> مثال: ${prefix}create #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
    err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
    good: `${e.success} تم سيتم تعديل التغيرات حالاً`,
    errmod: `${e.error} هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`
  },

  lang: {
    perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `${e.error} الرجاء ادخال لغة صالحة مثال: (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
    err: `${e.error} اللغة التي اذخلتها هي بالفعل لغة السيرفر. حاول تغيير اللغة لترى!.`
  },

  set: {
    perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `${e.error} يرجى الإشارة إلى وظيفة يتم تحديدها\n \`mention\` !.لعمل منشن للجميع لجميع الاعضاء عند كل قيف اوي جديد\n \`logs\` .!لتحديد قناة بها سجلات القيف اوي\n \`role\` لتعيين رتبة يمكنها استخدام جميع اوامر القيف اوي`,
    args: `${e.error} يرجى التحديد \`on\` للتفعيل، \`off\` لالغاء التفعيل!.`,
    erroff: `${e.error} هذة الوظيفة بالفعل معطلة. حاول تشغيلها لترى`,
    erron: `${e.error} هذة الوظيفة بالفعل مفعلة. حاول ان تلغي تفعيلها لترى`,
    mon: `${e.success} لقد قمت بتفعيل \`المنشن\` للقيف اوي القادم`,
    moff: `${e.success} تم الغاء تفعيل \`المنشن\` للقيف اوي القادم`,
    channel: `${e.error} يرجى توجيهي الى قناة سجلات القيف اوي \n مثال: ${prefix}set logs \`#logs(#logs: غرفة سجلات القيف اوي)\``,
    chon: `${e.success} تم تحديد غرفة سجلات القيف اوي التي هي :`,
    role: `${e.error} الرجاء اختيار رتبة صالحة\n مثال: ${prefix}set role \`@giveaways\` لاختيار الرتبة.`,
    ron: `${e.success} قمت بتحديد الدور البديل ب: `,
  },

  logs: {
    raddtitle: `عضو جديد`,
    raddmsg1: `هذا العضو`,
    raddmsg2: `لقد دخل هذه القيف اوي`,
    rremtitle: `مشارك سابق`,
    rremmsg1: `هذا العضو`,
    rremmsg2: `الغى دخوله في القيف اوي`,
  },

  invite: {
    main: `الروابط الاساسية`,
    disc: `للحصول على رابط قابل للنسخ اكتب الامر التالي \n \`${prefix}invite copy\``,
    web: `${e.link} رابط موقع ManageGift's BoT`,
    inv: `${e.add} رابط اضافة ManageGift's BoT`,
    vote: `${e.vote} التصويت ل ManageGift's BoT`,
    sup: `${e.supp} سيرفر الدعم الفني`
  },

  help: {
    title: `Help Documents Overview:`,
    disc: '● هنا يمكنك ان تجد جميع `ManageGift Commands`',
    giveawaycmd: `${e.givcmd} أوامر القيف آوي - (٦)`,
    featuredcmd: `${e.featured} أوامر المميزه - (٦)`,
    infocmd: `${e.info} أوامر المعلومات - (٤)`,
    ownerbot: `${e.owner} أوامر صاحب البوت - (٢)`,
    link: `__${e.link} :الروابط__`
  },

  stats: {
    title: `ManageGift's Information:`,
    info: `انه بوت مفتوح المصدر، يسمح لك بانشاء القيف اوي بسهولة تامة ويوفر لك العديد من المميزات. \n :تم برمجة البوت بلغة \`javascript language\` :وايضا بواسطة ${config.owner.name}`,
    stats: `__${e.stats} :الاحصائيات__`,
    stat: `\`:إجمالي السيرفرات\``,
    set: `\`:إجمالي المستخدمين\``,
    ch: `\`:إجمالي الرومات\``,
    ver: `__${e.ver} :الإصدارات__`,
    ram: `__${e.ram} الرامات__`,
    on: `${e.on} • __نشّط__`,
    for: `**نشّط لمدة** `,
    moreinfo: `__${e.info} :المزيد من المعلومات__`,
    comd: `\`:مجموع الأوامر\` `,
    giv: `\`:جميع القيف اويات\` `,
  },
  prefixerror: `${e.error} اكتب بادئه صالحه!.`,
  setprefix: `${e.success} البادئه الان في هذا السيرفر اصبحت  `,

  info: {
    ping: `> ${e.ping} سرعة استجابة البوت  `,
  },
  cooldown: {
    err: `${e.error} | ** يجب ان تنتظر \`4 ثواني\` لاعادة استعمال هذا الامر**`
  },
  blacklist: {
    blacklist: `:lock: | **لا يمكنك استخدام\`ManageGift Commands\` لانك ممنوع بسبب مخالفتك قوانين البوت`
  }
}