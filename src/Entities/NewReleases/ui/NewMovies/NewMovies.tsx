import { Films } from '../../../../Shared/ui/Films/Films';
import { useAppSelector } from '../../../../App/Hooks';

function NewMovies({  }){
    
    const { item } = useAppSelector(state => state.releaseData)
    
    return(
        <>
          <Films release={item} text={'Trending Now'}/>
        </>
      
    )
}

export { NewMovies }