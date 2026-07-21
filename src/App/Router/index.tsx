import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../../Widgets/MainLayout/ui";
import { Trailer } from "../../Pages/FreshMovie/ui/Trailer/Trailer";
import { MovieViewPage } from "../../Pages/MoviesPage/ui";
import { Show } from "../../Pages";

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
            },
            {
                path : 'TV Shows',
                element : <Show/>
            }

        ]
    }
])

export { router }