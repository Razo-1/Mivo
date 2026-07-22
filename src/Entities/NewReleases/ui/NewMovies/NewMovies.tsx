import { MediaSection } from '../../../../Features/Films'; 
import { useAppSelector } from '../../../../App/Hooks';

function NewMovies(){
    
    const { results } = useAppSelector(state => state.releaseData)
    
    return(
        <>
          <MediaSection results={results} text={'Trending Now'}/>
        </>
      
    )
}

export { NewMovies }