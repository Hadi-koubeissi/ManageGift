let config = require(`../config.js`);
let e = config.emojis;

module.exports = {

    start: {
        perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
        channel: `${e.error} يجب ان تفوم بفعل منشن \`لروم صالح\` لتثبيت القيف اوي فيه\n> مثال: %gstart \`#giveawaychannel (giveawaychannel: هذة الغرفة)\``,
        duration: `${e.error} عليك ادخال \`وقت صالح\`\n مثا: 1d`,
        argswinners: `${e.error} عليك ادخال عدد \`فائزين صالح\`\n> مثال: %gstart #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
        prize: `${e.error} ادخل ماهي \`الجائزة\` رجاء\n> مثال: %gstart #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
        good: `${e.success} ** تم انشاء \`القيف اوي\` في الغرفة التالية ↘↘:**`,
  
        giveaway: `${e.gift} القيف اوي بدء ${e.gift}`,
        giveawayEnded: `${e.end} القيف اوي انتهى ${e.end}`,
  
        timeRemaining: `** الوقت المتبقي ${e.time}:** **{duration}**`, 
        inviteToParticipate: (message) => `.!اضغط على ${config.reaction} للدخول الى القيف اوي`,
        winMessage: (message) => `${config.reaction} {winners} ،مبروك ! **{prize}** : لقد فزت`,
        embedFooter: `** قيف اوي **`,
        noWinner: `❌ .تم الغاء القيف اوي لا يوجد عدد مشاركين كافي`,
        hostedBy: `**: ${e.hoste} منشئ القيف اوي {user}**`,
        winners: `: الفائز/ين`,
        endedAt: `انتهت في ↪`,
      },
    
      units: {
        seconds: `ثانيه`,
        minutes: `دقيقه`,
        hours: `ساعه`,
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
  
      edit: {
        perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
        msg: `${e.error} الرجاء ادخال ايدي القيف اوي الصحيح!`,
        argswinners: `${e.error} عليك ادخال عدد \`فائزين صالح\`\n> مثال: %gstart #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
        prize:  `${e.error} ادخل ماهي \`الجائزة\` رجاء\n> مثال: %gstart #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
        err: `${e.error} تعذر التعرف على القيف اوي هذه:`,
        good: `${e.success} سيتم تعديل القيف اوي بالمعلرمات الجديدة. ستسري التغيرات في غضون 5 ثوان!.`,
        errmod: `${e.error} هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`
      },
  
      lang: {
        perms: `${e.error} ليس لديك رتبة ذات صلاحية \n\`MANAGE_MESSAGES \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
        msg: `${e.error} الرجاء ادخال لغة صالحة مثال: (\`ar\`, \`en\`) !.`,
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
        channel: `${e.error} يرجى توجيهي الى قناة سجلات القيف اوي \n مثال: %gset logs \`#logs(#logs: غرفة سجلات القيف اوي)\``,
        chon: `${e.success} تم تحديد غرفة سجلات القيف اوي التي هي :`,
        role: `${e.error} الرجاء اختيار رتبة صالحة\n مثال: %gset role \`@giveaways\` لاختيار الرتبة.`,
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
        disc: `للحصول على رابط قابل للنسخ اكتب الامر التالي \n \`${config.prefix}invite copy\``,
        web: `${e.link} رابط موقع ManageGift's BoT`,
        inv: `${e.add} رابط اضافة ManageGift's BoT`,
        vote: `${e.vote} التصويت ل ManageGift's BoT`,
        sup: `${e.supp} سيرفر الدعم الفني`
      },

      help:{
        title: `ManageGift's Information:`,
        disc: 'انه بوت مفتوح المصدر، يسمح لك بانشاء القيف اوي بسهولة تامة ويوفر لك العديد من المميزات. \n :تم برمجة البوت بلغة `javascript language` :وايضا بواسطة ! -  HaDi KouBeIssI | 🇱🇧#4001',
        cm: `__${e.command} ManageGift's Commands:__`,
        cmd: `**${config.prefix}start ${e.right} لانشاء قيف اوي.**\n**${config.prefix}end ${e.right} لانهاء قيف اوي.**\n**${config.prefix}edit ${e.right} لتعديل قيف اوي.**\n**${config.prefix}reroll ${e.right} لاختيار فائز جديد.**\n **${e.featured}__:الاوامر المميزة__**\n**${config.prefix}setlang ${e.right} لتغيير لغة البوت في السيرفر.**\n**${config.prefix}set logs ${e.right} لتثبيت روم السجلات/اللوق.**\n**${config.prefix}set mention on ${e.right} لتفعيل منشن الجميع عند بداء كل قيف اوي جديد.**\n**${config.prefix}set mention off ${e.right} لالغاء تفعيل المنشن.**`,
        cmm: `__${e.command} Info Commands__`,
        cmdd: `**${config.prefix}help ${e.right} لعرض قائمة الاوامر ومعلومات البوت.**\n**${config.prefix}ping ${e.right} لعرض حالة استجابة البوت.**\n**${config.prefix}invite ${e.right} لعرض الروابط الاساسية الخاصة بالبوت.**`,
        stats: `__${e.stats} :الاحصائيات__`,
        stat: `\`:إجمالي السيرفرات\` `,
        set: `\`:إجمالي المستخدمين\` `,
        ver: `__${e.ver} :الإصدارات__`,
        moreinfo: `__${e.info} :المزيد من المعلومات__`,
        comd: `\`:مجموع الأوامر\` `,
        giv: `\`:جميع القيف اويات\` `,
        link: `__${e.link} :الروابط__`
          },
        prefixerror: `${e.error} اكتب بادئه صالحه!.`,
        setprefix: `${e.success} البادئه الان في هذا السيرفر اصبحت  `,      
      info:{
        ping: `> ${e.ping} سرعة استجابة البوت  `,
    }


}