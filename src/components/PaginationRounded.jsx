import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {

  return (
    <Stack spacing={2} margin="30px" sx={{display:"flex", justifyContent:"center", alignItems:"center" }}>
      <Pagination count={42} variant="outlined" shape="rounded" />
    </Stack>
  )
}