function formSubmit() {
    var username = document.getElementsByClassName("uname-input")[0].value;
    var password = document.getElementsByClassName("psw-input")[0].value;
    var inputArray = [username, password];
    var inputLabelArray = ["Username", "Password"];

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] == "") {
            alert(inputLabelArray[i].toString() + " field is empty.");
            return;
        }
    }
    login(inputArray);
}
function sendHome() {
    alert("Logged In");
    setTimeout(function() { window.location = "index.html" }, 1000);
}
function login(inputArray) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {

            var response = JSON.parse(xhr.response);
            console.log(response);

            if (response.length == 1) {
                sendHome();
                return;
            }
            alert('Wrong username or password');

        } else {
            alert('The request failed!');
        }
    };
    xhr.open('GET', 'https://jsonplaceholder.ir/users?username=' + inputArray[0] + "&password=" + inputArray[1]);
    xhr.send();
}