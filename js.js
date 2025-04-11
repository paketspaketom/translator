function convertText() {
    const text = document.getElementById('textInput').value.trim();
    const words = text.split(/\s+/);
    const convertedWords = [];

    words.forEach(word => {
      let newWord = word;

      const characters = Array.from(word); 
      if (characters.length > 0 && Math.random() < 0.9) {
        const firstChar = characters[0];
        newWord = `${firstChar}-${word.toLocaleLowerCase('ru-RU')}`; 
      }

      if (Math.random() < 0.7) {
        newWord += randomChoice(["...", ".."]);
      }

      if (Math.random() < 0.6) {
        newWord += randomChoice(["~", "~~"]);
      }

      convertedWords.push(newWord);
    });

    document.getElementById('textOutput').value = convertedWords.join(' ');
  }

  function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("textInput");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        convertText();
      }
    });
  });

  function copyToClipboard() {
const outputText = document.getElementById('textOutput');


navigator.clipboard.writeText(outputText.value)
  .then(() => {
    
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(() => {
      notification.classList.remove('show');
    }, 2000);
  })
  .catch(err => {
    console.error('Failed to copy: ', err);
  });
}