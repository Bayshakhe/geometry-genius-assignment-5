document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})

function getElementByInputField(id){
    const inputFieldId = document.getElementById(id);
    const inputFieldIdString = inputFieldId.value;
    const inputFieldIdValue = parseInt(inputFieldIdString);
    return inputFieldIdValue;
}

let number = 0;
function trAppendChild(element){
    number += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
            <td> ${number}. Triangle </td>
            <td> ${element}cm<sup>2</sup> </td>
            <td> <button class="btn-info rounded-xl p-3 text-white">Convert to m<sup>2</sup></button> </td>
        </tr>
    `
const calculationArea = document.getElementById('calculation-area');
calculationArea.appendChild(tr);
    
}





