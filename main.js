const original = ['Chile', 'Argentina', 'Perú', 'Bolivia', 'Brasil'];
const COUNTRIES = [...original];

const divCountries = document.getElementById('countries');


// Buttons
const btnPush = document.getElementById('btnPush');
const btnPop = document.getElementById('btnPop');
const btnShift = document.getElementById('btnShift');
const btnUnshift = document.getElementById('btnUnshift');
const btnJoin = document.getElementById('btnJoin');
const btnSpliceRemove = document.getElementById('btnSpliceRemove');
const btnSpliceAdd = document.getElementById('btnSpliceAdd');
const btnReset = document.getElementById('btnReset');


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
});

btnSpliceRemove.addEventListener('click', () => {
    spliceRemove(COUNTRIES);
});

btnSpliceAdd.addEventListener('click', () => {
    spliceAdd(COUNTRIES);
});

btnReset.addEventListener('click', () => {
    const size = COUNTRIES.length;
    for(i = 0; i < size; i++){
        COUNTRIES.pop()
    }
    original.forEach(element => COUNTRIES.push(element))
    renderList(COUNTRIES, divCountries);
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

const spliceRemove = (array) => {
    if (array.length > 0) {
        array.splice(1, 1);
    }
    renderList(COUNTRIES, divCountries);
}

const spliceAdd = (array) => {

    if (array.length > 0) {
        array.splice(1, 1, 'España');
    }

    renderList(COUNTRIES, divCountries);
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