import { ItemsList } from "./components/ItemsList/ItemsLIstComponent"
import { Navigation } from "./components/Navigation/NavigationComponent"
import { ItemsContextProvider } from "./contexts/items"

function App() {
  ItemsContextProvider
  return (
    <>
      <Navigation/>
      <ItemsContextProvider>
        <ItemsList/>     
      </ItemsContextProvider>
    </>
  )
}

export default App
