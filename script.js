let string = ""
let submit = document.getElementById('Submit')
let answer = document.getElementById('answer')
function check() {
    let motherHeight = Number(document.getElementById('inputField1').value)
    let fatherHeight = Number(document.getElementById('inputField2').value)
    string = (motherHeight + fatherHeight) / 2
    let gender = document.getElementById('gender')
    console.log(gender.value)
    if (gender.value == "male") {
        string = string + 5
    } else {
        string = string - 5
    }
    
    answer.textContent = "Oh Great Your Height will be " + string + " inches"
    console.log(string)
}