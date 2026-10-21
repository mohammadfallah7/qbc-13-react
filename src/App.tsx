import Avatar from "./components/Avatar";
import Gallery from "./components/Gallery";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Gallery />
      <TodoList />
      <Avatar size={150} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
      <Avatar
        size={100}
        person={{ name: "Katherine Johnson", imageId: "MK3eW3As" }}
      />
    </div>
  );
}

export default App;
