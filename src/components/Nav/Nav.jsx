import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import { Link, useNavigate } from "react-router-dom";

const Nav = ({onSearch}) => {

    const navigate = useNavigate();
    const logOut = () => {
        navigate('/');
    };

    return(
        <div className={styles.navContainer}>
            {/* <Link to='/about'><h3>About </h3></Link> */}
            
              <SearchBar onSearch={onSearch} />
               <button className={styles.buttons}><Link to='/home' className={styles.h3
            }><h3>Home</h3></Link></button>
               <button className={styles.buttons}><Link to='/favorites' className={styles.h3}><h3>My Favorites</h3></ Link></button>

            <button onClick={logOut} className={styles.logOut}><em>Log Out</em></button>
        </div>
    );  
};

export default Nav;