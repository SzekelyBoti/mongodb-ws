export default function Layout(props) {
  const setPage = props.setPage;

  return (
    <div>
      <div className="navbar">
        <button onClick={() => setPage("main")}>Main page</button>
        <button onClick={() => setPage("language-creator")}>Add programming language</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("demo")}>Demo</button>
      </div>
    </div>
  );
}
