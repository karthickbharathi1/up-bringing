import React, { useState } from 'react'
import Menu from './Menu'
import Quiz from './Quiz'
import EndScreen from './EndScreen'
import { QuizContext } from '../Helpers/Contexts'

export default function Dashboard() {
  const [gameState , setGameState] = useState('menu')

  const [grossScore , setGrossScore] = useState(0)
  const [socialScore , setSocialScore] = useState(0)
  const [fineScore , setFineScore] = useState(0)

  const [scientificScore , setScientificScore] = useState(0)
  const [entreScore , setEntreScore] = useState(0)
  const [musicalScore , setMusicalScore] = useState(0)
  return (
    <div className='text-white w-full h-full flex justify-center items-center py-[5%] '>
        
        <QuizContext.Provider value={{ gameState , setGameState , grossScore , setGrossScore , socialScore , setSocialScore , fineScore , setFineScore , scientificScore , setScientificScore , entreScore , setEntreScore , musicalScore , setMusicalScore}}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
        </QuizContext.Provider>
  
    </div>
  )
}
