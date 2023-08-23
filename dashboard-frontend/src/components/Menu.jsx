
import React, { useState , useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
export default function Menu() {
    const {gameState , setGameState} = useContext(QuizContext)
  return (
    <div className='h-screen px-10 py-[30%] lg:py-[10%] lg:w-2/3 '>
          <p className='sm:text-[32px] md:text-[44px] text-center'>This platform is for the parents that helps  to track and present metrics for measuring your  child's progress throughout their educational journey </p>
          <p className='sm:text-[28px] md:text-[36px] text-gray-500 mt-10 text-center'> Just press the below button and answer the  set of 18 questions to get the results</p>
          <div className='text-center mt-10'>
          <button onClick={() => setGameState("quiz")} className='border-2 focus:bg-slate-400 border-white lg:text-[32px] px-10'>Start the Test</button>

          </div>
         
        </div>
  )
}
