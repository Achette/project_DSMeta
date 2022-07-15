import { Header, SalesCard } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
