// import Footer from "./Footer";
// import Header from "./Header";

import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";
import { useSelector } from 'react-redux';

const Bag = () => {

    const bagItems = useSelector(state => state.bag);
    const items = useSelector(state => state.items);
    const finalItems = items.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >= 0;
    });

    // const item = {
    //     id: '001',
    //     image: 'images/1.jpg',
    //     company: 'Carlton London',
    //     item_name: 'Rhodium-Plated CZ Floral Studs',
    //     original_price: 1045,
    //     current_price: 606,
    //     discount_percentage: 42,
    //     return_period: 14,
    //     delivery_date: '10 Oct 2023',
    //     rating: {
    //         stars: 4.5,
    //         count: 1400,
    //     },
    // };

    return (
        <>
            {/* <Header></Header> */}
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {finalItems.map(item => <BagItem item={item}></BagItem>)}
                    </div>
                    <BagSummary></BagSummary>
                </div>
            </main>
            {/* <Footer></Footer> */}
        </>
    )
}

export default Bag;