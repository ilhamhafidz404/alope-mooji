const emojis =[
  {
    unicode: 'U+1F600',
    emoji: "😀",
    name: "Smiling face",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['happy']
  },
  {
    unicode: 'U+1F601',
    emoji: "😁",
    name: "Beaming face with smiling eyes",
    category: "Classic Emoji",
    key: 'smile',
    tags:  ['happy']
  },
  {
    unicode: 'U+1F602',
    emoji: "😂",
    name: "Lauging with tears",
    category: "Classic Emoji",
    key: 'laugh',
    tags: ['happy', 'laugh']
  },
  {
    unicode: 'U+1F923',
    emoji: "🤣",
    name: "Rolling on the floor laughing",
    category: "Classic Emoji",
    key: 'laugh',
    tags: ['happy', 'laugh']
  },
  {
    unicode: 'U+1F604',
    emoji: "😄",
    name: "Smiling face with smiling eyes",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['happy']
  },
  {
    unicode: 'U+1F605',
    emoji: "😅",
    name: "Smiling face with tears",
    category: "Classic Emoji",
    key: '',
    tags: ['happy']
  },
  {
    unicode: 'U+1F606',
    emoji: "😆",
    name: "Grinning Face",
    category: "Classic Emoji",
    key: 'laugh',
    tags: ['happy']
  },
  {
    unicode: 'U+1F609',
    emoji: "😉",
    name: "Winking face",
    category: "Classic Emoji",
    key: '',
    tags: ['happy']
  },
  {
    unicode: 'U+1F60A',
    emoji: "😊",
    name: "Smiling face with smiling eyes",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['smile', 'emotional']
  },
  {
    unicode: "U+1F60B",
    emoji: "😋",
    name: "Yummy face",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['emotional', 'tongue', 'happy']
  },
  {
    unicode: 'U+1F60E',
    emoji: "😎",
    name: "Smiling face with sunglasses",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F60D',
    emoji: "😍",
    name: "Smiling face with heart eyes",
    category: "Classic Emoji",
    key: 'love',
    tags: ['emotional', 'love']
  },
  {
    unicode: 'U+1F970',
    emoji: "🥰",
    name: "Smiling face with hearts",
    category: "Classic Emoji",
    key: 'love',
    tags: ['emotional', 'love']
  },
  {
    unicode: 'U+1F618',
    emoji: "😘",
    name: "Face blowing kiss",
    category: "Classic Emoji",
    key: 'love',
    tags: ['emotional', 'love']
  },
  {
    unicode: 'U+1F617',
    emoji: "😗",
    name: "Kissing face",
    category: "Classic Emoji",
    key: 'love',
    tags: ['emotional', 'love']
  },
  {
    unicode: 'U+1F619',
    emoji: "😙",
    name: "Kissng face with smiling eyes",
    category: "Classic Emoji",
    key: 'love',
    tags: ['emotional', 'love']
  },
  {
    unicode: 'U+1F61A',
    emoji: "😚",
    name: "Kissing face with closed eyese",
    category: "Classic Emoji",
    key: 'love',
    tags: ['emotional', 'love']
  },
  {
    unicode: 'U+1F61A',
    emoji: "☺️",
    name: "Grinning Face",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['smile']
  },
  {
    unicode: 'U+1F642',
    emoji: "🙂",
    name: "Slightly smiling face",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['smile']
  },
  {
    unicode: "U+1F917",
    emoji: "🤗",
    name: "Hugs",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['smile', 'love']
  },
  {
    unicode: "U+1F92D",
    emoji: "🤭",
    name: "Face with hand in mouth",
    category: "Classic Emoji",
    key: 'smile',
    tags: ['smile', 'happy', 'emotional']
  },
  {
    unicode: "U+1F92B",
    emoji: "🤫",
    name: "Shushing face",
    category: "Classic Emoji",
    key: 'shuuuts',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F60D',
    emoji: "🤩",
    name: "Star-struck",
    category: "Classic Emoji",
    key: 'happy',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F914',
    emoji: "🤔",
    name: "Thinkin face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F928',
    emoji: "🤨",
    name: "Face with raised eyebrow",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F610',
    emoji: "😐",
    name: "Neutral face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F611',
    emoji: "😑",
    name: "Expressionless face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F636',
    emoji: "😶",
    name: "Face with no mouth",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F644',
    emoji: "🙄",
    name: "Face with rolling eyes",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F62C',
    emoji: "😬",
    name: "Grimacing face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F4A8',
    emoji: "😮‍💨",
    name: "Grimacing face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F62E',
    emoji: "😮",
    name: "Face with open mouth",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F925',
    emoji: "🤥",
    name: "Lying face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F60F',
    emoji: "😏",
    name: "Smirking face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral', 'smile']
  },
  {
    unicode: 'U+1F623',
    emoji: "😣",
    name: "Persevering face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F61E',
    emoji: "😞",
    name: "Disapointed face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F972',
    emoji: "🥲",
    name: "Smiling face with tears",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad', 'cry']
  },
  {
    unicode: 'U+1F625',
    emoji: "😥",
    name: "Sad but relieved face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad', 'cry']
  },
  {
    unicode: 'U+1F622',
    emoji: "😢",
    name: "Crying face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad', 'cry']
  },
  {
    unicode: 'U+1F62D',
    emoji: "😭",
    name: "Loudly crying face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['cry']
  },
  {
    unicode: 'U+1F631',
    emoji: "😱",
    name: "Screaming face",
    category: "Classic Emoji",
    key: 'concerned',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F616',
    emoji: "😖",
    name: "Confounded face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F910',
    emoji: "🤐",
    name: "Zipped mouth",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F62F',
    emoji: "😯",
    name: "Hushed face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F62A',
    emoji: "😪",
    name: "Sleepy face",
    category: "Classic Emoji",
    key: 'sleep',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F62B',
    emoji: "😫",
    name: "Tired face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F971',
    emoji: "🥱",
    name: "Yawning face",
    category: "Classic Emoji",
    key: 'sleep',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F634',
    emoji: "😴",
    name: "Sleeping face",
    category: "Classic Emoji",
    key: 'sleep',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F624',
    emoji: "😤",
    name: "Face with steam",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['negative']
  },
  {
    unicode: 'U+1F621',
    emoji: "😡",
    name: "Pouting face",
    category: "Classic Emoji",
    key: 'angry',
    tags: ['negative']
  },
  {
    unicode: 'U+1F92C',
    emoji: "🤬",
    name: "Face with symbols on mouth",
    category: "Classic Emoji",
    key: 'angry',
    tags: ['negative']
  },
  {
    unicode: 'U+1F608',
    emoji: "😈",
    name: "Smiling face with horns",
    category: "Classic Emoji",
    key: 'angry',
    tags: ['negative']
  },
  {
    unicode: 'U+1F47F',
    emoji: "👿",
    name: "Angry face with horns",
    category: "Classic Emoji",
    key: 'angry',
    tags: ['negative']
  },
  {
    unicode: 'U+1F620',
    emoji: "😠",
    name: "Angry face",
    category: "Classic Emoji",
    key: 'angry',
    tags: ['negative']
  },
  {
    unicode: 'U+1F60C',
    emoji: "😌",
    name: "Relieved face",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F61B',
    emoji: "😛",
    name: "Face with tongue",
    category: "Classic Emoji",
    key: 'tongue',
    tags: ['tongue']
  },
  {
    unicode: 'U+1F61C',
    emoji: "😜",
    name: "Winking face with tongue",
    category: "Classic Emoji",
    key: 'tongue',
    tags: ['smile', 'tongue']
  },
  {
    unicode: 'U+1F92A',
    emoji: "🤪",
    name: "Zanny face",
    category: "Classic Emoji",
    key: 'tongue',
    tags: ['tongue']
  },
  {
    unicode: 'U+1F61D',
    emoji: "😝",
    name: "Squinting face with tongue",
    category: "Classic Emoji",
    key: 'tongue',
    tags: ['happy', 'tongue']
  },
  {
    unicode: 'U+1F637',
    emoji: "😷",
    name: "Face with mask",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F912',
    emoji: "🤒",
    name: "Face with thermometer",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F915',
    emoji: "🤕",
    name: "Face with bandage",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F922',
    emoji: "🤢",
    name: "Nauseous face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F92E',
    emoji: "🤮",
    name: "Vomiting face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F927',
    emoji: "🤧",
    name: "Sneezing face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F975',
    emoji: "🥵",
    name: "Hot face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F976',
    emoji: "🥶",
    name: "Cold face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F974',
    emoji: "🥴",
    name: "Woozy face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F635',
    emoji: "😵",
    name: "Face with crossed-out face",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F92F',
    emoji: "🤯",
    name: "Face with exploding head",
    category: "Classic Emoji",
    key: 'sick',
    tags: ['sick']
  },
  {
    unicode: 'U+1F924',
    emoji: "🤤",
    name: "Drooling face",
    category: "Classic Emoji",
    key: 'happy',
    tags: ['emotional']
  },
  {
    unicode: 'U+1F612',
    emoji: "😒",
    name: "Unamused face",
    category: "Classic Emoji",
    key: 'negative',
    tags: ['negative', 'neutral']
  },
  {
    unicode: 'U+1F613',
    emoji: "😓",
    name: "Downcast face with sweat",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['sad', 'neutral']
  },
  {
    unicode: 'U+1F629',
    emoji: "😩",
    name: "Weary face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F614',
    emoji: "😔",
    name: "Pensive face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F615',
    emoji: "😕",
    name: "Confused face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F61F',
    emoji: "😟",
    name: "Worried face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F643',
    emoji: "🙃",
    name: "Upsunicodee down facee",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['smile', 'sad']
  },
  {
    unicode: "U+1F911",
    emoji: "🤑",
    name: "Money face with money tongue",
    category: "Classic Emoji",
    key: 'happy',
    tags: ['emotional', 'tongue']
  },
  {
    unicode: 'U+1F632',
    emoji: "😲",
    name: "Astonished face",
    category: "Classic Emoji",
    key: 'concerned',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F97A',
    emoji: "🥺",
    name: "Begging face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['concerned', 'sad', 'cry']
  },
  {
    unicode: 'U+1F626',
    emoji: "😦",
    name: "Frowning face with open mouth",
    category: "Classic Emoji",
    key: 'concerned',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F627',
    emoji: "😧",
    name: "Angushed face",
    category: "Classic Emoji",
    key: 'concerned',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F628',
    emoji: "😨",
    name: "Fearful face",
    category: "Classic Emoji",
    key: 'concerned',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F630',
    emoji: "😰",
    name: "Anxious face with sweat",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F633',
    emoji: "😳",
    name: "Flushed face",
    category: "Classic Emoji",
    key: 'concerned',
    tags: ['concerned']
  },
  {
    unicode: 'U+1F641',
    emoji: "☹️",
    name: "Sad Face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F641',
    emoji: "🙁",
    name: "Slightly frowning face",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['sad']
  },
  {
    unicode: 'U+1F607',
    emoji: "😇",
    name: "Smiling face with halo",
    category: "Classic Emoji",
    key: 'sad',
    tags: ['smile', 'emotional']
  },
  {
    unicode: 'U+1F913',
    emoji: "🤓",
    name: "Nerdy face",
    category: "Classic Emoji",
    key: 'happy',
    tags: ['smile']
  },
  {
    unicode: 'U+1F9D0',
    emoji: "🧐",
    name: "Face with monocle",
    category: "Classic Emoji",
    key: 'neutral',
    tags: ['neutral']
  },
  {
    unicode: 'U+1F973',
    emoji: "🥳",
    name: "Partying face",
    category: "Classic Emoji",
    key: 'happy',
    tags: ['happy', 'emotional']
  },
  {
    unicode: 'U+1F4A9',
    emoji: "💩",
    name: "Pile of poo",
    category: "Classic Emoji",
    key: 'constume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F921',
    emoji: "🤡",
    name: "Clown",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F479',
    emoji: "👹",
    name: "Ogre",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F47A',
    emoji: "👺",
    name: "Goblin",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F47B',
    emoji: "👻",
    name: "Ghost",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F47D',
    emoji: "👽",
    name: "Alien",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F47E',
    emoji: "👾",
    name: "Alien monster",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F916',
    emoji: "🤖",
    name: "Robot",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume']
  },
  {
    unicode: 'U+1F480',
    emoji: "💀",
    name: "Skull",
    category: "Classic Emoji",
    key: 'costume',
    tags: ['costume', 'negative']
  },
  {
    unicode: 'U+2620',
    emoji: "☠",
    name: "Skull and cross-bone",
    category: "Classic Emoji",
    key: '',
    tags: ['costume', 'negative']
  },
  
  // animal amojis
  
  {
    unicode: 'U+1F63A',
    emoji: "😺",
    name: "Grinnig cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'happy']
  },
  {
    unicode: 'U+1F638',
    emoji: "😸",
    name: "Grinning cat with smiling eyes",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'happy', 'smile']
  },
  {
    unicode: 'U+1F639',
    emoji: "😹",
    name: "Grinning cat with tears",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'happy', 'laugh']
  },
  {
    unicode: 'U+1F63B',
    emoji: "😻",
    name: "Smiling cat with heart eyes",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'love']
  },
  {
    unicode: 'U+1F63C',
    emoji: "😼",
    name: "Cat with wry smile",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'smile']
  },
  {
    unicode: 'U+1F63D',
    emoji: "😽",
    name: "Kissing cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'love']
  },
  {
    unicode: 'U+1F640',
    emoji: "🙀",
    name: "Weary cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'concerned']
  },
  {
    unicode: 'U+1F63F',
    emoji: "😿",
    name: "Crying cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'cry']
  },
  {
    unicode: 'U+1F63E',
    emoji: "😾",
    name: "Pouting cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal', 'sad']
  },
  {
    unicode: 'U+1F431',
    emoji: "🐱",
    name: "Cat face",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['cat', 'animal']
  },
  {
    unicode: 'U+1F408',
    emoji: "🐈",
    name: "Cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['animal']
  },
  {
    unicode: 'U+200D',
    emoji: "🐈‍⬛",
    name: "Black cat",
    category: "Animal Emoji",
    key: 'cat',
    tags: ['animal']
  },
  {
    unicode: 'U+1F648',
    emoji: "🙈",
    name: "See no evil monkey",
    category: "Animal Emoji",
    key: 'monkey',
    tags: ['monkey', 'animal']
  },
  {
    unicode: 'U+1F649',
    emoji: "🙉",
    name: "Hear no evil monkey",
    category: "Animal Emoji",
    key: 'monkey',
    tags: ['monkey', 'animal']
  },
  {
    unicode: 'U+1F64A',
    emoji: "🙊",
    name: "Speak no evil monkey",
    category: "Animal Emoji",
    key: 'monkey',
    tags: ['monkey', 'animal']
  },
  {
    unicode: 'U+1F435',
    emoji: "🐵",
    name: "Monkey face",
    category: "Animal Emoji",
    key: 'monkey',
    tags: ['monkey', 'animal']
  },
  {
    unicode: 'U+1F412',
    emoji: "🐒",
    name: "Monkey",
    category: "Animal Emoji",
    key: 'monkey',
    tags: ['monkey', 'animal']
  },
  {
    unicode: 'U+1F98D',
    emoji: "🦍",
    name: "Gorilla",
    category: "Animal Emoji",
    key: 'gorilla',
    tags: ['animal']
  },
  {
    unicode: 'U+1F9A7',
    emoji: "🦧",
    name: "Orangutan",
    category: "Animal Emoji",
    key: 'orang utan',
    tags: ['animal']
  },
  {
    unicode: 'U+1F436',
    emoji: "🐶",
    name: "Dog face",
    category: "Animal Emoji",
    key: 'dog',
    tags: ['animal']
  },
  {
    unicode: 'U+1F9AE',
    emoji: "🦮",
    name: "Guide dog",
    category: "Animal Emoji",
    key: 'dog',
    tags: ['animal']
  },
  {
    unicode: 'U+1F415',
    emoji: "🐕‍🦺",
    name: "Service dog",
    category: "Animal Emoji",
    key: 'dog',
    tags: ['animal']
  },
  {
    unicode: 'U+1F429',
    emoji: "🐩",
    name: "Poodle",
    category: "Animal Emoji",
    key: 'dog',
    tags: ['animal']
  },
  {
    unicode: 'U+1F43A',
    emoji: "🐺",
    name: "Wolf",
    category: "Animal Emoji",
    key: 'wolf',
    tags: ['animal']
  },
  {
    unicode: 'U+1F98A',
    emoji: "🦊",
    name: "Fox",
    category: "Animal Emoji",
    key: 'fox',
    tags: ['animal']
  },
  {
    unicode: 'U+1F99D',
    emoji: "🦝",
    name: "Racoon",
    category: "Animal Emoji",
    key: 'racoon',
    tags: ['animal']
  },
  {
    unicode: 'U+1F981',
    emoji: "🦁",
    name: "Lion",
    category: "Animal Emoji",
    key: 'lion',
    tags: ['animal']
  },
  {
    unicode: 'U+1F42F',
    emoji: "🐯",
    name: "Tiger face",
    category: "Animal Emoji",
    key: 'tiger',
    tags: ['animal']
  },
  {
    unicode: 'U+1F405',
    emoji: "🐅",
    name: "Tiger",
    category: "Animal Emoji",
    key: 'tiger',
    tags: ['animal']
  },
  {
    unicode: 'U+1F406',
    emoji: "🐆",
    name: "Leopard",
    category: "Animal Emoji",
    key: 'tiger',
    tags: ['animal']
  },
  {
    unicode: 'U+1F434',
    emoji: "🐴",
    name: "Horse face",
    category: "Animal Emoji",
    key: 'horse',
    tags: ['animal']
  },
  {
    unicode: 'U+1F40E',
    emoji: "🐎",
    name: "Horse",
    category: "Animal Emoji",
    key: 'horse',
    tags: ['animal']
  },
  {
    unicode: 'U+1F984',
    emoji: "🦄",
    name: "Unicorn",
    category: "Animal Emoji",
    key: 'horse',
    tags: ['animal']
  },
  {
    unicode: 'U+1F993',
    emoji: "🦓",
    name: "Zebra",
    category: "Animal Emoji",
    key: 'zebra',
    tags: ['animal']
  },
  {
    unicode: 'U+1F98C',
    emoji: "🦌",
    name: "Deer",
    category: "Animal Emoji",
    key: 'deer',
    tags: ['animal']
  },
  {
    unicode: 'U+1F9AC',
    emoji: "🦬",
    name: "Bison",
    category: "Animal Emoji",
    key: 'bison',
    tags: ['animal']
  },
  {
    unicode: 'U+1F42E',
    emoji: "🐮",
    name: "Cow Face",
    category: "Animal Emoji",
    key: 'cow',
    tags: ['animal']
  },
  {
    unicode: 'U+1F404',
    emoji: "🐄",
    name: "Cow",
    category: "Animal Emoji",
    key: 'cow',
    tags: ['animal']
  },
  {
    unicode: 'U+1F402',
    emoji: "🐂",
    name: "Ox",
    category: "Animal Emoji",
    key: 'buffalo',
    tags: ['animal']
  },
  {
    unicode: 'U+1F437',
    emoji: "🐃",
    name: "Water buffalo",
    category: "Animal Emoji",
    key: 'buffalo',
    tags: ['animal']
  },
  {
    unicode: 'U+1F437',
    emoji: "🐷",
    name: "Pig face",
    category: "Animal Emoji",
    key: 'pig',
    tags: ['animal']
  },
  {
    unicode: 'U+1F416',
    emoji: "🐖",
    name: "Pig",
    category: "Animal Emoji",
    key: 'pig',
    tags: ['animal']
  },
  {
    unicode: 'U+1F417',
    emoji: "🐗",
    name: "Boar",
    category: "Animal Emoji",
    key: 'pig',
    tags: ['animal']
  },
  {
    unicode: 'U+1F43D',
    emoji: "🐽",
    name: "Pig nose",
    category: "Animal Emoji",
    key: 'pig',
    tags: ['animal']
  },
  {
    unicode: 'U+1F40F',
    emoji: "🐏",
    name: "Ram",
    category: "Animal Emoji",
    key: 'ram',
    tags: ['animal']
  },
  {
    unicode: 'U+1F411',
    emoji: "🐑",
    name: "Ewe",
    category: "Animal Emoji",
    key: 'ewe',
    tags: ['animal']
  },
  {
    unicode: 'U+1F410',
    emoji: "🐐",
    name: "Goat",
    category: "Animal Emoji",
    key: 'goat',
    tags: ['animal']
  },
  {
    unicode: 'U+1F42A',
    emoji: "🐪",
    name: "Camel",
    category: "Animal Emoji",
    key: 'camel',
    tags: ['animal']
  },
  {
    unicode: 'U+1F42B',
    emoji: "🐫",
    name: "Two hump camel",
    category: "Animal Emoji",
    key: 'camel',
    tags: ['animal']
  },
  {
    unicode: 'U+1F999',
    emoji: "🦙",
    name: "Ilama",
    category: "Animal Emoji",
    key: 'ilama',
    tags: ['animal']
  },	
  {
    unicode: 'U+1F992',
    emoji: "🦒",
    name: "Giraffe",
    category: "Animal Emoji",
    key: 'giraffe',
    tags: ['animal']
  },	
  {
    unicode: 'U+1F418',
    emoji: "🐘",
    name: "Elephant",
    category: "Animal Emoji",
    key: 'elephant',
    tags: ['animal']
  },	
  {
    unicode: 'U+1F9A3',
    emoji: "🦣",
    name: "Mammoth",
    category: "Animal Emoji",
    key: 'mammoth',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F98F',
    emoji: "🦏",
    name: "Rhiniceros",
    category: "Animal Emoji",
    key: 'rhiniceros',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F99B',
    emoji: "🦛",
    name: "Hippopotamus",
    category: "Animal Emoji",
    key: 'hippopotamus',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F42D',
    emoji: "🐭",
    name: "Mouse face",
    category: "Animal Emoji",
    key: 'mouse',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F401',
    emoji: "🐁",
    name: "Mouse",
    category: "Animal Emoji",
    key: 'mouse',
    tags: ['animal']
  },	 		
  {
    unicode: 'U+1F400',
    emoji: "🐀",
    name: "Rat",
    category: "Animal Emoji",
    key: 'rat',
    tags: ['animal']
  },	 		
  {
    unicode: 'U+1F439',
    emoji: "🐹",
    name: "Hamster",
    category: "Animal Emoji",
    key: 'hamster',
    tags: ['animal']
  },	 		
  {
    unicode: 'U+1F430',
    emoji: "🐰",
    name: "Rabbit face",
    category: "Animal Emoji",
    key: 'rabbit',
    tags: ['animal']
  },	 		
  {
    unicode: 'U+1F407',
    emoji: "🐇",
    name: "Rabbit",
    category: "Animal Emoji",
    key: 'rabbit',
    tags: ['animal']
  },	 			
  {
    unicode: 'U+1F43F',
    emoji: "🐿",
    name: "Chipmunk",
    category: "Animal Emoji",
    key: 'chipmunk',
    tags: ['animal']
  },	 			
  {
    unicode: 'U+1F9AB',
    emoji: "🦫",
    name: "Beaver",
    category: "Animal Emoji",
    key: 'beaver',
    tags: ['animal']
  },	 			
  {
    unicode: 'U+1F994',
    emoji: "🦔",
    name: "Hedgehog",
    category: "Animal Emoji",
    key: 'hedgehog',
    tags: ['animal']
  },	 			
  {
    unicode: 'U+1F987',
    emoji: "🦇",
    name: "Bat",
    category: "Animal Emoji",
    key: 'bat',
    tags: ['animal']
  },	 			
  {
    unicode: 'U+1F43B',
    emoji: "🐻",
    name: "Bear",
    category: "Animal Emoji",
    key: 'bear',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+200D',
    emoji: "🐻‍❄️",
    name: "Polar bear",
    category: "Animal Emoji",
    key: 'bear',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F428',
    emoji: "🐨",
    name: "Koala",
    category: "Animal Emoji",
    key: 'koala',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F43C',
    emoji: "🐼",
    name: "Panda",
    category: "Animal Emoji",
    key: 'panda',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F9A5',
    emoji: "🦥",
    name: "Sloth",
    category: "Animal Emoji",
    key: 'sloth',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F9A6',
    emoji: "🦦",
    name: "Otter",
    category: "Animal Emoji",
    key: 'otter',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F9A8',
    emoji: "🦨",
    name: "Skunk",
    category: "Animal Emoji",
    key: 'skunk',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F998',
    emoji: "🦘",
    name: "Kangaroo",
    category: "Animal Emoji",
    key: 'kangaroo',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F9A1',
    emoji: "🦡",
    name: "Badger",
    category: "Animal Emoji",
    key: 'badger',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F43E',
    emoji: "🐾",
    name: "Paw prints",
    category: "Animal Emoji",
    key: 'paw prints',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F983',
    emoji: "🦃",
    name: "Turkey",
    category: "Animal Emoji",
    key: 'turkey',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F414',
    emoji: "🐔",
    name: "Chicken",
    category: "Animal Emoji",
    key: 'chicken',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F413',
    emoji: "🐓",
    name: "Rooster",
    category: "Animal Emoji",
    key: 'chicken',
    tags: ['animal']
  },	 	
  {
    unicode: 'U+1F423',
    emoji: "🐣",
    name: "Hatching",
    category: "Animal Emoji",
    key: 'chicken',
    tags: ['animal']
  },		 	
  {
    unicode: 'U+1F424',
    emoji: "🐤",
    name: "Baby chick",
    category: "Animal Emoji",
    key: 'chicken',
    tags: ['animal']
  },		 	
  {
    unicode: 'U+1F425',
    emoji: "🐥",
    name: "Front-facing chick",
    category: "Animal Emoji",
    key: 'chicken',
    tags: ['animal']
  },		 	
  {
    unicode: 'U+1F426',
    emoji: "🐦",
    name: "Bird",
    category: "Animal Emoji",
    key: 'bird',
    tags: ['animal']
  },		 	
  {
    unicode: 'U+1F427',
    emoji: "🐧",
    name: "Penguin",
    category: "Animal Emoji",
    key: 'penguin',
    tags: ['animal']
  },
  {
    unicode: 'U+1F54A',
    emoji: "🕊",
    name: "Dove",
    category: "Animal Emoji",
    key: 'dove',
    tags: ['animal']
  },
  {
    unicode: 'U+1F985',
    emoji: "🦅",
    name: "Eagle",
    category: "Animal Emoji",
    key: 'eagle',
    tags: ['animal']
  },
  {
    unicode: 'U+1F986',
    emoji: "🦆",
    name: "Duck",
    category: "Animal Emoji",
    key: 'duck',
    tags: ['animal']
  },
  {
    unicode: 'U+1F9A2',
    emoji: "🦢",
    name: "Swan",
    category: "Animal Emoji",
    key: 'swan',
    tags: ['animal']
  }, 	
  {
    unicode: 'U+1F989',
    emoji: "🦉",
    name: "Owl",
    category: "Animal Emoji",
    key: 'owl',
    tags: ['animal']
  }, 	
  {
    unicode: 'U+1F9A4',
    emoji: "🦤",
    name: "Dodo",
    category: "Animal Emoji",
    key: 'dodo',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1FAB6',
    emoji: "🪶",
    name: "Feather",
    category: "Animal Emoji",
    key: 'feather',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F9A9',
    emoji: "🦩",
    name: "Flamingo",
    category: "Animal Emoji",
    key: 'flamingo',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F99C',
    emoji: "🦜",
    name: "Peacock",
    category: "Animal Emoji",
    key: 'peacock',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F438',
    emoji: "🐸",
    name: "Frog",
    category: "Animal Emoji",
    key: 'frog',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F40A',
    emoji: "🐊",
    name: "Crocodile",
    category: "Animal Emoji",
    key: 'crocodile',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F422',
    emoji: "🐢",
    name: "Turtle",
    category: "Animal Emoji",
    key: 'turtle',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F98E',
    emoji: "🦎",
    name: "Lizard",
    category: "Animal Emoji",
    key: 'lizard',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F40D',
    emoji: "🐍",
    name: "Snake",
    category: "Animal Emoji",
    key: 'snake',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F432',
    emoji: "🐲",
    name: "Dragon face",
    category: "Animal Emoji",
    key: 'dragon',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F409',
    emoji: "🐉",
    name: "Dragon",
    category: "Animal Emoji",
    key: 'dragon',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F995',
    emoji: "🦕",
    name: "Sauropod",
    category: "Animal Emoji",
    key: 'sauropod',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F996',
    emoji: "🦖",
    name: "Tyranosaurus",
    category: "Animal Emoji",
    key: 'tyranosaurus',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F433',
    emoji: "🐳",
    name: "Spouting whale",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F40B',
    emoji: "🐋",
    name: "Whale",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F42C',
    emoji: "🐬",
    name: "Dolphin",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F9AD',
    emoji: "🦭",
    name: "Seal",
    category: "Animal Emoji",
    key: 'seal',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F41F',
    emoji: "🐟",
    name: "Fish",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 		 	
  {
    unicode: 'U+1F420',
    emoji: "🐠",
    name: "Tropical fish",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F421',
    emoji: "🐡",
    name: "Blowfish",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F988',
    emoji: "🦈",
    name: "Shark",
    category: "Animal Emoji",
    key: 'fish',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F419',
    emoji: "🐙",
    name: "Octopus",
    category: "Animal Emoji",
    key: 'octopus',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F41A',
    emoji: "🐚",
    name: "Spiral shell",
    category: "Animal Emoji",
    key: 'shell',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F40C',
    emoji: "🐌",
    name: "Snail",
    category: "Animal Emoji",
    key: 'snail',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F98B',
    emoji: "🦋",
    name: "Butterfly",
    category: "Animal Emoji",
    key: 'butterfly',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F41B',
    emoji: "🐛",
    name: "Bug",
    category: "Animal Emoji",
    key: 'bug',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F41C',
    emoji: "🐜",
    name: "Ant",
    category: "Animal Emoji",
    key: 'ant',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F41D',
    emoji: "🐝",
    name: "Honeybee",
    category: "Animal Emoji",
    key: 'bee',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1FAB2',
    emoji: "🪲",
    name: "Beetle",
    category: "Animal Emoji",
    key: 'beetle',
    tags: ['animal']
  }, 	 	
  {
    unicode: 'U+1F41E',
    emoji: "🐞",
    name: "Lady Beetle",
    category: "Animal Emoji",
    key: 'beetle',
    tags: ['animal']
  }, 	 			 	 	 			
  {
    unicode: 'U+1F997',
    emoji: "🦗",
    name: "Cricket",
    category: "Animal Emoji",
    key: 'cricket',
    tags: ['animal']
  },
  {
    unicode: 'U+1FAB3',
    emoji: "🪳",
    name: "Cockroach",
    category: "Animal Emoji",
    key: 'cockroach',
    tags: ['animal']
  },
  {
    unicode: 'U+1F577',
    emoji: "🕷",
    name: "Spider",
    category: "Animal Emoji",
    key: 'spider',
    tags: ['animal']
  },
  {
    unicode: 'U+1F578',
    emoji: "🕸",
    name: "Spider web",
    category: "Animal Emoji",
    key: 'spider',
    tags: ['animal']
  },
  {
    unicode: 'U+1F982',
    emoji: "🦂",
    name: "Scorpion",
    category: "Animal Emoji",
    key: 'scorpion',
    tags: ['animal']
  },
  {
    unicode: 'U+1F99F',
    emoji: "🦟",
    name: "Mosquito",
    category: "Animal Emoji",
    key: 'mosquito',
    tags: ['animal']
  },
  {
    unicode: 'U+1FAB0',
    emoji: "🪰",
    name: "Fly",
    category: "Animal Emoji",
    key: 'fly',
    tags: ['animal']
  },
  {
    unicode: 'U+1FAB1 ',
    emoji: "🪱",
    name: "Worm",
    category: "Animal Emoji",
    key: 'worm',
    tags: ['animal']
  },
  {
    unicode: 'U+1F9A0 ',
    emoji: "🦠",
    name: "Microbe",
    category: "Animal Emoji",
    key: 'microbe',
    tags: ['animal']
  },
  {
    unicode: 'U+1F490',
    emoji: "💐",
    name: "Bouquet",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F338',
    emoji: "🌸",
    name: "Cherry blossom",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F4AE',
    emoji: "💮",
    name: "White flower",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F3F5',
    emoji: "🏵",
    name: "Rosette",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F339',
    emoji: "🌹",
    name: "rose",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F940',
    emoji: "🥀",
    name: "Wilted flower",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F33A',
    emoji: "🌺",
    name: "Hibiscus",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F33B',
    emoji: "🌻",
    name: "Sunflower",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F33C',
    emoji: "🌼",
    name: "Blossom",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F337',
    emoji: "🌷",
    name: "Tulip",
    category: "Animal Emoji",
    key: 'flower',
    tags: ['plant']
  },
  {
    unicode: 'U+1F331',
    emoji: "🌱",
    name: "Seedling",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1FAB4',
    emoji: "🪴",
    name: "Potted plant",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F332',
    emoji: "🌲",
    name: "Evergreen tree",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F333',
    emoji: "🌳",
    name: "Deciduous plant",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F334',
    emoji: "🌴",
    name: "Palm tree",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F335',
    emoji: "🌵",
    name: "Cactus",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F33E',
    emoji: "🌾",
    name: "Sheaf of rice",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F33F',
    emoji: "🌿",
    name: "Herb",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+2618',
    emoji: "☘",
    name: "Shamrock",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F340',
    emoji: "🍀",
    name: "Four leaf clover",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F341 ',
    emoji: "🍁",
    name: "Maple leaf",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F342',
    emoji: "🍂",
    name: "Fallen leaf",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1F343',
    emoji: "🍃",
    name: "Leaf fluttering in wind",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1FAB9',
    emoji: "🪴",
    name: "Empty nest",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },
  {
    unicode: 'U+1FABA',
    emoji: "🪴",
    name: "Nest with eggs",
    category: "Animal Emoji",
    key: 'plant',
    tags: ['plant']
  },

  // // emotion emojis

  {
    unicode: 'U+1F48B',
    emoji: "💋",
    name: "Kiss",
    category: "Emotion Emoji",
    key: 'kiss',
    tags: ['love']
  },
  {
    unicode: 'U+1F48C',
    emoji: "💌",
    name: "Love Letter",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F498',
    emoji: "💘",
    name: "Heart with arrow",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F49D',
    emoji: "💝",
    name: "Heart with ribbon",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F496',
    emoji: "💖",
    name: "Sparking heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F497',
    emoji: "💗",
    name: "Growing heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F493',
    emoji: "💓",
    name: "Beating heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F49E',
    emoji: "💞",
    name: "Revolving heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F495',
    emoji: "💕",
    name: "Two hearts",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F49F',
    emoji: "💟",
    name: "Heart decoration",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+2763',
    emoji: "❣",
    name: "Heart exclamation",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F494',
    emoji: "💔",
    name: "Broken heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+2764',
    emoji: "❤️‍🔥",
    name: "Heart on fire",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+2764',
    emoji: "❤️‍🩹",
    name: "Mending heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F9E1',
    emoji: "🧡",
    name: "Orange heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F49B',
    emoji: "💛",
    name: "Yellow heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F49A',
    emoji: "💚",
    name: "Green heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F499',
    emoji: "💙",
    name: "Blue heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F49C',
    emoji: "💜",
    name: "Purple heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F90E',
    emoji: "🤎",
    name: "Brown heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F5A4',
    emoji: "🖤",
    name: "Black heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F90D',
    emoji: "🤍",
    name: "White heart",
    category: "Emotion Emoji",
    key: 'love',
    tags: ['love']
  },
  {
    unicode: 'U+1F4AF',
    emoji: "💯",
    name: "Hundred(correct)",
    category: "Emotion Emoji",
    key: '',
    tags: ['other']
  },
  {
    unicode: 'U+1F4A2',
    emoji: "💢",
    name: "Anger",
    category: "Emotion Emoji",
    key: 'angry',
    tags: ['negative']
  },
  {
    unicode: 'U+1F4A5',
    emoji: "💥",
    name: "collision",
    category: "Emotion Emoji",
    key: '',
    tags: ['other']
  },
  {
    unicode: 'U+1F4AB',
    emoji: "💫",
    name: "Dizzy",
    category: "Emotion Emoji",
    key: '',
    tags: ['other']
  },
  {
    unicode: 'U+1F4A6',
    emoji: "💦",
    name: "Sweat droplets",
    category: "Emotion Emoji",
    key: '',
    tags: ['cry']
  },
  {
    unicode: 'U+1F4A8',
    emoji: "💨",
    name: "Dashing away",
    category: "Emotion Emoji",
    key: '',
    tags: ['other']
  },
  {
    unicode: 'U+1F573',
    emoji: "🕳",
    name: "Hole",
    category: "Emotion Emoji",
    key: '',
    tags: ['other']
  },
  {
    unicode: 'U+1F4A3',
    emoji: "💣",
    name: "Bomb",
    category: "Emotion Emoji",
    key: '',
    tags: ['other']
  },
  {
    unicode: 'U+1F4AC',
    emoji: "💬",
    name: "Message baloon",
    category: "Emotion Emoji",
    key: 'bubble',
    tags: ['other']
  },
  {
    unicode: 'U+1F441',
    emoji: "👁️‍🗨️",
    name: "Eye in speech bubble",
    category: "Emotion Emoji",
    key: 'bubble',
    tags: ['other']
  },
  {
    unicode: 'U+1F5E8',
    emoji: "🗨",
    name: "Left speech bubble",
    category: "Emotion Emoji",
    key: 'bubble',
    tags: ['other']
  },
  {
    unicode: 'U+1F5EF',
    emoji: "🗯",
    name: "Anger bubble",
    category: "Emotion Emoji",
    key: 'bubble',
    tags: ['other']
  },
  {
    unicode: 'U+1F4AD',
    emoji: "💭",
    name: "Thought baloon",
    category: "Emotion Emoji",
    key: 'bubble',
    tags: ['other']
  },
  {
    unicode: 'U+1F4A4',
    emoji: "💤",
    name: "zzz",
    category: "Emotion Emoji",
    key: 'sleep',
    tags: ['other']
  },
  
  // // body parts emojis
  
  {
    unicode: 'U+1F44B',
    emoji: "👋",
    name: "Waving hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91A',
    emoji: "🤚",
    name: "Raised back of hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F590',
    emoji: "🖐",
    name: "Hands with splayed finger",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+270B',
    emoji: "✋",
    name: "Raised hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F596',
    emoji: "🖖",
    name: "Vulcan salute",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F44C',
    emoji: "👌",
    name: "Ok",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F90C',
    emoji: "🤌",
    name: "Pinched fingers",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F90F',
    emoji: "🤏",
    name: "Pinched hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+270C',
    emoji: "✌",
    name: "Victory hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91E',
    emoji: "🤞",
    name: "Crossed fingers",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91F',
    emoji: "🤟",
    name: "Love you",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F918',
    emoji: "🤘",
    name: "Horn sign",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F919',
    emoji: "🤙",
    name: "Call me hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F448',
    emoji: "👈",
    name: "Index finger pointing left",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F449',
    emoji: "👉",
    name: "Index finger pointing right",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F446',
    emoji: "👆",
    name: "Index finger pointing up",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F446',
    emoji: "👆",
    name: "Index finger pointing up",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F447',
    emoji: "👇",
    name: "Index finger pointing down",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F595',
    emoji: "🖕",
    name: "Middle finger",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F44D',
    emoji: "👍",
    name: "Thumbs up",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F44E',
    emoji: "👎",
    name: "Thumbs down",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+270A',
    emoji: "✊",
    name: "Raised fist",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F44A',
    emoji: "👊",
    name: "Fist",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91B',
    emoji: "🤛",
    name: "Left facing fist",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91C',
    emoji: "🤜",
    name: "Right facing fist",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91C',
    emoji: "🤜",
    name: "Right facing fist",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F44F',
    emoji: "👏",
    name: "Clapping hands",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F64C',
    emoji: "🙌",
    name: "Raised hands",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F450',
    emoji: "👐",
    name: "Open hands",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F932',
    emoji: "🤲",
    name: "Palms together hands",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F91D',
    emoji: "🤝",
    name: "Handshake",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F64F',
    emoji: "🙏",
    name: "Praying hands",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+270D',
    emoji: "✍",
    name: "Writing hands",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F485',
    emoji: "💅",
    name: "Nail polish",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F933',
    emoji: "🤳",
    name: "Selfie hand",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F4AA',
    emoji: "💪",
    name: "Flexed biceps",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F9BE',
    emoji: "🦾",
    name: "Mechanical arm",
    category: "Body Parts Emoji",
    key: 'hand',
    tags: ['hand', 'body part']
  },
  {
    unicode: 'U+1F9B5',
    emoji: "🦵",
    name: "Leg",
    category: "Body Parts Emoji",
    key: 'leg',
    tags: ['body part']
  },
  {
    unicode: 'U+1F9BF',
    emoji: "🦿",
    name: "Mechanical leg",
    category: "Body Parts Emoji",
    key: 'leg',
    tags: ['body part']
  },
  {
    unicode: 'U+1F9B6',
    emoji: "🦶",
    name: "Foot",
    category: "Body Parts Emoji",
    key: 'leg',
    tags: ['body part']
  },
  {
    unicode: 'U+1F442',
    emoji: "👂",
    name: "Ear",
    category: "Body Parts Emoji",
    key: 'ear',
    tags: ['body part']
  },
  {
    unicode: 'U+1F9BB',
    emoji: "🦻",
    name: "Ear with earing aid",
    category: "Body Parts Emoji",
    key: 'ear',
    tags: ['body part']
  },
  {
    unicode: 'U+1F443',
    emoji: "👃",
    name: "Nose",
    category: "Body Parts Emoji",
    key: 'nose',
    tags: ['body part']
  },
  {
    unicode: 'U+1F9E0',
    emoji: "x`",
    name: "Brain",
    category: "Body Parts Emoji",
    key: '',
    tags: ['body part']
  },
  {
    unicode: 'U+1F463',
    emoji: "👣",
    name: "Footprint",
    category: "Body Parts Emoji",
    key: 'leg',
    tags: ['body part']
  },
  {
    unicode: 'U+1FAC0',
    emoji: "🫀",
    name: "Mechanical heart",
    category: "Body Parts Emoji",
    key: '',
    tags: ['body part']
  },
  {
    unicode: 'U+1FAC1',
    emoji: "🫁",
    name: "Lungs",
    category: "Body Parts Emoji",
    key: '',
    tags: ['body part']
  },
  {
    unicode: 'U+1F9B7',
    emoji: "🦷",
    name: "Tooth",
    category: "Body Parts Emoji",
    key: '',
    tags: ['body part']
  },
  {
    unicode: 'U+1F9B7',
    emoji: "🦴",
    name: "Bone",
    category: "Body Parts Emoji",
    key: '',
    tags: ['body part']
  },
  {
    unicode: 'U+1F440',
    emoji: "👀",
    name: "Eyes",
    category: "Body Parts Emoji",
    key: 'eye',
    tags: ['body part']
  },
  {
    unicode: 'U+1F441',
    emoji: "👁",
    name: "Eye",
    category: "Body Parts Emoji",
    key: 'eye',
    tags: ['body part']
  },
  {
    unicode: 'U+1F445',
    emoji: "👅",
    name: "tongue",
    category: "Body Parts Emoji",
    key: '',
    tags: ['tongue', 'body part']
  },
  {
    unicode: 'U+1F444',
    emoji: "👄",
    name: "Mouth",
    category: "Body Parts Emoji",
    key: '',
    tags: ['body part']
  },

  // person emoji

  {
    unicode: 'U+1F9D1',
    emoji: "🧑",
    name: "Person",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F471',
    emoji: "👱",
    name: "Person with blonde hair",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F476',
    emoji: "👶",
    name: "Baby",
    category: "Person Emoji",
    key: 'baby',
    tags: ['person', 'baby']
  },
  {
    unicode: 'U+1F9D2',
    emoji: "🧒",
    name: "Child",
    category: "Person Emoji",
    key: 'child',
    tags: ['child']
  },
  {
    unicode: 'U+1F466',
    emoji: "👦",
    name: "Boy",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F467',
    emoji: "👧",
    name: "Girl",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨",
    name: "Man",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
    
 },
  {
    unicode: 'U+1F9D4',
    emoji: "🧔",
    name: "Bearded person",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F9D3',
    emoji: "🧓",
    name: "Old person",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F9D4',
    emoji: "🧔‍♂‍",
    name: "Bearded man",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🦰‍",
    name: "Man with red hair",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F9B1',
    emoji: "👨‍🦱‍",
    name: "Man with curly hair",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+200D',
    emoji: "👨‍🦳",
    name: "Man with white hair",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🦲",
    name: "Bald man",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F471',
    emoji: "👱‍♂‍",
    name: "Man with blonde hair",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F474',
    emoji: "👴",
    name: "Old man",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍",
    name: "Woman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D4',
    emoji: "🧔‍♀‍",
    name: "Bearded woman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🦰",
    name: "Woman with red hair",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🦱",
    name: "Woman with curly hair",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🦳",
    name: "Woman with white hair",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🦲",
    name: "Bald woman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F471',
    emoji: "👱‍♀‍",
    name: "Woman with blode hair",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F475',
    emoji: "👵",
    name: "Old woman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F64D',
    emoji: "🙍",
    name: "Person frowning",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F64D',
    emoji: "🙍‍♂‍",
    name: "Man frowning",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F64D',
    emoji: "🙍‍♀‍‍",
    name: "Woman frowning",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F64E',
    emoji: "🙎‍‍",
    name: "Person pouting",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F64E',
    emoji: "🙎‍♂‍‍‍",
    name: "Man pouting",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F64E',
    emoji: "🙎‍♀‍‍‍‍",
    name: "Woman pouting",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F645',
    emoji: "🙅‍‍‍‍",
    name: "Person gesturing no",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F645',
    emoji: "🙅‍♂‍‍‍‍",
    name: "Man gesturing no",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F645',
    emoji: "🙅‍♀‍‍‍‍‍",
    name: "Woman gesturing no",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F646',
    emoji: "🙆",
    name: "Person stretching",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F646',
    emoji: "🙆‍♂‍",
    name: "Man stretching",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F646',
    emoji: "🙆‍♀‍‍‍‍‍‍",
    name: "Woman stretching",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F481',
    emoji: "💁",
    name: "Person tipping hand",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F481',
    emoji: "💁‍♂‍‍",
    name: "Man tipping hand",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F481',
    emoji: "💁‍♀‍‍‍‍‍‍‍",
    name: "Woman tipping hand",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F64B',
    emoji: "🙋",
    name: "Person raising hand",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F64B',
    emoji: "🙋‍♂‍‍‍",
    name: "Man raising hand",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F64B',
    emoji: "🙋‍♀‍‍‍‍‍‍‍‍",
    name: "Woman raising hand",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F64B',
    emoji: "🧏",
    name: "Deaf person",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F9CF',
    emoji: "🧏‍♂‍‍‍‍",
    name: "Deaf man",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+2640',
    emoji: "🧏‍♀‍‍‍‍‍‍‍‍‍",
    name: "Deaf woman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F647',
    emoji: "🙇",
    name: "Person bowing",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F647',
    emoji: "🙇‍♂‍",
    name: "Deaf man",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+200D',
    emoji: "🙇‍♀‍‍‍‍‍‍‍‍‍‍",
    name: "Woman bowing",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F926',
    emoji: "🤦",
    name: "Person facepalming",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F926',
    emoji: "🤦‍♂‍",
    name: "Man facepalming",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F926',
    emoji: "🤦‍♀‍‍‍‍‍‍‍‍‍‍‍",
    name: "Woman facepalming",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F937',
    emoji: "🤷",
    name: "Person shrugging",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F937',
    emoji: "🤷‍♂‍‍",
    name: "Man shrugging",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+FE0F',
    emoji: "🤷‍♀‍‍‍‍‍‍‍‍‍‍‍‍",
    name: "Woman shrugging",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍⚕‍",
    name: "Health worker",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+2695',
    emoji: "👨‍⚕‍‍‍",
    name: "Man health worker",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍⚕‍‍‍‍‍‍‍‍‍‍‍‍‍",
    name: "Woman health worker",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🎓",
    name: "Student",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+2695',
    emoji: "👨‍🎓‍‍‍",
    name: "Man student",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🏫",
    name: "Teacher",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🏫‍‍‍",
    name: "Man teacher",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F3EB',
    emoji: "👩‍🏫",
    name: "Woman teacher",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍⚖‍",
    name: "Judge",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍⚖‍",
    name: "Man judge",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍⚖‍",
    name: "Woman judge",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+200D',
    emoji: "🧑‍🌾",
    name: "Farmer",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🌾‍",
    name: "Man farmer",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🌾‍",
    name: "Woman farmer",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🍳",
    name: "Cook",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+200D',
    emoji: "👨‍🍳‍",
    name: "Man cook",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🍳‍",
    name: "Woman cook",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🔧",
    name: "Mechanic",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F527',
    emoji: "👨‍🔧",
    name: "Man mechanic",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🔧",
    name: "Woman mechanic",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🏭",
    name: "Factory worker",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🏭",
    name: "Man factory worker",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🏭",
    name: "Woman factory worker",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍💼",
    name: "Office worker",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F4BC',
    emoji: "👨‍💼",
    name: "Man office worker",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍💼",
    name: "Woman office worker",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🔬",
    name: "Scientist",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🔬",
    name: "Man scientist",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F52C',
    emoji: "👩‍🔬",
    name: "Woman scientist",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍💻",
    name: "Technologist",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍💻",
    name: "Man technologist",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍💻",
    name: "Woman technologist",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		
  {
    unicode: 'U+1F3A4',
    emoji: "🧑‍🎤",
    name: "Singer",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🎤",
    name: "Man singer",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🎤",
    name: "Woman singer",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🎨",
    name: "Artist",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🎨",
    name: "Man artist",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🎨",
    name: "Woman artist",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍✈",
    name: "Pilot",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍✈",
    name: "Man pilot",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍✈‍",
    name: "Woman pilot",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 	
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🚀",
    name: "Astronaut",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F468',
    emoji: "👨‍🚀",
    name: "Man astronaut",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F469',
    emoji: "👩‍🚀‍",
    name: "Woman astronaut",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 	
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🚒",
    name: "Firefighter",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+200D',
    emoji: "👨‍🚒",
    name: "Man Firefighter",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F692',
    emoji: "👩‍🚒‍",
    name: "Woman Firefighter",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 		
  {
    unicode: 'U+1F46E',
    emoji: "👮",
    name: "Police ",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F46E',
    emoji: "👮‍♂",
    name: "Policeman",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F46E',
    emoji: "👮‍♀‍",
    name: "Policewoman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 		 	
  {
    unicode: 'U+1F575',
    emoji: "🕵",
    name: "Detective ",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+1F575',
    emoji: "🕵️‍♂",
    name: "Man detective",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+1F575',
    emoji: "🕵️‍♀‍‍",
    name: "Woman detective",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F482',
    emoji: "💂",
    name: "Guard ",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+2642',
    emoji: "💂‍♂",
    name: "Man guard",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+2640',
    emoji: "💂‍♀‍‍",
    name: "Woman guard",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F97',
    emoji: "🥷‍‍",
    name: "Ninja",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F477',
    emoji: "👷",
    name: "Construction worker ",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },
  {
    unicode: 'U+200D',
    emoji: "👷‍♂",
    name: "Man construction worker",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'job']
  },
  {
    unicode: 'U+2640',
    emoji: "👷‍♀",
    name: "Woman construction worker",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	
  {
    unicode: 'U+1F934',
    emoji: "🤴",
    name: "Prince",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },
  {
    unicode: 'U+1F478',
    emoji: "👸",
    name: "Princess",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 	
  {
    unicode: 'U+1F473',
    emoji: "👳",
    name: "Person wearing turban",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "👳‍♂",
    name: "Man wearing turban",
    category: "Person Emoji",
    key: 'man',
    tags: ['man'] 	
  },	 	
  {
    unicode: 'U+2640',
    emoji: "👳‍♀‍",
    name: "Woman wearing turban",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 		 	
  {
    unicode: 'U+1F472',
    emoji: "👲",
    name: "Person with skullcap",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },		 	 	
  {
    unicode: 'U+1F9D5',
    emoji: "🧕",
    name: "Woman with headscaff",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F935',
    emoji: "🤵",
    name: "Person in tuxedo",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+1F935',
    emoji: "🤵‍♂",
    name: "Man in tuxedo",
    category: "Person Emoji",
    key: 'man',
    tags: ['man'] 	
  }, 	
  {
    unicode: 'U+1F935',
    emoji: "🤵‍♀‍‍",
    name: "Woman in tuxedo",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 		 	
  {
    unicode: 'U+1F470',
    emoji: "👰",
    name: "Person in veil",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+1F470',
    emoji: "👰‍♂",
    name: "Man in veil",
    category: "Person Emoji",
    key: 'man',
    tags: ['man'] 	
  },		 	
  {
    unicode: 'U+200D',
    emoji: "👰‍♀",
    name: "Woman in veil",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	
  {
    unicode: 'U+1F930',
    emoji: "🤰",
    name: "Pregnant woman",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	
  {
    unicode: 'U+1F931',
    emoji: "🤱",
    name: "Breast-feeding",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F37C',
    emoji: "🧑‍🍼",
    name: "Person feeding baby",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+1F469',
    emoji: "👩‍🍼",
    name: "Woman feeding baby",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman'] 	
  },	 	
  {
    unicode: 'U+200D',
    emoji: "👨‍🍼",
    name: "Man feeding baby",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 		
  {
    unicode: 'U+1F47C',
    emoji: "👼",
    name: "Baby angel",
    category: "Person Emoji",
    key: 'baby',
    tags: ['baby']
  },	 		
  {
    unicode: 'U+1F385',
    emoji: "🎅",
    name: "Santa claus",
    category: "Person Emoji",
    key: 'santa',
    tags: ['santa']
  },	 		
  {
    unicode: 'U+1F936',
    emoji: "🤶",
    name: "Mrs Claus",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman', 'claus']
  },	 		
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🎄",
    name: "Mr Claus",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'claus']
  },	 	 	
  {
    unicode: 'U+1F9B8',
    emoji: "🦸",
    name: "Superhero",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🦸‍♂",
    name: "Man superhero",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+FE0F',
    emoji: "🦸‍♀",
    name: "Woman superhero",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 	
  {
    unicode: 'U+1F9B9',
    emoji: "🦹",
    name: "Supervillain",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+2642',
    emoji: "🦹‍♂",
    name: "Man supervillain",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🦹‍♀",
    name: "Woman superhero",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 		
  {
    unicode: 'U+1F9D9',
    emoji: "🧙",
    name: "Mage",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+1F9D9',
    emoji: "🧙‍♂",
    name: "Man mage",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "🧙‍♀",
    name: "Woman mage",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F9DA',
    emoji: "🧚",
    name: "Fairy",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+2642',
    emoji: "🧚‍♂",
    name: "Man fairy",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧚‍♀",
    name: "Woman fairy",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		
  {
    unicode: 'U+1F9DB',
    emoji: "🧛",
    name: "Vampire",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+2642',
    emoji: "🧛‍♂",
    name: "Man vampire",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+FE0F',
    emoji: "🧛‍♀‍",
    name: "Woman vampire",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	
  {
    unicode: 'U+1F9DC',
    emoji: "🧜",
    name: "Merperson",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧜‍♂‍",
    name: "Merman",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+1F9DC',
    emoji: "🧜‍♀",
    name: "Mermaid",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	  	
  {
    unicode: 'U+1F9DD',
    emoji: "🧝",
    name: "Elf",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+2642',
    emoji: "🧝‍♂‍‍",
    name: "Man elf",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧝‍♀",
    name: "Woman elf",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	
  {
    unicode: 'U+1F9DE',
    emoji: "🧞",
    name: "Genie",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧞‍♂",
    name: "Man genie",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "🧞‍♀‍",
    name: "Woman genie",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	
  {
    unicode: 'U+1F9DF',
    emoji: "🧟",
    name: "Zombie",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+2642',
    emoji: "🧟‍♂",
    name: "Man zombie",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+FE0F',
    emoji: "🧟‍♀‍‍",
    name: "Woman zombie",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 	
  {
    unicode: 'U+1F486',
    emoji: "💆",
    name: "Person getting massage",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "💆‍♂",
    name: "Man getting massage",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "💆‍♀",
    name: "Woman getting massage",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },
  {
    unicode: 'U+1F487',
    emoji: "💇",
    name: "Person getting haircut",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "💇‍♂",
    name: "Man getting haircut",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "💇‍♀",
    name: "Woman getting haircut",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F6B6',
    emoji: "🚶",
    name: "Person walking",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🚶‍♂",
    name: "Man walking",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+FE0F',
    emoji: "🚶‍♀",
    name: "Woman walking",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F9CD',
    emoji: "🧍",
    name: "Person standing",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧍‍♂",
    name: "Man standing",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+FE0F',
    emoji: "🧍‍♀",
    name: "Woman standing",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F9CE',
    emoji: "🧎",
    name: "Person kneeling",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧎‍♂",
    name: "Man kneeling",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+FE0F',
    emoji: "🧎‍♀",
    name: "Woman kneeling",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+200D',
    emoji: "🧑‍🦯",
    name: "Person with walking stick",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+1F468',
    emoji: "👨‍🦯",
    name: "Man with walking stick",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+1F9AF',
    emoji: "👩‍🦯",
    name: "Woman with walking stick",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🦼",
    name: "Person in motorized wheelchair",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "👨‍🦼",
    name: "Man in motorized wheelchair",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+1F9BC',
    emoji: "👩‍🦼",
    name: "Womain in motorized wheelchair",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🦽",
    name: "Person in manual wheelchair",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "👨‍🦽",
    name: "Man in manual wheelchair",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+1F9BD',
    emoji: "👩‍🦽",
    name: "Woman in motorized wheelchair",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 	
  {
    unicode: 'U+1F3C3',
    emoji: "🏃",
    name: "Person sprinting",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+2642',
    emoji: "🏃‍♂",
    name: "Man sprinting",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "🏃‍♀",
    name: "Woman sprinting",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	 	 	
  {
    unicode: 'U+1F57A',
    emoji: "🕺",
    name: "Man dancing",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+1F483',
    emoji: "💃",
    name: "Woman dancing",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },		 
  {
    unicode: 'U+1F574',
    emoji: "🕴",
    name: "Person in suit levitating",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	
  {
    unicode: 'U+1F46F',
    emoji: "👯",
    name: "People with bunny ears",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "👯‍♂",
    name: "Men with bunny ears",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "👯‍♀",
    name: "Women in bunny ears",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F9D6',
    emoji: "🧖",
    name: "Person in steaming room",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧖‍♂‍",
    name: "Man in steaming room",
    category: "Person Emoji",
    key: 'man',
    tags: ['man']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧖‍♀",
    name: "Woman in steaming room",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman']
  },	
  {
    unicode: 'U+1F9D7',
    emoji: "🧗",
    name: "Person climbing",
    category: "Person Emoji",
    key: 'person',
    tags: ['person', 'sport']
  },	 	 	
  {
    unicode: 'U+200D',
    emoji: "🧗‍♂",
    name: "Man climbing",
    category: "Person Emoji",
    key: 'man',
    tags: ['man', 'sport']
  },	 	 	
  {
    unicode: 'U+2640',
    emoji: "🧗‍♀",
    name: "Woman climbing",
    category: "Person Emoji",
    key: 'woman',
    tags: ['woman', 'sport']
  },		
  {
    unicode: 'U+1F93A',
    emoji: "🤺",
    name: "Person fencing",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },	 	 	
  {
    unicode: 'U+1F3C7',
    emoji: "🏇",
    name: "Horse racing",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },	 	 	
  {
    unicode: 'U+26F7',
    emoji: "⛷",
    name: "Skier",
    category: "Person Emoji",
    key: 'woman',
    tags: ['person', 'sport']
  },		
  {
    unicode: 'U+1F3C2',
    emoji: "🏂",
    name: "Snowball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+1F3CC',
    emoji: "🏌",
    name: "Person playing golf",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🏌️‍♂",
    name: "Man playing golf",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+200D',
    emoji: "🏌️‍♀",
    name: "Woman playing golf",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },		
  {
    unicode: 'U+1F3C4',
    emoji: "🏄",
    name: "Person surfing",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+2642',
    emoji: "🏄‍♂",
    name: "Man surfing",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+2640',
    emoji: "🏄‍♀‍",
    name: "Woman surfing",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },		
  {
    unicode: 'U+1F6A3',
    emoji: "🚣",
    name: "Person rowing boat",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+2642',
    emoji: "🚣‍♂",
    name: "Man rowing boat",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🚣‍♀‍",
    name: "Woman rowing boat",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },		 	
  {
    unicode: 'U+1F3CA',
    emoji: "🏊",
    name: "Person swimming",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+2642',
    emoji: "🏊‍♂",
    name: "Man swimming ",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🏊‍♀‍‍",
    name: "Woman swimming",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },		 	
  {
    unicode: 'U+26F9',
    emoji: "⛹",
    name: "Person bouncing ball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "⛹️‍♂‍",
    name: "Man bouncing ball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+2640',
    emoji: "⛹️‍♀‍",
    name: "Woman bouncing ball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },			
  {
    unicode: 'U+1F3CB',
    emoji: "🏋",
    name: "Person lifting weight",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🏋️‍♂",
    name: "Man lifting weight",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+2640',
    emoji: "🏋️‍♀‍",
    name: "Woman lifting weight",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },			
  {
    unicode: 'U+1F6B4',
    emoji: "🚴",
    name: "Person cycling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+2642',
    emoji: "🚴‍♂",
    name: "Man cycling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🚴‍♀",
    name: "Woman cycling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },	 	 	
  {
    unicode: 'U+1F6B5',
    emoji: "🚵",
    name: "Person mountain biking",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+2642',
    emoji: "🚵‍♂‍",
    name: "Man mountain biking",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+2640',
    emoji: "🚵‍♀‍",
    name: "Woman mountain biking",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },		 	
  {
    unicode: 'U+1F938',
    emoji: "🤸",
    name: "Person catwheeling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+2642',
    emoji: "🤸‍♂",
    name: "Man catwheeling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🤸‍♀‍‍",
    name: "Woman catwheeling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },	 	
  {
    unicode: 'U+1F93C',
    emoji: "🤼",
    name: "People wrestling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+200D',
    emoji: "🤼‍♂",
    name: "Men wrestling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+2640',
    emoji: "🤼‍♀‍‍‍",
    name: "Women wrestling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },	 	 	
  {
    unicode: 'U+1F93D',
    emoji: "🤽",
    name: "Person playing water polo",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🤽‍♂",
    name: "Man playing water polo",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+200D',
    emoji: "🤽‍♀‍‍‍‍",
    name: "Woman playing water polo",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  },	 	 	
  {
    unicode: 'U+1F93E',
    emoji: "🤾",
    name: "Person playing handball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+200D',
    emoji: "🤾‍♂‍",
    name: "Man playing handball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🤾‍♀",
    name: "Woman playing handball",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  }, 	 	
  {
    unicode: 'U+1F939',
    emoji: "🤹",
    name: "Person juggling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+200D',
    emoji: "🤹‍♂",
    name: "Man juggling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+FE0F',
    emoji: "🤹‍♀‍",
    name: "Woman juggling",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  }, 	 	
  {
    unicode: 'U+1F9D8',
    emoji: "🧘",
    name: "Person lotus position",
    category: "Person Emoji",
    key: 'sport',
    tags: ['person', 'sport']
  },			
  {
    unicode: 'U+200D',
    emoji: "🧘‍♂",
    name: "Man in lotus position",
    category: "Person Emoji",
    key: 'sport',
    tags: ['man', 'sport']
  },			
  {
    unicode: 'U+2640',
    emoji: "🧘‍♀",
    name: "Woman in lotus position",
    category: "Person Emoji",
    key: 'sport',
    tags: ['woman', 'sport']
  }, 		 	
  {
    unicode: 'U+1F6C0',
    emoji: "🛀 ",
    name: "Person bathing ",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  }, 		 	
  {
    unicode: 'U+1F6CC',
    emoji: "🛌",
    name: "Person in bed",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  }, 		 	
  {
    unicode: 'U+1F46A',
    emoji: "👪",
    name: "Family",
    category: "Person Emoji",
    key: 'family',
    tags: ['family']
  },	
  {
    unicode: 'U+200D',
    emoji: "👨‍👩‍👦",
    name: "Family: man, woman, and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'woman', 'boy']
  },	
  {
    unicode: 'U+1F469',
    emoji: "👨‍👩‍👧",
    name: "Family: man, woman, and girl",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'woman', 'girl']
  },	
  {
    unicode: 'U+200D',
    emoji: "👨‍👩‍👧‍👦",
    name: "Family: man, woman, boy, and girl",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'woman', 'girl', 'boy']
  },		
  {
    unicode: 'U+1F466',
    emoji: "👨‍👩‍👦‍👦",
    name: "Family: man, woman, and two boys",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'woman', 'boy']
  },		
  {
    unicode: 'U+200D',
    emoji: "👨‍👩‍👧‍👧",
    name: "Family: man, woman, and two girls",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'woman', 'girl']
  },	 	
  {
    unicode: 'U+1F466',
    emoji: "👨‍👨‍👦",
    name: "Family: two men and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'boy']
  },	 	
  {
    unicode: 'U+200D',
    emoji: "👨‍👨‍👧",
    name: "Family: two men and girl",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'girl']
  },	 	
  {
    unicode: 'U+1F466',
    emoji: "👨‍👨‍👧‍👦",
    name: "Family: two men, girl, and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'girl', 'boy']
  },	 	
  {
    unicode: 'U+200D',
    emoji: "👨‍👨‍👦‍👦",
    name: "Family: two men and two boys",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'boy']
  },	 	
  {
    unicode: 'U+1F467',
    emoji: "👨‍👨‍👧‍👧",
    name: "Family: two men and two girls",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'girl']
  },	 	
  {
    unicode: 'U+1F466',
    emoji: "👩‍👩‍👦",
    name: "Family: two women and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'boy']
  },	 	
  {
    unicode: 'U+1F467',
    emoji: "👩‍👩‍👧",
    name: "Family: two women and girl",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'girl']
  },	 		
  {
    unicode: 'U+1F466',
    emoji: "👩‍👩‍👧‍👦",
    name: "Family: two women, girl, and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'girl', 'boy']
  },	 	 	
  {
    unicode: 'U+1F466',
    emoji: "👩‍👩‍👦‍👦",
    name: "Family: two women and two boys",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'boy']
  },	 	 	
  {
    unicode: 'U+1F467',
    emoji: "👩‍👩‍👧‍👧",
    name: "Family: two women and two girls",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'girl']
  },		 	
  {
    unicode: 'U+1F466',
    emoji: "👨‍👦",
    name: "Family: man and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'boy']
  },		 	
  {
    unicode: 'U+1F466',
    emoji: "👨‍👦‍👦",
    name: "Family: man and two boys",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'boy']
  },		 	
  {
    unicode: 'U+1F467',
    emoji: "👨‍👧",
    name: "Family: man and girl",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'girl']
  },		 	
  {
    unicode: 'U+1F466',
    emoji: "👨‍👧‍👦",
    name: "Family: man, girl and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'girl', 'boy']
  },		 	
  {
    unicode: 'U+1F467',
    emoji: "👨‍👧‍👧",
    name: "Family: man and two girls",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'man', 'girl']
  },		 	
  {
    unicode: 'U+1F466',
    emoji: "👩‍👦",
    name: "Family: woman and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'boy']
  },		 	
  {
    unicode: 'U+1F466',
    emoji: "👩‍👦‍👦",
    name: "Family: woman and two boys",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'boy']
  },		 	
  {
    unicode: 'U+1F467',
    emoji: "👩‍👧",
    name: "Family: woman and girl",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'girl']
  },		 	
  {
    unicode: 'U+1F466',
    emoji: "👩‍👧‍👦",
    name: "Family: woman, girl, and boy",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'girl', 'boy']
  },		 	
  {
    unicode: 'U+1F467',
    emoji: "👩‍👧‍👧",
    name: "Family: woman and two girls",
    category: "Person Emoji",
    key: 'family',
    tags: ['family', 'woman', 'girl']
  },		 	
  {
    unicode: 'U+1F9D1',
    emoji: "🧑‍🤝‍🧑",
    name: "People holding hands",
    category: "Person Emoji",
    key: 'love',
    tags: ['love']
  },		 	
  {
    unicode: 'U+1F46D',
    emoji: "👭",
    name: "Women holding hands",
    category: "Person Emoji",
    key: 'love',
    tags: ['love']
  },		 	
  {
    unicode: 'U+1F46B',
    emoji: "👫",
    name: "Woman and man holding hands",
    category: "Person Emoji",
    key: 'love',
    tags: ['love']
  },		 	
  {
    unicode: 'U+1F46C',
    emoji: "👬",
    name: "Men holding hands",
    category: "Person Emoji",
    key: 'love',
    tags: ['love']
  },		 	
  {
    unicode: 'U+1F48F',
    emoji: "💏",
    name: "Kiss",
    category: "Person Emoji",
    key: 'love',
    tags: ['love']
  },	
  {
    unicode: 'U+200D',
    emoji: "👩‍❤‍💋‍👨",
    name: "Woman and man kissing",
    category: "Person Emoji",
    key: 'love',
    tags: ['love', 'man', 'woman']
  },	
  {
    unicode: 'U+200D',
    emoji: "👨‍❤‍💋‍👨",
    name: "Man and man kissing",
    category: "Person Emoji",
    key: 'love',
    tags: ['love', 'man']
  },	
  {
    unicode: 'U+1F48B',
    emoji: "👩‍❤‍💋‍👩",
    name: "Womand and woman kissing",
    category: "Person Emoji",
    key: 'love',
    tags: ['love', 'woman']
  },	
  {
    unicode: 'U+1F491',
    emoji: "💑",
    name: "Couple with heart",
    category: "Person Emoji",
    key: 'love',
    tags: ['love', 'woman']
  },		 	
  {
    unicode: 'U+1F5E3',
    emoji: "🗣",
    name: "Person speaking",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },		 	
  {
    unicode: 'U+1F464',
    emoji: "👤",
    name: "Bust in silhouhette",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },		 	
  {
    unicode: 'U+1F465',
    emoji: "👥",
    name: "Busts in silhouette",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },		 	
  {
    unicode: 'U+1FAC2',
    emoji: "🫂",
    name: "People hugging",
    category: "Person Emoji",
    key: 'person',
    tags: ['person']
  },	 	
  
  // Food and Drink Emoji
  
  {
    unicode: 'U+1F347',
    emoji: "🍇‍‍",
    name: "Grapes",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F348',
    emoji: "🍈‍‍",
    name: "Melon",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F349',
    emoji: "🍉",
    name: "Water melon",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F349',
    emoji: "🍊",
    name: "Tangerine",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F34C',
    emoji: "🍌",
    name: "Banana",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F34D',
    emoji: "🍍",
    name: "Pineapple",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F96D',
    emoji: "🥭",
    name: "Mango",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F34E',
    emoji: "🍎",
    name: "Red apple",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F34F',
    emoji: "🍏",
    name: "Green apple",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F350',
    emoji: "🍐 ",
    name: "Pear",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F351',
    emoji: "🍑 ",
    name: "Peach",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F352',
    emoji: "🍒 ",
    name: "Cherries",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F353',
    emoji: "🍓",
    name: "Strawberries",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1FAD0',
    emoji: "🫐",
    name: "Blueberries",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F95D',
    emoji: "🥝",
    name: "Kiwi fruit",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F345',
    emoji: "🍅",
    name: "Tomato",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1FAD2',
    emoji: "🫒",
    name: "Olive",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F965',
    emoji: "🥥",
    name: "Coconut",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F951',
    emoji: "🥑",
    name: "Avocado",
    category: "Food and Drink Emoji",
    key: 'fruit',
    tags: ['fruit']
  },
  {
    unicode: 'U+1F346',
    emoji: "🍆",
    name: "Eggplant",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F954',
    emoji: "🥔",
    name: "Potato",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F955',
    emoji: "🥕",
    name: "Carrot",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F33D',
    emoji: "🌽",
    name: "Corn",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F336',
    emoji: "🌶",
    name: "Pepper",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1FAD1',
    emoji: "🫑",
    name: "Bell pepper",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F952',
    emoji: "🥒",
    name: "Cucumber",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F96C',
    emoji: "🥬",
    name: "Leafy green",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F966',
    emoji: "🥦",
    name: "Broccoli",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F9C4',
    emoji: "🧄",
    name: "Garlic",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F9C5',
    emoji: "🧅",
    name: "Onion",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F344',
    emoji: "🍄",
    name: "Mushroom",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F95C',
    emoji: "🥜",
    name: "Peanuts",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F330',
    emoji: "🌰",
    name: "Chestnut",
    category: "Food and Drink Emoji",
    key: 'vegetable',
    tags: ['vegetable']
  },
  {
    unicode: 'U+1F35E',
    emoji: "🍞",
    name: "Bread",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  },
  {
    unicode: 'U+1F950',
    emoji: "🥐",
    name: "Croissant",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  },
  {
    unicode: 'U+1F956',
    emoji: "🥖",
    name: "Baguette bread",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  },
  {
    unicode: 'U+1FAD3',
    emoji: "🫓",
    name: "Flat bread",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  },
  {
    unicode: 'U+1F968',
    emoji: "🥨",
    name: "Pretzel",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	
  {
    unicode: 'U+1F96F',
    emoji: "🥯",
    name: "Bagel",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	
  {
    unicode: 'U+1F95E',
    emoji: "🥞 ",
    name: "Pancake",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	
  {
    unicode: 'U+1F9C7',
    emoji: "🧇",
    name: "Waffle",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F9C0',
    emoji: "🧀",
    name: "Cheese wedge",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F356',
    emoji: "🍖",
    name: "Meat with bone",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F357',
    emoji: "🍗",
    name: "Poultry leg",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F969',
    emoji: "🥩",
    name: "Cut of meat",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F953',
    emoji: "🥓",
    name: "Bacon",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F354',
    emoji: "🍔",
    name: "Hamburger",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F35F',
    emoji: "🍟",
    name: "French fries",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F355',
    emoji: "🍕",
    name: "Pizza",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F32D',
    emoji: "🌭",
    name: "Hot dog",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F96A',
    emoji: "🥪",
    name: "Sandwich",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F32E',
    emoji: "🌮",
    name: "Taco",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F32F',
    emoji: "🌯",
    name: "Burrito",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	 	
  {
    unicode: 'U+1FAD4',
    emoji: "🫔",
    name: "Tamale",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	 	
  {
    unicode: 'U+1F959',
    emoji: "🥙",
    name: "Stuffed flatbread",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	 	
  {
    unicode: 'U+1F9C6',
    emoji: "🧆",
    name: "Falafel",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F95A',
    emoji: "🥚",
    name: "Egg",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F373',
    emoji: "🍳",
    name: "Shallow pan of food",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F958',
    emoji: "🥘",
    name: "Cooking",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F372',
    emoji: "🍲",
    name: "Pot of food",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1FAD5',
    emoji: "🫕",
    name: "Fondue",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 	
  {
    unicode: 'U+1F963',
    emoji: "🥣",
    name: "Bowl with food ",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F957',
    emoji: "🥗",
    name: "Green salad",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F37F',
    emoji: "🍿",
    name: "Popcorn",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F9C8',
    emoji: "🧈",
    name: "Butter",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F9C2',
    emoji: "🧂",
    name: "Salt",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F96B',
    emoji: "🥫",
    name: "Canned food",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F371',
    emoji: "🍱",
    name: "Bento box",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F358',
    emoji: "🍘",
    name: "Rice cracker",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F359',
    emoji: "🍙",
    name: "Rice ball",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F35A',
    emoji: "🍚",
    name: "Cooked rice",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F35B',
    emoji: "🍛",
    name: "Curry rice",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F35C',
    emoji: "🍜",
    name: "Steaming bowl",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F35D',
    emoji: "🍝",
    name: "Spaghetti",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F360',
    emoji: "🍠",
    name: "Roasted sweet potato",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F362',
    emoji: "🍢",
    name: "Oden",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F363',
    emoji: "🍣",
    name: "Sushi",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F364',
    emoji: "🍤",
    name: "Fried shrimp",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F365',
    emoji: "🍥",
    name: "Fish cake with swiri",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F96E',
    emoji: "🥮",
    name: "Moon cake",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F361',
    emoji: "🍡",
    name: "Dango",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F95F',
    emoji: "🥟",
    name: "Dumpling",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	 		
  {
    unicode: 'U+1F960',
    emoji: "🥠",
    name: "Fortune cookie",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F961',
    emoji: "🥡",
    name: "Take out box",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F980',
    emoji: "🦀",
    name: "Crab",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F99E',
    emoji: "🦞",
    name: "Lobster",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F990',
    emoji: "🦐",
    name: "Shrimp",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F991',
    emoji: "🦑",
    name: "Squid",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F9AA',
    emoji: "🦪",
    name: "Oyster",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F368',
    emoji: "🍨",
    name: "Ice cream",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	
  {
    unicode: 'U+1F367',
    emoji: "🍧",
    name: "Shaved ice cream",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  
  {
    unicode: 'U+1F366',
    emoji: "🍦",
    name: "Soft ice cream",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  
  {
    unicode: 'U+1F369',
    emoji: "🍩",
    name: "Doughnut",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  
  {
    unicode: 'U+1F36A',
    emoji: "🍪",
    name: "Cookie",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  
  {
    unicode: 'U+1F382',
    emoji: "🎂",
    name: "Birthday cake",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	   	
  {
    unicode: 'U+1F370',
    emoji: "🍰",
    name: "Short cake",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	   	
  {
    unicode: 'U+1F9C1',
    emoji: "🧁",
    name: "Cup cake",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	   	
  {
    unicode: 'U+1F967',
    emoji: "🥧",
    name: "Pie",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	   	
  {
    unicode: 'U+1F36B',
    emoji: "🍫",
    name: "Chocoloate",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	 	
  {
    unicode: 'U+1F36C',
    emoji: "🍬",
    name: "Candy",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	 	
  {
    unicode: 'U+1F36D',
    emoji: "🍭",
    name: "Lollipop",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	 	
  {
    unicode: 'U+1F36E',
    emoji: "🍮",
    name: "Custard",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 	  	 	
  {
    unicode: 'U+1F36F',
    emoji: "🍯",
    name: "Honey pot",
    category: "Food and Drink Emoji",
    key: 'food',
    tags: ['food']
  }, 		 	
  {
    unicode: 'U+1F37C',
    emoji: "🍼",
    name: "Baby bottle ",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink', 'baby']
  }, 
  {
    unicode: 'U+1F95B',
    emoji: "🥛",
    name: "Glass of milk",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  }, 
  {
    unicode: 'U+2615',
    emoji: "☕",
    name: "Hot beverage",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1FAD6',
    emoji: "🫖",
    name: "Teapot",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F375',
    emoji: "🍵",
    name: "Teacup without handle",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F376',
    emoji: "🍶",
    name: "Sake",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F37E',
    emoji: "🍾",
    name: "Bottle with poppin cork",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F37E',
    emoji: "🍾",
    name: "Bottle with poppin cork",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		 	
  {
    unicode: 'U+1F377',
    emoji: "🍷",
    name: "Wine glass",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		 	
  {
    unicode: 'U+1F378',
    emoji: "🍸",
    name: "Cocktail glass",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		 	
  {
    unicode: 'U+1F379',
    emoji: "🍹",
    name: "Tropical drink",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F37A',
    emoji: "🍺",
    name: "Beer mug",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F37B',
    emoji: "🍻",
    name: "Clinking beer mug",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F942',
    emoji: "🥂",
    name: "Clinking glasses",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F943',
    emoji: "🥃",
    name: "Tumbler glass",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F964',
    emoji: "🥤",
    name: "Cup with strawberry",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F9CB',
    emoji: "🧋",
    name: "Bubble tea",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F9C3',
    emoji: "🧃",
    name: "Beverage box",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },		
  {
    unicode: 'U+1F9C3',
    emoji: "🧃",
    name: "Beverage box",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F9C9',
    emoji: "🧉",
    name: "Mate",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F9CA',
    emoji: "🧊",
    name: "Ice",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 	
  {
    unicode: 'U+1F37D',
    emoji: "🍽 ",
    name: "Fork and knife with plate", 
    category: "Food and Drink Emoji",
    key: 'tool',
    tags: ['tool']
  },	 	
  {
    unicode: 'U+1F374',
    emoji: "🍴 ",
    name: "Fork and knife",
    category: "Food and Drink Emoji",
    key: 'tool',
    tags: ['tool']
  },	 	
  {
    unicode: 'U+1F944',
    emoji: "🥄 ",
    name: "Spoon",
    category: "Food and Drink Emoji",
    key: 'tool',
    tags: ['tool']
  },	 		
  {
    unicode: 'U+1F52A',
    emoji: "🔪",
    name: "Kitchen knife",
    category: "Food and Drink Emoji",
    key: 'tool',
    tags: ['tool']
  },	 		
  {
    unicode: 'U+1FAD9',
    emoji: "🧋",
    name: "Jar",
    category: "Food and Drink Emoji",
    key: 'drink',
    tags: ['drink']
  },	 		
  {
    unicode: 'U+1F3FA',
    emoji: "🏺",
    name: "Amphora",
    category: "Food and Drink Emoji",
    key: 'tool',
    tags: ['tool']
  },	 	
  
  // Transport and Place Emoji
  
  {
    unicode: 'U+1F30D',
    emoji: "🌍",
    name: "Globe showing Africa and Europe",
    category: "Transport and Places Emoji",
    key: 'globe',
    tags: ['other']
  },
  {
    unicode: 'U+1F30E',
    emoji: "🌎",
    name: "Globe showing Americas",
    category: "Transport and Places Emoji",
    key: 'globe',
    tags: ['other']
  },
  {
    unicode: 'U+1F30F',
    emoji: "🌏",
    name: "Globe showing Asia and Australia",
    category: "Transport and Places Emoji",
    key: 'globe',
    tags: ['other']
  },
  {
    unicode: 'U+1F310',
    emoji: "🌐",
    name: "Globe with meridians",
    category: "Transport and Places Emoji",
    key: 'globe',
    tags: ['other']
  },
  {
    unicode: 'U+1F5FA',
    emoji: "🗺",
    name: "World map",
    category: "Transport and Places Emoji",
    key: 'globe',
    tags: ['other']
  },
  {
    unicode: 'U+1F9ED',
    emoji: "🧭",
    name: "Compass",
    category: "Transport and Places Emoji",
    key: 'compass',
    tags: ['other']
  },
  {
    unicode: 'U+26F0',
    emoji: "⛰",
    name: "Mountain",
    category: "Transport and Places Emoji",
    key: 'mountain',
    tags: ['place']
  },
  {
    unicode: 'U+26F0',
    emoji: "🏔",
    name: "Snowcap mountain",
    category: "Transport and Places Emoji",
    key: 'mountain',
    tags: ['place']
  },
  {
    unicode: 'U+1F30B',
    emoji: "🌋",
    name: "Volcanic mountain",
    category: "Transport and Places Emoji",
    key: 'mountain',
    tags: ['place']
  },
  {
    unicode: 'U+1F5FB',
    emoji: "🗻",
    name: "Fuji mountain",
    category: "Transport and Places Emoji",
    key: 'mountain',
    tags: ['place']
  },
  {
    unicode: 'U+1F3D5',
    emoji: "🏕",
    name: "Camping",
    category: "Transport and Places Emoji",
    key: 'camping',
    tags: ['place']
  },
  {
    unicode: 'U+1F3D6',
    emoji: "🏖",
    name: "Beach with umbrella",
    category: "Transport and Places Emoji",
    key: 'beach',
    tags: ['place']
  },
  {
    unicode: 'U+1F3DC',
    emoji: "🏜",
    name: "Desert",
    category: "Transport and Places Emoji",
    key: 'desert',
    tags: ['place']
  },
  {
    unicode: 'U+1F3DD',
    emoji: "🏝",
    name: "Desertified island",
    category: "Transport and Places Emoji",
    key: 'desert',
    tags: ['place']
  },
  {
    unicode: 'U+1F3DE',
    emoji: "🏞",
    name: "National park",
    category: "Transport and Places Emoji",
    key: 'park',
    tags: ['place']
  },
  {
    unicode: 'U+1F3DF',
    emoji: "🏟",
    name: "Stadium",
    category: "Transport and Places Emoji",
    key: 'stadium',
    tags: ['place']
  },
  {
    unicode: 'U+1F3DB',
    emoji: "🏛",
    name: "Classical building",
    category: "Transport and Places Emoji",
    key: 'building',
    tags: ['place']
  },
  {
    unicode: 'U+1F3D7',
    emoji: "🏗",
    name: "Building construction",
    category: "Transport and Places Emoji",
    key: 'building',
    tags: ['place']
  },
  {
    unicode: 'U+1F9F1',
    emoji: "🧱",
    name: "Brick",
    category: "Transport and Places Emoji",
    key: 'brick',
    tags: ['other']
  },
  {
    unicode: 'U+1FAA8',
    emoji: "🪨",
    name: "Rock",
    category: "Transport and Places Emoji",
    key: 'rock',
    tags: ['other']
  },
  {
    unicode: 'U+1FAB5',
    emoji: "🪵",
    name: "Wood",
    category: "Transport and Places Emoji",
    key: 'wood',
    tags: ['other']
  },
  {
    unicode: 'U+1F6D6',
    emoji: "🛖",
    name: "Hut",
    category: "Transport and Places Emoji",
    key: 'hut',
    tags: ['place']
  },
  {
    unicode: 'U+1F3D8',
    emoji: "🏘",
    name: "Houses",
    category: "Transport and Places Emoji",
    key: 'house',
    tags: ['place']
  },
  {
    unicode: 'U+1F3DA',
    emoji: "🏚",
    name: "Derelict house",
    category: "Transport and Places Emoji",
    key: 'house',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E0',
    emoji: "🏠",
    name: "House",
    category: "Transport and Places Emoji",
    key: 'house',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E1',
    emoji: "🏡",
    name: "House with garden",
    category: "Transport and Places Emoji",
    key: 'house',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E2',
    emoji: "🏢",
    name: "Office building",
    category: "Transport and Places Emoji",
    key: 'office',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E3',
    emoji: "🏣",
    name: "Japanese office",
    category: "Transport and Places Emoji",
    key: 'office',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E4',
    emoji: "🏤",
    name: "Post office",
    category: "Transport and Places Emoji",
    key: 'office',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E5',
    emoji: "🏥",
    name: "Hospital",
    category: "Transport and Places Emoji",
    key: 'hospital',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E5',
    emoji: "🏥",
    name: "Hospital",
    category: "Transport and Places Emoji",
    key: 'hospital',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E6',
    emoji: "🏦",
    name: "Bank",
    category: "Transport and Places Emoji",
    key: 'bank',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E8',
    emoji: "🏨",
    name: "Hotel",
    category: "Transport and Places Emoji",
    key: 'hotel',
    tags: ['place']
  },
  {
    unicode: 'U+1F3E9',
    emoji: "🏩",
    name: "Love hotel",
    category: "Transport and Places Emoji",
    key: 'hotel',
    tags: ['place']
  },
  {
    unicode: 'U+1F3EA',
    emoji: "🏪",
    name: "Convenience store",
    category: "Transport and Places Emoji",
    key: 'store',
    tags: ['place']
  },
  {
    unicode: 'U+1F3EB',
    emoji: "🏫",
    name: "School",
    category: "Transport and Places Emoji",
    key: 'school',
    tags: ['place']
  },
  {
    unicode: 'U+1F3EC',
    emoji: "🏬",
    name: "Department",
    category: "Transport and Places Emoji",
    key: 'department',
    tags: ['place']
  },
  {
    unicode: 'U+1F3ED',
    emoji: "🏭",
    name: "Factory",
    category: "Transport and Places Emoji",
    key: 'factory',
    tags: ['place']
  },
  {
    unicode: 'U+1F3EF',
    emoji: "🏯",
    name: "Japanese castle",
    category: "Transport and Places Emoji",
    key: 'castle',
    tags: ['place']
  },
  {
    unicode: 'U+1F3F0',
    emoji: "🏰",
    name: "Castle",
    category: "Transport and Places Emoji",
    key: 'castle',
    tags: ['place']
  },
  {
    unicode: 'U+1F492',
    emoji: "💒",
    name: "Wedding house",
    category: "Transport and Places Emoji",
    key: 'house',
    tags: ['place']
  },
  {
    unicode: 'U+1F5FC',
    emoji: "🗼",
    name: "Tokyo tower",
    category: "Transport and Places Emoji",
    key: 'tower',
    tags: ['place']
  },
  {
    unicode: 'U+1F5FD',
    emoji: "🗽",
    name: "Statue of liberty",
    category: "Transport and Places Emoji",
    key: 'statue',
    tags: ['place']
  },
  {
    unicode: 'U+26EA',
    emoji: "⛪",
    name: "Church",
    category: "Transport and Places Emoji",
    key: 'church',
    tags: ['place']
  },
  {
    unicode: 'U+1F54C',
    emoji: "🕌",
    name: "Mosque",
    category: "Transport and Places Emoji",
    key: 'mosque',
    tags: ['place']
  },
  {
    unicode: 'U+1F6D5',
    emoji: "🛕",
    name: "Hindu temple",
    category: "Transport and Places Emoji",
    key: 'temple',
    tags: ['place']
  },
  {
    unicode: 'U+1F54D',
    emoji: "🕍",
    name: "Synagogue",
    category: "Transport and Places Emoji",
    key: 'synagogue',
    tags: ['place']
  },
  {
    unicode: 'U+26E9',
    emoji: "⛩",
    name: "Shinto shrine",
    category: "Transport and Places Emoji",
    key: 'shinto',
    tags: ['place']
  },
  {
    unicode: 'U+1F54B',
    emoji: "🕋",
    name: "Kaaba",
    category: "Transport and Places Emoji",
    key: 'kaaba',
    tags: ['place']
  },
  {
    unicode: 'U+26F2',
    emoji: "⛲",
    name: "Fountain",
    category: "Transport and Places Emoji",
    key: 'fountain',
    tags: ['place']
  },
  {
    unicode: 'U+26FA',
    emoji: "⛺",
    name: "Tent",
    category: "Transport and Places Emoji",
    key: 'tent',
    tags: ['place']
  },
  {
    unicode: 'U+1F301',
    emoji: "🌁",
    name: "Foggy",
    category: "Transport and Places Emoji",
    key: 'fog',
    tags: ['place']
  },
  {
    unicode: 'U+1F303',
    emoji: "🌃",
    name: "Night with starrs",
    category: "Transport and Places Emoji",
    key: 'night',
    tags: ['place']
  },
  {
    unicode: 'U+1F3D9',
    emoji: "🏙",
    name: "Citscape",
    category: "Transport and Places Emoji",
    key: 'city',
    tags: ['place']
  },
  {
    unicode: 'U+1F305',
    emoji: "🌅",
    name: "Sunrise",
    category: "Transport and Places Emoji",
    key: 'sun',
    tags: ['other']
  },
  {
    unicode: 'U+1F304',
    emoji: "🌄",
    name: "Sunrise over mountains",
    category: "Transport and Places Emoji",
    key: 'sun',
    tags: ['other']
  },
  {
    unicode: 'U+1F306',
    emoji: "🌆",
    name: "Cityscape at dusk",
    category: "Transport and Places Emoji",
    key: 'city',
    tags: ['other']
  },
  {
    unicode: 'U+1F307',
    emoji: "🌇",
    name: "Sunset",
    category: "Transport and Places Emoji",
    key: 'sunset',
    tags: ['other']
  },
  {
    unicode: 'U+1F309',
    emoji: "🌉",
    name: "Bridge at night",
    category: "Transport and Places Emoji",
    key: 'bridge',
    tags: ['place']
  },
  {
    unicode: 'U+2668',
    emoji: "♨",
    name: "Hot springs",
    category: "Transport and Places Emoji",
    key: '',
    tags: ['place']
  },
  {
    unicode: 'U+1F3A0',
    emoji: "🎠",
    name: "Carousel horse",
    category: "Transport and Places Emoji",
    key: 'horse',
    tags: ['place']
  },
  {
    unicode: 'U+1F3A1',
    emoji: "🎡",
    name: "Ferris wheel",
    category: "Transport and Places Emoji",
    key: '',
    tags: ['place']
  },
  {
    unicode: 'U+1F3A2',
    emoji: "🎢",
    name: "Roller coaster",
    category: "Transport and Places Emoji",
    key: '',
    tags: ['place']
  },
  {
    unicode: 'U+1F488',
    emoji: "💈",
    name: "Barber poll",
    category: "Transport and Places Emoji",
    key: 'barber',
    tags: ['place']
  },
  {
    unicode: 'U+1F3AA',
    emoji: "🎪",
    name: "Circus tent",
    category: "Transport and Places Emoji",
    key: 'tent',
    tags: ['place']
  },
  
]

export default emojis;