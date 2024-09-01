let inputSlider = document.getElementById("inputSlider")
let SliderValue = document.getElementById("SliderValue")
let passBox = document.getElementById("passBox")
let lowercase = document.getElementById("lowercase")
let uppercase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let generateBtn = document.getElementById("generateBtn")
let copyIcon = document.getElementById("copyIcon")

SliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    SliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols = "~!@#$%^&*";

function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars: "";
    allChars += uppercase.checked ? upperChars: "";
    allChars += numbers.checked ? allnumbers: "";
    allChars += symbols.checked ? allsymbols: "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++ ;
    }
    return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value!=0 || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerText = "content_copy";
            copyIcon.title = "";
        },3000)
    }
});