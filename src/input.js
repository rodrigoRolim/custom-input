import "./__input.scss" 

const template = () => {
  var template = document.createElement("template")
  let node = `
    <div class="container">
      <label for="custom-input" class="container__label">custom input</label>
      <input type="text" name="custom-input" id="custom-input" class="container__input" />
    </div>
  `
  node = node.trim()
  template.innerHTML = node
  return template.content.firstChild
}
const input = () => {
  const inputWrapper = document.getElementById("input")
  inputWrapper.appendChild(template())
}

input()