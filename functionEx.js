(function(){
    'use strict';
    var myBirthTime = new Date(1982, 12, 17, 12, 30);
    function updateParagraph(){
        var now = new Date();
        var days = (now.getTime() - myBirthTime.getTime()) / (1000 * 24 * 60 * 60);
        document.getElementById('birth-time').innerText = '生まれてから' + days + '日経過。';
    }
    setInterval(updateParagraph, 50);
})(); 