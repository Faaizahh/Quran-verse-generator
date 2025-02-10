// const linkEl = document.querySelector("li:nth-child(1)");

// const API_KEY = "a4d74fbb42msh4679c653e56441dp14fc97jsn5ee2915d73b2";

// const headers = {
//   "X-RapidAPI-Key": API_KEY,
//   "X-RapidAPI-Host": "quran15.p.rapidapi.com",
// };

// const clickHandler = async (e) => {
//   try {
//     const res = await fetch(
//       "https://quran15.p.rapidapi.com/topic/not giving up",
//       { headers: headers }
//     );
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error("could not fetch resource");
//       return;
//     }
//     const verse =
//       data.verses[Math.floor(Math.random() * data.verses.length + 1)];
//     const actualVerse = Object.values(verse)[0];

//     console.log(actualVerse);
//   } catch (error) {
//     console.log(error);
//   }
// };

// linkEl.addEventListener("click", clickHandler);

// function createNewPage() {
//   const div = document.createElement("div");
//   div.innerHTML = { actualVerse };
//   linkEl.appendChild(div);
// }

const sadnessAyaat = [
  {
    ayah: "Surah Al-Baqarah Ayat 153",
    arabic:
      "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    transliteration:
      "Yaaa ayyuhal laazeena aamanus ta'eenoo bissabri was Salaah; innal laaha ma'as-saabireen",
    translation:
      "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient.",
  },
  {
    ayah: "Surah Al-Baqarah Ayat 155",
    arabic:
      "وَلَنَبۡلُوَنَّكُم بِشَيۡءٖ مِّنَ ٱلۡخَوۡفِ وَٱلۡجُوعِ وَنَقۡصٖ مِّنَ ٱلۡأَمۡوَٰلِ وَٱلۡأَنفُسِ وَٱلثَّمَرَٰتِۗ وَبَشِّرِ ٱلصَّـٰبِرِينَ",
    transliteration:
      "Wa lanablu wannakum bishai'im minal khawfi waljoo'i wa naqsim minal amwaali wal anfusi was samaraat; wa bashshiris saabireen",
    translation:
      "And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient,",
  },
  {
    ayah: "Surah Al-Baqarah Ayat 156",
    arabic:
      "ٱلَّذِينَ إِذَآ أَصَٰبَتۡهُم مُّصِيبَةٞ قَالُوٓاْ إِنَّا لِلَّهِ وَإِنَّآ إِلَيۡهِ رَٰجِعُونَ",
    transliteration:
      "Allazeena izaaa asaabathum museebatun qaalooo innaa lillaahi wa innaaa ilaihi raaji'oon",
    translation:
      "Who, when disaster strikes them, say, 'Indeed we belong to Allah, and indeed to Him we will return.'",
  },
  {
    ayah: "Surah Al-Baqarah Ayat 286",
    arabic:
      "لَا يُكَلِّفُ ٱللَّهُ نَفۡسًا إِلَّا وُسۡعَهَاۚ لَهَا مَا كَسَبَتۡ وَعَلَيۡهَا مَا ٱكۡتَسَبَتۡۗ رَبَّنَا لَا تُؤَاخِذۡنَآ إِن نَّسِينَآ أَوۡ أَخۡطَأۡنَاۚ رَبَّنَا وَلَا تَحۡمِلۡ عَلَيۡنَآ إِصۡرٗا كَمَا حَمَلۡتَهُۥ عَلَى ٱلَّذِينَ مِن قَبۡلِنَاۚ رَبَّنَا وَلَا تُحَمِّلۡنَا مَا لَا طَاقَةَ لَنَا بِهِۦۖ وَٱعۡفُ عَنَّا وَٱغۡفِرۡ لَنَا وَٱرۡحَمۡنَآۚ أَنتَ مَوۡلَىٰنَا فَٱنصُرۡنَا عَلَى ٱلۡقَوۡمِ ٱلۡكَٰفِرِينَ",
    transliteration:
      "Laa yukalliful-laahu nafsan illaa wus'ahaa; lahaa maa kasabat wa 'alaihaa maktasabat; Rabbanaa laa tu'aakhiznaaa in naseenaaa aw akhtaanaa; Rabbanaa wa laa tahmil-'alainaaa isran kamaa hamaltahoo 'alal-lazeena min qablinaa; Rabbanaa wa laa tuhammilnaa maa laa taaqata lanaa bih; wa'fu 'annaa waghfir lanaa warhamnaa; Anta mawlaanaa fansurnaa 'alal qawmil kaafireen",
    translation:
      "Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. 'Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.'",
  },
  {
    ayah: "Surah Al-Imran Ayat 139",
    arabic:
      "وَلَا تَهِنُواْ وَلَا تَحۡزَنُواْ وَأَنتُمُ ٱلۡأَعۡلَوۡنَ إِن كُنتُم مُّؤۡمِنِينَ",
    transliteration: "Wa laa tahinoo wa laa tahzanoo wa antumul a'la",
    translation:
      "So do not weaken and do not grieve, and you will be superior if you are [true] believers.",
  },
  {
    ayah: "Surah Al-Anfal Ayat 70",
    arabic:
      "يَـٰٓأَيُّهَا ٱلنَّبِيُّ قُل لِّمَن فِيٓ أَيۡدِيكُم مِّنَ ٱلۡأَسۡرَىٰٓ إِن يَعۡلَمِ ٱللَّهُ فِي قُلُوبِكُمۡ خَيۡرٗا يُؤۡتِكُمۡ خَيۡرٗا مِّمَّآ أُخِذَ مِنكُمۡ وَيَغۡفِرۡ لَكُمۡۚ وَٱللَّهُ غَفُورٞ رَّحِيمٞ",
    transliteration:
      "Yaaa aiyuhan Nabiyyu qul liman feee aideekum minal asraaa iny-ya'lamillahu fee quloobikum khairany yu'tikum khayram mimmaaa ukhiza minkum wa yaghfir lakum; wallaahu Ghafoorur Raheem",
    translation:
      "O Prophet, say to whoever is in your hands of the captives, 'If Allah knows [any] good in your hearts, He will give you [something] better than what was taken from you, and He will forgive you; and Allah is Forgiving and Merciful.'",
  },
  {
    ayah: "Surah At-Taubah Ayat 40",
    arabic:
      "إِلَّا تَنصُرُوهُ فَقَدۡ نَصَرَهُ ٱللَّهُ إِذۡ أَخۡرَجَهُ ٱلَّذِينَ كَفَرُواْ ثَانِيَ ٱثۡنَيۡنِ إِذۡ هُمَا فِي ٱلۡغَارِ إِذۡ يَقُولُ لِصَٰحِبِهِۦ لَا تَحۡزَنۡ إِنَّ ٱللَّهَ مَعَنَاۖ فَأَنزَلَ ٱللَّهُ سَكِينَتَهُۥ عَلَيۡهِ وَأَيَّدَهُۥ بِجُنُودٖ لَّمۡ تَرَوۡهَا وَجَعَلَ كَلِمَةَ ٱلَّذِينَ كَفَرُواْ ٱلسُّفۡلَىٰۗ وَكَلِمَةُ ٱللَّهِ هِيَ ٱلۡعُلۡيَاۗ وَٱللَّهُ عَزِيزٌ حَكِيمٌ,",
    transliteration:
      "Illaa tansuroohu faqad nasarahul laahu iz akhrajahul lazeena kafaroo saaniyasnaini iz humaa filghaari iz yaqoolu lisaahibihee laa tahzan innnal laaha ma'anaa; fa anzalallaahu sakeenatahoo 'alaihi wa aiyadahoo bijunoodil lam tarawhaa wa ja'ala kalimatal lazeena kafarus suflaa; wa Kalimatul laahi hiyal 'ulyaa; wallaahu 'Azeezun Hakeem",
    translation:
      "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Makkah] as one of two, when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.' And Allah sent down his tranquillity upon him and supported him with angels you did not see and made the word of those who disbelieved the lowest, while the word of Allah - that is the highest. And Allah is Exalted in Might and Wise.",
  },
  {
    ayah: "Surah Yunus Ayat 65",
    arabic:
      "وَلَا يَحۡزُنكَ قَوۡلُهُمۡۘ إِنَّ ٱلۡعِزَّةَ لِلَّهِ جَمِيعًاۚ هُوَ ٱلسَّمِيعُ ٱلۡعَلِيمُ",
    transliteration:
      "Wa laa yahzunka qawluhum; innal 'izzata lillaahi jamee'aa; Huwas Samee'ul 'Aleem",
    translation:
      "And let not their speech grieve you. Indeed, honor [due to power] belongs to Allah entirely. He is the Hearing, the Knowing.",
  },
  {
    ayah: "Surah Fatir Ayat 34",
    arabic:
      "وَقَالُواْ ٱلۡحَمۡدُ لِلَّهِ ٱلَّذِيٓ أَذۡهَبَ عَنَّا ٱلۡحَزَنَۖ إِنَّ رَبَّنَا لَغَفُورٞ شَكُورٌ",
    transliteration:
      "Wa qaalul hamdu lillaahil lazeee azhaba 'annal hazan; inna Rabbanaa la Ghafoorun Shakoor",
    translation:
      "And they will say, 'Praise to Allah, who has removed from us [all] sorrow. Indeed, our Lord is Forgiving and Appreciative '",
  },
  {
    ayah: "Surah Az-Zukhruf Ayat 68",
    arabic:
      "يَٰعِبَادِ لَا خَوۡفٌ عَلَيۡكُمُ ٱلۡيَوۡمَ وَلَآ أَنتُمۡ تَحۡزَنُونَ",
    transliteration:
      "Yaa 'ibaadi laa khawfun 'alaikumul Yawma wa laaa antum tahzanoon",
    translation:
      "[To whom Allah will say], 'O My servants, no fear will there be concerning you this Day, nor will you grieve,'",
  },
  {
    ayah: "Surah Al-Ahqaf Ayat 13",
    arabic:
      "إِنَّ ٱلَّذِينَ قَالُواْ رَبُّنَا ٱللَّهُ ثُمَّ ٱسۡتَقَٰمُواْ فَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ",
    transliteration:
      "Innal lazeena qaaloo Rabbunal laahu summas taqaamoo falaa khawfun 'alaihim wa laahum yahzanoon",
    translation:
      "Indeed, those who have said, 'Our Lord is Allah,' and then remained on a right course - there will be no fear concerning them, nor will they grieve.",
  },
  {
    ayah: "Surah At-Taghabun Ayat 11",
    arabic:
      "مَآ أَصَابَ مِن مُّصِيبَةٍ إِلَّا بِإِذۡنِ ٱللَّهِۗ وَمَن يُؤۡمِنۢ بِٱللَّهِ يَهۡدِ قَلۡبَهُۥۚ وَٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمٞ",
    transliteration:
      "Maaa asaaba mim musee batin illaa bi-iznil laah; wa many yu'mim billaahi yahdi qalbah; wallaahu bikulli shai'in Aleem",
    translation:
      "No disaster strikes except by permission of Allah. And whoever believes in Allah - He will guide his heart. And Allah is Knowing of all things.",
  },
  {
    ayah: "Surah Ar-Rahman ayah 13",
    arabic: "فَبِأَيِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ",
    transliteration: "Fabi ayyi aalaaa’i Rabbikumaa tukazzibaan",
    translation: "So which of the favors of your Lord would you deny?",
  },
  {
    ayah: "Surah Al-Inshirah Ayah 5-6",
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا ",
    transliteration: "Fa inna ma'al 'usri yusran, inna ma'al usri yusran",
    translation:
      "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
  },
  {
    ayah: "Surah Yusuf ayah 86",
    arabic:
      " قَالَ إِنَّمَآ أَشْكُوا۟ بَثِّى وَحُزْنِىٓ إِلَى ٱللَّهِ وَأَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ",
    transliteration:
      "qaala innama askuu bathi wa huzni ilaallah wa a'alamu minnallah maa la ta'lamun",
    translation:
      "He said, ‘I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know. ",
  },
  {
    ayah: "Surah Az-Zumar Ayat 10",
    arabic:
      "قُلۡ يَٰعِبَادِ ٱلَّذِينَ ءَامَنُواْ ٱتَّقُواْ رَبَّكُمۡۚ لِلَّذِينَ أَحۡسَنُواْ فِي هَٰذِهِ ٱلدُّنۡيَا حَسَنَةٞۗ وَأَرۡضُ ٱللَّهِ وَٰسِعَةٌۗ إِنَّمَا يُوَفَّى ٱلصَّـٰبِرُونَ أَجۡرَهُم بِغَيۡرِ حِسَابٖ",
    transliteration:
      "Qul yaa 'ibaadil lazeena aamanut taqoo Rabbakum; lillazeena ahsanoo fee haazihid dunyaa hasanah; wa ardul laahi waasi'ah; innamaa yuwaffas saabiroona ajrahum bighayri hisab",
    translation:
      "Say, 'O My servants who have believed, fear your Lord. For those who do good in this world is good, and the earth of Allah is spacious. Indeed, the patient will be given their reward without account.'",
  },
  {
    ayah: "Surah Fussilat Ayat 30",
    arabic:
      "إِنَّ ٱلَّذِينَ قَالُواْ رَبُّنَا ٱللَّهُ ثُمَّ ٱسۡتَقَٰمُواْ تَتَنَزَّلُ عَلَيۡهِمُ ٱلۡمَلَـٰٓئِكَةُ أَلَّا تَخَافُواْ وَلَا تَحۡزَنُواْ وَأَبۡشِرُواْ بِٱلۡجَنَّةِ ٱلَّتِي كُنتُمۡ تُوعَدُونَ",
    transliteration:
      "Innal lazeena qaaloo Rabbunal laahu summas taqaamoo tatanazzalu 'alaihimul malaaa 'ikatu allaa takhaafoo wa laa tahzanoo wa abshiroo bil Jannnatil latee kuntum too'adoon",
    translation:
      "Indeed, those who have said, 'Our Lord is Allah ' and then remained on a right course - the angels will descend upon them, [saying], 'Do not fear and do not grieve but receive good tidings of Paradise, which you were promised.'",
  },
  {
    ayah: "Surah At-Talaq Ayat 3",
    arabic:
      "وَيَرۡزُقۡهُ مِنۡ حَيۡثُ لَا يَحۡتَسِبُۚ وَمَن يَتَوَكَّلۡ عَلَى ٱللَّهِ فَهُوَ حَسۡبُهُۥٓۚ إِنَّ ٱللَّهَ بَٰلِغُ أَمۡرِهِۦۚ قَدۡ جَعَلَ ٱللَّهُ لِكُلِّ شَيۡءٖ قَدۡرٗا",
    transliteration:
      "Wa yarzuqhu min haisu laa yahtasib; wa many yatawakkal 'alal laahi fahuwa hasbuh; innal laaha baalighu amrih; qad ja'alal laahu likulli shai'in qadraa",
    translation:
      "And will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.",
  },
  {
    ayah: "Surah Ad-duha Verse 3",
    arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
    transliteration: "Ma wad da’aka rabbuka wa ma qalaa",
    translation:
      "Your Lord has not taken leave of you, [O Muhammad], nor has He detested [you].",
  },
  {
    ayah: "Surah Ad-duha Verse 4",
    arabic: "وَلَلۡأٓخِرَةُ خَيۡرٞ لَّكَ مِنَ ٱلۡأُولَىٰ",
    transliteration: "Walal-aakhiratu khairul laka minal-oola",
    translation: "And the Hereafter is better for you than the first [life]",
  },
  {
    ayah: "Surah Ash-Sharh (94:5-6)",
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    transliteration: "Fa inna ma'al usri yusra, inna ma'al usri yusra",
    translation:
      "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease.",
  },
  {
    ayah: "Surah Yusuf ayah 86",
    arabic:
      " قَالَ إِنَّمَآ أَشْكُوا۟ بَثِّى وَحُزْنِىٓ إِلَى ٱللَّهِ وَأَعْلَمُ مِنَ ٱللَّهِ مَا لَا تَعْلَمُونَ",
    transliteration:
      "qaala innama askuu bathi wa huzni ilaallah wa a'alamu minnallah maa la ta'lamun",
    translation:
      "He said, ‘I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know. ",
  },
];

