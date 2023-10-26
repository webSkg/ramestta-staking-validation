import { Box, Grid, Typography } from "@mui/material"

const Content = [
  { head: "TOTAL VALIDATORS", subHead: "30", superSubHead: "", isTime: false },
  {
    head: "TOTAL STAKE",
    subHead: "4097390 RAMA",
    superSubHead: "$4,226,461,757.80",
    isTime: false,
  },
  {
    head: "TOTAL REWARDS DISTRIBUTED",
    subHead: "11854754.53 RAMA",
    superSubHead: "$870,050,460.82",
    isTime: false,
  },
  {
    head: "BOR BLOCK HEIGHT",
    subHead: "4983960",
    superSubHead: "",
    isTime: false,
  },
  {
    head: "HEIMDALL BLOCK HEIGHT",
    subHead: "13,587,270",
    superSubHead: "",
    isTime: false,
  },
  {
    head: "LAST CHECKPOINT",
    subHead: "44,903",
    superSubHead: "1 hour ago",
    isTime: true,
  },
  {
    head: "CHECKPOINT INTERVAL",
    subHead: "33 Minutes",
    superSubHead: "",
    isTime: false,
  },
  {
    head: "PERFORMANCE BENCHMARK",
    subHead: "4983960",
    superSubHead: "",
    isTime: false,
  },
]
const index = () => {
  return (
    <Box
      bgcolor={"white"}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"18px"}
      sx={{
        boxShadow: "0px 10px 25px 0px rgba(37, 42, 52, 0.08)",
        flexGrow: 1,
      }}
      overflow={"clip"}
    >
      <Typography width={"100%"} borderBottom={1} borderColor={"#E8E8E8"} p={2}>
        Overview
      </Typography>
      <Grid container>
        {Content.map((lime, index) => (
          <Grid key={index} sm={3} xs={6}>
            <Box
              height={200}
              px={4}
              pt={6}
              borderBottom={1}
              borderRight={1}
              borderColor={"#E8E8E8"}
            >
              <Typography fontSize={14} color={"#B7B3B3"}>
                {lime.head}
              </Typography>
              <Typography fontWeight={800} fontSize={24}>
                {lime.subHead}
              </Typography>
              {lime.superSubHead && (
                <Typography color={lime.isTime ? "lime" : "#B7B3B3"}>
                  {lime.superSubHead}
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default index
