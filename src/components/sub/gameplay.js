import { useContext } from 'react';
import { motion } from 'framer-motion';

import {DataContext} from '../../dataContext';

const GamePlay = () => {
    
    const {
            colors, 
            tease, 
            resetToggle,
            incorrectGuess,
            check
        } = useContext(DataContext);
    
    
    const teases = ["Sucks to be wrong", "Maybe next time?", 
                    "Got you!", "Not so cocky now...", 
                    "Nope!", "Eeeek", "ah aaah", "Yikes!", 
                    "Your secret's safe with me",
                    "Don't quit your day job!"];


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




    return (
        <div className="gameplay-container">
            <div className="message-container">
            {
                tease && (
                
                    <motion.p className="message"
                        animate={{
                            scale: [1,1.5,1],
                        }}>
                        {teases[(Math.floor(teases.length*Math.random()))]}
                    </motion.p>
                )
            }
            </div>
            <motion.div className="circle-container"
                        variants={container}
                        initial="hidden"
                        animate="visible">
                {
                    colors.colorArray.map(color => {
                        return (
                            <motion.div 
                                className={incorrectGuess.current.indexOf(color)!== -1 ? "circle disappear" : "circle"}
                                variants={item}  
                                whileHover={{ scale: 1.1 }}
                                onClick={()=>{check(color)}} 
                                key={color} 
                                style={{backgroundColor:`${color}`}}>
                            </motion.div>
                        )
                    }) 
                }
            </motion.div>
            
            <motion.button 
                onClick={resetToggle}
                className="btn-basic btn-reset"
                whileHover={{ scale: 1.1 }}>
                reset
            </motion.button>
        </div>
    )
}

export default GamePlay;