import { BrowserRouter } from "react-router-dom";
import { ShoppyCartProvider } from "../../context";
import AppRoutes from "./AppRoutes";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";

const App = () => {
  return (
    <ShoppyCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppyCartProvider>
  );
};

export default App;
