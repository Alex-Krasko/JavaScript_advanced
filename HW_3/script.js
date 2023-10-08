let btn = document.querySelector('#btn');
let prodName = document.querySelector('#prodName');
let prodReview = document.querySelector('#prodReview');
let data = [];
// let id = 0;

for (let i = 0; i < localStorage.length; i++) {
    // id = i;
    let key = localStorage.key(i);
    let info = localStorage.getItem(key);

    data.push({ key: key, info: info });

    // console.log(data[id]);
}

// console.log(data);

// btn.onclick = () => {
//     if (prodName.value.length != 0 && prodReview.value.length != 0) {

//         localStorage.setItem(++id, (`${prodName.value}:${prodReview.value}`));
//     }
//     else alert("Поля ввода не могут быть пусты");
//     prodName.value = '';
//     prodReview.value = '';
// }
// console.log(data.length);

btn.onclick = () => {
    if (prodName.value.length != 0 && prodReview.value.length != 0) {
        let key = prodName.value;
        let value = prodReview.value;

        if (data.length === 0) {
            data.push({ key: key, info: value });
            localStorage.setItem(key, value);
        }
        else {
            data.forEach(el => {
                if (el.key === key) {
                    el.info = el.info + ',' + value;
                    value = el.info;
                    // data.push(key, value);
                    // localStorage.setItem(key, value);
                }
                else {
                    value = value;
                    // data.push(key, value);
                    // localStorage.setItem(key, value);
                }
                // localStorage.setItem(key, value);
                // data.push(key, value);
            });
            data.push({ key: key, info: value });
            localStorage.setItem(key, value);
        }
        // console.log(data);
        // console.log(data.length);

    }
    else alert("Поля ввода не могут быть пусты");
    prodName.value = '';
    prodReview.value = '';
}