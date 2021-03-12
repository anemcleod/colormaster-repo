import React, {createContext, useState, useEffect, useRef} from 'react';

import {colorgen, random, points} from './helperFunctions'
export const DataContext = createContext();

export const DataProvider = ({children}) => {

//====================== global states =========================
    const [difficulty, setDifficulty] = useState(null);
    const [colors, setColors] = useState(null);
    const [progress, setProgress] = useState(0);
    const [tease, setTease] =  useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [resetOpen, setResetOpen] = useState(false);
    const [mainMenuOpen, setMainMenuOpen] = useState(false);
    const [isWinner, setIsWinner] = useState(false);

//====================== global refs =========================

    const guess = useRef(0);
    const incorrectGuess = useRef([]);  // keep track of incorrect guesses

//==================== useEffect ====================================

    //check if game is over
    useEffect(()=> {
        if(progress >= 100){
           setIsWinner(true);
        }
    }, [progress]);

    useEffect(()=> {
        if(colors){
           setIsPlaying(true);
        }
        else {
            setIsPlaying(false);
        }
    }, [colors]);

//==================== global functions =============================

    //Select game difficulty start game.
    const selectDifficulty = (strLevel, numLevel) => {
        let colorArray = colorgen(numLevel);
        let pickedColor = random(colorArray);
        setColors({colorArray: colorArray, pickedColor: pickedColor});
        setDifficulty(strLevel);

    };

    //onclick functions gameplay
    const check = (color) => {
        guess.current++;
        let score = points(guess.current, colors.colorArray.length);
        if(color === colors.pickedColor){ 
            let nextColorArray = colorgen(colors.colorArray.length);
            let pickedColor = random(nextColorArray);
            
            //reset guess and state for next round 
            guess.current = 0;
            setTease(false);
            setProgress(prevProgress => prevProgress + score);
            setColors({colorArray: nextColorArray, pickedColor: pickedColor});
          
        } else {
            incorrectGuess.current.push(color);
            setTease(!tease);
        }
    }

    //reset current game
    const reset = () => {
        let nextColorArray = colorgen(colors.colorArray.length);
        let pickedColor = random(nextColorArray);
        
        setProgress(0);
        setColors({colorArray: nextColorArray, pickedColor: pickedColor});
        setTease(false);
        setResetOpen(false);
        setIsWinner(false);
    }

    
    //open main menu / reset check
    const mainMenuToggle = () => {
        setMainMenuOpen(prevState => {
            return !prevState
        });
    };

    const resetToggle = () => {
        setResetOpen(prevState => {
            return !prevState;
        });
    };

    //go home and reset everything  
    const home = () => {
        setDifficulty(null);
        setProgress(0);
        setTease(false);
        setIsWinner(false);
        setMainMenuOpen(false);
    };


    return (
        <div>
            <DataContext.Provider value={{
                                            difficulty,
                                            colors,
                                            progress,
                                            setProgress,
                                            tease,
                                            isPlaying,
                                            selectDifficulty,
                                            mainMenuToggle,
                                            isWinner, 
                                            setIsWinner,
                                            home,
                                            resetToggle,
                                            resetOpen,
                                            mainMenuOpen,
                                            reset,
                                            incorrectGuess,
                                            check
                                        }}>
                {children}
            </DataContext.Provider>
        </div>
    )
}