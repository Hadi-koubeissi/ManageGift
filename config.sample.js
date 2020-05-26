module.exports = {
    token: "XXXXX", //token bot | توكن البوت
	
	prefix: "XXXX", //prefix bot | برفكس البوت
	
	idbot: "XXXX", //Bot ID | ايدي البوت

    hostedBy: true,

	basiclang: "en", //basic lang | اللغة الاساسية
	
	auth: {
		support: "XXXX" //support server URL | رابط سيرفر السيبورت
	},

	status: [
		{
			name: `%ghelp | ManageGift's on {server} servers`,
			type: "LISTENING"
		},// الحالات | status
		{
			name: "https://github.com/Hadi-Koubeissi/GiveawayBoT.",
			type: "PLAYING"
		}
	],

	embeds: {
        color: "#FF4500", //Embed color | لون الامبد
        footers: "🎁 ManageGift's | http://managegift.ga" //Embed footer | الكتابة لي تكون اخر الامبد
    },

    events: {
        addcolor: "#DC143C", //The color of the event add | لون الامبد
		remcolor: "RED" //The color of the event remove  
		
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord | الايموجي الي بس تضغط عليها يصير القيف اوي اذا طلع لك ايرور بالكونسول يعني الايموجي ما تعرف بالديسكورد

    grole: "Giveaway Manger", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here | اذا سويت الرتبة واعطيتها لحد يصير يقدر يسوي قيف اوي ويستخدم جميع اوامر البوت بدون صلاحيات

    //all emojis in ManageGift support server | الاينوحيات بتلقوها بروم في السيبورت سيرفر الخاص بالبوت
	emojis: {

	success: "<:check:709868389505695916>",

	error: "<:error:709868467007913995>",
	
	gift: "<:giftbox:709868426382016592>",

	end: "<:present:710620794547470426>",

	time: "<:stopwatch:710623384957878302>",

	hoste: "<:avatar:710633368189927454>",

	ping: "<:4_:659424837890080818>",

	link: "<:7_:659426399391580221>",

	add: "<:9_:659427030626205696>",

	vote: "<:37:659439098163101746>",

	supp: "<:11:659427754734780416>",

	command: "<:copy:713395484093579304>",

	featured: "<:premium:713405393749016739>",

	right: "<:right:713401529897451520>",

	stats: "<:graphbar:714264468401553428>",

	ver: "<:version:714266855753121822>",
	
	info: "<:info:714274664423358504>"
	}

}
