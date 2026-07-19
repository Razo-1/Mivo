import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../App/Hooks";
import { showThunk } from "../model";
import { Films } from "../../../Shared/ui/Films/Films";


function Show(){

      const dispatch = useAppDispatch();
      const { show } = useAppSelector(state => state.showData);
        
      useEffect(() => {
        dispatch(showThunk())
      },[dispatch])

      let release = show
    
    return(
        <>
            <Films release={release} text={'Popular on TV'}/>
        </>
    )

}

export { Show }