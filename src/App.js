import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Calculator from "./components/calculator/Calculator";
function App() {
  const name = "philosophy";
  return (
    <div className="App">
      <Header />
      <Content name1={name} />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
