import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';

import {DataContext} from '../dataContext';

const Home = () => {

//framer-motion
    const container = {
        hidden: {},
        visible: {
          transition: {
            delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

const {difficulty, selectDifficulty} = useContext(DataContext);

    return (
        <div className="gradient page-container">
            <div>
                <h1 className="maintitle">colormaster</h1>
            </div>

            <div className="difficulty-container">
                <motion.ul 
                    className="difficulty"
                    variants={container}
                    initial="hidden"
                    animate="visible">
                    <motion.li 
                        variants={item} 
                        whileHover={{ scale: 1.1 }} 
                        onClick={() => selectDifficulty("easy", 3)} 
                        className={difficulty === "easy" ? "btn-basic btn-difficulty active-level": "btn-basic btn-difficulty"}>
                        easy
                    </motion.li>

                    <motion.li 
                        variants={item} 
                        whileHover={{ scale: 1.1 }} 
                        onClick={() => selectDifficulty("medium", 6)}  
                        className={difficulty === "medium" ? "btn-basic btn-difficulty active-level": "btn-basic btn-difficulty"}>
                        medium
                    </motion.li>

                    <motion.li 
                        variants={item} 
                        whileHover={{ scale: 1.1 }} 
                        onClick={() =>selectDifficulty("hard", 8)}  
                        className={difficulty === "hard" ? "btn-basic btn-difficulty active-level": "btn-basic btn-difficulty"}>
                        hard
                    </motion.li>   
                </motion.ul>

                {
                    difficulty && (
                        <Link to="/game">
                            <motion.button  
                                initial={{ y: 20, opacity: 0 }} 
                                animate={{ y: 0, opacity: 1 }} 
                                whileHover={{ scale: 1.1 }} 
                                className="btn-basic btn-play">
                                play game
                            </motion.button>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Home;