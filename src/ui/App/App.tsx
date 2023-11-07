import Main from "../Pages/Main";
import { ProductProvider } from "../../core/Context";

function App() {
  return (
    <ProductProvider>
      <Main></Main>
    </ProductProvider>
  );
}

export default App;
