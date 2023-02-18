document.getElementById('triangle-calculate').addEventListener('click', function(){
    const baseInputValue = getElementByInputField('triangle-base-input');
    const heightInputValue = getElementByInputField('triangle-height-input');
    

    if(isNaN(baseInputValue) === true || isNaN(heightInputValue) === true || baseInputValue <= 0 || heightInputValue <= 0) {
        alert('Please input a valid number');
        document.getElementById('triangle-base-input').value = '';
        document.getElementById('triangle-height-input').value = '';
        
    }
    else{
        const triangleValue = 0.5 * baseInputValue * heightInputValue;
        trAppendChild(triangleValue);
    }
})