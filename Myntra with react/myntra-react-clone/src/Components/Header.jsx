import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
    const bag = useSelector(store => store.bag);
    console.log(bag);
    return (
        <header>
            <div className="logo_container">
                <Link to="/">
                    <img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" />
                </Link>
            </div>
            <nav className="nav_bar">
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">Kids</a>
                <a href="#">Home & Living</a>
                <a href="#">Beauty</a>
                <a href="#">Studio <sup>New</sup></a>
            </nav>
            <div className="search_bar">
                {/* <span className="material-symbols-outlined search_icon">search</span> */}
                <IoSearch />
                <input className="search_input" placeholder="Search for products, brands and more" />
            </div>
            <div className="action_bar">
                <div className="action_container">
                    {/* <span className="material-symbols-outlined action_icon">person</span> */}
                    <MdAccountCircle />
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
                    <FaHeart />
                    <span className="action_name">Wishlist</span>
                </div>

                <Link className="action_container" to="/bag">
                    {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
                    <FaShoppingCart />
                    <span className="action_name">Bag</span>
                    <span className="bag-item-count">{bag.length}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;