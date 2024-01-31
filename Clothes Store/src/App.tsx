import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ItemsContextProvider } from "./contexts/items";
import { Home } from "./components/Home/HomeComponent";
import { ItemDetails } from "./components/ItemDetails/ItemDetailsComponent";
import { Layout } from "./components/Layout/LayoutComponent";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
              path: '/:itemId',
              element: <ItemDetails/>
            }
        ]
    
    },

    
]);

function App() {
    return (
        <>
            <ItemsContextProvider>
                <RouterProvider router={router} />
            </ItemsContextProvider>
        </>
    );
}

export default App;
