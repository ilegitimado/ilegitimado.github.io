var textareaEl = document.getElementById("textarea");
var wordCounterEl = document.getElementById("word_count");

var getTotalWord = (element) => {
  var text = element.value;
  var totalWord = text.split(' ').length;

  return text === '' ? 0 : totalWord;
}

var setWordCounter = (element, value) => {
  element.textContent = value;
}

textareaEl.addEventListener('keyup', () => {
  let totalWord = getTotalWord(textareaEl);
  setWordCounter(wordCounterEl, totalWord);
});
