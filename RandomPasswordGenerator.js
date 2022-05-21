let characters = []
for (let i = 32; i <127; i++) {
    characters.push(String.fromCharCode(i))}
const genBtn = document.getElementById("gen-btn")
const pass1El = document.getElementById("pass1-el")
const pass2El = document.getElementById("pass2-el")
const pass3El = document.getElementById("pass3-el")
const pass4El = document.getElementById("pass4-el")

genBtn.addEventListener("click", function generatePasswords() {
    const passwordLenght = document.getElementById("userInput").value;
    let value = ""
    pass1El.textContent = ""
    for (let i = 0; i < passwordLenght; i ++) { 
        let random = Math.floor(Math.random()*characters.length)
        value += characters[random]
    }
    pass1El.textContent = value
    
    value = ""
    pass2El.textContent = ""
    for (let i = 0; i < passwordLenght; i ++) {
        let random = Math.floor(Math.random()*characters.length)
        value += characters[random]
    }
    pass2El.textContent = value
    
    value = ""
    pass3El.textContent = ""
    for (let i = 0; i < passwordLenght; i ++) {
        let random = Math.floor(Math.random()*characters.length)
        value += characters[random]
    }
    pass3El.textContent = value
    
    value = ""
    pass4El.textContent = ""
    for (let i = 0; i < passwordLenght; i ++) {
        let random = Math.floor(Math.random()*characters.length)
        value += characters[random]
    }
    pass4El.textContent = value
})
