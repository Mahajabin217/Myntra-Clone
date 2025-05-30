// console.log('I am in js');
let bagItems = [];
onLoad();

function onLoad() {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];

    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');

    if (bagItems.length > 0) {
        console.log('i am here');
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }

}
function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    // let item={
    //     item_img:'images/1.jpg',
    //     rating:{
    //         stars:4.5,
    //         noOfReviews:1500,
    //     },
    //     company_name:'Cartlon London',
    //     item_name:'Rhodium-plated CZ Floral Studs',
    //     price:{
    //         current_price:606,
    //         original_price:1045,
    //         discount:42,
    //     }
    // }

    if (!itemsContainerElement) {
        return;
    }

    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `
            <div class="item-container">
                <img class="item-image" src="${item.image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="company-name">${item.company}</div>
                <div class="item-name">${item.item_name}</div>
                <div class="price">
                    <span class="current-price">${item.current_price}</span>
                    <span class="original-price">${item.original_price}</span>
                    <span class="discount">${item.discount_percentage}% OFF</span>
                </div>
                <button class="btn-add-bag" onClick="addToBag(${item.id})">Add to Bag</button>
            </div>`;
    })
    itemsContainerElement.innerHTML = innerHTML;
}

