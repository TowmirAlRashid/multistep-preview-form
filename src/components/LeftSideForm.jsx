// mui imports
import { Box } from '@mui/material'
import React from 'react'
import Step1Comp from './Step1Comp'
import Step2Comp from './Step2Comp'

const LeftSideForm = ({ formStep, setFormStep, formResult, setFormResult }) => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "0 2rem 1rem",
      }}
    >
      {
        formStep === "1" ?
        <Step1Comp 
          formStep={formStep}
          setFormStep={setFormStep}
          formResult={formResult} 
          setFormResult={setFormResult} 

        /> :
        formStep === "2" ?
        <Step2Comp 
          formStep={formStep}
          setFormStep={setFormStep}
          formResult={formResult} 
          setFormResult={setFormResult}
        /> :
        ""
      }
    </Box>
  )
}

export default LeftSideForm