const time = document.querySelector('.time')
const greating = document.querySelector('.greating')
const name = document.querySelector('.name')
const focus = document.querySelector('.focus')

const showTime = () => {
    let today = new Date()

    let hours = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()

    const amPm = hours >= 12 ? 'PM' : 'AM'


    time.innerHTML = `${hours}<span>:</span>${addZero(minute)}<span>:</span>${addZero(second)} ${amPm}`    

    setTimeout(showTime, 1000)
}

const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}

const setBcg = () => {
    let hour = new Date().getHours();

    const saw_All_Img = (url) => {

        setInterval(() => {
        for (let i = 0; i<=20; i++) {

        }
    })

    }


    if(hour >5 && hour < 12) {
        let img = 1;        
        document.body.style.backgroundImage = `url('images/morning/${img++}.jpg')`; 
        setInterval(() => {
        document.body.style.backgroundImage = `url('images/morning/${img++}.jpg')`;
        if (img == 21) img = 1
            }, 3600000) 

        greating.textContent = 'Good Morning'
    } else if (hour > 12 && hour < 16) {
        let img = 1;        
        document.body.style.backgroundImage = `url('images/day/${img++}.jpg')`; 
        setInterval(() => {
        document.body.style.backgroundImage = `url('images/day/${img++}.jpg')`;
        if (img == 21) img = 1
            }, 3600000) 

        greating.textContent = 'Good Day'

    } else if (hour > 16 && hour < 23) {

        let img = 1;        
        document.body.style.backgroundImage = `url('images/evening/${img++}.jpg')`; 
        setInterval(() => {
        document.body.style.backgroundImage = `url('images/evening/${img++}.jpg')`;
        if (img == 21) img = 1
            }, 3600000)

        greating.textContent = 'Good Evening'


    }
     else {
        greating.textContent = 'Good Night'

        let img = 1;        
        document.body.style.backgroundImage = `url('images/night/${img++}.jpg')`; 
        setInterval(() => {
        document.body.style.backgroundImage = `url('images/night/${img++}.jpg')`;
        if (img == 21) img = 1
            }, 3600000)

        document.body.style.color = 'white'
    }
}

const getName = () => {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter your name]'
    }
    else {
        name.textContent = localStorage.getItem('name')
    }

}

const setName = (e) => {
    if (e.type == 'keypress') {
        if(e.keyCode == 13) {
            localStorage.setItem('name', e.target.textContent)
            name.blur()
        }
    }
    else {
        localStorage.setItem('name', e.target.textContent)
    }
}

const getFocus = () => {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter your purpose on day]'
    }
    else {
        focus.textContent = localStorage.getItem('focus')
    }
}

const setFocus = (e) => {
    if (e.type == 'keypress') {
        if(e.keyCode == 13) {
            localStorage.setItem('focus', e.target.textContent)
            focus.blur()
        }
    }
    else {
        localStorage.setItem('focus', e.target.textContent)
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// если смена цитаты у вас не работает, вероятно, исчерпался лимит API. в консоли ошибка 403
// скопируйте код себе и запустите со своего компьютера
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked 
async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);

showTime()
setBcg()
getName()
getFocus()
