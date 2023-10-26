"use client";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

type PropsType = {
  text: string;
};

const GradientButton = styled(Button)`
  background: linear-gradient(280deg, #38c682 30%, #00796d 100%);
  border-radius: 8px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  border: 1px solid white;
`;
const index = ({ text }: PropsType) => {
  return <GradientButton variant="contained">{text}</GradientButton>;
};

export default index;
