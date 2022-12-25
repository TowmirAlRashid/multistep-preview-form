import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const CustomCard = ({ statusToCheck, status, formResult, setFormResult, targetField, setFormStep, title, description }) => {
  return (
    <Box
        sx={{
            width: "30%"
        }}
    >
        <Card
            variant='outlined'
            sx={{ 
                minWidth: "100%", 
                backgroundColor: `${statusToCheck === status ? "white" : "#f2f7ff"}`,
                border: `${statusToCheck === status ? "1px solid blue" : "none"}`, 
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid blue"
                }
            }}
            onClick={() => {
                setFormResult({
                    ...formResult,
                    [`${targetField}`]: status
                })
                setFormStep("2")
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                    {title}
                </Typography>

                <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    </Box>
  )
}

export default CustomCard