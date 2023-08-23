import React , {useState , useContext} from 'react'
import { Questions } from '../Helpers/Questions'
import { QuizContext } from '../Helpers/Contexts'
export default function Quiz() {
    const [currState , setCurrState] = useState(0)
    const [optionChoosen , setOptionChoosen] = useState(0)
    const {setGameState,grossScore, setGrossScore , socialScore , setSocialScore , fineScore , setFineScore , scientificScore , setScientificScore , entreScore , setEntreScore , musicalScore , setMusicalScore} = useContext(QuizContext)
    const nextQuestion = () => {
        if(currState >= 15){
            
            setMusicalScore(musicalScore + optionChoosen)
        }else if(currState >= 12){
            setEntreScore(entreScore + optionChoosen)
        }else if(currState >= 9){
            setScientificScore(scientificScore + optionChoosen)
        }else if(currState >= 6){
            
            setFineScore(fineScore + optionChoosen)
        }else if(currState >= 3){
            
            setSocialScore(socialScore+optionChoosen);
        }else if(currState >= 0){
            
            
            setGrossScore(grossScore+optionChoosen);
        }
        
        setCurrState(currState + 1)
        if( currState === 2 || currState === 5 || currState === 8 || currState === 11 || currState === 14){
            
            setOptionChoosen(0)
        }
    }
    const finsihQuiz = () => {
        if(currState >= 15){
            setMusicalScore(musicalScore + optionChoosen)
        }
        setGameState("endScreen")
    }
  return (
    <div className='h-screen lg:text-[32px] py-[20%] lg:py-[10%] px-[10%] lg:px-[30%]'>
        <h1 className='text-center text-black bg-yellow-200'>{Questions[currState].heading}</h1>
        <div className=''>
        <h1>{Questions[currState].prompt}</h1>
        <div className=''>
            <button onClick={() => setOptionChoosen(0)} className='block w-full border-white border-2 my-6 focus:bg-slate-400'>{Questions[currState].optionA}</button>
            <button onClick={() => setOptionChoosen(1)} className='block w-full border-white border-2 my-6 focus:bg-slate-400'>{Questions[currState].optionB}</button>
            <button onClick={() => setOptionChoosen(2)} className='block w-full border-white border-2 my-6 focus:bg-slate-400'>{Questions[currState].optionC}</button>
            <button onClick={() => setOptionChoosen(3)} className='block w-full border-white border-2 my-6 focus:bg-slate-400'>{Questions[currState].optionD}</button>
        </div>
        <div className='text-center mt-10'>
        {currState === Questions.length - 1 ? <button className='bg-blue-500 px-10 py-4 rounded-lg text-white' onClick={finsihQuiz}>Finsh</button> :  <button className='bg-blue-500 px-10 py-4 rounded-lg text-white' onClick={nextQuestion}>Next Question</button>}

        </div>
       

        </div>
        
       
    </div>
  )
}
