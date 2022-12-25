import { Box, Typography } from '@mui/material'
import React from 'react'

import step2Data from '../step2CardData'
import CustomCard from './CustomCard'

const Step2Comp = ({ formResult, setFormResult, formStep, setFormStep }) => {
  return (
    <Box
        sx={{
            mt: "6rem"
        }}
    >
        <Typography
            sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "black",
                mb: "2rem"
            }}
        >
            Pick the Framework
        </Typography>

        <Typography
            sx={{
                fontSize: "1.1rem",
                color: "black",
                mb: "1.5rem"
            }}
        >
            Decide which framework works the best for you. Success of your product depends on it!
        </Typography>

        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1.5rem"
            }}
        >
            {
                step2Data?.map(card => {
                    return (
                        <CustomCard 
                            key={card.id}
                            statusToCheck={formResult.framework}
                            status={card.status}
                            formResult={formResult}
                            setFormResult={setFormResult}
                            targetField="framework"
                            setFormStep={setFormStep}
                            title={card.title}
                            description={card.description}
                        />
                    )
                })
            }
        </Box>
    </Box>
  )
}

export default Step2Comp