// this event for go to another file
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})

// for get input value
function getElementByInputField(id){
    const inputFieldId = document.getElementById(id);
    const inputFieldIdString = inputFieldId.value;
    const inputFieldIdValue = parseFloat(inputFieldIdString).toFixed(2);
    return inputFieldIdValue;
}

// create a table row and append child
let number = 0;
function trAppendChild(element, name){
    number += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
            <td> ${number}. ${name} </td>
            <td> ${element}cm<sup>2</sup> </td>
            <td> <button class="btn-info rounded-xl p-3 text-white">Convert to m<sup>2</sup></button> </td>
        </tr>
    `
const calculationArea = document.getElementById('calculation-area');
calculationArea.appendChild(tr);
}

// for generate random color
const allCards = document.getElementsByClassName('card');
for(const card of allCards){
    card.addEventListener('mouseover', function(){
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        card.style.backgroundColor = "#" + randomColor;
    })
}
for(const card of allCards){
    card.addEventListener('mouseout', function(){
        card.style.backgroundColor = 'white';
    })
}
