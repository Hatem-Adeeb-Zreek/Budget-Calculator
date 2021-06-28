import "./App.css";
import List from "./components/List";
import Alert from "./components/Alert";
import Form from "./components/Form";

function App() {
    return (
        // React Fragments allow you to wrap or group multiple elements
        // without adding an extra node to the DOM.
        // This can be useful when rendering multiple child elements/components
        //  in a single parent component.
        <>
            <Alert />
            <Form />
            <List />
        </>
    );
}

export default App;
