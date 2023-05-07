import * as React from 'react';
import Pagination from '@mui/material/TablePagination';
import Stack from '@mui/material/Stack';

export function UsePagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={1} variant="outlined"/>
    </Stack>
  )
};
