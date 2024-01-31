import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ItemsContextProvider } from "./contexts/items";
import { Home } from "./components/Home/HomeComponent";
import { ItemDetails } from "./components/ItemDetails/ItemDetailsComponent";
import { Layout } from "./components/Layout/LayoutComponent";
import { CartContextProvider } from "./contexts/cart";


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
            <CartContextProvider>
                <ItemsContextProvider>
                    <RouterProvider router={router} />
                </ItemsContextProvider>
            </CartContextProvider>
        </>
    );
}

export default App;
