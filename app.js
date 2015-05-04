var ggTranslate = require('./DownloadGGTranslate');

var start = 91,
	listText = [
		'before the universe began, time and space did not exist',
		'the film ended with the hero dying',
		'they ended their relationship a year ago',
		'i wanted the sweater in the large size but they only had medium',
		'she collects antique jewellery',
		'donna is a single parent, it\'s difficult for her to work full time',
		'there was just one solitary figure on the horizon',
		'she was the sole survior of the crash',
		'three injured people were taken to the hospital',
		'the shop tried to sell me a damaged sofa',
		'in the south the farmers grow crops',
		'in the north the farmers mostly raise cattle'
	];

ggTranslate.download(listText, start, './dest');