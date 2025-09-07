const text_input = document.getElementById("text-input");
const check_btn = document.getElementById("check-btn");
const result = document.getElementById("result");


check_btn.addEventListener("click", () => {
  const text = text_input.value;
  const cleaned = text.replace(/[\W_]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  if(text == "") {
    alert("Please input a value");
  } else if(cleaned == reversed) {
    result.textContent = `${text} is a palindrome`;
  } else {
    result.textContent = `${text} is not a palindrome`;
  }
})