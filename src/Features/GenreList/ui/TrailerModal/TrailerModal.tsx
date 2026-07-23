import { Dialog, DialogContent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../App/Hooks";
import { openScreen } from "../../../../Entities/OpenScreen";



function TrailerModal() {

       const { key,open } = useAppSelector(state => state.screenChang)
       const dispatch = useAppDispatch();
        let handleClose = () => {
            dispatch(openScreen(null))
        }
        
        return (
            <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xl"
            fullWidth
            >
            <DialogContent sx={{ p: 0 }}>
                <iframe
                    width="100%"
                    height="700"
                    src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
                    title="Trailer"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{
                        border: 0
                    }}
                />
            </DialogContent>
            </Dialog>
        );
}

export { TrailerModal };