const gratitudeAyaat = [
  {
    ayah: "Surah Al-Baqarah (2:152)",
    arabic: "فَاذْكُرُونِىٓ أَذْكُرْكُمْ وَاشْكُرُوا لِى وَلَا تَكْفُرُونِ",
    transliteration: "Fadhkuroonī azkurkum washkuroo lī wa lā takfuroon",
    translation:
      "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
  },
  {
    ayah: "Surah Ibrahim (14:7)",
    arabic:
      "وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِ لَشَدِيدٌ",
    transliteration:
      "Wa izh ta'adhdhana rabbukum la'in shakartum la'azīdanakum wa la'in kafartum inna 'adhābi lashadīd",
    translation:
      "And [remember] when your Lord proclaimed: 'If you give thanks [by being grateful], I will give you more; but if you deny, indeed, My punishment is severe.'",
  },
  {
    ayah: "Surah Al-Nahl (16:18)",
    arabic:
      "وَإِن تَعُدُّوا۟ نِعْمَتَ ٱللَّهِ لَا تُحْصُوهَا إِنَّ ٱللَّهَ لَغَفُورٌۭ رَّحِيمٌ",
    transliteration:
      "Wa in ta'uddoo ni'mata Allāhi lā tuḥṣūhā inna Allāha laghafūrun raḥīm",
    translation:
      "And if you should count the favor of Allah, you could not enumerate it. Indeed, Allah is Forgiving and Merciful.",
  },
  {
    ayah: "Surah Luqman (31:12)",
    arabic:
      "وَلَقَدْ ءَاتَيْنَا لُقْمَٰنَ ٱلْحِكْمَةَ أَنِ ٱشْكُرْ لِلَّهِ ۚ وَمَنۢ يَشْكُرْ فَإِنَّمَا يَشْكُرُ لِنَفْسِهِۦ ۖ وَمَن كَفَرَ فَإِنَّ ٱللَّهَ غَنِىٌّۭ حَمِيدٌ",
    transliteration:
      "Wa laqad ātainā Luqmāna al-ḥikmata ani ishkur lillāh; waman yashkur fa'innamā yashkuru linafsihi; waman kafara fa'inna Allāha ghaniyyun ḥamīd",
    translation:
      "And We had certainly given Luqman wisdom: 'Be grateful to Allah. And whoever is grateful is grateful for [the benefit of] himself; and whoever denies [His favor] - then indeed, Allah is Free of need and Praiseworthy.'",
  },
  {
    ayah: "Surah Az-Zumar (39:66)",
    arabic: "بَلِ اللَّـهَ فَاعْبُدْ وَكُنْ مِنَ الشَّاكِرِينَ",
    transliteration: "Bali Allāh fa'bud waku n mina ash-shākirīn",
    translation: "Rather, worship Allah and be among the grateful.",
  },

  {
    ayah: "Surah An-Nisa (4:147)",
    arabic:
      "مَا يَفْعَلُ اللَّـهُ بِعَذَابِكُمْ إِن شَكَرْتُمْ وَآمَنْتُمْ ۚ وَكَانَ اللَّـهُ شَاكِرًا عَلِيمًا",
    transliteration:
      "Mā yaf'alu Allāhu bi'adhābikum in shakartum wāāmantum; wakāna Allāhu shākirān 'alīmā",
    translation:
      "What would Allah do with your punishment if you are grateful and believe? And ever is Allah Appreciative and Knowing.",
  },

  {
    ayah: "Surah Al-Mulk (67:15)",
    arabic:
      "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ خَارِعَةً فَسِيرُوا فِي مَنَاكِبِهَا وَكُلُوا مِمَّا رَزَقَكُمْ ۚ أَفَلَا تَشْكُرُونِ",
    transliteration:
      "Huwa allathee ja'ala lakumul arda khāri'atan faseeroo fee manākibiha wakuloo mimma razaqakum afalā tashkuroon",
    translation:
      "It is He who made the earth subservient to you, so walk among its slopes and eat from the provision He has provided you. Then will you not be grateful?",
  },

  {
    ayah: "Surah An-Naml Ayat 19",
    arabic:
      "فَتَبَسَّمَ ضَاحِكٗا مِّن قَوۡلِهَا وَقَالَ رَبِّ أَوۡزِعۡنِيٓ أَنۡ أَشۡكُرَ نِعۡمَتَكَ ٱلَّتِيٓ أَنۡعَمۡتَ عَلَيَّ وَعَلَىٰ وَٰلِدَيَّ وَأَنۡ أَعۡمَلَ صَٰلِحٗا تَرۡضَىٰهُ وَأَدۡخِلۡنِي بِرَحۡمَتِكَ فِي عِبَادِكَ ٱلصَّـٰلِحِينَ",
    transliteration:
      "Fatabassama daahikam min qawlihaa wa qaala Rabbi awzi'nee an ashkura ni'mata kal lateee an'amta 'alaiya wa 'alaa waalidaiya wa an a'mala saalihan tardaahu wa adkhilnee birahmatika fee 'ibaadikas saaliheen",
    translation:
      "So [Solomon] smiled, amused at her speech, and said, 'My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants.'",
  },
];

