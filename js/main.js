function amountInFloat(amountId, type) {
    let amountString;
    if (type === 'value') {
        amountString = document.getElementById(amountId).value;
    } else if (type === 'text') {
        amountString = document.getElementById(amountId).innerText;
    }

    if (amountString === '' || isNaN(amountString)) {
        return 'NaN';
    } else {
        return parseFloat(amountString);
    }
}

function getLengthOfLi() {
    return document.getElementsByTagName("li").length;
}

const elements = document.getElementsByClassName("select-player");
const selectedlists = document.getElementById('selected-players');

for (const element of elements) {
    element.addEventListener('click', function (event) {
        const attribute = event.target.parentNode.parentNode.childNodes[1].innerText;
        if (getLengthOfLi() < 5) {
            const li = document.createElement('li');
            li.innerText = attribute;
            selectedlists.append(li);
            event.target.setAttribute('disabled', '');
        } else {
            alert("Not More Then 5");
        }
    });
}

document.getElementById('calculate').addEventListener('click', function () {
    const playerBudget = amountInFloat('player-budget', 'value');

    if (playerBudget === 'NaN') {
        alert('Not a valid input');
    } else {
        const lengthOfLi = getLengthOfLi();
        if (lengthOfLi === 0) {
            alert('No player selected');
        } else {
            const totalPlayerExpenses = playerBudget * lengthOfLi;
            document.getElementById('player-expenses').innerText = totalPlayerExpenses;
        }

    }
});

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = amountInFloat('player-expenses', 'text');
    const managerBudget = amountInFloat('manager-budget', 'value');
    const coachBudget = amountInFloat('coach-budget', 'value');

    if (playerExpenses !== 'NaN' && managerBudget !== 'NaN' && coachBudget !== 'NaN') {
        const totalExpenses = playerExpenses + managerBudget + coachBudget;
        document.getElementById('total-expenses').innerText = totalExpenses;
    } else {
        alert('Not a valid input');
    }

});





