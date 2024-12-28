function generateNumber() {

    const first = Math.ceil(document.querySelector(".input-first").value)
    const second = Math.floor(document.querySelector(".input-second").value)

    const result = Math.floor(Math.random() * (second - first + 1)) + first;
    
    console.log(result)
    alert(result)
    

}

