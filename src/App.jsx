import "./App.css";

function CardComponent(props) {
  if (props.number < 10) {
    return null;
  } else if (props.number > 50) {
    return <div>
      <h1>Big number</h1>
      <p>{props.number}</p>
    </div>
  } else {
    return <div>
    <h3>{props.title}</h3>
    <h5>{props.subtitle}</h5>
    <p>{props.content}</p>
    <br></br>
    <button>{props.buttonText}</button>
    <number>{props.number}</number>
  </div>
  }
}

function App() {
  return <div>
    <CardComponent title={"Card title 1"} subitle={"Card1"} content={"This is the first text!"} buttonText={"Press me"} number={11}></CardComponent>
    <CardComponent title={"Card title 2"} subitle={"Card2"} content={"This is more text!"} buttonText={"Press me"} number={49}></CardComponent>
    <CardComponent title={"Card title 3"} subitle={"Card3"} content={"This is a lot of text!"} buttonText={"Press me"} number={100}></CardComponent>
  </div>;
  
}

export default App;
