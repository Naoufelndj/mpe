const perfumes = [
  {
    reference: "EDT H 14703",
    name: "MANCERA COCO-VANILLE",
    category: "joker",
    image: "./images/mancera.webp",
  },
  {
    reference: "EDT H 14110",
    name: "STRONGER WITH YOU G.ARMANI",
    category: "joker",
    image: "./images/strongerWithYou.webp",
  },
  {
    reference: "EDT F 16374",
    name: "BURRBERY HER",
    category: "joker",
    image: "./images/burberryHer.webp",
  },
  {
    reference: "EDT H 12287 NIKOS",
    name: "AZZARO WANTED",
    category: "joker",
    image: "./images/azzaroWanted.webp",
  },
  {
    reference: "EDT F 19348",
    name: "ZARA ORCHID",
    category: "joker",
    image: "./images/zaraOrchid.webp",
  },
  {
    reference: "EDT O 17254",
    name: "SOSPIRO ERBA PURA",
    category: "joker",
    image: "./images/sospiroErbaPura.webp",
  },
  {
    reference: "EDT H 16397",
    name: "STRONGER WITH YOU INTENSLY",
    category: "joker",
    image: "./images/strongerWithYou.webp",
  },
  {
    reference: "EDT H 12293 ADRIEN",
    name: "BLEU DE CHANEL",
    category: "joker",
    image: "./images/bleuDeChanel.webp",
  },
  {
    reference: "EDT F 17188",
    name: "LIBRE YSL",
    category: "joker",
    image: "./images/libreYSL.webp",
  },
  {
    reference: "EDT H 15378",
    name: "BACCARAT ROUGE 540",
    category: "joker",
    image: "./images/baccaratRouge.webp",
  },
  {
    reference: "EDT F 8064",
    name: "MISS DIOR BLOOMING BOUQUET",
    category: "joker",
    image: "./images/missDior.webp",
  },
  {
    reference: "EDT H 15827",
    name: "L.12.12 BLACK",
    category: "joker",
    image: "./images/lacosteBlack.webp",
  },
  {
    reference: "EDT H 10326",
    name: "AMWAJ EL BAHR",
    category: "joker",
    image: "./images/parfum.webp", // fallback image
  },
  {
    reference: "EDT H 20423",
    name: "SCANDAL MAN",
    category: "joker",
    image: "./images/scandal.webp",
  },
  {
    reference: "EDT H 23882",
    name: "LE MALE ELEXIR",
    category: "joker",
    image: "./images/leMaleElixir.webp",
  },
  {
    reference: "EDT H 24993",
    name: "BIANCO LATE",
    category: "joker",
    image: "./images/biancoLate.webp",
  },
  {
    reference: "EDT H 2002 EMILEN",
    name: "SCULPTURE",
    category: "joker",
    type: "EDT",
    image: "./images/sculpture.webp",
  },
  {
    reference: "EDT F 23487",
    name: "PARADOXE PRADA",
    category: "joker",
    type: "EDT",
    image: "./images/paradoxePrada.webp",
  },
  {
    reference: "EDT F 15643",
    name: "L'INTERDIT BY GIVENCHY",
    category: "joker",
    type: "EDT",
    image: "./images/LinterditByGivenchy.webp",
  },
  {
    reference: "EDT H 19646",
    name: "OMBRE NOMADE L.V",
    category: "joker",
    type: "EDT",
    image: "./images/ombreNomade.webp",
  },
  {
    reference: "EDT H 25993 F05/PO",
    name: "ALMAZ KAJAL",
    category: "joker",
    type: "EDT",
    image: "./images/almazKajal.webp",
  },
  {
    reference: "EDT H 5055 REMY",
    name: "ONE MILLION",
    category: "joker",
    type: "EDT",
    image: "./images/oneMillion.webp",
  },
  {
    reference: "EDT H 21091",
    name: "SAUVAGE ELIXIR DIOR",
    category: "joker",
    type: "EDT",
    image: "./images/diorSauvageElixir.webp",
  },

  // ARRIVAGE JANVIER 2026
  {
    reference: "24553",
    name: "ABSOLU AVENTUS",
    category: "arrivage janvier",
    type: null,
    image: "./images/aventus.webp",
  },
  {
    reference: "24211",
    name: "TYGAR BVLGARI",
    category: "arrivage janvier",
    type: null,
    image: "./images/tygarBvlgari.webp",
  },
  {
    reference: "33047",
    name: "LAYTON",
    category: "arrivage janvier",
    type: null,
    image: "./images/layton.webp",
  },
  {
    reference: "24207",
    name: "IMMENSITE",
    category: "arrivage janvier",
    type: null,
    image: "./images/immensite.webp",
  },
  {
    reference: "34889",
    name: "GANYMEDE",
    category: "arrivage janvier",
    type: null,
    image: "./images/ganymede.webp",
  },
  {
    reference: "31467",
    name: "AVENTUS",
    category: "arrivage janvier",
    type: null,
    image: "./images/aventus.webp",
  },
  {
    reference: "35425",
    name: "GOD OF FIRE",
    category: "arrivage janvier",
    type: null,
    image: "./images/godOfFire.webp",
  },
  {
    reference: "24530",
    name: "BARAONDA",
    category: "arrivage janvier",
    type: null,
    image: "./images/baraonda.webp",
  },
  {
    reference: "33974",
    name: "IMMAGINATION",
    category: "arrivage janvier",
    type: null,
    image: "./images/immagination.webp",
  },
  {
    reference: "24116",
    name: "ANIMALIQUE BYREDO",
    category: "arrivage janvier",
    type: null,
    image: "./images/animalique.webp",
  },
  {
    reference: "24128",
    name: "ANIMALIQUE BYREDO",
    category: "arrivage janvier",
    type: null,
    image: "./images/animalique.webp",
  },
  {
    reference: "25232",
    name: "MEGAMARE",
    category: "arrivage janvier",
    type: null,
    image: "./images/megamare.webp",
  },
  {
    reference: "23658",
    name: "MEGAMARE",
    category: "arrivage janvier",
    type: null,
    image: "./images/megamare.webp",
  },
  {
    reference: "25270",
    name: "HACIVAT",
    category: "arrivage janvier",
    type: null,
    image: "./images/hacivat.webp",
  },
  {
    reference: "34408",
    name: "HACIVAT",
    category: "arrivage janvier",
    type: null,
    image: "./images/hacivat.webp",
  },
  {
    reference: "17843",
    name: "SILVER MOUNTAIN WATER",
    category: "arrivage janvier",
    type: null,
    image: "./images/silverMountainWter.webp",
  },
  {
    reference: "25065",
    name: "VANILLA POWDER",
    category: "arrivage janvier",
    type: null,
    image: "./images/vanillaPowder.webp",
  },
  {
    reference: "34123",
    name: "VANILLA POWDER",
    category: "arrivage janvier",
    type: null,
    image: "./images/vanillaPowder.webp",
  },
  {
    reference: "32023",
    name: "YUM PISTACHIO GELATO 33",
    category: "arrivage janvier",
    type: null,
    image: "./images/yumPistachioGelato.webp",
  },
  {
    reference: "35191",
    name: "VANILLA ROYAL SUGARED PATCHOULI 64",
    category: "arrivage janvier",
    type: null,
    image: "./images/vanillaRoyalSugaredPatchouli.webp",
  },
  {
    reference: "35125",
    name: "FLEUR MAJESY ROSE ROYAL 31",
    category: "arrivage janvier ",
    type: null,
    image: "./images/FleurMajesyRoseRoyal.webp",
  },
  {
    reference: "25359",
    name: "EDEN SPARCKLING LYCHEE",
    category: "arrivage janvier ",
    type: null,
    image: "./images/edenSparklingLychee.webp",
  },
  {
    reference: "21511",
    name: "ALLURE SPORT",
    category: "arrivage janvier ",
    type: null,
    image: "./images/allureSport.webp",
  },
  {
    reference: "30477",
    name: "DELINA",
    category: "arrivage janvier",
    type: null,
    image: "./images/delina.webp",
  },
  {
    reference: "26656",
    name: "SENSE LAVERNE",
    category: "arrivage janvier",
    type: null,
    image: "./images/senseLaverne.webp",
  },
  {
    reference: "25993",
    name: "ALMAZ KAJAL",
    category: "arrivage janvier",
    type: null,
    image: "./images/almazKajal.webp",
  },
  {
    reference: "12472",
    name: "VELVET DESERT OUD",
    category: "arrivage janvier",
    type: null,
    image: "./images/velvetDesert.webp",
  },
  {
    reference: "21664",
    name: "DECLARATION D'UN SOIR",
    category: "arrivage janvier",
    type: null,
    image: "./images/declarationDunSoir.webp",
  },
  {
    reference: "17254",
    name: "SOSPIRO ERBA PURA",
    category: "arrivage janvier",
    type: null,
    image: "./images/sospiroErbaPura.webp",
  },
  {
    reference: "17188",
    name: "LIBRE 17188",
    category: "arrivage janvier",
    type: null,
    image: "./images/libreYSL.webp",
  },
  {
    reference: "31189",
    name: "INVICTUS VICTORY ELIXIR",
    category: "arrivage janvier",
    type: null,
    image: "./images/invictusVictoryElixir.webp",
  },
  {
    reference: "24582",
    name: "VANILLA SEX TOM FORD",
    category: "arrivage janvier",
    type: null,
    image: "./images/vanillaSexTomFord.webp",
  },
  {
    reference: "24583",
    name: "VANILLA SEX TOM FORD",
    category: "arrivage janvier",
    type: null,
    image: "./images/vanillaSexTomFord.webp",
  },
  {
    reference: "34550",
    name: "CANDY LOVE ESCADA 34550",
    category: "arrivage janvier",
    type: null,
    image: "./images/candyLoveEscada.webp",
  },
  {
    reference: "31519",
    name: "MEGAMARE",
    category: "arrivage janvier",
    type: null,
    image: "./images/megamare.webp",
  },
  {
    reference: "35364",
    name: "DIOR HOMME PARFUM",
    category: "arrivage janvier",
    type: null,
    image: "./images/diorHommeParfum.webp",
  },
  {
    reference: "23516",
    name: "OMBRE NOMADE",
    category: "arrivage janvier",
    type: null,
    image: "./images/ombreNomade.webp",
  },
  {
    reference: "33019",
    name: "COCAINE",
    category: "arrivage janvier",
    type: null,
    image: "./images/cocaine.webp",
  },
  {
    reference: "24591",
    name: "FANTASQUE",
    category: "arrivage janvier",
    type: null,
    image: "./images/fantasque.webp",
  },
  {
    reference: "19646",
    name: "OMBRE NOMADE",
    category: "arrivage janvier",
    type: null,
    image: "./images/ombreNomade.webp",
  },
  {
    reference: "34888",
    name: "GANYMEDE",
    category: "arrivage janvier",
    type: null,
    image: "./images/ganymede.webp",
  },
  {
    reference: "19647",
    name: "AFTERNOON SWIM",
    category: "arrivage janvier",
    type: null,
    image: "./images/afternoonSwim.webp",
  },
  {
    reference: "13758",
    name: "STRONGER TOP Q",
    category: "arrivage janvier",
    type: "TOP",
    image: "./images/strongerWithYou.webp",
  },
  {
    reference: "17842",
    name: "AVENTUS",
    category: "arrivage janvier",
    type: null,
    image: "./images/aventus.webp",
  },
  {
    reference: "34824",
    name: "PACIFIC CHILL",
    category: "arrivage janvier",
    type: null,
    image: "./images/pacificChill.webp",
  },
  {
    reference: "34962",
    name: "MEGAMARE",
    category: "arrivage janvier",
    type: null,
    image: "./images/megamare.webp",
  },
  {
    reference: "21498",
    name: "MOLECULE 2",
    category: "arrivage janvier",
    type: null,
    image: "./images/molecule2.webp",
  },
  {
    reference: "25784",
    name: "NOMADE NUIT D'EGYPT",
    category: "arrivage janvier",
    type: null,
    image: "./images/nomadeNuitEGYPT.webp",
  },
  {
    reference: "20597",
    name: "VELVET DESERT OUD",
    category: "arrivage janvier",
    type: null,
    image: "./images/velvetDesert.webp",
  },
  {
    reference: "35564",
    name: "ANNIVERSARIO",
    category: "nouveautés",
    type: "TOP",
    image: "./images/anniversario.webp",
  },
  {
    reference: "26054",
    name: "ANNIVERSARIO",
    category: "nouveautés",
    type: "NOR",
    image: "./images/anniversario.webp",
  },
  {
    reference: "34338",
    name: "BOIS IMPERIAL",
    category: "nouveautés",
    type: "TOP",
    image: "./images/boisImperial.webp",
  },
  {
    reference: "34840",
    name: "BOIS IMPERIAL",
    category: "nouveautés",
    type: "MED",
    image: "./images/boisImperial.webp",
  },
  {
    reference: "34841",
    name: "BOIS IMPERIAL",
    category: "nouveautés",
    type: "MED",
    image: "./images/boisImperial.webp",
  },
  {
    reference: "31756",
    name: "IMPERIAL VALLEY",
    category: "nouveautés",
    type: "TOP",
    image: "./images/imperialValley.webp",
  },
  {
    reference: "24988",
    name: "IMPERIAL VALLEY",
    category: "nouveautés",
    type: "MED",
    image: "./images/imperialValley.webp",
  },
  {
    reference: "33473",
    name: "IMPERIAL VALLEY",
    category: "nouveautés",
    type: "MED",
    image: "./images/imperialValley.webp",
  },
  {
    reference: "33435",
    name: "BARAONDA",
    category: "nouveautés",
    type: "480",
    image: "./images/baraonda.webp",
  },
  {
    reference: "34123",
    name: "VANILLA POWDER",
    category: "nouveautés",
    type: "TOP",
    image: "./images/vanillaPowder.webp",
  },
  {
    reference: "25065",
    name: "VANILLA POWDER",
    category: "nouveautés",
    type: "MED",
    image: "./images/vanillaPowder.webp",
  },
  {
    reference: "34888",
    name: "GANYMEDE",
    category: "nouveautés",
    type: "MED",
    image: "./images/ganymede.webp",
  },
  {
    reference: "34889",
    name: "GANYMEDE",
    category: "nouveautés",
    type: "MED",
    image: "./images/ganymede.webp",
  },
  {
    reference: "35664",
    name: "OUD ZARIAN",
    category: "nouveautés",
    type: "TOP",
    image: "./images/oudZarian.webp",
  },
  {
    reference: "35694",
    name: "OUD ZARIAN",
    category: "nouveautés",
    type: "NOR",
    image: "./images/oudZarian.webp",
  },
  {
    reference: "35588",
    name: "IMPADIA",
    category: "nouveautés",
    type: "TOP",
    image: "./images/impadia.webp",
  },
  {
    reference: "35606",
    name: "IMPADIA",
    category: "nouveautés",
    type: "NOR",
    image: "./images/impadia.webp",
  },
  {
    reference: "32226",
    name: "الوعد PROMISE",
    category: "nouveautés",
    type: "TOP",
    image: "./images/promise.webp",
  },
  {
    reference: "34463",
    name: "INVICTUS PARFUM",
    category: "nouveautés",
    type: "TOP",
    image: "./images/invictus.webp",
  },
  {
    reference: "34463",
    name: "INVICTUS PARFUM",
    category: "nouveautés",
    type: "NOR",
    image: "./images/invictus.webp",
  },
  {
    reference: "35962",
    name: "BLEU DE CHANEL L'EXCLUSIF",
    category: "nouveautés",
    type: "TOP",
    image: "./images/bleuDeChanelLexclusif.webp",
  },
  {
    reference: "36007",
    name: "BLEU DE CHANEL L'EXCLUSIF",
    category: "nouveautés",
    type: "MED",
    image: "./images/bleuDeChanelLexclusif.webp",
  },
  {
    reference: "26184",
    name: "BLEU DE CHANEL L'EXCLUSIF",
    category: "nouveautés",
    type: "NOR",
    image: "./images/bleuDeChanelLexclusif.webp",
  },
  {
    reference: "35833",
    name: "SCANDAL HOMME INTENSE",
    category: "nouveautés",
    type: "NOR",
    image: "./images/scandalHommeIntense.webp",
  },
  {
    reference: "36142",
    name: "MYSLF L'ABSOLU",
    category: "nouveautés",
    type: "NOR",
    image: "./images/myslfLabsolu.webp",
  },
  {
    reference: "36086",
    name: "PARADIGME",
    category: "nouveautés",
    type: "TOP",
    image: "./images/paradigme.webp",
  },
  {
    reference: "35809",
    name: "CUIR BELUGA",
    category: "nouveautés",
    type: "TOP",
    image: "./images/cuirBeluga.webp",
  },
  {
    reference: "35810",
    name: "CUIR BELUGA",
    category: "nouveautés",
    type: "MED",
    image: "./images/cuirBeluga.webp",
  },
  {
    reference: "35811",
    name: "CUIR BELUGA",
    category: "nouveautés",
    type: "NOR",
    image: "./images/cuirBeluga.webp",
  },
  {
    reference: "36057",
    name: "MOST WANTED PARFUM",
    category: "nouveautés",
    type: "NOR",
    image: "./images/mostWanted.webp",
  },
  {
    reference: "35751",
    name: "LE MALE ELIXIR ABSOLU",
    category: "nouveautés",
    type: "NOR",
    image: "./images/leMaleElixirAbsolu.webp",
  },
  {
    reference: "35570",
    name: "ANGELIQUE NOIR",
    category: "nouveautés",
    type: "TOP",
    image: "./images/angeliqueNoir.webp",
  },
  {
    reference: "35197",
    name: "BABY CAT",
    category: "nouveautés",
    type: "TOP",
    image: "./images/babyCat.webp",
  },
  {
    reference: "34184",
    name: "ONE AND ONLY",
    category: "nouveautés",
    type: "TOP",
    image: null,
  },
  {
    reference: "25129",
    name: "ONE AND ONLY",
    category: "nouveautés",
    type: "NOR",
    image: null,
  },
  {
    reference: "24116",
    name: "ANIMALIQUE",
    category: "nouveautés",
    type: "TOP",
    image: "./images/animalique.webp",
  },
  {
    reference: "24128",
    name: "ANIMALIQUE",
    category: "nouveautés",
    type: "MED",
    image: "./images/animalique.webp",
  },
  {
    reference: "35281",
    name: "DIOR HOMME PARFUM TOP Q",
    category: "nouveautés",
    type: "TOP",
    image: "./images/diorHommeParfum.webp",
  },
  {
    reference: "35364",
    name: "DIOR HOMME PARFUM TOP Q",
    category: "nouveautés",
    type: "NOR",
    image: "./images/diorHommeParfum.webp",
  },
  {
    reference: "35828",
    name: "PURPOSE 50",
    category: "nouveautés",
    type: "MED",
    image: "./images/purpose50.webp",
  },
  {
    reference: "35518",
    name: "PURPOSE 50",
    category: "nouveautés",
    type: "MED",
    image: "./images/purpose50.webp",
  },
  {
    reference: "35289",
    name: "PURPOSE 50",
    category: "nouveautés",
    type: "MED",
    image: "./images/purpose50.webp",
  },
  {
    reference: "35397",
    name: "PURPOSE 50",
    category: "nouveautés",
    type: "TOP",
    image: "./images/purpose50.webp",
  },
  {
    reference: "34365",
    name: "ALEXANDRIA II",
    category: "nouveautés",
    type: "MED",
    image: "./images/alexandria2.webp",
  },
  {
    reference: "24479",
    name: "ALEXANDRIA II",
    category: "nouveautés",
    type: "MED",
    image: "./images/alexandria2.webp",
  },
  {
    reference: "32591",
    name: "ALEXANDRIA II",
    category: "nouveautés",
    type: "TOP",
    image: "./images/alexandria2.webp",
  },
  {
    reference: "24506",
    name: "NAXOS XJ 1861",
    category: "nouveautés",
    type: "NOR",
    image: "./images/naxosXJ1861.webp",
  },
  {
    reference: "24105",
    name: "NAXOS XJ 1862",
    category: "nouveautés",
    type: "MED",
    image: "./images/naxosXJ1861.webp",
  },
  {
    reference: "33746",
    name: "NAXOS XJ 1863",
    category: "nouveautés",
    type: "MED",
    image: "./images/naxosXJ1861.webp",
  },
  {
    reference: "36114",
    name: "LIBRE VANILLE COUTURE",
    category: "nouveautés",
    type: "NOR",
    image: "./images/libreVanilleCouture.webp",
  },
  {
    reference: "36013",
    name: "OUD A L'AMOUR ROPION",
    category: "nouveautés",
    type: "TOP",
    image: "./images/oudALamourRopion.webp",
  },
  {
    reference: "36014",
    name: "OUD A L'AMOUR ROPION",
    category: "nouveautés",
    type: "MED",
    image: "./images/oudALamourRopion.webp",
  },
  {
    reference: "36015",
    name: "OUD A L'AMOUR ROPION",
    category: "nouveautés",
    type: "MED",
    image: "./images/oudALamourRopion.webp",
  },
  {
    reference: "35923",
    name: "DIVINE TENTATION",
    category: "nouveautés",
    type: "MED",
    image: "./images/divineTentation.webp",
  },
  {
    reference: "19327",
    name: "OMBRE NOMADE",
    category: "nouveautés",
    type: "TOP",
    image: "./images/ombreNomade.webp",
  },
  {
    reference: "19646",
    name: "OMBRE NOMADE",
    category: "nouveautés",
    type: "MED",
    image: "./images/ombreNomade.webp",
  },
  {
    reference: "35759",
    name: "YSL MUSE",
    category: "arrivage janvier",
    type: "-",
    image: "./images/yslMuse.webp",
  },
  {
    reference: "35757",
    name: "YSL MUSE",
    category: "arrivage janvier",
    type: "-",
    image: "./images/yslMuse.webp",
  },
  {
    reference: "35818",
    name: "MONT BLANC EXPLORER EXTREME",
    category: "arrivage janvier",
    type: "-",
    image: "./images/explorerExtreme.webp",
  },
  {
    reference: "35896",
    name: "SAFRAN SECRET MAISON CRIVELLI",
    category: "arrivage janvier",
    type: "-",
    image: "./images/safranSecret.webp",
  },
  {
    reference: "26635",
    name: "SAFRAN SECRET MAISON CRIVELLI",
    category: "arrivage janvier",
    type: "-",
    image: "./images/safranSecret.webp",
  },
  {
    reference: "26636",
    name: "SAFRAN SECRET MAISON CRIVELLI",
    category: "arrivage janvier",
    type: "-",
    image: "./images/safranSecret.webp",
  },
  {
    reference: "24604",
    name: "BASE'E EL OUD SUBLIME LATTAFA",
    category: "arrivage janvier",
    type: "-",
    image: "./images/baseeElOudSublime.webp",
  },
  {
    reference: "24603",
    name: "BASE'E EL OUD SUBLIME LATTAFA",
    category: "arrivage janvier",
    type: "-",
    image: "./images/baseeElOudSublime.webp",
  },
  {
    reference: "33612",
    name: "BASE'E EL OUD SUBLIME LATTAFA",
    category: "arrivage janvier",
    type: "-",
    image: "./images/baseeElOudSublime.webp",
  },
  {
    reference: "36120",
    name: "ANGEL'S SHARE ON THE ROCKS KILIAN",
    category: "arrivage janvier",
    type: "-",
    image: "./images/angelsShareOnTheRocks.webp",
  },
  {
    reference: "36118",
    name: "ANGEL'S SHARE ON THE ROCKS KILIAN",
    category: "arrivage janvier",
    type: "-",
    image: "./images/angelsShareOnTheRocks.webp",
  },
  {
    reference: "36119",
    name: "ANGEL'S SHARE ON THE ROCKS KILIAN",
    category: "arrivage janvier",
    type: "-",
    image: "./images/angelsShareOnTheRocks.webp",
  },
  {
    reference: "36270",
    name: "VOLCAN FEU FRENCH AVENUE",
    category: "arrivage janvier",
    type: "-",
    image: "./images/volcanFeu.webp",
  },
  {
    reference: "35970",
    name: "LIBRE VANILLE COUTURE YSL",
    category: "arrivage janvier",
    type: "-",
    image: "./images/libreVanilleCouture.webp",
  },
  {
    reference: "36203",
    name: "BARENIA INTENSE HERMES",
    category: "arrivage janvier",
    type: "-",
    image: "./images/bareniaIntense.webp",
  },
  {
    reference: "36204",
    name: "BARENIA INTENSE HERMES",
    category: "arrivage janvier",
    type: "-",
    image: "./images/bareniaIntense.webp",
  },
  {
    reference: "36127",
    name: "OUD VOYAGER TOM FORD",
    category: "arrivage janvier",
    type: "-",
    image: "./images/oudVoyager.webp",
  },
  {
    reference: "36093",
    name: "OUD VOYAGER TOM FORD",
    category: "arrivage janvier",
    type: "-",
    image: "./images/oudVoyager.webp",
  },
  {
    reference: "36265",
    name: "LE BEAU FLOWER JPG",
    category: "arrivage janvier",
    type: "-",
    image: "./images/leBeauFlower.webp",
  },
  {
    reference: "36275",
    name: "VELVET TONKA BDK",
    category: "arrivage janvier",
    type: "-",
    image: "./images/velvetTonka.webp",
  },
  {
    reference: "36273",
    name: "VELVET TONKA BDK",
    category: "arrivage janvier",
    type: "-",
    image: "./images/velvetTonka.webp",
  },
  {
    reference: "36267",
    name: "RUBY KAJAL",
    category: "arrivage janvier",
    type: "-",
    image: "./images/kajalRuby.webp",
  },
  {
    reference: "36268",
    name: "TOPAZ KAJAL",
    category: "arrivage janvier",
    type: "-",
    image: "./images/kajalTopaz.webp",
  },
  {
    reference: "—",
    name: "BORN IN ROMA EXTRADOSE VALENTINO",
    category: "arrivage janvier",
    type: "-",
    image: "./images/bornInRomaExtradose.webp",
  },
  {
    reference: "—",
    name: "BOSS BEYOND HUGO BOSS",
    category: "arrivage janvier",
    type: "-",
    image: "./images/bossBeyond.webp",
  },
  {
    reference: "—",
    name: "EDEN JUICY APPLE KAYALI",
    category: "arrivage janvier",
    type: "-",
    image: "./images/edenJuicyAppleKayali.webp",
  },
  {
    reference: "—",
    name: "FRAGARIA CREED",
    category: "arrivage janvier",
    type: "-",
    image: "./images/fragariaCreed.webp",
  },
  {
    reference: "—",
    name: "LE SEL D'ISSEY ISSEY MIYAKE",
    category: "arrivage janvier",
    type: "-",
    image: "./images/leSelIssey.webp",
  },
  {
    reference: "—",
    name: "PECHE MIRAGE GUERLAIN",
    category: "arrivage janvier",
    type: "-",
    image: "./images/pecheMirageGuerlain.webp",
  },
  {
    reference: "—",
    name: "SPICEBOMB METALLIC MUSK VIKTOR & ROLF",
    category: "arrivage janvier",
    type: "-",
    image: "./images/spicebombMetallicMusk.webp",
  },
];

