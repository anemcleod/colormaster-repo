import {useContext} from 'react';
import { motion } from 'framer-motion';

import {DataContext} from '../../dataContext';


const ResetCheck = ({colors, setColors, setProgress, progress, setTease,  setResetOpen}) => {
    
    const {resetToggle, reset} = useContext(DataContext);
   
    return (
        <div className="popup-background">
            <div className="popup-container">
                <p className="popup-message">Are you sure you want to reset current game?</p>
                
                <div className="popup-btn-container"> 
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        onClick={reset} 
                        className="btn-basic btn-popup">
                        yes
                    </motion.button>
                   
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        onClick={resetToggle} 
                        className="btn-basic btn-popup">
                        no
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default ResetCheck;