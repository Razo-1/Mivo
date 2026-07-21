import { Films } from '../../../../Shared/ui/Films/Films';
import { useAppSelector } from '../../../../App/Hooks';

function NewMovies({  }){
    
    const { results,total_pages } = useAppSelector(state => state.releaseData)
    
    return(
        <>
          <Films release={results} text={'Trending Now'}/>
        </>
      
    )
}

export { NewMovies }