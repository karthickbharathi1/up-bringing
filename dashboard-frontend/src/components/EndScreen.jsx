import React , { useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Line } from 'react-chartjs-2';
import profilePhoto from '../assets/Photo.png'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import CircularProgressBar from './CircularProgressBar';
import CircularProgressBar1 from './CircularProgressBar1';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)






  

function EndScreen() {
    const {grossScore , socialScore , fineScore , scientificScore , entreScore ,musicalScore } = useContext(QuizContext)
   const motorMetric = Math.floor((grossScore + fineScore + socialScore)/27 * 100);
   const cognitiveMetric = Math.floor((scientificScore + entreScore + musicalScore)/27 * 100);

   let resultMetric = "";
   if(motorMetric > 90){
    resultMetric = "Excellent"
   }else if(motorMetric > 70){
    resultMetric = "Good"
   }else if(motorMetric > 50){
    resultMetric = "Average"
   }else{
    resultMetric = "Below Average"
   }
   let cogResult = ""
   if(cognitiveMetric > 90){
    cogResult = "Excellent"
   }else if(cognitiveMetric > 70){
    cogResult = "Good"
   }else if(cognitiveMetric > 50){
    cogResult = "Average"
   }else{
    cogResult = "Below Average"
   }
    
  return (
    <div className=''>
      {/* <div className='grid grid-cols-3 gap-10 px-[30%]'>
        <div className='bg-gradient-to-r from-[#4A2F70] to-[#344363] border-2 border-white rounded-lg  text-[32px] px-4 py-4'>Gross Motor Skills Development (GMSD) :   {grossScore} Points</div> 
        <div className='bg-gradient-to-r from-[#4A2F70] to-[#344363] border-2 border-white rounded-lg  text-[32px] px-4 py-4'>{socialScore}</div> 
        <div className='bg-gradient-to-r from-[#4A2F70] to-[#344363] border-2 border-white rounded-lg  text-[32px] px-4 py-4'>{fineScore}</div> 
        <div className='bg-gradient-to-r from-[#4A2F70] to-[#344363] border-2 border-white rounded-lg  text-[32px] px-4 py-4'>{scientificScore}</div> 
        <div className='bg-gradient-to-r from-[#4A2F70] to-[#344363] border-2 border-white rounded-lg  text-[32px] px-4 py-4'>{entreScore}</div> 
        <div className='bg-gradient-to-r from-[#4A2F70] to-[#344363] border-2 border-white rounded-lg  text-[32px] px-4 py-4'>{musicalScore}</div>
        <div>

      </div> */}


    <div className='grid grid-cols-1  lg:grid-cols-4 gap-10 px-10 py-5'>

{/* =================STATS================= */}

      <div className=' bg-gradient-to-r from-[#4A2F70] to-[#344363] rounded-3xl px-5 py-5 lg:col-span-1'>
      <h1 className='font-semibold text-[32px] text-center text-[#AFCCF8] mb-10'>Motor Metrics</h1>

        <div className='bg-white py-10 rounded-lg'>
        <Line
        data={{
          // x-axis label values
          labels: ['grossScore', 'socialScore', 'fineScore'],
          datasets: [
            {
              label: "Motor Metric",
              // y-axis data plotting values
              data: [grossScore , socialScore , fineScore ],
              fill: false,
              borderWidth:2,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor:'rgb(255, 99, 132)',
              responsive:true,
              color: '#FFFFFF',
              fontSize: 40
            },
          ],
        }}
      />

        </div>
     

      </div>

{/* ===================Scheduled Session================== */}
    <div className=' bg-gradient-to-r from-[#4A2F70] to-[#344363] rounded-3xl  py-5 px-3 lg:px-10 lg:col-span-2'>
        <h1 className='font-semibold text-[32px] text-center text-[#AFCCF8] mb-10'>Motor Metrics</h1>

       <div className='mb-5'>
        <p className='font-semibold text-[24px] text-center '>  Gross Motor Skills Development (GMSD) : {grossScore} / 9 Points</p>
        <p className='text-center text-[#ffffff60]'> Assess physical coordination, balance, and movement. </p>

      </div>
       <div className='mb-5'>
        <p className='font-semibold text-[24px] text-center '>  Social Motor Skills Development (SMSD) : {socialScore} / 9 Points</p>
        <p className='text-center text-[#ffffff60]'> Track a child's interaction and communication with others. </p>

      </div>
       <div className='mb-5'>
        <p className='font-semibold text-[24px] text-center '> Fine Motor Skills Development (FMSD) : {fineScore} / 9 Points</p>
        <p className='text-center text-[#ffffff60]'> Measure a child's dexterity and hand-eye coordination. </p>

      </div>
       
        
       

    </div>

{/* =================PROFILE========================== */}
      <div className=' bg-gradient-to-r from-[#4A2F70] to-[#344363] rounded-3xl px-5 py-5 lg:col-span-1'>
      <h1 className='font-semibold text-[32px] text-center text-[#AFCCF8] mb-2'>Result</h1>
        <CircularProgressBar motorMetric = {motorMetric}/>
        <p className='text-center text-white font-semibold text-[32px]'>{resultMetric}</p>
      </div>


    {/* ===============Stats=================== */}
      <div className=' bg-gradient-to-r from-[#4A2F70] to-[#344363] rounded-3xl px-5 py-5 lg:col-span-1'>
      <h1 className='font-semibold text-[32px] text-center text-[#AFCCF8] mb-10'>Cognitive Metrics</h1>

      <div className='bg-white py-10 rounded-lg'>
      <Line
        data={{
          // x-axis label values
          labels: ['scientificScore', 'entreScore', 'musicalScore'],
          datasets: [
            {
              label: "Cognitive Metric",
              // y-axis data plotting values
              data: [scientificScore , entreScore , musicalScore ],
              fill: false,
              borderWidth:2,
              backgroundColor: "rgba(75,192,192,1)",
              borderColor:'rgb(255, 99, 132)',
              responsive:true,
              color: '#FFFFFF',
              fontSize: 40
            },
          ],
        }}
      />
        </div>


      </div>


    {/* =======================Achievements ==================== */}
      <div className=' bg-gradient-to-r from-[#4A2F70] to-[#344363] rounded-3xl px-10 py-5 lg:col-span-2'>
      <h1 className='font-semibold text-[32px] text-center text-[#AFCCF8] mb-10'>Cognitive Metrics</h1>
      <div className='mb-5'>
      <p className='font-semibold text-[24px] text-center '>Scientific Curiosity : {scientificScore} / 9 Points</p>
       <p className='text-center text-[#ffffff60]'> Track a child's engagement and understanding of scientific concepts</p>

      </div>
      <div className='mb-5'>
      <p className='font-semibold text-[24px] text-center '>Entrepreneurial Curiosity : {entreScore} / 9 Points</p>
       <p className='text-center text-[#ffffff60]'> Measure a child's thoughts and understanding of Entrepreneurial mindset. </p>

      </div>
      <div className='mb-5'>
      <p className='font-semibold text-[24px] text-center '>Musical Inclination : {musicalScore} / 9 Points</p>
       <p className='text-center text-[#ffffff60]'> Track a child's engagement and enthusiasm of Musical activities. </p>

      </div>
      
       
       <p className='font-semibold text-[24px] text-center '> </p>
        
      </div>



{/* ======================Contact Trainer============== */}
      <div className=' bg-gradient-to-r from-[#4A2F70] to-[#344363] rounded-3xl px-10 py-5 lg:col-span-1'>

      <h1 className='font-semibold text-[32px] text-center text-[#AFCCF8] mb-2'>Result</h1>
        <CircularProgressBar1 cognitiveMetric = {cognitiveMetric}/>
        <p className='text-center text-white font-semibold text-[32px]'>{cogResult}</p>
          
      </div>

  </div>   
     

      
      

       
   </div>
    
  )
}

export default EndScreen












