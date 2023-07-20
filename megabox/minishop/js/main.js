// json 파일에서 items 가져오기
function loadItems(){
    return fetch('data/data.json')
      .then(response => response.json())
      .then(json => json.items);
}

// 지정된 itmes로 목록 업데이트
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join(''); /* 문자열이 들어있는 배열을 한가지의 문자열로 병합하기 위해 쓸 수 있음 -> join */
}

// 지정된 item에 HTML 목록 생성
function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    if(key == null || value == null){
        return;
    }

    displayItems(items.filter(item => item[key] === value));
}

function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}
// main
loadItems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);