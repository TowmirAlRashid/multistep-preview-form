// mui imports
import { Box, Typography } from "@mui/material";

// react state import
import { useState } from "react";

// components import
import LeftSideForm from "./components/LeftSideForm";
import RightSideForm from "./components/RightSideForm";


function App() {
  const [formStep, setFormStep] = useState("1")

  const [formResult, setFormResult] = useState({
    installation_group: "",
    framework: ""
  })

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Box  // Detailed Selective form
        sx={{
          width: "66%",
          height: "100vh",
          backgroundColor: "white"
        }}
      >
        <Typography // title of the form
          sx={{
            width: "100%",
            p: "2rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "black"
          }}
        >
          Detailed Selective Form
        </Typography>

        <LeftSideForm 
            formStep={formStep}
            setFormStep={setFormStep}
            formResult={formResult} 
            setFormResult={setFormResult}
          />
      </Box>


      <Box  // Short Selective form
        sx={{
          width: "34%",
          height: "100vh",
          backgroundColor: "#f2f7ff"
        }}
      >
        <Typography // title of the form
          sx={{
            width: "100%",
            p: "2rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "black"
          }}
        >
          Short Selective Form
        </Typography>

        <RightSideForm 
          formStep={formStep}
          setFormStep={setFormStep}
          formResult={formResult} 
          setFormResult={setFormResult}
        />
      </Box>
    </Box>
  );
}

export default App;
