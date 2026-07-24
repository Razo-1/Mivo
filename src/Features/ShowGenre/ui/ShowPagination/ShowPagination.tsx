import { useEffect, useState, type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../App/Hooks';
import { Box, Pagination } from '@mui/material';
import { findShowThunk } from '../../../../Entities/MediaShow';
import { showThunk } from '../../../../Entities/tvShow/model'; 
import { mediaGenThunk } from '../../../../Entities/mediaGenres';

function ShowPagination() {
  const { totalPages, query } = useAppSelector(state => state.findShowData);
  const { total_pages } = useAppSelector(state => state.showData);
  const { total_Gen_pages, genId } = useAppSelector(state => state.mediaGenData);

  const dispatch = useAppDispatch();
  const [currentPage, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [query, genId, totalPages, total_Gen_pages]);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);

    if (genId !== null) {
      dispatch(mediaGenThunk({ genId, page: value }));
    } else if (query) {
      dispatch(findShowThunk({ query, page: value }));
    } else {
      dispatch(showThunk(value));
    }
  };

  const pages = total_Gen_pages ?? totalPages ?? total_pages;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        mb: 4,
        width: '100%'
      }}
    >
      <Pagination
        count={pages || 1}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#fff',
            borderColor: 'rgba(255,255,255,0.15)',
          },
          '& .MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#ffc107',
            color: '#000',
          }
        }}
      />
    </Box>
  );
}

export { ShowPagination };
