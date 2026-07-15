import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { Provider } from "react-redux";
import { store } from "./Store";
import './Style/App.css';

function App(){
    return(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    )
}

export { App }