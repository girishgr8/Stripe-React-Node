import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import StripePayment from "./StripePayment";
import Course from "./Course";
import PaymentSuccess from "./PaymentSuccess";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="payment" element={<StripePayment />} />
          <Route path="success" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