const natureAyaat = [
  {
    ayah: "Surah Al-Baqarah (2:164)",
    arabic:
      "إِنَّ فِي خَلْقِ السَّمَٰوَٰتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ وَالْفُلْكِ الَّتِي تَجْرِي فِي الْبَحْرِ بِمَا يَنْفَعُ النَّاسَ وَمَا أَنزَلَ اللَّـهُ مِنَ السَّمَاءِ مِن مَّآءٍ فَأَحْيَاٰ بِهِ الْأَرْضَ بَعْدَ مَوْتِهَا وَبَثَّ فِيهَا مِن كُلِّ دَابَّةٍ وَتَصْرِيفِ الرِّيَاحِ وَالسَّحَابِ ٱلْمُسَخَّرِ بَيْنَ السَّمَاءِ وَالْأَرْضِ لَآيَٰتٍ لِّقَوْمٍ يَعْقِلُونَ",
    transliteration:
      "Inna fee khalqi as-samāwāti wal-arḍi wākhtilāfi al-layli wan-nahāri walfulki allātī tajree fee al-baḥri bimā yanfa'u an-nāsa wamā anzalallāhu mina as-samā'i mimā'in fa'aḥyā bihi al-arḍa ba'da mawtihā wabatha fee-hā min kulli dābbatin wa taṣrīfi ar-riyāḥi was-sahābi al-muskharī bayna as-samā'i wal-arḍi la-āyāti liqawmin ya'qilūn",
    translation:
      "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, and the [great] ships which sail through the sea with what benefits people, and what Allah has sent down from the heavens of rain giving life thereby to the earth after its lifelessness, and dispersing therein every kind of moving creature, and the direction of the winds and the clouds controlled between the heaven and the earth are signs for a people who use reason.",
  },
  {
    ayah: "Surah An-Nahl (16:10-11)",
    arabic:
      "هُوَ الَّذِي۟ يُحْيِۦكُمْ وَيُحْيِۦ ٱلْأَرْضَۖ وَيُفَجِّرُ ٱلْأَنْهَٰرَۖ وَيُدْنِىٰ ٱلْجِبَالَۖ وَفِي السَّمَٰوَٰتِ رَحْمَتُهُۥۚ وَهُوَ الَّذِيۦۤ بِهَآ أَمْرٌۭ جَادَّۖ وَتُرْبِرُهُۥۖ فَيَرْزُقُهُۥۚ",
    transliteration:
      "Huwa allathee yuḥyīkumu wa yuḥyi al-arḍa wa yufajirul anḥār wa yudni al-jibāl, wa fee as-samāwāti rahmatuhu wa huwa allathee bihaʿaʿ amrām al-hassan bitūrbirūhu fi ayurzukoh.",
    translation:
      "It is He who brings you to life and revives the earth after it has been dead, and who makes the rivers flow beneath the mountains and the rain fall freely with fruits for his presence on aid.",
  },
  {
    ayah: "Surah Al-Imran (3:190-191)",
    arabic:
      "إِنَّ فِي خَلْقِ السَّمَٰوَٰتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَٰتٍ لّأُو۟لِي ٱلْأَلْبَابِ * ٱلَّذِينَ يَذْكُرُونَ ٱللَّهَ قِيَٰمًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًۭا ۚ سُبْحَٰنَكَ ۖ فَقِنَا عَذَابَ ٱلنَّارِ",
    transliteration:
      "Inna fee khalqi as-samāwāti wal-arḍi wākhtilāfi al-layli wan-nahāri la-āyāti li'ulī al-albābi * Alladhīna yadhkuroona Allāha qiyāmāw wa qu'ūdan wa 'alā junūbihim wa yatafakkaroona fee khalqi as-samāwāti wal-arḍi. Rabbanā mā khalaqtā hādhā bāṭilā. Subḥānaka faqīnā 'adhāba an-nār.",
    translation:
      "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, are signs for those of understanding * Who remember Allah while standing or sitting or [lying] on their sides and give thought to the creation of the heavens and the earth, [saying], 'Our Lord, You did not create this in vain; exalted are You above such a thing. Then protect us from the punishment of the Fire.'",
  },
  {
    ayah: "Surah Ar-Rum (30:48)",
    arabic:
      "ٱللَّهُ ٱلَّذِى يُرْسِلُ ٱلرِّيَٰحَ بُشْرًۭا بَيْنَ يَدَىٰ رَحْمَتِهِۦ حَتَّىٰٓ يُحْيِۦٓ بِهَآ أَرْضًۭا مَّيْتَةًۭ ۚ كَذَٰلِكَ تُخْرِجُونَ",
    transliteration:
      "Allāhu allathee yursilu ar-riyāḥa bushrā bayna yadayi raḥmatihi ḥattā yuḥyī bihā arḍan maytatan. Kadhālika tukhrijoona",
    translation:
      "It is Allah who sends the winds as good tidings before His mercy; and We send down from the sky pure water",
  },

  {
    ayah: "Surah An-Nahl (16:65)",
    arabic:
      "وَٱللَّهُۥۤ أَنزَلَ مِنَ ٱلسَّمَاءِ مَاءًۭ فَأَحْيَاٰ بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَآ إِنَّ فِى ذَٰلِكَ لَٓءَايَٰتٍ لِّقَوْمٍۢ يَسْمَعُونَ",
    transliteration:
      "Wa Allāhu anzala mina as-samā'i mā'an fa'aḥyā bihi al-arḍa ba'da mawtihā inna fee dhālika la-āyāti liqawmin yasma'ūn",
    translation:
      "And Allah has sent down from the sky rain, giving life thereby to the earth after its lifelessness. Indeed, in that is a sign for a people who listen.",
  },

  {
    ayah: "Surah An-Nur (24:35)",
    arabic:
      "ٱللَّهُ نُورُ السَّمَٰوَٰتِ وَٱلْأَرْضِ ۚ مَثَلُ نُورِهِۦ كَمِشْكَوٰةٍ فِيهَا مِصْبَاحٌۭ فِى زُجَاجَةٍ ٱلزُّجَٰجَةُ كَأَنَّهَا كَوْكَبٌۭ دُرِّىٌّۭ يُوقَدُ مِن شَجَرَةٍ مُّبَٰرَكَةٍ زَيْتُونَةٍ لَّا شَرْقِيَّةٍ وَلَا غَرْبِيَّةٍ ۚ يَكَادُ زَيْتُهَا يُضِئُ وَلَوْ لَمْ تَمْسَسْهُ نَارٌۭ ۚ نُورٌۭ عَلَىٰ نُورٍۢ ۚ يَهْدِى ٱللَّهُ لِنُورِهِۦ مَن يَشَاءُ ۚ وَيَضْرِبُ ٱللَّهُ ٱلْأَمْثَٰلَ لِلنَّاسِ ۚ وَٱللَّهُ بِكُلِّ شَىْءٍ عَلِيمٌۭ",
    transliteration:
      "Allāhu nūru as-samāwāti wal-arḍi, mathalu nūrihi kamishkātin fee-hā miṣbāḥun fee zujājatim az-zujājatu ka'annahā kawkabun durīyyun yuqadu min shajaratin mubārakatin zaytūnatim lā sharqiyyatin walā gharbiyyah, yakādu zaytuhā yuḍī'u walaw lam tamssashu nārun, nūrun 'alā nūrin, yahdī Allāhu linūrihi man yashā'u, wa yaḍribu Allāhu al-amthāl lil-nāsi, wa Allāhu bikulli shay'in 'aleem",
    translation:
      "Allah is the Light of the heavens and the earth. The example of His Light is like a niche within which is a lamp; the lamp is within glass, the glass as if it were a pearly star lit from [the oil of] a blessed olive tree, neither of the east nor of the west, whose oil would almost glow even if untouched by fire. Light upon Light. Allah guides to His Light whom He wills. And Allah presents examples for the people, and Allah is Knowing of all things.",
  },
  {
    ayah: "Surah Al-A'raf (7:57)",
    arabic:
      "وَهُوَ ٱلَّذِى يُرْسِلُ ٱلرِّيَٰحَ بُشْرًۭا بَيْنَ يَدَىٰ رَحْمَتِهِۦ حَتَّىٰٓ يُحْيِۦٓ بِهَآ أَرْضًۭا مَّيْتَةًۭ ۚ كَذَٰلِكَ تُخْرِجُونَ",
    transliteration:
      "Wa huwa allathee yursilu ar-riyāḥa bushrā bayna yadayi raḥmatihi ḥattā yuḥyī bihā arḍan maytatan, kadhālika tukhrijoona",
    translation:
      "And it is He who sends the winds as glad tidings before His mercy, and We send down pure water from the sky.",
  },
  {
    ayah: "Surah Al-An'am (6:99)",
    arabic:
      "وَهُوَ ٱلَّذِى۟ يُنَزِّلُ مِنَ ٱلسَّمَٰءِ مَاءًۭ فَأَحْيَٰ بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَاۖ وَتُدْنُونَ قِسْطًۭا مِّنَ ٱللَّـهِۖ",
    transliteration:
      "Wa huwa allathee yunazzilu mina as-samā'i mā'an fa'aḥyā bihi al-arḍa ba'da mawtihā wa tūdnoona qistan mina Allāh",
    translation:
      "And it is He who sends down from the sky rain by which We bring to life the earth after its lifelessness. And We give you the provision of what is of His bounty.",
  },
  {
    ayah: "Surah Al-Jathiya (45:3)",
    arabic: "إِنَّ فِى السَّمَٰوَٰتِ وَٱلْأَرْضِ لَٰٓيَٰتٍ لِّلْمُؤْمِنِينَ",
    transliteration: "Inna fee as-samāwāti wal-arḍi la-āyāti lil-mu'minīn",
    translation:
      "Indeed, in the heavens and the earth are signs for the believers.",
  },

  {
    ayah: "Surah Al-A'raf (7:74)",
    arabic: "وَفَجَّرْنَا ٱلْبِحَارَ لِتَغْتَرِبَۢ مِنْهُۚ",
    transliteration: "Wa fajjarnā al-biḥāra litaghtārib minhu",
    translation:
      "And We caused the seas to burst forth, to show them the might of the Creator.",
  },

  {
    ayah: "Surah Al-Mulk (67:5)",
    arabic:
      "وَلَقَدْ زَيَّنَّا السَّمَٰوَٰتِ بِمَصَٰبِيحَ وَجَعَلْنَاٰهَا رُجُومًۭا لِّلشَّيَٰطِينِ وَأَتْرَفْنَا لَكُمْ فِيهَا قَوَٰٓمَٰۖ",
    transliteration:
      "Wa laqad zayyannā as-samāwāti bimaṣābīḥa wa jaʿalnāhā rujoomā lil-shayātīn wa atrafnā lakum fīhā qawāmā",
    translation:
      "And We have adorned the nearest heaven with stars and made [it] for missiles for the devils and have prepared for them the punishment of the Blaze.",
  },
  {
    ayah: "Surah At-Tur (52:48)",
    arabic:
      "وَفَجَّرْنَا ٱلْأَرْضَ عُيُونًۭا فَٱلْتَقَى ٱلْمَآءُ عَلَىٰٓ أَمْرٍۢ قَدَرٍۢ",
    transliteration: "Wa fajjarnal arḍa 'uyūnan faltaqal mā'u 'alā amrin qadār",
    translation:
      "And We caused the earth to gush forth with springs, so the waters met for a matter already predestined.",
  },

  {
    ayah: "Surah Al-Furqan (25:48)",
    arabic:
      "وَهُوَ ٱلَّذِىٓ سَجَّرَ ٱلْبَحْرَ لِيَحْشُرَ مِّنْهُ لَحْمًۭا طَرِيًّۭا وَيَسْتَخْرِجُ مِنْهُ حِلْيَةًۭ تَلْبَسُونَهَا وَتَرَىٰٓ الْفُلْكِ فِيهِ مَوَٰرِبَ لِّيَجْتَرُوا۟ مِنْهُ وَتَأْكُلُوا۟ مِمَّا يَحْرُصُونَ",
    transliteration:
      "Wa huwa allathee sajjara al-baḥra liyahshura minhu laḥman ṭarīyan wa yastakhriju minhu ḥilyatan talbasūnahā wa tara al-fulka feehi mawareba liyajtarū minhu wa ta'kulū mimmā yaḥruṣūn",
    translation:
      "And it is He who made the sea subservient, that you may eat from it tender meat and bring from it ornaments which you wear; and you see the ships plowing through it, that you may seek of His bounty; and perhaps you will be grateful.",
  },
  {
    ayah: "Surah An-Nur (24:40)",
    arabic:
      "أَوْ كَظُلُمَٰتٍ فِى بَحْرٍ لُّجِّىٍّ يَغْشَاهُ مَوْجٌۭ مِّن فَوْقِهِۦ مَوْجٌۭ مِّن فَوْقِهِۦ سَحَابٌۭۚ ظُلُمَٰتٌۭ بَعْضُهَا فَوْقَ بَعْضٍۢ ۚ إِذَآ أَخْرَجَ يَدَهُۥ لَمْ يَكَدْ يَرَاهَا ۚ وَمَن لَّمْ يَجْعَلِ ٱللَّهُ لَهُۥ نُورًۭا فَمَا لَهُۥ مِن نُّورٍۢ",
    transliteration:
      "Aw kadhulumat in fee bahrin lujjin yaghshāhu mawjun min fawqihi mawjun min fawqihi sahābun, dhulumātun ba'ḍuhā fawqa ba'ḍin, idhā akhraj yadahu lam yakad yarahā. Wa man lam yaj'ali Allahu lahoo nooran fama lahoo min noorin",
    translation:
      "Or [they are] like the darkness within a deep sea, which is covered by waves, upon which are waves, upon which are clouds—darkness, some of them upon others. When one puts out his hand, he can hardly see it. And he whom Allah has not made light for, for him there is no light.",
  },
  {
    ayah: "Surah Al-Imran (3:190)",
    arabic:
      "إِنَّ فِى خَلْقِ السَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَافِ ٱلَّيْلِ وَالنَّهَارِ لَآيَٰتٍ لّّّقَوْمٍۢ يَعْقِلُونَ",
    transliteration:
      "Inna fee khalqi as-samāwāti wal-arḍi wākhtilāfi al-layli wan-nahāri la-āyāti liqawmin ya'qilūn",
    translation:
      "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day are signs for those of understanding.",
  },
];

