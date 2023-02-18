// document.getElementById('blog-btn').addEventListener('click', function(){
//     window.location.href = 'blog.html'
// })

// document.getElementById('geometry-btn').addEventListener('click', function(){
//     window.location.href = 'index.html'
// })

function getElementByInputField(id){
    const inputFieldId = document.getElementById(id);
    const inputFieldIdString = inputFieldId.value;
    const inputFieldIdValue = parseInt(inputFieldIdString);
    return inputFieldIdValue;
}


