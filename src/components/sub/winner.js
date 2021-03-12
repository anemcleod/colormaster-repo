import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import { useContext } from 'react';

import {DataContext} from '../../dataContext';


const Winner = () => {
    
    const {reset, home} = useContext(DataContext);

    return (
        <div className="gradient winner-container">
            <motion.h1 
                className="maintitle"
                animate={{
                    scale: [1,2,1],
                }}>
                winner winner!
            </motion.h1>

            <div className="winner-btn-container">
                <motion.button 
                    className="btn-basic"
                    whileHover={{ scale: 1.1 }}
                    onClick={reset}>
                    play again
                </motion.button>

                <Link to="/">
                    <motion.button 
                        className="btn-basic"
                        whileHover={{ scale: 1.1 }}
                        onClick={home}>
                        main menu
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export default Winner