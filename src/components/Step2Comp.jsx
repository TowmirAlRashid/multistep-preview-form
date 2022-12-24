import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

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
                color: "white",
                mb: "2rem"
            }}
        >
            Pick the Framework
        </Typography>

        <Typography
            sx={{
                fontSize: "1.1rem",
                color: "white",
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
            <Box
                sx={{
                    width: "30%"
                }}
            >
                <Card 
                    sx={{ 
                        minWidth: "100%", 
                        backgroundColor: `${formResult.framework === "Javascript" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            framework: "Javascript"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Javascript
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            Building with plain JS?
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
                        backgroundColor: `${formResult.framework === "jQuery" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            framework: "jQuery"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            jQuery
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            jQuery or jQuery Mobile?
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
                        backgroundColor: `${formResult.framework === "Angular" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            framework: "Angular"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Angular
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            Using Angular 4+?
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
                        backgroundColor: `${formResult.framework === "React" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            framework: "React"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            React
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            Building with React Js?
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
                        backgroundColor: `${formResult.framework === "Ionic Angular" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            framework: "Ionic Angular"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Ionic Angular
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            Using Ionic 2, 3, 4, 5 or 6?
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
                        backgroundColor: `${formResult.framework === "Ionic React" ? "#dba8ac" : "#cc92c2"}`, 
                        cursor: "pointer" 
                    }}
                    onClick={() => {
                        setFormResult({
                            ...formResult,
                            framework: "Ionic React"
                        })
                        setFormStep("2")
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: "1rem", color: "black", mb: "0.5rem" }}>
                            Ionic React
                        </Typography>

                        <Typography sx={{ fontSize: "0.8rem", color: "black" }}>
                            Using Ionic React 4, 5 or 6?
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Box>
  )
}

export default Step2Comp