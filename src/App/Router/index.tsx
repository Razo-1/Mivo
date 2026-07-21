import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../Widgets/MainLayout/ui";
import { Trailer } from "../../Pages/FreshMovie/ui/Trailer/Trailer";
import { MovieViewPage } from "../../Pages/MoviesPage/ui";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Trailer/>
            },
            {
                path : '/Movies',
                element : <MovieViewPage/>
            }
        ]
    }
])

export { router }