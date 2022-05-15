import "./App.css";
import { Routes, Route } from "react-router";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { Layout } from "antd";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";

const { Header, Footer, Content } = Layout;

function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <div className="App">
      <Layout>

        <Header>
          <Navbar />
        </Header>
  {/* ------------ */}   
        <Content>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/items" element={<Items />}></Route>
          </Routes>
        </Content>
{/* ------------ */}
        <Footer>Thanks fro using this App</Footer>

      </Layout>
    </div>
  );
}

export default App;
