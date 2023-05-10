import "./App.css";

function App() {
  return (
    <>
      <h1>Simple CRUD</h1>
      <form>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
