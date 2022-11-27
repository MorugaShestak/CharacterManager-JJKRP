import './App.css';
import UpdateButton from "./components/ui/UpdateButton/UpdateButton";
import AdminButton from "./components/ui/AddCharacterButton/AddCharacterButton";
import Table from "./components/ui/Table/Table";
import {useGetCharacters} from "./components/hooks/useGetCharacters";
import AddCharacterButton from "./components/ui/AddCharacterButton/AddCharacterButton";

function App() {

    let Test = () => {
        console.log(useGetCharacters())
    }

  return (
    <div className="App">
        <div className="Menu">
            <UpdateButton/>
            <AddCharacterButton/>
        </div>

        <div className="Table">
            <Table/>
        </div>

    </div>
  );
}

export default App;
