(function(){
    'use strict';
    var age = 16;
    var isFemale = true;
    var result = null;
    if (age <= 15) {
        result = 800;
    } else if (isFemale) {
        result = 1000;
    } else {
        result = 1800;
    }
    document.write(result);
})();