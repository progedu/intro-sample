// 見本用に、クリスマスを常に次のクリスマスとする処理

let nextChristmas = new Date('2023-12-25 00:00');

while (nextChristmas < new Date()) {
    nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
}

function updateParagraph() {
  let now = new Date();
  let seconds = (nextChristmas.getTime() - now.getTime()) / 1000;
  document.getElementById('next-christmas').innerText =
    '次のクリスマスまで後' + seconds + '秒。';
}
setInterval(updateParagraph, 50);