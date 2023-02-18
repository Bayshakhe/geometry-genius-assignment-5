document.getElementById('triangle-calculate').addEventListener('click', function(){
    const baseInputValue = getElementByInputField('triangle-base-input');
    const heightInputValue = getElementByInputField('triangle-height-input');
    const triangleValue = 0.5 * baseInputValue * heightInputValue;

    if(isNaN(baseInputValue) === true || isNaN(heightInputValue) === true || baseInputValue <= 0 || heightInputValue <= 0) {
        alert('Please input a valid number');
        baseInputValue = '';
        heightInputValue = '';
    }

    number += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
       <tr>
            <td> ${number}. Triangle </td>
            <td> ${triangleValue}cm<sup>2</sup> </td>
            <td> <button class="btn-info rounded-xl p-3 text-white">Convert to m<sup>2</sup></button> </td>
        </tr>
    `
    const calculationArea = document.getElementById('calculation-area');
    calculationArea.appendChild(tr);
})