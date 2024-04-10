import './App.css'
import { Account, Details, Final } from './components'
import { useState } from 'react'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import { StepperContext } from './components/context/stepperContext'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userInfo, setUserInfo] = useState("")
  const [finalInfo, setFinalInfo] = useState([])
  const steps = [
    "Account Information",
    "Personal Details",
    "Complete",
  ]
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Final />
    }
  }
  const handleClick = (direction) => {
    let newSteps = currentStep
    direction === "Next" ? newSteps++ : newSteps--

    // check if the steps are within bounds

    newSteps > 0 && newSteps <= steps.length && setCurrentStep(newSteps)

  }
  return (
    <>
      <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl mt-8 pb-2 p-4 bg-white'>
        <div className='container vertical justify-center'>
          <Stepper steps={steps} currentStep={currentStep} />
          <div className='py-20 px-10 items-center'>
            <StepperContext.Provider value={{ userInfo, setUserInfo, finalInfo, setFinalInfo }}>
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
          
          <StepperControl handleClick={handleClick} steps={steps} currentStep={currentStep} />
        </div>

      </div>

    </>
  )
}



export default App
