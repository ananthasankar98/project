import EventsPage from "./components/events/EventsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventsTable from "./components/eventstable/EventsTable";

function App(){
  return(
    <div class="bg-slate-900	background-color: rgb(15 23 42);">
      <Navbar/>
      <EventsTable/>
      <Footer/>
    </div>
    
    
  );
}

export default App; 