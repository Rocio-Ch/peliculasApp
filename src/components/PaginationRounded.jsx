import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

export default function PaginationRounded({
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  function handleChangePage(e, page) {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Stack
      spacing={2}
      margin="30px"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Pagination
        onChange={handleChangePage}
        count={totalPages}
        variant="outlined"
        shape="rounded"
        page={currentPage}
      />
    </Stack>
  )
}
