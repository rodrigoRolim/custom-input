import "./__input.scss" 
var obj = {}
obj.message = ''
const template = () => {
  var template = document.createElement("template")
  let node = `
    <div class="container">
      <label for="custom-input" class="container__label" id="label">custom input</label>
      <input value="${obj.message}" type="text" name="custom-input" id="custom-input" class="container__input" />
      <p id="message"></p>  
    </div>
  `
  node = node.trim()
  template.innerHTML = node
  return template.content.firstChild
}
const towWayDataBind = (inputEl) => {
  inputEl.addEventListener("input", (e) => {
    obj.message = e.target.value
    let pEl = document.getElementById("message")
    pEl.innerHTML = obj.message
  })
}
const inputUnfocus = (inputEl) => {
  
  inputEl.addEventListener("focus", (e) => {
    let labelEl = document.getElementById("label")
    labelEl.classList.remove('container__label--down')
    labelEl.classList.add('container__label--up')
  })
}
const inputFocus = (inputEl) => {
  inputEl.addEventListener("blur", (e) => {
    let labelEl = document.getElementById("label")
    if (!e.target.value) {
      labelEl.classList.remove('container__label--up')
      labelEl.classList.add('container__labe--down')
    }
   
  })
}
const inputActions = () => {
  let inputEl = document.getElementById("custom-input")
  inputFocus(inputEl)
  inputUnfocus(inputEl)
  towWayDataBind(inputEl)
}
const input = () => {
  const inputWrapper = document.getElementById("input")
  inputWrapper.appendChild(template())
  inputActions()
}

input()