interface welcomeProp {
  setRender: (render: string) => void;
}

export default function Portfolio(props: welcomeProp): JSX.Element {
  return (
    <>
      <div className="page">
        <h1> Katrina Woolley, Portfolio page.</h1>
        <a href="https://github.com/katrinalea"> Git Hub</a>
        <br />
        <a href ="www.linkedin.com/in/katrina-woolley-763033201">LinkedIn</a>
        <hr />
        <button onClick={() => props.setRender("full-stack")}>
          {" "}
          Full-Stack Projects
        </button>
        <hr />
        <button onClick={() => props.setRender("front-end")}>
          {" "}
          Front-End Projects
        </button>
        <hr />
        <button onClick={() => props.setRender("kata")}> Katas </button>
      </div>
    </>
  );
}
