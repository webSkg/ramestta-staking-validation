"use client";
import { Box, InputBase, Typography, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #D2CFCF",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "fit-content",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  marginTop: 8,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SortOptions = [{ name: "Performance" }, { name: "Latest" }];
const AllValidators = [
  {
    profile: "/assets/profile.png",
    name: "RamaGo 1",
    stakedAmount: "998000.0",
    OwnerRAMABalance: 600,
    TotalStake: "3,765,449.29",
    "Validator'sStake": "36,310.02",
    HeimdallFee: 10,
    TotalRewardEarned: 40,
    HealthStatus: "Healthy",
    DelegatedAmount: "1362.0",
    DelegatorsReward: "0.00",
  },
];

const index = () => {
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  return (
    <>
      <Typography pl={4} mb={2} fontSize={20} fontWeight={800}>
        All Validators
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box width={240} mr={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              label="Sort By"
              autoWidth
            >
              {SortOptions.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};
export default index;
