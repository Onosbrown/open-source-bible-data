Catalogue = [
	{
		type: "bible",
		version: { abbrev: "KJV", full: "King James Version" },
		lang: "eng",
		licence: "Public Domain",
		source: "http://ebible.org/kjv/",
		files: {
			raw: { type: "local", file: "raw/eng-kjv_osis.xml", format: "OSIS" },
			simpleXml: "cooked/simple-xml/kjv.xml",
			sqlite: "cooked/sqlite/kjv.db"
		}
	},
	{
		type: "bible",
		version: { abbrev: "LEB", full: "Lexham English Bible" },
		lang: "eng",
		licence: "Custom",
		licence_url: "http://lexhamenglishbible.com/license/",
		source: "http://lexhamenglishbible.com/",
		files: {
			raw: { type: "local", file: "raw/LEB.xml", format: "OSIS" },
			simpleXml: "cooked/simple-xml/LEB.xml",
			sqlite: "cooked/sqlite/LEB.db"
		}
	},
	{
		type: "bible",
		version: { abbrev: "SBLGNT", full: "SBL Greek New Testament" },
		lang: "grc-koi",
		licence: "Custom",
		licence_url: "http://sblgnt.com/license/",
		source: "http://sblgnt.com/download/",
		files: {
			raw: { type: "local", file: "raw/SBLGNT.osis.xml", format: "OSIS" },
			simpleXml: "cooked/simple-xml/sbl.xml",
			sqlite: "cooked/sqlite/sbl.db"
		},
        note: "Marked up with morphological tags from <a href='https://github.com/morphgnt/sblgnt'>morphgnt</a> and Strongs numbers from <a href='https://github.com/morphgnt/strongs-dictionary-xml'>strongs-dictionary-xml</a>",
	},
	{
		type: "commentary",
		name: "SBL Greek New Testament Apparatus",
		licence: "Custom",
		licence_url: "http://sblgnt.com/license/",
		source: "http://sblgnt.com/download/",
		files: {
			raw: { type: "local", file: "raw/SBLGNTapp.osis.xml", format: "OSIS" }
		}
	},
	{
		type: "bible",
		version: { abbrev: "WLC", full: "Westminster-Leningrad Codex" },
		lang: "hbo",
		licence: "Public Domain",
		source: "https://github.com/openscriptures/morphhb/tree/master/wlc",
		files: {
			raw: { type: "remote", url: "https://github.com/openscriptures/morphhb/tree/master/wlc", format: "OSIS" },
			simpleXml: "cooked/simple-xml/wlc.xml",
			sqlite: "cooked/sqlite/wlc.db"
		}
	},
	{
		type: "bible",
		version: { abbrev: "POR-Almeida", full: "Tradução de João Ferreira de Almeida" },
		lang: "por",
		licence: "Public Domain",
		files: {
			simpleXml: "cooked/simple-xml/por.xml",
			sqlite: "cooked/sqlite/por.db"
		}
	},
	{
		type: "bible",
		version: { abbrev: "ReinaV", full: "Reina Valera Actualizada" },
		lang: "spa",
		licence: "Public Domain(?)",
		files: {
			simpleXml: "cooked/simple-xml/rva.xml",
			sqlite: "cooked/sqlite/rva.db"
		}
	},	
	{
		type: "bible",
		version: { abbrev: "ReinaV", full: "Reina Valera 1909" },
		lang: "spa",
		licence: "Public Domain",
		files: {
			simpleXml: "cooked/simple-xml/rvr.xml",
			sqlite: "cooked/sqlite/rvr.db"
		}
	},	
	{
		type: "bible",
		version: { abbrev: "SE", full: "Sagradas Escrituras" },
		lang: "spa",
		licence: "Public Domain",
		files: {
			simpleXml: "cooked/simple-xml/se.xml",
			sqlite: "cooked/sqlite/se.db"
		}
	},	
    {
        type: "lexicon",
		name: "Brown-Driver-Briggs Hebrew Lexicon with Strong's number tags",
		licence: "Public Domain",
		source: "https://github.com/openscriptures/HebrewLexicon",
		files: {
            xml: "cooked/strongified-bdb.xml",
            lift: "cooked/strongified-bdb-lift.xml",
            sqlite: "cooked/sqlite/bdb.db"
        }
    },
    {
        type: "lexicon",
		name: "Strong's Hebrew Dictionary",
		licence: "Public Domain",
		source: "https://github.com/openscriptures/HebrewLexicon",
		files: {
            lift: "cooked/HebrewStrong-lift.xml",
        }
    },
    {
        type: "other",
        name: "Bible-in-a-year reading programme",
        licence: "Unknown",
        source: "http://wolf.ox.ac.uk/~sjg/biay.xlsx",
        files: {
            json: "cooked/bible-in-a-year.json"
        },
    }
];
