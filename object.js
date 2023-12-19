let game = {
    startTime : null,
    stopTime : null,
    seconds : null,
    displayArea : document.getElementById('display-area'),
    start : function () {
      game.displayArea.innerText = '計測中';
      game.startTime = Date.now();
    },
    stop: function () {
      document.body.removeEventListener(
        'keydown',
        game.stop
      );
  
      document.body.addEventListener(
        'keydown',
        game.retry
      );
  
      game.stopTime = Date.now();
      game.seconds = (game.stopTime - game.startTime) / 1000;
  
      if (9.5 <= game.seconds && game.seconds <= 10.5) {
        game.displayArea.innerText = game.seconds + '秒でした。すごい！';
      } else {
        game.displayArea.innerText = game.seconds + '秒でした。残念。';
      }
    },
    retry: function () {
      if (confirm('リトライをしますか')){
        game.start();
        document.body.removeEventListener(
          'keydown',
          game.retry
        );
        document.body.addEventListener(
          'keydown',
          game.stop
        );
      }
    }
  };
  
  if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
    game.start();
    document.body.addEventListener(
      'keydown',
      game.stop
    );
  }