(function(){
    'use strict';
    var myBirthTime = new Date(1982, 11, 17, 12, 30);
    function updateParagraph(){
        var now = new Date();
        var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
        document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
    }
    setInterval(updateParagraph, 50);
})();