const kindnessAyaat = [
  {
    ayah: "Surah Al-Baqarah (2:83)",
    arabic:
      "وَإِذْ أَخَذْنَا مِيثَاقَ بَنِىٓ إِسْرَٰٓءِيلَ لَا تَعْبُدُونَ إِلَّا ٱللَّهَ وَبِالْوَالِدَيْنِ إِحْسَٰنًۭا وَبِذِى الْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينَ وَقُولُوا۟ لِلنَّاسِ حُسْنًۭا وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَٰتُوا۟ ٱلزَّكَاةَ ۚ ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًۭا مِّنْكُمْ وَأَنتُمْ مُعْرِضُونَ",
    transliteration:
      "Wa idh akhaznā mīthāqa banī Isrā'īla lā ta'budūna illā Allāha wabil-wālidayni iḥsānan wabi dhi al-qurbā wal-yatāmā wal-masākīn wa qūlū li-n-nāsi ḥusnan wa aqīmū as-ṣalāta wa ātū az-zakāh, thumma tawallaytum illā qalīlan minkum wa antum mu'riḍūn",
    translation:
      "And [recall] when We took the covenant from the Children of Israel, [enjoining upon them], 'Do not worship except Allah; and to parents do good, and to relatives, orphans, and the needy. And speak to people good [words] and establish prayer and give zakah.' Then you turned away, except a few of you, and you were refusing.",
  },

  {
    ayah: "Surah An-Nisa (4:36)",
    arabic:
      "وَعَبُدُوا۟ ٱللَّهَ وَلَا تُشْرِكُوا۟ بِهِۦ شَيْـًۭٔا وَبِالْوَالِدَيْنِ إِحْسَٰنًۭا وَبِذِى ٱلْقُرْبَىٰ وَٱلْيَتَٰمَىٰ وَٱلْمَسَٰكِينَ وَٱلْجَٰرِ ذِى ٱلْقُرْبَىٰ وَٱلْجَٰرِ ٱلْجُنُبِ وَٱلصَّٰحِبِ بِالْجَنبِ وَٱبْنِ ٱلسَّبِيلِ وَمَا مَلَكَتْ أَيْمَٰنُكُمْ ۚ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ مُتَكَبِّرًۭا فَخُورًۭا",
    transliteration:
      "Wa 'budū Allāha wa lā tushrikū bihī shay'an wabil-wālidayni iḥsānan wabidhi al-qurbā wal-yatāmā wal-masākīn wal-jāri dhi al-qurbā wal-jāri al-junubi wa-ṣ-ṣāḥibi bil-jambi wa ibni as-sabīli wamā malakat ay'mānukum, inna Allāha lā yuḥibbu man kāna mutakabbiran fakhooran",
    translation:
      "And worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy, the neighbor who is near, the neighbor who is a stranger, the companion who is by your side, the traveler, and those whom your right hands possess. Indeed, Allah does not like those who are self-deluding and boastful.",
  },

  {
    ayah: "Surah Al-A'raf (7:199)",
    arabic: "خُذِ ٱلْعَفْوَ وَأْمُرْ بِٱلْعُرْفِ وَأَعْرِضْ عَنِ ٱلْجَٰهِلِينَ",
    transliteration: "Khudhil 'afwa wa' mur bil-'urfi wa'riḍ 'anil jāhilīn",
    translation:
      "Take what is given freely, and enjoin what is good; and turn away from the ignorant.",
  },

  {
    ayah: "Surah Al-Mumtahanah (60:8)",
    arabic:
      "لَا يَنهاكُمُ ٱللَّهُ عَنِ ٱلَّذِينَ لَمْ يُقَٰتِلُوكُمْ فِى ٱلدِّينِ وَلَمْ يُخْرِجُوكُمْ مِنْ دِيرِكُمْ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا۟ إِلَيْهِمْ ۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُقْسِطِينَ",
    transliteration:
      "Lā yanhaakumu Allāhu 'anil-ladhīna lam yuqātilūkum fid-dīnī walam yukhrijūkum min dīrikum an tabarrūhum wa tuqsitū ilayhim, inna Allāha yuḥibbu al-muqsiṭīn",
    translation:
      "Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes – from being righteous toward them and acting justly toward them. Indeed, Allah loves those who act justly.",
  },

  {
    ayah: "Surah Al-Imran (3:134)",
    arabic:
      "ٱلَّذِينَ يُنفِقُونَ فِى السَّرَّآءِ وَٱلضَّرَّآءِ وَٱلْكَٰٰظِمِينَ ٱلْغَيْظَ وَٱلْعَٰفِينَ عَنِ ٱلنَّاسِ ۚ وَٱللَّهُ يُحِبُّ ٱلْمُحْسِنِينَ",
    transliteration:
      "Alladhīna yunfiqūna fī as-sarrā’i wal-ḍarrā’i wal-kāẓimīna al-ghayza wal-‘āfīna 'an an-nāsi, wa Allāhu yuḥibbu al-muḥsinīn",
    translation:
      "Those who spend in the cause of Allah during ease and hardship and who restrain anger and who pardon the people – and Allah loves the doers of good.",
  },

  {
    ayah: "Surah Al-Baqarah (2:195)",
    arabic:
      "وَأَنْفِقُوا۟ فِى سَبِيلِ ٱللَّهِ وَلَا تُلْقُوا۟ بِأَيْدِيكُمْ إِلَىٰ التَّهْلُكَةِ وَأَحْسِنُوا۟ ۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ",
    transliteration:
      "Wa anfiqū fī sabīli Allāhi wa lā tulqū bi-aydikum ilā at-tahlūkati wa aḥsinū, inna Allāha yuḥibbu al-muḥsinīn",
    translation:
      "And spend in the way of Allah and do not throw yourselves with your own hands into destruction. And do good; indeed, Allah loves the doers of good.",
  },

  {
    ayah: "Surah Al-Hujurat (49:11)",
    arabic:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا۟ لَا يَسْخَرْ قَوْمٌۭ مِّنْ قَوْمٍۢ عَسَىٰٓ أَنْ يَكُونُوا۟ خَيْرًۭا مِّنْهُمْ ۖ وَلَا نِسَاءٌۭ مِّن نِّسَاءٍۢ عَسَىٰٓ أَنْ يَكُنَّ خَيْرًۭا مِّنْهُنَّ ۚ وَلَا تَلْمِزُوا۟ أَنفُسَكُمْ وَلَا تَنَابَزُوا۟ بِٱلْأَلْقَابِ ۚ بِئْسَ ٱلِٱسْمُ ٱلْفُسُوقُ بَعْدَ ٱلْإِيمَٰنِ ۗ وَمَن لَّمْ يَتُبْ فَأُو۟لَٰٓئِكَ هُمُ ٱلْظَّٰلِمُونَ",
    transliteration:
      "Yā ayyuha alladhīna āmanū lā yaskhar qawmum min qawmin 'asā an yakūnū khayran minhūm walā nisā'un min nisā'in 'asā an yakunna khayran minhunn, walā talmizu anfusakum walā tanābazū bil-alqābi, bi’sal-ismu al-fusūqu ba'da al-īmāni, waman lam yatub fa'ūlā'ika humu aẓ-ẓālīmūn",
    translation:
      "O you who have believed, let not a people ridicule [another] people; perhaps they may be better than them. And do not women ridicule [other] women; perhaps they may be better than them. And do not insult one another and do not call each other by offensive nicknames. Wretched is the name of disobedience after faith. And whoever does not repent – it is those who are the wrongdoers.",
  },
  {
    ayah: "Surah Al-Ahqaf (46:17)",
    arabic:
      "وَوَصَّيْنَا ٱلْإِنسَٰنَ بِوَٰلِدَيْهِۦ حُسْنًۭا ۖ وَإِنْ جَٰهِدَاكَ عَلَىٰٓ أَنْ تُشْرِكَ بِي مَا لَيْسَ لَكَ بِهِۦ عِلْمٌۭ فَلَا تُطِعْهُمَا ۚ إِلَىَّ مَرْجِعُكُمْ فَأُنَبِّئُكُم بِمَا كُنتُمْ تَعْمَلُونَ",
    transliteration:
      "Wa waṣṣaynā al-insāna bi-wālidayhi ḥusnan, wa in jāhadākā 'alā an tushrikā bī mā laysa laka bihi 'ilmun falā tuṭi'humā, ilayya marji'ukum fa'unabbi'ukum bimā kuntum ta'malūn",
    translation:
      "And We have enjoined upon man [care] for his parents. His mother carried him with hardship upon hardship, and his weaning is in two years. Be grateful to Me and to your parents; to Me is the [final] destination.",
  },
  {
    ayah: "Surah At-Tawbah (9:71)",
    arabic:
      "وَٱلْمُؤْمِنُونَ وَٱلْمُؤْمِنَٰتُ بَعْضُهُمْۭ أَوۡيَآءُ بَعۡضٍۢۖ يَأْمُرُونَ بِٱلْمَعْرُوفِ وَيَنۡهَوْنَ عَنِ ٱلْمُنْكَرِ وَيُقِيمُونَ ٱلصَّلَٰةَ وَيُؤْتُونَ ٱلزَّكَٰةَ وَيُطِيعُونَ ٱللَّهَ وَرَسُولَهُۥٓ أُو۟لَٰٓئِكَ سَيَرْحَمُهُمُ ٱللَّهُ ۚ إِنَّ ٱللَّهَ عَزِيزٌۭ حَكِيمٌۭ",
    transliteration:
      "Wal-mu’minūna wal-mu’mināti ba'ḍuhum awiyā'ub ba'ḍin ya'murūna bil-ma'rūfi wayanhawna 'ani al-munkari wayuqīmūna as-ṣalāta wayu'tūna az-zakāh wuyuṭī'ūna Allāha wa rasūlah, ulā'ika sayarḥamuhumu Allāh, inna Allāha 'azīzun ḥakīm",
    translation:
      "The believing men and believing women are allies of one another. They enjoin what is right and forbid what is wrong and establish prayer and give zakah and obey Allah and His Messenger. Those are the ones upon whom Allah will have mercy. Indeed, Allah is Exalted in Might and Wise.",
  },

  {
    ayah: "Surah Al-Baqarah Ayat 263",
    arabic:
      "قَوۡلٞ مَّعۡرُوفٞ وَمَغۡفِرَةٌ خَيۡرٞ مِّن صَدَقَةٖ يَتۡبَعُهَآ أَذٗىۗ وَٱللَّهُ غَنِيٌّ حَلِيمٞ",
    transliteration:
      "Qawlum ma'roofunw wa maghfiratun khairum min sadaqatiny yatba'uhaaa azaa; wallaahu Ghaniyyun Haleem",
    translation:
      "Kind speech and forgiveness are better than charity followed by injury. And Allah is Free of need and Forbearing.",
  },
  {
    ayah: "Surah An-Nisa Ayat 19",
    arabic:
      "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ لَا يَحِلُّ لَكُمۡ أَن تَرِثُواْ ٱلنِّسَآءَ كَرۡهٗاۖ وَلَا تَعۡضُلُوهُنَّ لِتَذۡهَبُواْ بِبَعۡضِ مَآ ءَاتَيۡتُمُوهُنَّ إِلَّآ أَن يَأۡتِينَ بِفَٰحِشَةٖ مُّبَيِّنَةٖۚ وَعَاشِرُوهُنَّ بِٱلۡمَعۡرُوفِۚ فَإِن كَرِهۡتُمُوهُنَّ فَعَسَىٰٓ أَن تَكۡرَهُواْ شَيۡـٔٗا وَيَجۡعَلَ ٱللَّهُ فِيهِ خَيۡرٗا كَثِيرٗا",
    transliteration:
      "Yaaa aiyuhal lazeena aamanoo laa yahillu lakum an tarisun nisaaa'a karhan wa laa ta'duloohunna litazhaboo biba'di maaa aataitumoohunna illaaa ai ya'teena bifaahishatim mubaiyinah; wa 'aashiroo hunna bilma'roof; fa in karihtumoohunna fa'asaaa an takrahoo shai'anw wa yaj'alal laahu feehi khairan kaseeraa",
    translation:
      "O you who have believed, it is not lawful for you to inherit women by compulsion. And do not make difficulties for them in order to take [back] part of what you gave them unless they commit a clear immorality. And live with them in kindness. For if you dislike them - perhaps you dislike a thing and Allah makes therein much good.",
  },
  {
    ayah: "Surah An-Nisa Ayat 36",
    arabic:
      "وَٱعۡبُدُواْ ٱللَّهَ وَلَا تُشۡرِكُواْ بِهِۦ شَيۡـٔٗاۖ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنٗا وَبِذِي ٱلۡقُرۡبَىٰ وَٱلۡيَتَٰمَىٰ وَٱلۡمَسَٰكِينِ وَٱلۡجَارِ ذِي ٱلۡقُرۡبَىٰ وَٱلۡجَارِ ٱلۡجُنُبِ وَٱلصَّاحِبِ بِٱلۡجَنۢبِ وَٱبۡنِ ٱلسَّبِيلِ وَمَا مَلَكَتۡ أَيۡمَٰنُكُمۡۗ إِنَّ ٱللَّهَ لَا يُحِبُّ مَن كَانَ مُخۡتَالٗا فَخُورًا",
    transliteration:
      "Wa'budul laaha wa laa tushrikoo bihee shai'anw wa bilwaalidaini ihsaananw wa bizil qurbaa walyataamaa walmasaakeeni waljaari zilqurbaa waljaaril junubi wassaahibi biljambi wabnis sabeeli wa maa malakat aimaanukum; innal laaha laa yuhibbu man kaana mukhtaalan fakhooraa",
    translation:
      "Worship Allah and associate nothing with Him, and to parents do good, and to relatives, orphans, the needy, the near neighbor, the neighbor farther away, the companion at your side, the traveler, and those whom your right hands possess. Indeed, Allah does not like those who are self-deluding and boastful.",
  },
  {
    ayah: "Surah Al-Ma'idah Ayat 8",
    arabic:
      "ـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ كُونُواْ قَوَّـٰمِينَ لِلَّهِ شُهَدَآءَ بِٱلۡقِسۡطِۖ وَلَا يَجۡرِمَنَّكُمۡ شَنَـَٔانُ قَوۡمٍ عَلَىٰٓ أَلَّا تَعۡدِلُواْۚ ٱعۡدِلُواْ هُوَ أَقۡرَبُ لِلتَّقۡوَىٰۖ وَٱتَّقُواْ ٱللَّهَۚ إِنَّ ٱللَّهَ خَبِيرُۢ بِمَا تَعۡمَلُونَ",
    transliteration:
      "Yaaa aiyuhal lazeena aamaanoo koonoo qawwaa meena lillaahi shuhadaaa'a bilqist, wa laa yajrimannakum shana aanu qawmin 'alaaa allaa ta'diloo; i'diloo; huwa aqrabu littaqwaa wattaqul laah; innal laaha khabeerum bimaa ta'maloon",
    translation:
      "O you who have believed, be persistently standing firm for Allah, witnesses in justice, and do not let the hatred of a people prevent you from being just. Be just; that is nearer to righteousness. And fear Allah; indeed, Allah is Acquainted with what you do",
  },
  {
    ayah: "Surah Al-Anam Ayat 152",
    arabic:
      "وَلَا تَقۡرَبُواْ مَالَ ٱلۡيَتِيمِ إِلَّا بِٱلَّتِي هِيَ أَحۡسَنُ حَتَّىٰ يَبۡلُغَ أَشُدَّهُۥۚ وَأَوۡفُواْ ٱلۡكَيۡلَ وَٱلۡمِيزَانَ بِٱلۡقِسۡطِۖ لَا نُكَلِّفُ نَفۡسًا إِلَّا وُسۡعَهَاۖ وَإِذَا قُلۡتُمۡ فَٱعۡدِلُواْ وَلَوۡ كَانَ ذَا قُرۡبَىٰۖ وَبِعَهۡدِ ٱللَّهِ أَوۡفُواْۚ ذَٰلِكُمۡ وَصَّىٰكُم بِهِۦ لَعَلَّكُمۡ تَذَكَّرُونَ",
    transliteration:
      "Wa laa taqraboo maalal yateemi illaa billatee hiyaa ahsanu hattaa yablugha ashuddahoo wa awful kaila walmeezaana bilqisti laa nukallifu nafsan illaa wus'ahaa wa izaa qultum fa'diloo wa law kaana zaa qurbaa wa bi 'ahdil laahi awfoo; zaalikum wassaakum bihee la'allakum tazakkaroon",
    translation:
      "And do not approach the orphan's property except in a way that is best until he reaches maturity. And give full measure and weight in justice. We do not charge any soul except [with that within] its capacity. And when you testify, be just, even if [it concerns] a near relative. And the covenant of Allah fulfill. This has He instructed you that you may remember.",
  },
  {
    ayah: "Surah At-Taubah Ayat 71",
    arabic:
      "وَٱلۡمُؤۡمِنُونَ وَٱلۡمُؤۡمِنَٰتُ بَعۡضُهُمۡ أَوۡلِيَآءُ بَعۡضٖۚ يَأۡمُرُونَ بِٱلۡمَعۡرُوفِ وَيَنۡهَوۡنَ عَنِ ٱلۡمُنكَرِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَيُؤۡتُونَ ٱلزَّكَوٰةَ وَيُطِيعُونَ ٱللَّهَ وَرَسُولَهُۥٓۚ أُوْلَـٰٓئِكَ سَيَرۡحَمُهُمُ ٱللَّهُۗ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٞ",
    transliteration:
      "Wal mu'minoona wal mu'minaatu ba'duhum awliyaaa'u ba'd; ya'muroona bilma'roofi wa yanhawna 'anil munkari wa yuqeemoonas Salaata wa yu'toonaz Zakaata wa yutee'oonal laaha wa Rasoolah; ulaaa'ika sayarhamu humul laah; innallaaha 'Azeezun Hakeem",
    translation:
      "The believing men and believing women are allies of one another. They enjoin what is right and forbid what is wrong and establish prayer and give zakah and obey Allah and His Messenger. Those - Allah will have mercy upon them. Indeed, Allah is Exalted in Might and Wise.",
  },
  {
    ayah: "Surah An-Nahl Ayat 125",
    arabic:
      "ٱدۡعُ إِلَىٰ سَبِيلِ رَبِّكَ بِٱلۡحِكۡمَةِ وَٱلۡمَوۡعِظَةِ ٱلۡحَسَنَةِۖ وَجَٰدِلۡهُم بِٱلَّتِي هِيَ أَحۡسَنُۚ إِنَّ رَبَّكَ هُوَ أَعۡلَمُ بِمَن ضَلَّ عَن سَبِيلِهِۦ وَهُوَ أَعۡلَمُ بِٱلۡمُهۡتَدِينَ",
    transliteration:
      "Ud'u ilaa sabeeli Rabbika bilhikmati walmaw 'izatil hasanati wa jaadilhum billatee hiya ahsan; inna Rabbaka huwa a'almu biman dalla 'an sabeelihee wa Huwa a'lamu bilmuhtadeen",
    translation:
      "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best. Indeed, your Lord is most knowing of who has strayed from His way, and He is most knowing of who is [rightly] guided",
  },
  {
    ayah: "Surah Al-Isra Ayat 23",
    arabic:
      "وَقَضَىٰ رَبُّكَ أَلَّا تَعۡبُدُوٓاْ إِلَّآ إِيَّاهُ وَبِٱلۡوَٰلِدَيۡنِ إِحۡسَٰنًاۚ إِمَّا يَبۡلُغَنَّ عِندَكَ ٱلۡكِبَرَ أَحَدُهُمَآ أَوۡ كِلَاهُمَا فَلَا تَقُل لَّهُمَآ أُفّٖ وَلَا تَنۡهَرۡهُمَا وَقُل لَّهُمَا قَوۡلٗا كَرِيمٗا",
    transliteration:
      "Wa qadaa Rabbuka allaa ta'budooo illaaa iyyaahu wa bilwaalidaini ihsaanaa; immaa yablughanna 'indakal kibara ahaduhumaaa aw kilaahumaa falaa taqul lahumaaa uffinw wa laa tanharhumaa wa qullahumaa qawlan kareemaa",
    translation:
      "And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them [so much as], 'uff' and do not repel them but speak to them a noble word.",
  },
  {
    ayah: "Surah Al-Isra Ayat 26",
    arabic:
      "وَءَاتِ ذَا ٱلۡقُرۡبَىٰ حَقَّهُۥ وَٱلۡمِسۡكِينَ وَٱبۡنَ ٱلسَّبِيلِ وَلَا تُبَذِّرۡ تَبۡذِيرًا",
    transliteration:
      "Wa aati zal qurbaa haqqahoo walmiskeena wabnas sabeeli wa laa tubazzir tabzeeraa",
    translation:
      "And give the relative his right, and [also] the poor and the traveler, and do not spend wastefully.",
  },
  {
    ayah: "Surah Al-Furqan Ayat 63",
    arabic:
      "وَعِبَادُ ٱلرَّحۡمَٰنِ ٱلَّذِينَ يَمۡشُونَ عَلَى ٱلۡأَرۡضِ هَوۡنٗا وَإِذَا خَاطَبَهُمُ ٱلۡجَٰهِلُونَ قَالُواْ سَلَٰمٗا",
    transliteration:
      "Wa 'ibaadur Rahmaanil lazeena yamshoona 'alal ardi hawnanw wa izaa khaata bahumul jaahiloona qaaloo salaamaa",
    translation:
      "And the servants of the Most Merciful are those who walk upon the earth easily, and when the ignorant address them [harshly], they say [words of] peace",
  },
  {
    ayah: "Surah Ar-Rum Ayat 21",
    arabic:
      "وَمِنۡ ءَايَٰتِهِۦٓ أَنۡ خَلَقَ لَكُم مِّنۡ أَنفُسِكُمۡ أَزۡوَٰجٗا لِّتَسۡكُنُوٓاْ إِلَيۡهَا وَجَعَلَ بَيۡنَكُم مَّوَدَّةٗ وَرَحۡمَةًۚ إِنَّ فِي ذَٰلِكَ لَأٓيَٰتٖ لِّقَوۡمٖ يَتَفَكَّرُونَ",
    transliteration:
      "Wa min Aayaatiheee an khalaqa lakum min anfusikum azwaajal litaskunooo ilaihaa wa ja'ala bainakum mawad datanw wa rahmah; inna fee zaalika la Aayaatil liqawminy yatafakkaroon",
    translation:
      "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
  },
  {
    ayah: "Surah Luqman Ayat 14",
    arabic:
      "وَوَصَّيۡنَا ٱلۡإِنسَٰنَ بِوَٰلِدَيۡهِ حَمَلَتۡهُ أُمُّهُۥ وَهۡنًا عَلَىٰ وَهۡنٖ وَفِصَٰلُهُۥ فِي عَامَيۡنِ أَنِ ٱشۡكُرۡ لِي وَلِوَٰلِدَيۡكَ إِلَيَّ ٱلۡمَصِيرُ",
    transliteration:
      "Wa wassainal insaana bi waalidaihi hamalat hu ummuhoo wahnan 'alaa wahninw wa fisaaluhoo fee 'aamaini anishkur lee wa liwaalidaika ilaiyal maseer",
    translation:
      "And We have enjoined upon man [care] for his parents. His mother carried him, [increasing her] in weakness upon weakness, and his weaning is in two years. Be grateful to Me and to your parents; to Me is the [final] destination.",
  },

  {
    ayah: "Surah Luqman Ayat 15",
    arabic:
      "وَإِن جَٰهَدَاكَ عَلَىٰٓ أَن تُشۡرِكَ بِي مَا لَيۡسَ لَكَ بِهِۦ عِلۡمٞ فَلَا تُطِعۡهُمَاۖ وَصَاحِبۡهُمَا فِي ٱلدُّنۡيَا مَعۡرُوفٗاۖ وَٱتَّبِعۡ سَبِيلَ مَنۡ أَنَابَ إِلَيَّۚ ثُمَّ إِلَيَّ مَرۡجِعُكُمۡ فَأُنَبِّئُكُم بِمَا كُنتُمۡ تَعۡمَلُونَ",
    transliteration:
      "Wa in jaahadaaka 'alaaa an tushrika bee maa laisa laka bihee 'ilmun falaa tuti'humaa wa saahib humaa fid dunyaa ma'roofanw wattabi' sabeela man anaaba ilayy; summa ilaiya marji'ukum fa unabbi'ukum bimaa kuntum ta'maloon",
    translation:
      "But if they endeavor to make you associate with Me that of which you have no knowledge, do not obey them but accompany them in [this] world with appropriate kindness and follow the way of those who turn back to Me [in repentance]. Then to Me will be your return, and I will inform you about what you used to do.",
  },
  {
    ayah: "Surah Ash-Shura Ayat 40",
    arabic:
      "وَجَزَـٰٓؤُاْ سَيِّئَةٖ سَيِّئَةٞ مِّثۡلُهَاۖ فَمَنۡ عَفَا وَأَصۡلَحَ فَأَجۡرُهُۥ عَلَى ٱللَّهِۚ إِنَّهُۥ لَا يُحِبُّ ٱلظَّـٰلِمِينَ",
    transliteration:
      "Wa jazaaa'u saiyi'atin saiyi'atum misluha faman 'afaa wa aslaha fa ajruhoo 'alal laah; innahoo laa yuhibbuz zaalimeen",
    translation:
      "And the retribution for an evil act is an evil one like it, but whoever pardons and makes reconciliation - his reward is [due] from Allah. Indeed, He does not like wrongdoers.",
  },
  {
    ayah: "Surah Al-Hujurat Ayat 10",
    arabic:
      "إِنَّمَا ٱلۡمُؤۡمِنُونَ إِخۡوَةٞ فَأَصۡلِحُواْ بَيۡنَ أَخَوَيۡكُمۡۚ وَٱتَّقُواْ ٱللَّهَ لَعَلَّكُمۡ تُرۡحَمُونَ",
    transliteration:
      "Innamal mu'minoona ikhwatun fa aslihoo baina akhawaykum wattaqul laaha la'allakum turhamoon ",
    translation:
      "The believers are but brothers, so make settlement between your brothers. And fear Allah that you may receive mercy.",
  },
  {
    ayah: "Surah Al-Hadid Ayat 18",
    arabic:
      "إِنَّ ٱلۡمُصَّدِّقِينَ وَٱلۡمُصَّدِّقَٰتِ وَأَقۡرَضُواْ ٱللَّهَ قَرۡضًا حَسَنٗا يُضَٰعَفُ لَهُمۡ وَلَهُمۡ أَجۡرٞ كَرِيمٞ",
    transliteration:
      "Innal mussaddiqeena wal mussaddiqaati wa aqradul laaha qardan hassanany yudaa'afu lahum wa lahum ajrun kareem",
    translation:
      "Indeed, the men who practice charity and the women who practice charity and [they who] have loaned Allah a goodly loan - it will be multiplied for them, and they will have a noble reward.",
  },
  {
    ayah: "Surah Al-Mumtahanah Ayat 8",
    arabic:
      "لَّا يَنۡهَىٰكُمُ ٱللَّهُ عَنِ ٱلَّذِينَ لَمۡ يُقَٰتِلُوكُمۡ فِي ٱلدِّينِ وَلَمۡ يُخۡرِجُوكُم مِّن دِيَٰرِكُمۡ أَن تَبَرُّوهُمۡ وَتُقۡسِطُوٓاْ إِلَيۡهِمۡۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُقۡسِطِينَ",
    transliteration:
      "Laa yanhaakumul laahu 'anil lazeena lam yuqaatilookum fid deeni wa lam yukhrijookum min diyaarikum an tabarroohum wa tuqsitooo ilaihim; innal laaha yuhibbul muqsiteen",
    translation:
      "Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes - from being righteous toward them and acting justly toward them. Indeed, Allah loves those who act justly.",
  },
  {
    ayah: "Surah Al-Insan Ayat 8",
    arabic:
      "وَيُطۡعِمُونَ ٱلطَّعَامَ عَلَىٰ حُبِّهِۦ مِسۡكِينٗا وَيَتِيمٗا وَأَسِيرًا",
    transliteration:
      "Wa yut''imoonat ta'aama 'alaa hubbihee miskeenanw wa yateemanw wa aseeraa",
    translation:
      "And they give food in spite of love for it to the needy, the orphan, and the captive",
  },
];

