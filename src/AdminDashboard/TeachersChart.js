import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const colors = ['#09eb27', '#0909eb']

const data = [
  { value: 20, label: 'Male', color:colors[0] },
  { value: 15, label: 'Female', color:colors[1]  }
];

const size = {
  width: 400,
  height: 400,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 30,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function TeachersChart() {
  return (
    <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
      <PieCenterLabel>Total Teachers</PieCenterLabel>
    </PieChart>
  );
}