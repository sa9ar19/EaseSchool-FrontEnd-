import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const colors = ['#0e90ed', '#b3eb09']

const data = [
  { value: 775, label: 'Boys', color:colors[0] },
  { value: 425, label: 'Girls', color:colors[1]  }
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

export default function StudentsChart() {
  return (
    <PieChart series={[{ data, innerRadius: 100 }]} {...size}>
      <PieCenterLabel>Total Students</PieCenterLabel>
    </PieChart>
  );
}