const TodoList = () => {
  const name = "Hedy Fallah";

  return (
    <>
      <h1>{name}'s Todos</h1>
      <img
        src="https://react.dev/images/docs/scientists/yXOvdOSs.jpg"
        alt={name}
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
};

export default TodoList;
