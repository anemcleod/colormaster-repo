import {useContext} from 'react';
import {Link }from 'react-router-dom';
import { motion } from 'framer-motion';

import {DataContext} from '../../dataContext';


const MainMenuCheck = () => {
  
    const { home, mainMenuToggle} = useContext(DataContext);


    return (
        <div className="popup-background">
            <div className="popup-container">
                <p className="popup-message">Are you sure you want to exit the current game?</p>
                
                <div className="popup-btn-container">
                        <Link to="/">
                            <motion.button  
                                whileHover={{ scale: 1.1 }} 
                                onClick={home} 
                                className="btn-basic btn-popup">
                                yes
                            </motion.button>
                        </Link>

                        <motion.button 
                            onClick={mainMenuToggle}
                            className="btn-basic btn-popup"
                            whileHover={{ scale: 1.1 }} >
                            no
                        </motion.button>
                </div>
            </div>
        </div>
    )
}

export default MainMenuCheck;