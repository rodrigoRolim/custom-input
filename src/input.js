import "./__input.scss" 

const template = () => {
  var template = document.createElement("template")
  let node = `
    <div class="container">
      <label for="custom-input" class="container__label" id="label">custom input</label>
      <input type="text" name="custom-input" id="custom-input" class="container__input" />
    </div>
  `
  node = node.trim()
  template.innerHTML = node
  return template.content.firstChild
}
const inputBehavior = () => {
  
  let inputEl = document.getElementById("custom-input")
  inputEl.addEventListener("focus", (e) => {
    let labelEl = document.getElementById("label")
    labelEl.style.top = "-8px"
  })
  inputEl.addEventListener("blur", (e) => {
    let labelEl = document.getElementById("label")
    if (!e.target.value) {
      labelEl.style.top = "10px"
    }
   
  })
}
const input = () => {
  const inputWrapper = document.getElementById("input")
  inputWrapper.appendChild(template())
  inputBehavior()
}

input()