// Counter with Loader


let loaderBtn = document.getElementById('loader');
let loaderComplete = document.getElementById('loaderComplete');
let counter = document.getElementById('counter');
let count = 0;


setInterval(function(){

    if(count <= 100){
        counter.innerHTML = count;
        loaderComplete.style.width = `${count}%`;
        count++;
    }

}, 30);


