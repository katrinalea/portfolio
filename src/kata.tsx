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
      </div>
    </>
  );
}
