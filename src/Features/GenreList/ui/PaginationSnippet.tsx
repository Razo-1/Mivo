import { Box, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../App/Hooks';
import { useEffect, useState, type ChangeEvent } from 'react';
import { findThunk } from '../../../Entities/MovieFinder';
import { relseThunk } from '../../../Entities/NewReleases/model';
import { genFilmThunk } from '../../../Entities/GenreFilms/model';


function PaginationSnippet() {

  const { totalPages, query } = useAppSelector(
    state => state.findData
  );

  const { total_pages } = useAppSelector(
    state => state.releaseData
  );

  const { total_Gen_pages, genreId } = useAppSelector(
    state => state.genFilmsData
  );


  const dispatch = useAppDispatch();

  const [currentPage, setPage] = useState<number>(1);

   useEffect(() => {
    setPage(1);
  }, [query, genreId, totalPages, total_Gen_pages]);


  const handlePageChange = (
    e: ChangeEvent<unknown>,
    value: number
  ) => {

    setPage(value);

    if (genreId !== null) {

      dispatch(genFilmThunk({
        genreId,
        page: value
      }));

    } else if (query) {

      dispatch(findThunk({
        query,
        page: value
      }));

    } else {

      dispatch(relseThunk(value));

    }
  };


  const pages =
    total_Gen_pages ??
    totalPages ??
    total_pages;


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
        count={pages}
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

export { PaginationSnippet };