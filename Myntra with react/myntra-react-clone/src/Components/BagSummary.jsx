const BagSummary = () => {

    const bagSummary = {
        totalItem: 3,
        totalMRP: 2345,
        totalDiscount: 999,
        finalPayment: 1346,
    };

    return (
        <>
            <div className="bag-detail-container">
                <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items) </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">Rs {bagSummary.totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">-Rs {bagSummary.totalDiscount}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">Rs 99</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">Rs {bagSummary.finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </>
    );
};

export default BagSummary;