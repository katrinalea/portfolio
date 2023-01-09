
interface FSProp {
    setRender: (render: string) => void
}




export default function FullStack (props: FSProp) : JSX.Element {
    return ( <>
    <div className = "page">
    <h1> Full Stack Applications </h1>
    <button onClick= {() => props.setRender("welcome")}> Home </button>
    <hr />
     <a href = "https://spanish-flashcards.netlify.app"> Spanish Flashcards</a>
     <br />
     <p> An interactive game to help the user learn spanish! Allows the user to choose a custom test stack amount, store their score upon completion 
        and access a leaderboard which tracks the top 10 scores from all users.</p>
    <hr />
    <a href = "https://to-do-list-katrina.netlify.app"> To-Do list</a>
    <p> A simple to-do list tool, allowing the user to input an item, delete or edit individual items and mark them as complete.</p>
    </div> 
    </>)
}