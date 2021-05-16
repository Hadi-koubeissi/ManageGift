const mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	config = require("../config.js");
module.exports = mongoose.model("Guild", new Schema({

	/* REQUIRED */
	id: { type: String }, // Discord ID of the guild
    
	/* BASIC CONF */
	language: { type: String, default: config.basiclang }, // Language of the guild
	prefix: { type: String, default: config.prefix }, // Default or custom prefix of the guild
	plugins: { type: Object, default: { // Plugins data
		//mention
		mention: {
			enabled: false
		},
		//role
		role: { 
			enabled: false,
			role: null,
		},
	}},
	/* ROLE & INVITE COUNT TO JOIN GIVEAWAY */
	giveawayconfigs: { type: Object, default: { // Plugins data
		//role
		role: { 
			enabled: false,
			role: null
		},
	}},
	/* 	FOR PREMIUM SERVERS */ 
	premium: { type: Boolean, default: false }
}));