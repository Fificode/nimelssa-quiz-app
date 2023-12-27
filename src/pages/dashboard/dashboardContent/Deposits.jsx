import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Upcoming Test</Title>
      <Typography component="p" variant="h4">
       Friday
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2024
      </Typography>
      <div>
        <Link sx={{color: 'purple', textDecoration: 'none'}} href="#" onClick={preventDefault}>
          View upcoming tests
        </Link>
      </div>
    </React.Fragment>
  );
}