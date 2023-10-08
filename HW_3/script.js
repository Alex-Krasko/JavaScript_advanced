let btn = document.querySelector('#btn');
let prodName = document.querySelector('#prodName');
let prodReview = document.querySelector('#prodReview');
let data = [];
let id = 0;

for (let i = 0; i < localStorage.length; i++) {
    id = i;
    let key = localStorage.key(i);
    let info = localStorage.getItem(key);

    data.push({ id: key, info: info });

    // console.log(data[id]);
}

btn.onclick = () => {
    if (prodName.value.length != 0 && prodReview.value.length != 0) {

        localStorage.setItem(++id, (`${prodName.value}:${prodReview.value}`));
    }
    else alert("Поля ввода не могут быть пусты");
    prodName.value = '';
    prodReview.value = '';
}