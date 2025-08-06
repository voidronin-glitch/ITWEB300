// 1. Count occurrences of search string
function FindCount(target, searchstr) {
   const regex = new RegExp(searchstr, "gi");
   const matches = target.match(regex);
   return matches ? matches.length : 0;
}

// 2. Replace all occurrences of a word
function FindReplace(target, find, replacement) {
   const regex = new RegExp(find, "gi");
   return target.replace(regex, replacement);
}

// 3. Replace double repeated words
function ReplaceDouble(target, replacement = null) {
   return target.replace(/\b(\w+)\s+\1\b/gi, (match, word) => {
      return replacement ? replacement : word;
   });
}

// 4. Capitalize the first letter of each sentence
function StartCap(target) {
   return target.replace(/(^|[.!?]\s+)([a-z])/g, function (match, prefix, char) {
      return prefix + char.toUpperCase();
   });
}

// 5. Highlight a keyword with <mark> tag
function HighlightKeywords(target, keyword) {
   const regex = new RegExp(`\\b${keyword}\\b`, "gi");
   return target.replace(regex, (match) => `<mark>${match}</mark>`);
}
