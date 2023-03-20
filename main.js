
var img = document.getElementById('myImage');
let currentImgIdx = 1;
const images = [ 
    'https://tse3.mm.bing.net/th?id=OIP.TCMrzNxz6ECPNkEghmF69gHaHa&pid=Api&P=0',
    'https://tse2.mm.bing.net/th?id=OIP.bWuA0yQvwOZ8l4R637pqvgHaE8&pid=Api&P=0',
    'https://tse2.mm.bing.net/th?id=OIP.umK9vbVSbYZWh7Sd6b7FBAHaIl&pid=Api&P=0',
    'https://tse2.mm.bing.net/th?id=OIP.edAXEiqC1c7ZwDnaHis4qgHaHa&pid=Api&P=0',
    'https://tse4.mm.bing.net/th?id=OIP.NajGHlvkr35v4WWbZbA5EgHaHa&pid=Api&P=0',
]; 

function changeImage(){
    let inputVal = document.getElementById("inputId").value;
    if(currentImgIdx >= images.length){
        currentImgIdx = 0;
    }
    img.src = images[currentImgIdx];
    currentImgIdx++;
    document.getElementById("inputId").value = " ";
    document.getElementById("heading").innerHTML= "<h3>" + inputVal + "</h3>";
}