// general

const imageContainer = document.querySelector("div.img");
const openButton = document.querySelector("#click_1");
const modal_container = document.querySelector("#modal_container");

var closeButton = document.createElement("button");
var modal = document.querySelector(".modal");
var newDiv = document.createElement("div");
var newImg = document.createElement("img");
var newDiv2 = document.createElement("div");
var newH1 = document.createElement("h1");
var newP1 = document.createElement("p");
var newP2 = document.createElement("p");
var newP3 = document.createElement("p");
var span = document.createElement("span");

newDiv2.appendChild(newH1);
newDiv2.appendChild(newP1);
newDiv2.appendChild(newP2);
newDiv2.appendChild(newP3);
newDiv.appendChild(newDiv2);
modal.appendChild(newDiv);
modal.appendChild(closeButton);

imageContainer.appendChild(newImg);
imageContainer.appendChild(span);

newImg.classList.add("img_styles");
span.classList.add("span_styles");

newH1.style.fontSize = "20px";
newP1.style.padding = "10px";
newP2.classList.add("translation");
newDiv2.classList.add("div_2");

// Sadness ayaat

function sadnessVerse() {
  modal_container.classList.add("show");
  const verse =
    sadnessAyaat[Math.floor(Math.random() * sadnessAyaat.length + 1)];
  console.log(verse);
  newImg.src = "./image_1.jpg";
  span.innerHTML = "Do not grieve, for your Perfect Rabb is with you.";
  newH1.innerHTML = verse?.arabic || "";
  newP1.innerHTML = verse.transliteration;
  newP2.innerHTML = verse.translation;
  newP3.innerHTML = verse.ayah;
  closeButton.innerHTML = "Close me";
  modal.style.color = "#bc6277";
  closeButton.classList.add("button");
}

