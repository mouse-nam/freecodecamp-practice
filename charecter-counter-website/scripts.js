function getOutputText(current_character) {
    const INITIAL_STRING = "Character Count: "
    const MAX_CHARECTER = 50
    const ENDING_STRING = "/" + MAX_CHARECTER
    return INITIAL_STRING + current_character + ENDING_STRING
}

// let textInputField = document.querySelector("#text-input")
let textInputField = document.querySelector("#text-input");
let charCoutP = document.querySelector("#char-count")
// console.log(textInputField)
textInputField.addEventListener("input", () => {
    console.log(textInputField.value.length);
    charCoutP.textContent = getOutputText(textInputField.value.length);
    if (textInputField.value.length == 50) {
        charCoutP.style.color = "red";
    } else if (textInputField.value.length >= 50) {
        textInputField.value = textInputField.value.substring(0, 50);
    }
})






