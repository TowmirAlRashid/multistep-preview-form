import { Box, Typography } from '@mui/material'
import React from 'react'

import data from '../step1CardData';
import CustomCard from './CustomCard';

const Step1Comp = ({ formResult, setFormResult, formStep, setFormStep }) => {
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
            What are you hoping to solve?
        </Typography>

        <Typography
            sx={{
                fontSize: "1.1rem",
                color: "black",
                mb: "1.5rem"
            }}
        >
            We organized the installation instructions into the following groups. Don't worry if it's more things 
            you are testing you can try and use several products at once.
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
                data?.map(card => {
                    console.log(card.status);
                    return (
                        <CustomCard 
                            key={card.id}
                            statusToCheck={formResult.installation_group}
                            status={card.status}
                            formResult={formResult}
                            setFormResult={setFormResult}
                            targetField="installation_group"
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

export default Step1Comp