closeButton.addEventListener("click", () => {
  modal_container.classList.remove("show");
  closeButton.classList.forEach((classname) => {
    if (classname !== "button") {
      closeButton.classList.remove(classname);
    }
  });
  span.classList.forEach((classname) => {
    if (classname !== "span_styles") {
      span.classList.remove(classname);
    }
  });
});

modal_container.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

// gratitude

function gratitudeVerse() {
  modal_container.classList.add("show");
  const verse =
    gratitudeAyaat[Math.floor(Math.random() * gratitudeAyaat.length + 1)];
  console.log(verse);
  newH1.innerHTML = verse?.arabic || "";
  newP1.innerHTML = verse.transliteration;
  newP2.innerHTML = verse.translation;
  newP3.innerHTML = verse.ayah;
  closeButton.innerHTML = "Close me";
  newImg.src = "./image_2.jpg";
  span.innerHTML = "Be grateful for what Al-Wahab has bestowed upon you.";

  closeButton.classList.add("button");
  modal.style.color = "#A0C4E2";
  closeButton.classList.add("forgiveness-button");
}

// nature
function natureVerse() {
  modal_container.classList.add("show");
  const verse = natureAyaat[Math.floor(Math.random() * natureAyaat.length + 1)];
  console.log(verse);
  newH1.innerHTML = verse?.arabic || "";
  newP1.innerHTML = verse.transliteration;
  newP2.innerHTML = verse.translation;
  newP3.innerHTML = verse.ayah;
  closeButton.innerHTML = "Close me";
  newImg.src = "./image_3.jpg";
  span.innerHTML =
    "Servants of Allah, lift your heads and marvel at Allah's creations.";
  span.classList.add("nature_span_styles");

  closeButton.classList.add("button");
  modal.style.color = "#8ACB88";
  closeButton.classList.add("nature-button");
}

// kindness
function kindnessVerse() {
  modal_container.classList.add("show");
  const verse =
    kindnessAyaat[Math.floor(Math.random() * kindnessAyaat.length + 1)];
  console.log(verse);
  newH1.innerHTML = verse?.arabic || "";
  newP1.innerHTML = verse.transliteration;
  newP2.innerHTML = verse.translation;
  newP3.innerHTML = verse.ayah;
  closeButton.innerHTML = "Close me";
  newImg.src = "./image_4.jpg";
  span.innerHTML = "Be kind";

  closeButton.classList.add("button");
  modal.style.color = "#595F72";
  closeButton.classList.add("kindness-button");
}
