import { useSelector } from 'react-redux';
import HomeItems from '../Components/HomeItems';

const Home = () => {

    const items = useSelector((store) => store.items);
    // console.log(items);

    return (
        <main>
            <div className="items-container">
                {/* <HomeItems item={items[0]}></HomeItems> */}
                {items.map((item) => <HomeItems key={item.id} item={item}></HomeItems>)}
            </div>
        </main>
    );
};

export default Home;