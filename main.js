const COUNTRIES = ['Chile', 'Argentina', 'Perú', 'Bolivia', 'Brasil'];

const divCountries = document.getElementById('countries');


// Buttons
const btnPush = document.getElementById('btnPush');
const btnPop = document.getElementById('btnPop');
const btnShift = document.getElementById('btnShift');
const btnUnshift = document.getElementById('btnUnshift');
const btnJoin = document.getElementById('btnJoin');


btnPush.addEventListener('click', () => {
    pushElement('México');
});

btnPop.addEventListener('click', () => {
    popElement();
});

btnShift.addEventListener('click', () => {
    shiftElement();
});

btnUnshift.addEventListener('click', () => {
    unshiftElement('Uruguay');
});

btnJoin.addEventListener('click', () => {
    joinElements(COUNTRIES);
})


const pushElement = (element) => {
    COUNTRIES.push(element);
    renderList(COUNTRIES, divCountries);
}

const popElement = () => {
    COUNTRIES.pop();
    renderList(COUNTRIES, divCountries);
}

const shiftElement = () => {
    COUNTRIES.shift();
    renderList(COUNTRIES, divCountries);
}

const unshiftElement = (element) => {
    COUNTRIES.unshift(element);
    renderList(COUNTRIES, divCountries);
}

const joinElements = (array) => {
    const arrJoinResult = array.join('-');
    divCountries.innerHTML = `<p><strong>Join result:</strong> ${arrJoinResult}</p>`;
    // renderList(COUNTRIES, divCountries);
}


const renderList = (array, containerElement) => {

    let html = '<ol>';
    array.forEach(element => {
        html += `<li>${element}</li>`;
    });
    html += `</ol> <p>Tamaño del arreglo: ${array.length}</p>`;

    containerElement.innerHTML = html;
}

renderList(COUNTRIES, divCountries);