/* =========================
   DOM
========================= */
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("results");
const filterButtons = document.querySelectorAll(".filters button");

// CREATE A SEPARATE CONTAINER FOR FILTER RESULTS
const filterResults = document.createElement("div");
filterResults.className = "filter-results"; // 👈 NEW CLASS NAME
document.querySelector(".filters").after(filterResults);

/* =========================
   RENDER (REUSABLE)
========================= */
function renderPerfumes(list, container) {
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<p>Aucun parfum trouvé</p>";
    return;
  }

  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="image">
        <img src="${p.image || "./images/parfum.webp"}" alt="${p.name}">
      </div>
      <div class="content">
        <h2>${p.name}</h2>
        <h3>Reference: <span>${p.reference}</span></h3>
        <h3>Category: <span>${p.category}</span></h3>
        <h3>Type: <span>${p.type || "-"}</span></h3>
      </div>
    `;

    container.appendChild(card);
  });
}

/* =========================
   SEARCH (ISOLATED)
========================= */
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.innerHTML = "";
    return;
  }

  const filtered = perfumes.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      String(p.reference).toLowerCase().includes(query),
  );

  renderPerfumes(filtered, searchResults);
});

/* =========================
   FILTERS (ISOLATED)
========================= */
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;
    const filtered = perfumes.filter((p) => p.category === category);

    renderPerfumes(filtered, filterResults);
  });
});
