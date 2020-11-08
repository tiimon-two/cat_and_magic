var userDialor = document.querySelector('.setup');
userDialor.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон',];
var WIZARD_SUNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг',];
var COAT_COLORS = [
	'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
	'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
	];
var EYAR_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
	{
		name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' +
			  WIZARD_SUNAMES[Math.floor(Math.random()*WIZARD_SUNAMES.length)],
		coatColor:COAT_COLORS[Math.floor(Math.random()*COAT_COLORS.length)],
		eyesColor:EYAR_COLOR[Math.floor(Math.random()*EYAR_COLOR.length)]
	},
	{
		name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' +
			  WIZARD_SUNAMES[Math.floor(Math.random()*WIZARD_SUNAMES.length)],
		coatColor:COAT_COLORS[Math.floor(Math.random()*COAT_COLORS.length)],
		eyesColor:EYAR_COLOR[Math.floor(Math.random()*EYAR_COLOR.length)]
	},
	{
		name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' +
			  WIZARD_SUNAMES[Math.floor(Math.random()*WIZARD_SUNAMES.length)],
		coatColor:COAT_COLORS[Math.floor(Math.random()*COAT_COLORS.length)],
		eyesColor:EYAR_COLOR[Math.floor(Math.random()*EYAR_COLOR.length)]
	},
	{
		name: WIZARD_NAMES[Math.floor(Math.random()*WIZARD_NAMES.length)] + ' ' +
			  WIZARD_SUNAMES[Math.floor(Math.random()*WIZARD_SUNAMES.length)],
		coatColor:COAT_COLORS[Math.floor(Math.random()*COAT_COLORS.length)],
		eyesColor:EYAR_COLOR[Math.floor(Math.random()*EYAR_COLOR.length)]
	}
];

var simularWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var simularListElement = document.querySelector('.setup-similar-list');

for(var i = 0; i < wizards.length; i++){
	var wizardElement = simularWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

	simularListElement.appendChild(wizardElement);
}


