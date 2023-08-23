
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar(props) {

  return (

    <div className='flex flex-col justify-center items-center rounded-lg'>
      <h2 className='text-center'>Motor Metrics </h2>
      <div className='flex justify-center items-center rounded-lg p-4' style = {{  backgroundColor : "white" , width : "70%"}}>
      <CircularProgressbar value = {props.motorMetric} text = {`${props.motorMetric}%`} />
      </div>
    </div>
  );
}
export default CircularProgressBar;