import { getData } from "../../utils/api";
import { render } from "../../utils/libs";
import { showUser } from "../../main";
import { header } from "../../Components/header";
import { transactions } from "../../Components/transactions";
import { checkAcces } from "../../utils/token";

checkAcces()
header()

const userId = localStorage.getItem("userId");
const transactionsContainer = document.querySelector('tbody')


getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => {
        console.error(error);
    });

getData(`transactions?userId=${userId}`)
    .then(res => render(res.data, transactionsContainer, transactions))
    .catch(error => console.error(error));