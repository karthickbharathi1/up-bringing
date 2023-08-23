
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar1(props) {


  return (

    <div className='flex flex-col justify-center items-center rounded-lg '>
      <h2 className='text-center'>Cognitive Metrics </h2>
      <div className='flex justify-center items-center rounded-lg p-4' style = {{  backgroundColor : "white" , width : "80%"}}>
      <CircularProgressbar value = {props.cognitiveMetric} text = {`${props.cognitiveMetric}%`} />
      </div>
    </div>
  );
}
export default CircularProgressBar1;