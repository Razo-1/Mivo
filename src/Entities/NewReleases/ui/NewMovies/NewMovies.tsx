import { useSelector } from 'react-redux';
import type { RootState } from '../../../../App/Store';
import { Films } from '../../../../Shared/ui/Films/Films';

function NewMovies({  }){
    
    const { item } = useSelector((state: RootState) => state.releaseData);
    
    return(
        <>
          <Films release={item} text={'Trending Now'}/>
        </>
      
    )
}

export { NewMovies }