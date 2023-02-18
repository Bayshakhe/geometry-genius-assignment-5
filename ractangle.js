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
        trAppendChild(ractangleValue);
    }


})