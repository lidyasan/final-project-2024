document.querySelector('input').addEventListener("click", function () {
    if (this.checked) {
        document.querySelector('.container').style.backgroundColor = "#231f20";
        document.querySelector('header').style.backgroundColor = "#231f20";
        document.querySelector('body').style.backgroundColor = "#231f20";
        document.querySelector('body').style.backgroundColor = "#231f20";
        document.querySelector('.container').style.backgroundImage = "url('../images/Sleepy_Me.png')";

    }
    else {
        document.querySelector('.container').style.backgroundColor = "white";
        document.querySelector('header').style.backgroundColor = "#9b9e05";
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('.container').style.backgroundImage = "url('../images/Awake_Me.png')";

    }
})
