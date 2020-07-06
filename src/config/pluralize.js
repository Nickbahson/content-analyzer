export const uncountablesPlurals = {
	adulthood: true,
	advice: true,
	agenda: true,
	aid: true,
	alcohol: true,
	ammo: true,
	anime: true,
	athletics: true,
	audio: true,
	bison: true,
	blood: true,
	bream: true,
	buffalo: true,
	butter: true,
	carp: true,
	cash: true,
	chassis: true,
	chess: true,
	clothing: true,
	cod: true,
	commerce: true,
	cooperation: true,
	corps: true,
	debris: true,
	diabetes: true,
	digestion: true,
	elk: true,
	energy: true,
	equipment: true,
	excretion: true,
	expertise: true,
	flounder: true,
	fun: true,
	gallows: true,
	garbage: true,
	graffiti: true,
	headquarters: true,
	health: true,
	herpes: true,
	highjinks: true,
	homework: true,
	housework: true,
	information: true,
	jeans: true,
	justice: true,
	kudos: true,
	labour: true,
	literature: true,
	machinery: true,
	mackerel: true,
	mail: true,
	media: true,
	mews: true,
	moose: true,
	music: true,
	mud: true,
	manga: true,
	news: true,
	pike: true,
	plankton: true,
	pliers: true,
	police: true,
	pollution: true,
	premises: true,
	rain: true,
	research: true,
	rice: true,
	salmon: true,
	scissors: true,
	seo: true,
	series: true,
	sewage: true,
	shambles: true,
	shrimp: true,
	species: true,
	staff: true,
	swine: true,
	tennis: true,
	traffic: true,
	transportation: true,
	trout: true,
	tuna: true,
	wealth: true,
	welfare: true,
	whiting: true,
	wildebeest: true,
	wildlife: true,
	wordpress: true,
	you: true,
}

export const irregularPluralsRules = [
	// Pronouns.
	[ 'I', 'we' ],
	[ 'me', 'us' ],
	[ 'he', 'they' ],
	[ 'she', 'they' ],
	[ 'them', 'them' ],
	[ 'myself', 'ourselves' ],
	[ 'yourself', 'yourselves' ],
	[ 'itself', 'themselves' ],
	[ 'herself', 'themselves' ],
	[ 'himself', 'themselves' ],
	[ 'themself', 'themselves' ],
	[ 'is', 'are' ],
	[ 'was', 'were' ],
	[ 'has', 'have' ],
	[ 'this', 'these' ],
	[ 'that', 'those' ],

	// Words ending in with a consonant and `o`.
	[ 'echo', 'echoes' ],
	[ 'dingo', 'dingoes' ],
	[ 'volcano', 'volcanoes' ],
	[ 'tornado', 'tornadoes' ],
	[ 'torpedo', 'torpedoes' ],

	// Ends with `us`.
	[ 'genus', 'genera' ],
	[ 'viscus', 'viscera' ],

	// Ends with `ma`.
	[ 'stigma', 'stigmata' ],
	[ 'stoma', 'stomata' ],
	[ 'dogma', 'dogmata' ],
	[ 'lemma', 'lemmata' ],
	[ 'schema', 'schemata' ],
	[ 'anathema', 'anathemata' ],

	// Other irregular rules.
	[ 'ox', 'oxen' ],
	[ 'axe', 'axes' ],
	[ 'die', 'dice' ],
	[ 'yes', 'yeses' ],
	[ 'foot', 'feet' ],
	[ 'eave', 'eaves' ],
	[ 'goose', 'geese' ],
	[ 'tooth', 'teeth' ],
	[ 'quiz', 'quizzes' ],
	[ 'human', 'humans' ],
	[ 'proof', 'proofs' ],
	[ 'carve', 'carves' ],
	[ 'valve', 'valves' ],
	[ 'looey', 'looies' ],
	[ 'thief', 'thieves' ],
	[ 'groove', 'grooves' ],
	[ 'pickaxe', 'pickaxes' ],
	[ 'whiskey', 'whiskies' ],
	[ 'thou', 'you' ],
]

export const pluralizationRules = [

	// unCountableRules
	[ /[^aeiou]ese$/i, '$0' ], // "chinese", "japanese"
	[ /deer$/i, '$0' ], // "deer", "reindeer"
	[ /fish$/i, '$0' ], // "fish", "blowfish", "angelfish"
	[ /measles$/i, '$0' ],
	[ /o[iu]s$/i, '$0' ], // "carnivorous"
	[ /pox$/i, '$0' ], // "chickpox", "smallpox"
	[ /sheep$/i, '$0' ],

	[ /s?$/i, 's' ],
	[ /[^\u0000-\u007F]$/i, '$0' ],
	[ /([^aeiou]ese)$/i, '$1' ],
	[ /(ax|test)is$/i, '$1es' ],
	[ /(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es' ],
	[ /(e[mn]u)s?$/i, '$1s' ],
	[ /([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1' ],
	[ /(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i' ],
	[ /(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae' ],
	[ /(seraph|cherub)(?:im)?$/i, '$1im' ],
	[ /(her|at|gr)o$/i, '$1oes' ],
	[ /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a' ],
	[ /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a' ],
	[ /sis$/i, 'ses' ],
	[ /(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves' ],
	[ /([^aeiouy]|qu)y$/i, '$1ies' ],
	[ /([^ch][ieo][ln])ey$/i, '$1ies' ],
	[ /(x|ch|ss|sh|zz)$/i, '$1es' ],
	[ /(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices' ],
	[ /\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice' ],
	[ /(pe)(?:rson|ople)$/i, '$1ople' ],
	[ /(child)(?:ren)?$/i, '$1ren' ],
	[ /eaux$/i, '$0' ],
	[ /m[ae]n$/i, 'men' ],
]