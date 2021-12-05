// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import './App.css';
// import ForecastTab from "./pages/forecastTab/ForecastTab";
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//
//   const [weatherData, setWeatherData] = useState({});
//   const [location, setLocation] = useState('');
//   const [error, toggleError] = useState(false);
//
//   useEffect(() => {
//
//     async function fetchData() {
//       toggleError(false);
//
//       try {
//         const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//         console.log(result.data);
//         setWeatherData(result.data);
//       } catch (e) {
//         toggleError(true);
//       }
//     }
//
//     if (location) {
//       fetchData();
//     }
//   }, [location]);
//
//
//
//   return (
//     <>
//       <div className="weather-container">
//
//         {/*HEADER -------------------- */}
//         <div className="weather-header">
//           <SearchBar setLocationHandler={setLocation} />
//           {error &&
//               <span className="wrong-location-error">
//               Oeps! Deze locatie bestaat niet
//             </span>
//           }
//           <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//             <>
//             <h2>{weatherData.weather[0].description}</h2>
//             <h3>{weatherData.name}</h3>
//             <h1>{weatherData.main.temp}</h1>
//             </>
//             }
//             <button type="button" onClick={fetchData}>
//               Haal data op!
//             </button>
//           </span>
//         </div>
//
//         {/*CONTENT ------------------ */}
//         <div className="weather-content">
//           <TabBarMenu/>
//
//           <div className="tab-wrapper">
//             <ForecastTab coordintes={weatherData.coord}/>
//           </div>
//         </div>
//
//         <MetricSlider/>
//       </div>
//     </>
//   );
// }
//
// export default App;



//1. Check weatherData before it renders

// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import './App.css';
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//   const [weatherData, setWeatherData] = useState({});
//
//   async function fetchData() {
//     try {
//       const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
//       console.log(result.data);
//       setWeatherData(result.data);
//     } catch (e) {
//       console.error(e);
//     }
//   }
//
//   return (
//       <>
//         <div className="weather-container">
//
//           {/*HEADER -------------------- */}
//           <div className="weather-header">
//             <SearchBar/>
//
//             <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                   <h2>{weatherData.weather[0].description}</h2>
//                   <h3>{weatherData.name}</h3>
//                   <h1>{weatherData.main.temp}</h1>
//                 </>
//             }
//               <button type="button" onClick={fetchData}>
//               Haal data op!
//             </button>
//           </span>
//           </div>
//
//           {/*CONTENT ------------------ */}
//           <div className="weather-content">
//             <TabBarMenu/>
//
//             <div className="tab-wrapper">
//               Alle inhoud van de tabbladen komt hier!
//             </div>
//           </div>
//
//           <MetricSlider/>
//         </div>
//       </>
//   );
// }
//
// export default App;


//2. Passed setLocation as callback prop to SearchBar

//
// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import './App.css';
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//   const [weatherData, setWeatherData] = useState({});
//   const [location, setLocation] = useState('');
//
//   async function fetchData() {
//     try {
//       const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=utrecht,nl&appid=${apiKey}&lang=nl`);
//       console.log(result.data);
//       setWeatherData(result.data);
//     } catch (e) {
//       console.error(e);
//     }
//   }
//
//   return (
//       <>
//         <div className="weather-container">
//
//           {/*HEADER -------------------- */}
//           <div className="weather-header">
//             <SearchBar setLocationHandler={setLocation} />
//
//             <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                   <h2>{weatherData.weather[0].description}</h2>
//                   <h3>{weatherData.name}</h3>
//                   <h1>{weatherData.main.temp}</h1>
//                 </>
//             }
//               <button type="button" onClick={fetchData}>
//               Haal data op!
//             </button>
//           </span>
//           </div>
//
//           {/*CONTENT ------------------ */}
//           <div className="weather-content">
//             <TabBarMenu/>
//
//             <div className="tab-wrapper">
//               Alle inhoud van de tabbladen komt hier!
//             </div>
//           </div>
//
//           <MetricSlider/>
//         </div>
//       </>
//   );
// }
//
// export default App;


//3. Make request end point dynamic

//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import './App.css';
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//   const [weatherData, setWeatherData] = useState({});
//   const [location, setLocation] = useState('');
//
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//         console.log(result.data);
//         setWeatherData(result.data);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//
//     if (location) {
//       fetchData();
//     }
//   }, [location]);
//
//   return (
//       <>
//         <div className="weather-container">
//
//           {/*HEADER -------------------- */}
//           <div className="weather-header">
//             <SearchBar setLocationHandler={setLocation}/>
//
//             <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                   <h2>{weatherData.weather[0].description}</h2>
//                   <h3>{weatherData.name}</h3>
//                   <h1>{weatherData.main.temp}</h1>
//                 </>
//             }
//           </span>
//           </div>
//
//           {/*CONTENT ------------------ */}
//           <div className="weather-content">
//             <TabBarMenu/>
//
//             <div className="tab-wrapper">
//               Alle inhoud van de tabbladen komt hier!
//             </div>
//           </div>
//
//           <MetricSlider/>
//         </div>
//       </>
//   );
// }
//
// export default App;



