let news = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },];

let btn = document.querySelector('#btn');

// let news = [];  // Для проверки выброса ошибки (новости небыли получены)

let fetchNews = new Promise((resolve, reject) => {
    setTimeout(() => {
        news.length !== 0 ? resolve(news) : reject("Ошибка получения данных");
    }, 2000);
})

btn.onclick = () => {
    fetchNews.then((result) => {
        let blk = document.querySelector("#box");
        for (let pcNews of result) {
            let newBlk = blk.appendChild(document.createElement('p'));
            newBlk.textContent = pcNews.title + ' - ' + pcNews.content;
        }
    }, (error) => {
        console.log(error);
        alert(error);
    })
}