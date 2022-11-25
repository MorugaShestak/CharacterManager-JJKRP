import './App.css';
import UpdateButton from "./components/ui/UpdateButton/UpdateButton";
import AdminButton from "./components/ui/AdminButton/AdminButton";
import Table from "./components/ui/Table/Table";
import {useGetCharacters} from "./components/hooks/useGetCharacters";

function App() {

    let Test = () => {
        console.log(useGetCharacters())
    }

  return (
    <div className="App">
        <div className="Menu">
            <UpdateButton/>
            <AdminButton/>
        </div>

        <div className="Table">
            <Table/>
        </div>

    </div>
  );
}

export default App;
