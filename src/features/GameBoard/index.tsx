import { Box } from '@mui/material';
import { ActionBar } from './components/ActionBar';

export const GameBoard = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <ActionBar />
      <h1>Game Board</h1>
    </Box>
  );
};
