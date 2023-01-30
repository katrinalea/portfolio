interface FSProp {
  setRender: (render: string) => void;
}

export default function FullStack(props: FSProp): JSX.Element {
  return (
    <>
      <div className="page">
        <h1> Full Stack Applications </h1>
        <button
          className="button-pages"
          onClick={() => props.setRender("welcome")}
        >
          {" "}
          Home{" "}
        </button>
        <p>
          Projects are deployed using render.com as a remote server so their may
          be a delay with database connection when first loading the apps.
        </p>
        <hr />
        <div className="grid-container">
          <div className="items">
            <a href="https://spanish-flashcards.netlify.app">
              {" "}
              Spanish Flashcards
            </a>
            <br />
            <p>
              {" "}
              An interactive game to help the user learn spanish! Allows the
              user to choose a custom test stack amount, store their score upon
              completion and access a leaderboard which tracks the top 10 scores
              from all users.
            </p>
            <br />
            <a href="https://github.com/katrinalea/flash-cards">
              {" "}
              GitHub Front-End Repo
            </a>
            <br />
            <a href="https://github.com/katrinalea/flash-card-backend">
              {" "}
              GitHub Back-End Repo
            </a>
          </div>
          <div className="items">
            <a href="https://to-do-list-katrina.netlify.app"> To-Do list</a>
            <p>
              {" "}
              A simple to-do list tool, allowing the user to input an item,
              delete or edit individual items and mark them as complete.
            </p>
            <br />
            <a href="https://github.com/katrinalea/to-do-app">
              {" "}
              GitHub Front-End Repo
            </a>
            <br />
            <a href="https://github.com/katrinalea/to-do-backEnd">
              {" "}
              GitHub Back-End Repo
            </a>
          </div>
          <div className="items">
            <a href="https://life-organiser.netlify.app/"> Organiser App</a>
            <h3> Work in progress !</h3>
            <p>
              {" "}
              Currently working on an organiser app, that contains an address
              book, notes page, to-do list and phone book to help the user
              organise their life. Also working to incorporate react-router
              within this app.
            </p>
            <br />
            <a href="https://github.com/katrinalea/organiser">
              {" "}
              GitHub Front-End Repo
            </a>
            <br />
            <a href="https://github.com/katrinalea/organiser-backend">
              {" "}
              GitHub Back-End Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
