import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer'
import Header from "../Components/Header";
import FetchItems from "../store/FetchItems";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useSelector } from "react-redux";


function App() {
    const fetchStatus = useSelector(store => store.fetchStatus);
    return (
        <>
            <Header></Header>
            <FetchItems></FetchItems>
            {fetchStatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
            <Footer></Footer>
        </>
    )
}

export default App;
