const CONVENIENCE_FEES = 99;
let bagItemObject;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary() {
    // console.log(bagItemObject);
    let bagSummaryElement = document.querySelector('.bag-summary');

    let totalItem = bagItemObject.length;
    // console.log(totalItem);
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObject.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummaryElement.innerHTML = `
                <div class="bag-details-container">
                    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
                    <div class="price-item">
                        <span class="price-item-tag">Total MRP</span>
                        <span class="price-item-value">Rs ${totalMRP}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-item-tag">Discount on MRP</span>
                        <span class="price-item-value priceDetail-base-discount">-Rs ${totalDiscount}</span>
                    </div>
                    <div class="price-item">
                        <span class="price-item-tag">Convenience Fee</span>
                        <span class="price-item-value">Rs 99</span>
                    </div>
                    <hr>
                    <div class="price-footer">
                        <span class="price-item-tag">Total Amount</span>
                        <span class="price-item-value">Rs ${finalPayment}</span>
                    </div>
                </div>
                <button class="btn-place-order">
                    <div class="css-xjhrni">PLACE ORDER</div>
                </button>`;
}

function loadBagItemObjects() {
    console.log(bagItems);

    bagItemObject = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObject);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    // containerElement.innerHTML = `
    //         <div class="bag-item-container">
    //                 <div class="item-left-part">
    //                     <img class="bag-item-img" src="../images/4.jpg">
    //                 </div>

    //                 <div class="item-right-part">
    //                     <div class="company">ADIDAS</div>
    //                     <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
    //                     <div class="price-container">
    //                         <span class="current-price">Rs 999</span>
    //                         <span class="original-price">Rs 999</span>
    //                         <span class="discount-percentage">(0% OFF)</span>
    //                     </div>
    //                     <div class="return-period">
    //                         <span class="return-period-days">14 days</span> return available
    //                     </div>
    //                     <div class="delivery-details">
    //                         Delivery by
    //                         <span class="delivery-details-days">10 Oct 2023</span>
    //                     </div>
    //                 </div>

    //                 <div class="remove-from-cart">X</div>
    //             </div>`;

    let innerHTML = '';
    bagItemObject.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(BagItemId => BagItemId != itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItems();
    displayBagSummary();
}

function generateItemHTML(item) {
    return `
            <div class="bag-item-container">
                    <div class="item-left-part">
                        <img class="bag-item-img" src="../${item.image}">
                    </div>

                    <div class="item-right-part">
                        <div class="company">${item.company}</div>
                        <div class="item-name">${item.item_name}</div>
                        <div class="price-container">
                            <span class="current-price">Rs ${item.current_price}</span>
                            <span class="original-price">Rs ${item.original_price}</span>
                            <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
                        </div>
                        <div class="return-period">
                            <span class="return-period-days">${item.return_period} days</span> return available
                        </div>
                        <div class="delivery-details">
                            Delivery by
                            <span class="delivery-details-days">${item.delivery_date} Oct 2023</span>
                        </div>
                    </div>

                    <div class="remove-from-cart" onClick="removeFromBag(${item.id})">X</div>
                </div>`;
}