let selector1 = document.querySelector('#table-color');
let selector2 = document.querySelector('#chair-material');

let btn1 = document.querySelector('#save-btn');
let btn2 = document.querySelector('#load-btn');
let btn3 = document.querySelector('#clear-btn');

btn1.onclick = () => {
    let selTable = selector1.value;
    let selChair = selector2.value;
    console.log(selTable);
    console.log(selChair);
    document.cookie = "table" + '=' + encodeURIComponent(selTable);
    document.cookie = "chair" + '=' + encodeURIComponent(selChair);

}

btn2.onclick = () => {
    let cookies = document.cookie.split(/;/);
    for (let i = 0; i < cookies.length; i++) {
        console.log(cookies[i]);
        if (cookies[i].split('=')[0] === "table") {
            selector1.value = cookies[i].split('=')[1];
        }
        if (cookies[i].split('=')[0] === " chair") {
            selector2.value = cookies[i].split('=')[1];
        }
    }
}

btn3.onclick = () => {
    var cookies = document.cookie.split(/;/);
    for (var i = 0, len = cookies.length; i < len; i++) {
        var cookie = cookies[i].split(/=/);
        document.cookie = cookie[0] + "=;max-age=-1";
    }
}