//var fs = require('fs');
//var StatMode = require('stat-mode');
//
//fs.stat('./cat.jpg', function(err, stats) {
//    var statMode = new StatMode(stats);
//    console.log(statMode.toString());
//});



//wyświetla w formie kodu ASCII
//fs.readFile('./tekst.txt', function(err, data) {
//    console.log(data);
//});



//fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//    console.log('Zapisano!');
//});
//
//
//
//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log(data);
//});





//var fs = require('fs');
//var colors = require('colors');
//
//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log('Dane przed zapisem!'.blue);
//    console.log(data);
//    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//        if (err) throw err;
//        console.log('Zapisano!'.blue);
//        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//            console.log('Dane po zapisie'.blue)
//            console.log(data);
//        });
//    });
//});





var fs = require('fs');
var colors = require('colors');

fs.readdir(__dirname, function(err, files) {
    console.log(files);
    fs.writeFile('./tekst.txt', files, function(err, data) {
        if (err) throw err;
        console.log('Zapisano do pliku'.green);
    });
});

fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
    console.log('Dane po zapisie'.blue);
    console.log(data);
});



















