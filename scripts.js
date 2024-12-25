function generateNumber() {

    const first = Math.ceil(document.querySelector(".input-first").value)
    const second = Math.floor(document.querySelector(".input-second").value)

    const result = Math.floor(Math.random() * (first - second + 1)) + first;
    

    alert(result)
    

}

