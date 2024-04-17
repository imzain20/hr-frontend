import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IndexCall from "./screens";
import Customers from "./screens/Customers/Customer.component";
import Suppliers from "./screens/Suppliers/Supplier.component";
import CreateContactScreen from "./screens/CreateContact/CreateContact";
import ViewContact from "./screens/ViewContact/ViewContact";
import ImportContact from "./screens/ImportContacts/ImportContact";
import { CrmContextProvider } from "./context/CRMcontext";

function App() {
  return (
    <CrmContextProvider>
      <Router>
        <Routes>
          <Route path="/CRM/*" element={<IndexCall />}>
            <Route path="customers" element={<Customers />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="create-contact" element={<CreateContactScreen />} />
            <Route path="view-contact" element={<ViewContact />} />
            <Route path="import-contacts" element={<ImportContact />} />
          </Route>
        </Routes>
        <ToastContainer />
      </Router>
    </CrmContextProvider>
  );
}

export default App;
