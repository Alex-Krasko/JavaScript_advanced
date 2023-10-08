let data = [];
let blk = document.querySelector('.blk');
let dat = [];



for (let i = 0; i < localStorage.length; i++) {
    id = i;
    let key = localStorage.key(i);
    let info = localStorage.getItem(key);

    data.push({ id: key, info: info });
}
console.log(data);

data.forEach(el => {
    let temp = el.info.split(':')[0]
    console.log(temp);
    if (!dat.includes(temp)) {
        dat.push(el.info.split(':'));
    }
    else {
        dat[dat.indexOf(el.info.split(':')[0])] = dat[dat.indexOf(el.info.split(':')[0])] + ',' + el.info.split(':')[1];
    }
    console.log(dat.includes(el.info.split(':')[0]));
    // console.log(dat);

})
console.log(dat);

dat.forEach(el => {
    // let dat = (el.info.split(':'));

    let div = blk.appendChild(document.createElement('div'))
    let hEl = div.appendChild(document.createElement('h2'));
    let pEl = div.appendChild(document.createElement('p'));
    let delPEl = div.appendChild(document.createElement('button'));
    delPEl.textContent = "Удалить";
    pEl.style.visibility = 'hidden';
    delPEl.style.visibility = 'hidden';
    hEl.textContent = el[0];
    pEl.textContent = el[1];

    // console.log(dat);
});



let hProd = document.querySelectorAll('h2');
hProd.forEach(el => {
    el.addEventListener('click', () => {
        let p = el.parentElement.querySelector('p');
        let btn = el.parentElement.querySelector('button');
        if (p.style.visibility == 'visible') {
            p.style.visibility = 'hidden ';
            btn.style.visibility = 'hidden';
        }
        else {
            p.style.visibility = 'visible ';
            btn.style.visibility = 'visible';
        }

    })
});


let delReview = document.querySelectorAll('button');
delReview.forEach(el => {
    el.addEventListener('click', () => {
        let p = el.parentElement.querySelector('p');
        let h = el.parentElement.querySelector('h2');
        let btn = el.parentElement.querySelector('button');
        data.forEach(elem => {
            let dat = (elem.info.split(':'));
            if (dat[1] == p.textContent) {
                localStorage.removeItem(elem.id)
            }
        })
        el.parentElement.removeChild(p);
        el.parentElement.removeChild(h);
        el.parentElement.removeChild(btn);
    })
})
