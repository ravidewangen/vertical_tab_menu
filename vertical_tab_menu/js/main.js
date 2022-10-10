const list = document.querySelectorAll('.list');
const activeTab = document.querySelector('.active-tab')

const colors = ["#eb4d4b", "#25ccf7", "#3b3b98", "#0be881", "#ffa801"];

let activeIndex;

list.forEach((ele) => ele.addEventListener('mouseover', addActiveClass));

function addActiveClass() {
    list.forEach(link => link.className = 'list');
    this.className = 'list active';
    activeIndex = this.dataset.active;
    moveActiveTab();
}

function moveActiveTab() {
    let topPosition = activeIndex * 70 + 8;
    activeTab.style.top = `${topPosition}px`;
    activeTab.style.background = `${colors[activeIndex]}`;

    document.body.style.background = `${colors[activeIndex]}`;
}

window.onload = () => {
    activeTab.style.top = `8px`;
    list[0].className = 'list active';
    activeTab.style.background = `${colors[0]}`;

    document.body.style.background = `${colors[0]}`;
}