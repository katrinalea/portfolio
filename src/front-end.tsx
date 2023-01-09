interface FEProp {
  setRender: (render: string) => void;
}

export default function FrontEnd(props: FEProp): JSX.Element {
  return (
    <>
      <div className="page">
        <h1> Front End Applications</h1>
        <button onClick={() => props.setRender("welcome")}> Home </button>
        <hr />
        <a href="https://visitedcountries.netlify.app"> Travel planner </a>
        <br />
        <p>
          {" "}
          Allows you to search through the worlds countries, and mark them as
          visted or want to visit
        </p>
        <hr />
        <a href="https://baby-names-katrina.netlify.app/"> Baby Names </a>
        <p>
          {" "}
          Search and filter baby names based on gender, select and de-select
          your favourites !
        </p>
      </div>
    </>
  );
}
