interface FEProp {
  setRender: (render: string) => void;
}

export default function FrontEnd(props: FEProp): JSX.Element {
  return (
    <>
      <div className="page">
        <h1> Front End Applications</h1>
        <button className = "button-pages" onClick={() => props.setRender("welcome")}> Home </button>
        <hr />
        <div className = "grid-container">
        
        <div className = "items">
        <a href="https://visitedcountries.netlify.app"> Travel planner </a>
        <p>
          {" "}
          Allows you to search through the worlds countries, and mark them as
          visted or want to visit.
        </p>
        <a href="https://github.com/katrinalea/countrys-API"> GitHub Repo</a>
        </div>
        
       
        <div className = "items">
        <a href="https://baby-names-katrina.netlify.app/"> Baby Names </a>
        <p>
          {" "}
          Search and filter baby names based on gender, select and de-select
          your favourites !
        </p>
        <a href="https://github.com/katrinalea/baby-names"> GitHub Repo</a>
        </div>
       
        
        <div className = "items">
        <a href="https://benevolent-praline-0fd986.netlify.app/"> TV Shows </a>
        <p>
          {" "}
          Search and filter TV shows, select a show to look at it's episodes!
          This was a collaborative project in a team of two.
        </p>
        <a href="https://github.com/katrinalea/tv-shows"> GitHub Repo</a>
        </div>
        </div>
      </div>
    </>
  );
}
