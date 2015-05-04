var http = require('http'),
	fs = require('fs');

var download = function(url, dest, cb) {
	var file = fs.createWriteStream(dest);
	
	var request = http.get(url, function(response) {
		response.pipe(file);
		file.on('finish', function() {
			file.close(cb);
		});
	});
};

var processingDownload = function(srcList, startNum, destDirectory) {
	var linkPrefix = 'http://translate.google.com/translate_tts?ie=UTF-8&q=',
		linkPostfix = '&tl=en',
		link = '',
		fileName = '';

	for (var i = 0, n = srcList.length; i < n; i++) {

		link = linkPrefix + srcList[i].split(' ').join('%20') + linkPostfix;

		fileName = (i + startNum).toString() + '.mp3';

		download(link, destDirectory + '/' + fileName);
	}
};

module.exports = {
	download: processingDownload
};