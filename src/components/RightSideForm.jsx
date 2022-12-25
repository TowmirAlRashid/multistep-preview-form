//mui imports
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const RightSideForm = ({ formStep, setFormStep, formResult }) => {
  return (
    <Box
        sx={{
            width: "100%",
            height: "85vh",
            p: "0 2rem 1rem",
            position: "relative"
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
                    color: "black",
                    mb: "1rem"
                }}
            >
                What are you hoping to solve?
            </Typography>

            {
                formResult.installation_group !== "" ?
                    <Card
                        variant='outlined' 
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "white", 
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
                        variant='outlined'
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "white", 
                            height: "4rem"
                        }}
                    ></Card>
            }

            <Typography
                sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "black",
                    mt: "1.5rem",
                    mb: "1rem"
                }}
            >
                Pick the Framework
            </Typography>

            {
                formResult.framework !== "" ?
                    <Card
                        variant='outlined' 
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "white", 
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
                        variant='outlined'
                        sx={{ 
                            width: "80%", 
                            backgroundColor: "white", 
                            height: "4rem"
                        }}
                    ></Card>
            }
        </Box>

        {
            formResult.installation_group !== "" && formResult.framework !== "" && 
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
                        position: "absolute",
                        bottom: "2rem",
                        right: "2rem",
                        backgroundColor: "#005BEC"
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