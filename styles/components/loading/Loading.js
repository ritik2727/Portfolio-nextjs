// import { XlviLoader } from "react-awesome-loaders";
import './../ui/styles.css';

import { TailSpin  } from  'react-loader-spinner'

export const Loading = () => {
  return (
    <>
      <div className='loder'>
          {/* <XlviLoader
            className="loaderbolt"
            boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
            
          /> */}
          <TailSpin ariaLabel="loading-indicator" />
          {/* <Triangle
           className="loder"
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  /> */}
        </div>
    </>
  );
};