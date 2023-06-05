import _, { head } from 'lodash';
import './style.css'
import icon from './images/icon.png'

function Header() {
    const element = document.createElement('div')
    element.classList.add('header')
    element.innerHTML = 'Woodelawn Studios Header'



    return element;
}

function Main() {
    const element = document.createElement('div')
    element.classList.add('main')
    element.innerHTML = 'Woodlawn studios Main'
    const myIcon = new Image()
    myIcon.src = icon
    myIcon.classList.add('icon')


    return element
}

function Nav() {
    const element = document.createElement('div')
    element.classList.add('nav')

    element.classList.add('title')
    element.innerHTML = 'Woodlawn studios Nav'


    return element
}

function Footer() {
    const element = document.createElement('div')
    element.classList.add('footer')

    element.innerHTML = 'Woodlawn studios Footer'


    return element
}
function App() {
    const app = document.createElement('div');
    app.classList.add('app');
    app.appendChild(Header());
    app.appendChild(Main());
    app.appendChild(Nav());
    app.appendChild(Footer());

    return app;
}
const content = document.querySelector('.content')
content.appendChild(App())