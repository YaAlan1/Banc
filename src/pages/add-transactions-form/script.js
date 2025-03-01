import { postData } from "../../utils/api";

c
const form = document.forms.transactionsForm;
let userId = localStorage.getItem("userId")

form.onsubmit = (e) => {
    e.preventDefault();

    const fn = new FormData(form);
    const wallet = fn.get('wallet')
    const sum = fn.get('sum');
    const category = fn.get('category');

    const transactionsData = {
            description: category,
            sum: sum,
            userId: userId,
            wallet: {
              name: wallet
            },
          createdAt: "2025-03-1"  
    }

    postData("transactions", transactionsData)
        .then(res => {
            alert("Транзакция добавлена!")
            window.location.href = "src/pages/transactions/index.html"
        })
        .catch(error => {
            console.error(error);
        });
};

