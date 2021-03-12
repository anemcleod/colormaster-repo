import {useContext} from 'react';

import { DataContext} from '../dataContext';

import GameHeader from './sub/header';
import GamePlay from './sub/gameplay';
import MainMenuCheck from './sub/mainMenuCheck';
import ResetCheck from './sub/resetCheck';
import Winner from './sub/winner';

const Game = () => {

    const {mainMenuOpen, resetOpen, isWinner} = useContext(DataContext);

    return (
        <div clasName="page-container game-container">
            <GameHeader/>
            <GamePlay/>
            
            {
                mainMenuOpen && <MainMenuCheck/>    
            }

            {
                resetOpen && <ResetCheck />
            
            }

            {
                isWinner && <Winner/>
            }
        
        </div>
    ) 
}

export default Game;