//4. Pass coordinates to ForecastTab


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import ForecastTab from './pages/forecastTab/ForecastTab';
// import './App.css';
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//   const [weatherData, setWeatherData] = useState({});
//   const [location, setLocation] = useState('');
//
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//         console.log(result.data);
//         setWeatherData(result.data);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//
//     if (location) {
//       fetchData();
//     }
//   }, [location]);
//
//   return (
//       <>
//         <div className="weather-container">
//
//           {/*HEADER -------------------- */}
//           <div className="weather-header">
//             <SearchBar setLocationHandler={setLocation}/>
//
//             <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                   <h2>{weatherData.weather[0].description}</h2>
//                   <h3>{weatherData.name}</h3>
//                   <h1>{weatherData.main.temp}</h1>
//                 </>
//             }
//           </span>
//           </div>
//
//           {/*CONTENT ------------------ */}
//           <div className="weather-content">
//             <TabBarMenu/>
//
//             <div className="tab-wrapper">
//               <ForecastTab coordinates={weatherData.coord}/>
//             </div>
//           </div>
//
//           <MetricSlider/>
//         </div>
//       </>
//   );
// }
//
// export default App;


//5. Use key for looping elements -->  CHECK "ForecastTab.js" and you need to scroll to the second one do you see it on 109?

//6. Add conditional error message

//
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import ForecastTab from './pages/forecastTab/ForecastTab';
// import './App.css';
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//     const [weatherData, setWeatherData] = useState({});
//     const [location, setLocation] = useState('');
//     const [error, toggleError] = useState(false);
//
//     useEffect(() => {
//         async function fetchData() {
//             toggleError(false);
//
//             try {
//                 const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//                 console.log(result.data);
//                 setWeatherData(result.data);
//             } catch (e) {
//                 console.error(e);
//                 toggleError(true);
//             }
//         }
//
//         if (location) {
//             fetchData();
//         }
//     }, [location]);
//
//     return (
//         <>
//             <div className="weather-container">
//
//                 {/*HEADER -------------------- */}
//                 <div className="weather-header">
//                     <SearchBar setLocationHandler={setLocation}/>
//                     {error &&
//                         <span className="wrong-location-error">
//                         Oeps! Deze locatie bestaat niet
//                          </span>
//                     }
//
//                     <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                     <h2>{weatherData.weather[0].description}</h2>
//                     <h3>{weatherData.name}</h3>
//                     <h1>{weatherData.main.temp}</h1>
//                 </>
//             }
//           </span>
//                 </div>
//
//                 {/*CONTENT ------------------ */}
//                 <div className="weather-content">
//                     <TabBarMenu/>
//
//                     <div className="tab-wrapper">
//                         <ForecastTab coordinates={weatherData.coord}/>
//                     </div>
//                 </div>
//
//                 <MetricSlider/>
//             </div>
//         </>
//     );
// }
//
// export default App;


//7. Import and add today component


// import React, { useState, useEffect } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from 'react-router-dom';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import ForecastTab from './pages/forecastTab/ForecastTab';
// import TodayTab from './pages/todayTab/TodayTab';
// import './App.css';
//
// const apiKey = 'plaats jouw unieke API key hier';
//
// function App() {
//     const [weatherData, setWeatherData] = useState({});
//     const [location, setLocation] = useState('');
//     const [error, toggleError] = useState(false);
//
//     useEffect(() => {
//         async function fetchData() {
//             toggleError(false);
//
//             try {
//                 const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//                 console.log(result.data);
//                 setWeatherData(result.data);
//             } catch (e) {
//                 console.error(e);
//                 toggleError(true);
//             }
//         }
//
//         if (location) {
//             fetchData();
//         }
//     }, [location]);
//
//     return (
//         <>
//             <div className="weather-container">
//
//                 {/*HEADER -------------------- */}
//                 <div className="weather-header">
//                     <SearchBar setLocationHandler={setLocation}/>
//                     {error &&
//                         <span className="wrong-location-error">
//               Oeps! Deze locatie bestaat niet
//             </span>
//                     }
//
//                     <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                     <h2>{weatherData.weather[0].description}</h2>
//                     <h3>{weatherData.name}</h3>
//                     <h1>{weatherData.main.temp}</h1>
//                 </>
//             }
//           </span>
//                 </div>
//
//                 {/*CONTENT ------------------ */}
//                 <Router>
//                     <div className="weather-content">
//                         <TabBarMenu/>
//
//                         <Switch>
//                             <div className="tab-wrapper">
//                                 <Route path="/komende-week">
//                                     <ForecastTab coordinates={weatherData.coord}/>
//                                 </Route>
//                                 <Route path="/" exact>
//                                     <TodayTab />
//                                 </Route>
//                             </div>
//                         </Switch>
//                     </div>
//                 </Router>
//
//                 <MetricSlider/>
//             </div>
//         </>
//     );
// }
//
// export default App;


