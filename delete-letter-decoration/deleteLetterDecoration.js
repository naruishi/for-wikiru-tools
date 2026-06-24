"use strict";

// src/domain/wikiru/wikiruToolkit.ts
function removeColor(article) {
  return article.replace(/&color\([^)]*\)\{([^}]*)\};/g, "$1");
}
function removeSizeFunc(article) {
  return article.replace(/&size\([^)]*\)\{([^}]*)\};/g, "");
}

// src/pages/utils/deleteLetterDecoration.ts
var inputText = document.getElementById("inputText");
if (!inputText) {
  throw new Error(`textarea with ID 'inputText' not found.`);
}
var outputText = document.getElementById("outputText");
if (!outputText) {
  throw new Error(`textarea with ID 'outputText' not found.`);
}
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("execute");
  if (button) {
    button.addEventListener("click", execute);
  }
});
function execute() {
  outputText.value = deleteLetterDecoration(inputText.value);
}
function deleteLetterDecoration(input) {
  let result = "";
  result = removeColor(input);
  result = removeSizeFunc(result);
  result = result.replace(
    /&tooltip\(([^\:]*)(?:\:[^,]+)(,[^)]+)?\)\{([^}]*)\};/g,
    "$1"
  );
  result = result.replace(/''([^']+)''/g, "$1");
  return result;
}
//# sourceMappingURL=deleteLetterDecoration.js.map