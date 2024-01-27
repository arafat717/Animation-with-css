import "./App.css";

function App() {
  const name = "Arafat Hossen Joni";
  const nameArr = name.split("");
  return (
    <>
      <div className="mains">
        <div className="box-1"></div>
      </div>
      <div className="main-btn">
        <button className="btn">Hover Me</button>
      </div>
      <div className="main">
        <div className="loading">
          <div className="glass"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="card-main">
        <div className="card">
          <h1>Container</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            iste repellendus saepe neque harum quos id assumenda culpa suscipit
            sed.
          </p>
        </div>
      </div>
      <div className="main-last">
        <div className="container">
          {nameArr.map((item, i) => (
            <span
              className="alphabat"
              style={{ transitionDelay: `${i * 50}ms ` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
