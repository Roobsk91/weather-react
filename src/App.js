import './App.css';

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Titillium+Web&display=swap"
        rel="stylesheet"
      />
      <div class="container">
        <div class="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">London</h1>
              <ul>
                <li>
                  Last updated <span id="date">Saturday 20:30</span>
                </li>
                <li id="description">Broken Clouds</li>
              </ul>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="" id="icon" />
                    <strong id="temperature">15</strong>
                    <span className="units">ºC</span>
                  </div>
                </div>

                <div className="col-6">
                  <ul>
                    <li>
                      Humidity: <span id="humidity">85</span>%
                    </li>
                    <li>
                      Wind: <span id="wind">7</span> m/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="open-source">Coded by Ruby Smith, open-sourced on <a href="https://github.com/Roobsk91/weather-react">GitHub</a></p>
    </div>
  );
}

export default App;
