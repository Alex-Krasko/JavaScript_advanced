let musicCollection = [
    {
        title: "Название альбома_1",
        artist: "Исполнитель_1",
        year: "Год выпуска_1"
    },
    {
        title: "Название альбома_2",
        artist: "Исполнитель_2",
        year: "Год выпуска_2"
    },
    {
        title: "Название альбома_3",
        artist: "Исполнитель_3",
        year: "Год выпуска_3"
    },

]
musicCollection[Symbol.iterator] = () => {
    let current = 0;
    let last = musicCollection.length - 1;

    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: musicCollection[current++],
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
};

for (let music of musicCollection) {
    console.log(music.title + ' - ' + music.artist + ' (' + music.year + ')');
}

let cookers = new Map();

cookers.set("Пицца", 'Виктор');
cookers.set("Суши", 'Ольга');
cookers.set("Десерты", 'Дмитрий');

let dish = new Map();

dish.set("Маргарита", cookers.get("Пицца"));
dish.set("Пепперони", cookers.get("Пицца"));
dish.set("Филадельфия", cookers.get("Суши"));
dish.set("Калифорния", cookers.get("Суши"));
dish.set("Тирамису", cookers.get("Десерты"));
dish.set("Чизкейк", cookers.get("Десерты"));

let clients = {
    alex: "Алексей",
    maria: "Мария",
    irina: "Ирина"
}

let orders = new Map();

orders.set(Symbol(clients.alex), "Маргарита");
orders.set(Symbol(clients.alex), "Тирамису");
orders.set(Symbol(clients.maria), "Калифорния");
orders.set(Symbol(clients.maria), "Маргарита");
orders.set(Symbol(clients.irina), "Чизкейк");

console.log(orders);
