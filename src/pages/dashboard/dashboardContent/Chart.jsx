import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';

// Generate Sales Data
function createData(date, score) {
  return { date, score };
}

const data = [
  createData('07/10,2024', 0),
  createData('09/05/2024', 10),
  createData('07/05/2024', 20),
  createData('08/04/2024', 30),
  createData('09/04/2024', 40),
  createData('04/03/2024', 50),
  createData('21/03/2024', 60),
  createData('06/09/2024', 70),
  createData('26/09/2024', 80),
  createData('01/04/2024', 90),
  createData('03/04/2024', 100),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Performance</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Quiz(%)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="score"
            stroke={'#cd9cf2'}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}