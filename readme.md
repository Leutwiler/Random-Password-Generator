# Random Password Generator

<p align="center">
  <img src="https://github.com/Leutwiler/Random-Password-Generator/blob/main/Password%20Generator%20-%20App%20Pic.PNG?raw=true" alt="Random Password Generator"/>
</p>

In this repository you can find a random password generator. The user can input the desired number of characters for the output.

The main goal of this project is to provide a tool for people to generate safe passwords for many use cases.

This is my first Javascript, HTML and CSS project :)

## Base of our Javascript code 👨‍💻

The following JavaScript code represents the base of all the project. The available characters are pushed to the array based on the keyboard characters.

The code results in 4 different random passwords, so we're using document.getElementById to interact with the HTML file.

We have a funcion that allows us to generate the four random passwords with only one button click! But first, the user needs to type how many characters he/she wants in the input field. After that, by pressing the button, the passwords are going to be generated for the user.

```
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
```

## The HTML File 📃

This HTML file is pretty simple, it only covers the necessary for the tool to work and for Javascript to interact with the DOM. You can see the input and button lines, which are the most important ones, as well as the paragraphs which show the new passwords!

It is also linked to a CSS file.

```
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1 id="title-el"> Generate a random password </h1>
        <input id="userInput" type="number" placeholder="Number of characters"></input>
        <button id="gen-btn"> Generate passwords </button>
        <p id="pass1-el"></p>
        <p id="pass2-el"></p>
        <p id="pass3-el"></p>
        <p id="pass4-el"></p>
        <script src="RandomPasswordGenerator.js"></script>
    </body>
</html>
```

## Thanks 😄

Thanks for reading my code! This is my first Javascript project! I'm happy because I'm improving my coding skills every day and now I can code in Javascript!

If you would like to talk to me, feel free to text me on Twitter or LinkedIn.
