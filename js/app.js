// create digital clock


const hoursSpan = document.getElementById('hoursSpan');
const minutesSpan = document.getElementById('minutesSpan');
const secondsSpan = document.getElementById('secondsSpan');
const ampm = document.getElementById('ampm');

const displayDate = document.getElementById('date');
const displayDay = document.getElementById('day');


setInterval(function(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dpDate = date.getDate();
    let day = date.getDay();

    let hoursCal = '';

    if(hours > 0 && hours <= 12){
        hoursCal = hours;
    }else{
        hoursCal = (hours - 12);
    }

    hoursSpan.innerHTML = `${timeZone(hoursCal)}:`;
    minutesSpan.innerHTML = `${timeZone(minutes)}:`;
    secondsSpan.innerHTML = `${timeZone(seconds)}`;
    ampm.innerHTML = `${(hours > 12) ? 'PM' : 'AM'}`;

    displayDate.innerHTML = `${timeZone(dpDate)},`;
    displayDay.innerHTML = `${dayName(day)}`;

}, 1000);


// counter with loader


const counterVal = document.getElementById('counterVal');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const decrementVal = document.querySelector('#decrementVal');
const complete = document.querySelector('#complete');

let countval;
let counting;

start.addEventListener('click', function(){

    countval = counterVal.value;

    counting = setInterval(function(){

        decrementVal.innerHTML = `${countval}`;
        let progress = loaderFunc(counterVal.value, countval);

        complete.style.width = `${progress}%`;

        if(progress > 50 && progress <= 100){
            complete.style.background = 'rgb(0, 221, 0)';
        }else if(progress > 20 && progress <= 50){
            complete.style.background = 'orange';
        }else if(progress > 0 && progress <= 20){
            complete.style.background = 'red';
        }

        if(countval == 0){
            clearInterval(counting);
        }

        countval--;

    }, 1000);


});


stop.addEventListener('click', function(){

    clearInterval(counting);

});


// Basic TO-DO App

const todoVal = document.querySelector('#todoVal');
const addVal = document.querySelector('#addVal');
const clearVal = document.querySelector('#clearVal');
const listWrapper = document.querySelector('#listWrappers');

let createList;

addVal.addEventListener('click', function(){

    createList = document.createElement('li');
    createList.className = 'list-group-item';
    createList.innerText = todoVal.value;
    listWrapper.appendChild(createList);

    todoVal.value = '';

});


clearVal.addEventListener('click', function(){

    listWrapper.innerHTML = '';

});



// Subject Marks app with notification color


const user = document.querySelector('#user');
const className = document.querySelector('#className');
const bangla = document.querySelector('#bangla');
const english = document.querySelector('#english');
const math = document.querySelector('#math');
const science = document.querySelector('#science');
const society = document.querySelector('#society');
const religion = document.querySelector('#religion');

const getResult = document.querySelector('#getResult');

const notification = document.querySelector('#notification');
const body = document.querySelector('#body');

let leader = new MainFunc();



let allow = /^[A-Za-z\s]{1,20}$/;

user.addEventListener('keyup', () => {

    if(allow.test(user.value) == true){
        user.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        user.style.border = '2px solid red';
    }

});


let allow2 = /^[A-Za-z\s0-9]{1,15}$/;

className.addEventListener('keyup', () => {

    if(allow2.test(className.value) == true){
        className.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        className.style.border = '2px solid red';
    }

});


let allow3 = /^[0-9]{1,2}$/;

bangla.addEventListener('keyup', () => {

    if(allow3.test(bangla.value) == true){
        bangla.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        bangla.style.border = '2px solid red';
    }

});


let allow4 = /^[0-9]{1,2}$/;

english.addEventListener('keyup', () => {

    if(allow4.test(english.value) == true){
        english.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        english.style.border = '2px solid red';
    }

});

let allow5 = /^[0-9]{1,2}$/;

math.addEventListener('keyup', () => {

    if(allow5.test(math.value) == true){
        math.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        math.style.border = '2px solid red';
    }

});

let allow6 = /^[0-9]{1,2}$/;

science.addEventListener('keyup', () => {

    if(allow6.test(science.value) == true){
        science.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        science.style.border = '2px solid red';
    }

});

let allow7 = /^[0-9]{1,2}$/;

society.addEventListener('keyup', () => {

    if(allow7.test(society.value) == true){
        society.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        society.style.border = '2px solid red';
    }

});

let allow8 = /^[0-9]{1,2}$/;

religion.addEventListener('keyup', () => {

    if(allow8.test(religion.value) == true){
        religion.style.border = '2px solid rgb(0, 255, 0)';
    }else{
        religion.style.border = '2px solid red';
    }

});



getResult.addEventListener('click', () => {
  
    if(user.value == '' || className.value == '' || bangla.value == '' || english.value == '' || math.value == '' || science.value == '' || society.value == '' || religion.value == ''){

        notification.innerHTML = `<h5 class="alert alert-danger w-100 mt-3">All fields are required!!! Please Fill-up Form.</h5>`;

        setTimeout(function(){

            notification.innerHTML = '';

        }, 5000);

    }else if(allow.test(user.value) == false || allow2.test(className.value) == false || allow3.test(bangla.value) == false || allow4.test(english.value) == false || allow5.test(math.value) == false || allow6.test(science.value) == false || allow7.test(society.value) == false || allow8.test(religion.value) == false){

        notification.innerHTML = `<h5 class="alert alert-danger w-100 mt-3">Please input valid number!!!</h5>`;

        setTimeout(function(){

            notification.innerHTML = '';

        }, 5000);

    }else{

        body.innerHTML = `

            <tr>
                <td rowspan="7">${user.value}</td>
                <td rowspan="7">${className.value}</td>
                <td>Bangla</td>
                <td>${bangla.value}</td>
                <td>${leader.gpa(bangla.value)}</td>
                <td>${leader.grade(bangla.value)}</td>
            </tr>

            <tr>
                <td>English</td>
                <td>${english.value}</td>
                <td>${leader.gpa(english.value)}</td>
                <td>${leader.grade(english.value)}</td>
            </tr>

            <tr>
                <td>Math</td>
                <td>${math.value}</td>
                <td>${leader.gpa(math.value)}</td>
                <td>${leader.grade(math.value)}</td>
            </tr>

            <tr>
                <td>Science</td>
                <td>${science.value}</td>
                <td>${leader.gpa(science.value)}</td>
                <td>${leader.grade(science.value)}</td>
            </tr>

            <tr>
                <td>Society</td>
                <td>${society.value}</td>
                <td>${leader.gpa(society.value)}</td>
                <td>${leader.grade(society.value)}</td>
            </tr>

            <tr>
                <td>Religion</td>
                <td>${religion.value}</td>
                <td>${leader.gpa(religion.value)}</td>
                <td>${leader.grade(religion.value)}</td>
            </tr>
        `;

        notification.innerHTML = `${leader.cgpa(leader.gpa(bangla.value), leader.gpa(english.value), leader.gpa(math.value), leader.gpa(science.value), leader.gpa(society.value), leader.gpa(religion.value))}`;


    }
  


    user.value = '';
    className.value = '';
    bangla.value = '';
    english.value = '';
    math.value = '';
    science.value = '';
    society.value = '';
    religion.value = '';

  
});



