import { useSelector } from 'react-redux';

const BagSummary = () => {

    const bagItemIds = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItemIds.indexOf(item.id);
        return itemIndex >= 0;
    });

    const CONVENIENCE_FEES = 99;
    let totalItem = bagItemIds.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    finalItems.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    // const bagSummary = {
    //     totalItem: bagItems.length,
    //     totalMRP: 2345,
    //     totalDiscount: 999,
    //     finalPayment: 1346,
    // };

    return (
        <>
            <div className="bag-detail-container">
                <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">Rs {totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-Rs {totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">Rs 99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">Rs {finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </>
    );
};

export default BagSummary;