document.getElementById('rectangle-calculate').addEventListener('click', function(){
    let widthInputValue = getElementByInputField('ractangle-width-input');
    let lengthInputValue = getElementByInputField('ractangle-length-input');
    

    if(isNaN(widthInputValue) === true || isNaN(lengthInputValue) === true || widthInputValue <= 0 || lengthInputValue <= 0) {
        alert('Please input a valid number');
        widthInputValue = '';
        lengthInputValue = '';
    }
    else{
        const ractangleValue = widthInputValue * lengthInputValue;
        number += 1;
        const tr = document.createElement('tr');
        tr.innerHTML = `
           <tr>
                <td> ${number}. Ractangle </td>
                <td> ${ractangleValue}cm<sup>2</sup> </td>
                <td> <button class="btn-info rounded-xl p-3 text-white">Convert to m<sup>2</sup></button> </td>
            </tr>
        `
        const calculationArea = document.getElementById('calculation-area');
        calculationArea.appendChild(tr);
    }


})