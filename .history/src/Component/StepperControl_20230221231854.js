import React from 'react'

const StepperControl = () => {
  return (
    <div className='container  flex justify-around mt-5 mb-4'>
       {/*back button*/}
       <button className='bg-white text-slate-500  uppercase p'>
       Back
       </button>
        {/*next button*/}
        <button>
    Next
       </button>
    </div>
  )
}

export default StepperControl
