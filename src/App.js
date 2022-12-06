import './App.css';
import UpdateButton from "./components/ui/Buttons/UpdateButton/UpdateButton";
import {useGetCharacters} from "./components/hooks/useGetUsers";
import AddCharacterButton from "./components/ui/Buttons/AddCharacterButton/AddCharacterButton";
import EditCharacterButton from "./components/ui/Buttons/EditCharacterButton/EditCharacterButton";
import AddWeaponButton from "./components/ui/Buttons/AddWeaponButton/AddWeaponButton";
import DeleteWeaponButton from "./components/ui/Buttons/DeleteWeaponButton/DeleteWeaponButton";

function App() {

    let Test = () => {
        console.log(useGetCharacters())
    }

  return (
    <div className="App">

        <div className="Menu">
            <UpdateButton/>
            <AddCharacterButton/>
            <EditCharacterButton/>
            <AddWeaponButton/>
            <DeleteWeaponButton/>
        </div>

    </div>
  );
}

export default App;
