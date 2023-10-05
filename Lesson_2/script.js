class BankAccount {
    #balance = 0;
    constructor(balance) {
        if (balance < 0) throw new Error("Введено некорректное значение")
        this.#balance = balance;
    }
    get balance() {
        return this.#balance;
    }
    deposit(amount) {
        if (amount > 0) this.#balance += amount;
        else throw new Error("Введено некорректное значение");
        return this.#balance;
    }
    withDraw(amount) {
        if (amount > 0) {
            if (this.#balance >= amount) {
                this.#balance -= amount;
            } else throw new Error("Недостаточно средств");
        } else throw new Error("Введена неверная сумма");
        return this.#balance;
    }
}

// let account = new BankAccount(500);
// console.log(account.balance);

// account.deposit(200);
// console.log(account.balance);

// account.withDraw(600);
// account.withDraw(100);
// account.deposit(200);
// console.log(account.balance);

class User {
    _name;
    _surname;
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }
}

class RegularUser extends User {

}

class PremiumUser extends User {
    premium = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
}

function getAccountInfo(user) {
    // Премиум аккаунт действителен до такой-то даты или информация отсутствует
    if (user instanceof User) {
        if (user.premium != null) {
            console.log("Премиум-аккаунт действителен до: " + user.premium);
        }
        else console.log("Пользователь не имеет премиум-аккаунта");
    }
    else console.log("Такого пользователя не существует");
}

// let user1 = new User();
// getAccountInfo(user1);
// let user2 = new PremiumUser();
// getAccountInfo(user2);

// let input = document.querySelector("#input");
// console.log(input);
// let output = document.querySelector("#output");
// console.log(output);
// output.textContent = "абракадабра";
// button.onclick = function () {
//     try {
//         let inputNum = parseInt(input);
//         output.textContent = inputNum;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
