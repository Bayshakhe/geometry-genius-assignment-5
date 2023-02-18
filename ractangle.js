document.getElementById('rectangle-calculate').addEventListener('click', function(){
    let widthInputValue = getElementByInputField('ractangle-width-input');
    let lengthInputValue = getElementByInputField('ractangle-length-input');
    

    if(isNaN(widthInputValue) === true || isNaN(lengthInputValue) === true || widthInputValue <= 0 || lengthInputValue <= 0) {
        alert('Please input a valid number');
        document.getElementById('ractangle-width-input').value = '';
        document.getElementById('ractangle-length-input').value = '';
    }
    else{
        const ractangleValue = widthInputValue * lengthInputValue;
        trAppendChild(ractangleValue, 'Ractangle');
    }
})