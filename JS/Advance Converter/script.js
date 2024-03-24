(function () {
    var heading = document.querySelector('h1');
    var convertType = "miles";
    var intro = document.querySelector('p');
    var answerDiv = document.getElementById('answer');
    var form = document.getElementById('convert');

    document.addEventListener('keydown', function (e) {
        var keyval = e.key;
        if (keyval == 'k') {
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles converter';
            intro.innerHTML = 'Type in a number of Kilometers and click the button to convert the distance to miles.';
        } else if (keyval == 'm') {
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers converter';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to Kilometers.';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        if (distance) {
            if (convertType == "miles") {
                var converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            } else {
                var converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`; // Corrected this line
            }
        } else {
            answerDiv.innerHTML = 'Please provide a number';
        }
    });
})();
