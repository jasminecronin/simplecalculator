function display(x) {
    let text = document.getElementById('display').innerHTML;
    if (text === "SYNTAX ERROR") {
        document.getElementById('display').innerHTML = "";
    }
    document.getElementById('display').innerHTML += x;
}

function myEvaluate() {
    let exp = document.getElementById('display').innerHTML;
    try {
        document.getElementById('display').innerHTML = eval(exp);
    } catch {
        document.getElementById('display').innerHTML = "SYNTAX ERROR";
    }
}

function clearEntry() {
    document.getElementById('display').innerHTML = "";
}