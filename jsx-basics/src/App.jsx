import './App.css'

function App() {

  let now = new Date().getHours;
  let time;
    if (now <= 12 && now >= 6) {
    time = <p>Good morning</p>;
  } else if (now > 12 && now < 20) {
    time = <p>Good afternoon</p>;
  } else {
    time = <p>Good night</p>;
  }

  return (
    <>
      <h1><p>{time}</p></h1>    </>
  )
}

export default App
