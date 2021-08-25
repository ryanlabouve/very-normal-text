<script lang="ts">
let veryNormalText;
let veryNormalTextRaw='';

let charMap = {
  "a": ["a"],
  "b": ["b"],
  "c": ["c"],
  "d": ["d"],
  "e": ["e"],
  "f": ["f"],
  "g": ["g"],
  "h": ["h"],
  "i": ["i"],
  "j": ["j"],
  "k": ["k"],
  "l": ["l"],
  "m": ["m"],
  "n": ["n"],
  "o": ["o"],
  "p": ["p"],
  "q": ["q"],
  "r": ["r"],
  "s": ["s"],
  "t": ["t"],
  "u": ["u"],
  "v": ["v"],
  "w": ["w"],
  "x": ["x"],
  "y": ["y"],
  "z": ["z"],
  " ": [" "]
}

function transformNormalText(text) {
  if (text == "") {
    return;
  }

  return text
    .split('')
    .map((c) => {
      let possibleCharacters = charMap[c];
      return possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    })
    .join('');
}

$: {
  console.log("[reload]")
  veryNormalText = transformNormalText(veryNormalTextRaw);
}
</script>

<input placeholder="Input some very normal text" bind:value={veryNormalTextRaw} />

{veryNormalText}