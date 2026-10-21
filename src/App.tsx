import Avatar from "./components/Avatar";
import Gallery, { Profile } from "./components/Gallery";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Profile />
      <Gallery />
      <TodoList />
      <Avatar />
    </div>
  );
}

export default App;
