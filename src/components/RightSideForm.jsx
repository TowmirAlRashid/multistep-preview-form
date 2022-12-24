//mui imports
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const RightSideForm = ({ formStep, setFormStep, formResult, setFormResult }) => {
  return (
    <Box
        sx={{
            width: "100%",
            p: "0 2rem 1rem",
            // display: 'flex',
            // flexDirection: "column",
            // justifyContent: "space-between",
            // alignItems: "center"
        }}
    >
        <Box
            // sx={{
            //     width: "100%",
            // }}
        >
            <Typography
                sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    mb: "1rem"
                }}
            >
                What are you hoping to solve?
            </Typography>

            {
                formResult.installation_group !== "" ?
                    <Card 
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "#dba8ac", 
                            cursor: "pointer" 
                        }}
                        onClick={() => setFormStep("1")}
                    >
                        <CardContent>
                            <Typography sx={{ fontSize: "1rem", color: "black" }}>
                                {formResult.installation_group}
                            </Typography>
                        </CardContent>
                    </Card>
                    :
                    <Card
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "#dba8ac", 
                            height: "4rem"
                        }}
                    ></Card>
            }

            <Typography
                sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "white",
                    mt: "1.5rem",
                    mb: "1rem"
                }}
            >
                Pick the Framework
            </Typography>

            {
                formResult.framework !== "" ?
                    <Card 
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "#dba8ac", 
                            cursor: "pointer" 
                        }}
                        onClick={() => setFormStep("2")}
                    >
                        <CardContent>
                            <Typography sx={{ fontSize: "1rem", color: "black" }}>
                                {formResult.framework}
                            </Typography>
                        </CardContent>
                    </Card>
                    :
                    <Card
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "#dba8ac", 
                            height: "4rem"
                        }}
                    ></Card>
            }
        </Box>

        {
            formStep === "2" && formResult.framework !== "" && 
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "flex-end"
                }}
            >
                <Button
                    variant='contained'
                    sx={{
                        width: "200px",
                        height: "3.5rem",
                        mt: "30rem"
                    }}
                    onClick={() => {
                        console.log(formResult)
                    }}
                >
                    Submit Your Form
                </Button>
            </Box>
        }
    </Box>
  )
}

export default RightSideForm