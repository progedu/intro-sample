(function(){
    'use strict';
    var header = document.getElementById('header');
    var deg = 0;
    function rotateHeader() {
        deg = deg + 6;
        deg = deg % 360;
        if ((0 <= deg && deg < 90) || (270 <= deg && deg < 360)) {
            header.className = 'face';
        } else {
            header.className = 'back';
        }
        header.style.transform = 'rotateX(' + deg +  'deg)';
    }
    setInterval(rotateHeader, 20);
})();