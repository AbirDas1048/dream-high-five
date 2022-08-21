const elements = document.getElementsByClassName("btn");
const selectedlists = document.getElementById('selected-players');

for (const element of elements) {
    element.addEventListener('click', function (event) {
        const attribute = event.target.parentNode.parentNode.childNodes[1].innerText;


        const li = document.createElement('li');
        li.innerText = attribute;
        const totalLi = document.getElementsByTagName("li");
        console.log(totalLi.length);
        if (totalLi.length < 5) {
            selectedlists.append(li);
            event.target.setAttribute('disabled', '');
        } else {
            alert("Not More Then 5");
        }
    });
}





