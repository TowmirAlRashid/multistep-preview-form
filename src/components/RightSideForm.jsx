//mui imports
import { Box, Button, Card, CardContent, Modal, Typography } from '@mui/material'
import React from 'react'

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const RightSideForm = ({ formStep, setFormStep, formResult, setFormResult }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            {
                (formStep === "1" || formResult.installation_group !== "") && 
                <Box>
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
                </Box>
            }

            {
                (formStep === "2" || formResult.framework !== "") &&
                <Box>
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
            }
        </Box>

        {
            formResult.installation_group !== "" && formResult.framework !== "" && 
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Button
                    variant='contained'
                    sx={{
                        width: "200px",
                        height: "3.5rem",
                        position: "absolute",
                        bottom: "1rem",
                        left: "7rem",
                    }}
                    onClick={() => {
                        console.log(formResult)
                    }}
                >
                    Submit Your Form
                </Button>

                <Button
                    variant='outlined'
                    sx={{
                        width: "200px",
                        height: "3.5rem",
                        position: "absolute",
                        bottom: "1rem",
                        right: "7rem",
                    }}
                    onClick={() => {
                        handleOpen()
                    }}
                >
                    Reset Form
                </Button>
            </Box>
        }

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="form reset warning"
            aria-describedby="Do you want to reset this form?"
        >
            <Box sx={style}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.5rem",
                        alignItems: "center"
                    }}
                >
                    <WarningAmberIcon color='warning' />
                    <Typography id="modal-modal-title" variant="h6" component="h2" color='#ed6c02'>
                        Form Reset
                    </Typography>
                </Box>
                
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Do you want to reset this form?
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.5rem",
                        alignItems: "center",
                        mt: "1.4rem"
                    }}
                >
                    <Button
                        onClick={() => {
                            handleClose()
                        }}
                    >Cancel</Button>

                    <Button
                        variant='contained'
                        onClick={() => {
                            setFormResult({
                                installation_group: "",
                                framework: ""
                              })
    
                            setFormStep("1")
                            handleClose()
                        }}
                    >Confirm</Button>
                </Box>
            </Box>
        </Modal>
    </Box>
  )
}

export default RightSideForm