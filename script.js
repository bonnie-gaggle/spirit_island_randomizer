function getRandomNumber(numberOfItems) {
  return Math.floor(Math.random()*numberOfItems)
}

const allItems = {
  scenario: [
    'Elemental Invocation', //1
    'Despicable Theft', //2
    'Powers Long Forgotten',//1
    'Rituals of Terror',//3
    'Varied Terrains',//2
    'Blitz',//0
    'Rituals of the Destroying Flame',//3
    'The Great River',//3
    'Ward the Shores',//2
    'Guard the Isle\'s Heart',//0
    'Dahan Insurrection',//4
    'A Diversity of Spirits' //0
  ],
  adversary: [ // each has 6 levels
    'tsardom of Russia',
    'kingdom of Sweden',
    'Habsburg monarchy',
    'kingdom of England',
    'kingdom of Scotland',
    'kingdom of France',
    'kingdom of Brandenburg-Prussia'
  ],
  spirit: [
    'Lure of the Deep Wilderness',
    'Heart of the Wildfire',
    'Serpent Slumbering Beneath the Island',
    'River Surges in Sunlight',
    'Lightning\'s Swift Strike',
    'Keeper of the Forbidden Wilds',
    'Thunderspeaker',
    'Fractured Days Split the Sky',
    'Ocean\'s Hungry Grasp',
    'Finder of Paths Unseen',
    'A Spread of Rampant Green',
    'Many Minds Move as One',
    'Vital Strength of the Earth',
    'Bringer of Dreams and Nightmares',
    'Volcano Looming High',
    'Vengeance as a Burning Plague',
    'Downpour Drenches the World',
    'Sharp Fangs Behind the Leaves',
    'Shroud of Silent Mist',
    'Grinning Trickster Stirs Up Trouble',
    'Shadows Flicker Like Flame',
    'Starlight Seeks its Form',
    'Stone\'s Unyielding Defiance',
    'Shifting Memory of Ages'
  ]
}

let setup = [];

for (let item in allItems) {
  let propLength = allItems[item].length
  let selectedOptionIndex = getRandomNumber(propLength);
  let text = allItems[item][selectedOptionIndex];

  switch(item) {
    case 'scenario':
      setup.push(`You should play ${text}`);
      break;
    case 'adversary':
      setup.push(` against the ${text}`);
      break;
    case 'spirit':
      setup.push(` as ${text}.`);
      break;
  }
}

console.log(''.concat(...setup));