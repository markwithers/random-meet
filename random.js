function paste(text) {
  document.querySelectorAll('button[data-panel-id]')[2].click();
  setTimeout(function() {
    document.querySelector('textarea').value = text;
    var ke = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      keyCode: 13,
    });
    document.querySelector('textarea').dispatchEvent(ke);
  }, 500);
}

document.querySelectorAll('button[data-panel-id]')[1].click();

setTimeout(function() {
  var res = [
    ...new Set([
      ...new Set(
        Array.from(document.querySelectorAll('div[data-self-name]')).map(node =>
          node.innerText.trim(),
        ),
      ),
      document
        .querySelectorAll('div[data-participant-id]')[0]
        .innerText.split(/\r?\n/)[0]
        .trim(),
    ]),
  ]
    .filter(x => x != 'You')
    .map(a => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .join('\n');

  paste(res);
}, 500);
