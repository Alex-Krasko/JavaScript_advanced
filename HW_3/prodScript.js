let data = [];
let blk = document.querySelector('.blk');
// let dat = [];

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let info = localStorage.getItem(key);

    data.push({ key: key, info: info });
}

// data.forEach(el => {
//     let temp = el.info.split(':')[0]
//     if (dat.length !== 0) {
//         dat.forEach(elem => {
//             if (elem.includes(temp)) {
//                 elem.push(el.info.split(':')[1])
//             }
//         });
//     }
//     else dat.push(el.info.split(':'));

//     console.log(dat);


// })

// console.log(data);

data.forEach(el => {
    let div = blk.appendChild(document.createElement('div'))
    let hEl = div.appendChild(document.createElement('h2'));
    let dat = el.info.split(',');

    for (i = 0; i < dat.length; i++) {
        let dvBlk = div.appendChild(document.createElement('div'));
        let pEl = dvBlk.appendChild(document.createElement('p'));
        let delPEl = dvBlk.appendChild(document.createElement('button'));
        pEl.textContent = dat[i];
        delPEl.textContent = "Удалить";

        dvBlk.style.visibility = 'hidden';
        dvBlk.setAttribute('id', 'rev');
        // console.log(dat[i]);
    }

    hEl.textContent = el.key;

});

console.log(data);

let hProd = document.querySelectorAll('h2');
hProd.forEach(el => {
    el.addEventListener('click', () => {
        // let p = el.parentElement.querySelectorAll('#info');
        let dvBlk = el.parentElement.querySelectorAll('#rev');
        if (dvBlk[0].style.visibility == 'visible') {
            dvBlk.forEach(el => {
                el.style.visibility = 'hidden ';
            });
            // btn.style.visibility = 'hidden';
        }
        else {
            dvBlk.forEach(el => {
                el.style.visibility = 'visible ';
            });
            // btn.style.visibility = 'visible';
        }

    })
});


let delReview = document.querySelectorAll('button');
delReview.forEach(el => {
    el.addEventListener('click', () => {
        let p = el.parentElement.querySelector('p');
        let h2 = el.parentElement.parentElement.querySelector('h2');
        let dvBlk = el.parentElement;

        data.forEach(elem => {
            // let dat = elem.key;
            let datInf = elem.info.split(',');

            if (elem.key == h2.textContent) {
                // localStorage.removeItem(elem.id)
                datInf.forEach(el => {
                    if (el == p.textContent) {
                        datInf = datInf.filter((el) => {
                            return el !== p.textContent
                        })

                    }
                    return true;
                });

            }
            if (datInf.length !== 0) {
                elem.info = datInf;
                localStorage.setItem(elem.key, datInf)
            }
            else localStorage.removeItem(elem.key);
        })
        // console.log(el.parentElement.parentNode);
        if (el.parentElement.hasChildNodes()) {
            dvBlk.remove();
        }

    })

})
