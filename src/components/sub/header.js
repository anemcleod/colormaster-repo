import {useContext} from 'react';
import { motion } from 'framer-motion';

import {DataContext} from '../../dataContext';

const GameHeader = () => {

    const {colors, difficulty, progress, mainMenuToggle} = useContext(DataContext);

    return (
        <div className="gradient container">
            <div>
                <div className="maintitle maintitle-header">Colormaster
                    <span>{difficulty}</span>
                    <div className="maintitle maintitle-header overlay" style={{width: `${progress}`+"%", overflowX: "hidden"}}>Colormaster</div>
                </div>
                
                <h3 className="color-title">{colors.pickedColor}</h3>
            </div>
          
            <div>
                <motion.button 
                    onClick={mainMenuToggle}
                    whileHover={{ scale: 1.1 }} 
                    className="btn-basic btn-new">
                    main menu
                </motion.button>
            </div>
        </div>
    )
}


export default GameHeader;