// 10.  only set three hourly forecasts

// import React, { useState, useEffect } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
// } from 'react-router-dom';
// import axios from 'axios';
// import SearchBar from './components/searchBar/SearchBar';
// import TabBarMenu from './components/tabBarMenu/TabBarMenu';
// import MetricSlider from './components/metricSlider/MetricSlider';
// import ForecastTab from './pages/forecastTab/ForecastTab';
// import TodayTab from './pages/todayTab/TodayTab';
// import kelvinToCelsius from './helpers/kelvinToCelsius';
// import './App.css';
//
// const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';
//
// function App() {
//     const [weatherData, setWeatherData] = useState({});
//     const [location, setLocation] = useState('');
//     const [error, toggleError] = useState(false);
//
//     useEffect(() => {
//         async function fetchData() {
//             toggleError(false);
//
//             try {
//                 const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
//                 console.log(result.data);
//                 setWeatherData(result.data);
//             } catch (e) {
//                 console.error(e);
//                 toggleError(true);
//             }
//         }
//
//         if (location) {
//             fetchData();
//         }
//     }, [location]);
//
//     return (
//         <>
//             <div className="weather-container">
//
//                 {/*HEADER -------------------- */}
//                 <div className="weather-header">
//                     <SearchBar setLocationHandler={setLocation}/>
//                     {error &&
//                         <span className="wrong-location-error">
//               Oeps! Deze locatie bestaat niet
//             </span>
//                     }
//
//                     <span className="location-details">
//             {Object.keys(weatherData).length > 0 &&
//                 <>
//                     <h2>{weatherData.weather[0].description}</h2>
//                     <h3>{weatherData.name}</h3>
//                     <h1>{kelvinToCelsius(weatherData.main.temp)}</h1>
//                 </>
//             }
//           </span>
//                 </div>
//
//                 {/*CONTENT ------------------ */}
//                 <Router>
//                     <div className="weather-content">
//                         <TabBarMenu/>
//
//                         <div className="tab-wrapper">
//                             <Switch>
//                                 <Route path="/komende-week">
//                                     <ForecastTab coordinates={weatherData.coord}/>
//                                 </Route>
//                                 <Route path="/" exact>
//                                     <TodayTab coordinates={weatherData.coord}/>
//                                 </Route>
//                             </Switch>
//                         </div>
//                     </div>
//                 </Router>
//
//                 <MetricSlider/>
//             </div>
//         </>
//     );
// }
//
// export default App;



// Replace kelvinToCelsius to kelvinToMetric


import React, { useState, useEffect, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './components/searchBar/SearchBar';
import TabBarMenu from './components/tabBarMenu/TabBarMenu';
import MetricSlider from './components/metricSlider/MetricSlider';
import ForecastTab from './pages/forecastTab/ForecastTab';
import TodayTab from './pages/todayTab/TodayTab';
import { TempContext } from './context/TempContext';
import './App.css';

const apiKey = '538d3dc63a845af3651f09cf2b4aa04f';

function App() {
    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState('');
    const [error, toggleError] = useState(false);

    const { kelvinToMetric } = useContext(TempContext);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        if (location) {
            fetchData();
        }
    }, [location]);

    return (
        <>
            <div className="weather-container">

                {/*HEADER -------------------- */}
                <div className="weather-header">
                    <SearchBar setLocationHandler={setLocation}/>
                    {error &&
                        <span className="wrong-location-error">
                    Oeps! Deze locatie bestaat niet
                        </span>
                    }

                    <span className="location-details">
            {Object.keys(weatherData).length > 0 &&
                <>
                    <h2>{weatherData.weather[0].description}</h2>
                    <h3>{weatherData.name}</h3>
                    <h1>{kelvinToMetric(weatherData.main.temp)}</h1>
                </>
            }
          </span>
                </div>

                {/*CONTENT ------------------ */}
                <Router>
                    <div className="weather-content">
                        <TabBarMenu/>

                        <div className="tab-wrapper">
                            <Switch>
                                <Route path="/komende-week">
                                    <ForecastTab coordinates={weatherData.coord}/>
                                </Route>
                                <Route path="/" exact>
                                    <TodayTab coordinates={weatherData.coord}/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>

                <MetricSlider/>
            </div>
        </>
    );
}

export default App;