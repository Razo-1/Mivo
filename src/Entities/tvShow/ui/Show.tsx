import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks";
import { showThunk } from "../model";
import { MediaSection } from "../../../Features/Films"; 


function Show(){

      const dispatch = useAppDispatch();
      const { show } = useAppSelector(state => state.showData);
        
      useEffect(() => {
        dispatch(showThunk(1))
      },[dispatch])

      let results = show
      
    return(
        <>
            <MediaSection results={results} text={'Popular on TV'}/>
        </>
    )

}

export { Show }