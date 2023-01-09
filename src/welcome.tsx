interface welcomeProp {
    setRender: (render: string) => void
}

export default function Portfolio (props: welcomeProp): JSX.Element {
    return (
        <>
    <div className = "page">
    <h1> Katrina Woolley, Portfolio page.</h1>
    <a href = "https://github.com/katrinalea"> Katrinalea Git Hub</a>
    <hr />
    <button onClick = {() => props.setRender("full-stack")}> Full-Stack Projects</button>
    <hr />
    <button onClick = {() => props.setRender("front-end")}> Front-End Projects</button>
    <hr />
    <button onClick = {() => props.setRender("kata")}> Katas </button>
    </div>
    </>
    )
}