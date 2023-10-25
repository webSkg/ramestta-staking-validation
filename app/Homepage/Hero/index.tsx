import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <Box height={"400px"} bgcolor={"#0C111F"} display={"flex"}>
      <Box width={"50%"}>
        <Typography color={"white"} fontSize={42} marginY={"auto"}>
          Start earning rewards with{" "}
          <span style={{ color: "#00796D" }}>Rama Staking.</span>
        </Typography>
      </Box>
      <Box width={"fit-content"}>
        <img src="/assets/coin.png" alt="" />
      </Box>
    </Box>
  );
};

export default index;
