import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

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
                color: "white",
                mb: "2rem"
            }}
        >
            What are you hoping to solve?
        </Typography>

        <Typography
            sx={{
                fontSize: "1.1rem",
                color: "white",
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
            <Box
                sx={{
                    width: "30%"
                }}
            >
                <Card 
                    sx={{ 
                        minWidth: "100%", 
                        backgroundColor: `${formResult.installation_group === "Event calendar & scheduling" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            installation_group: "Event calendar & scheduling"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Event calendar & scheduling?
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            You are building a calendaring, scheduling UI or you are looking to display events.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box
                sx={{
                    width: "30%"
                }}
            >
                <Card 
                    sx={{ 
                        minWidth: "100%", 
                        backgroundColor: `${formResult.installation_group === "Date & Time selection" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                            setFormResult({
                                ...formResult,
                                installation_group: "Date & Time selection"
                            })
                            setFormStep("2")
                        }
                    }
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Date & Time selection?
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            You are implementing date, time selection for booking, filtering or simply date entry.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box
                sx={{
                    width: "30%"
                }}
            >
                <Card 
                    sx={{ 
                        minWidth: "100%", 
                        backgroundColor: `${formResult.installation_group === "Various pickers & dropdowns" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            installation_group: "Various pickers & dropdowns"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Various pickers & dropdowns?
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            You are implementing scrollers & dropdowns with filtering, single-multiple value select.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box
                sx={{
                    width: "30%"
                }}
            >
                <Card 
                    sx={{ 
                        minWidth: "100%", 
                        backgroundColor: `${formResult.installation_group === "Enhancing forms" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            installation_group: "Enhancing forms"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Enhancing forms?
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            You are building forms for data entry or just want to make your fields pretty.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Box>
  )
}

export default Step1Comp