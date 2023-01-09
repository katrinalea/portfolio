interface KataProp {
  setRender: (render: string) => void;
}

export default function Kata(props: KataProp): JSX.Element {
  return (
    <>
      <div className="page">
        <h1> Kata's</h1>
        <button onClick={() => props.setRender("welcome")}> Home </button>
        <hr />
        <a href="https://www.codewars.com/users/katrinalea">
          {" "}
          Code Wars account
        </a>
        <hr />
        <a href = "https://github.com/katrinalea/code-wars"> Kata GitHub </a>
        <p> Contains some katas solved from code-wars and from academy in typescript.</p>
      </div>
    </>
  );
}
