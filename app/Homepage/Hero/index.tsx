import { Box, Typography } from "@mui/material"
import StakingButton from "../../commons/StakingButton"
import Overview from "../Overview"
const index = () => {
  return (
    <>
      <Box height={"400px"} bgcolor={"#0C111F"} display={"flex"}>
        <Box
          width={"50%"}
          marginY={"auto"}
          paddingLeft={"60px"}
          sx={{
            backgroundImage: 'url("/assets/Circle.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        >
          <Typography
            color={"white"}
            fontSize={54}
            marginY={"auto"}
            fontWeight={"600"}
          >
            Start earning rewards with{" "}
            <span style={{ color: "#00796D" }}>Rama Staking.</span>
          </Typography>
          <StakingButton text={"Become a Validator"} />
        </Box>
        <Box
          width={"50%"}
          sx={{
            backgroundImage: 'url("/assets/coin.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
          }}
        />
      </Box>
      <Box position={"relative"} top={-80} padding={4}>
        <Overview />
      </Box>
    </>
  )
}

export default index
