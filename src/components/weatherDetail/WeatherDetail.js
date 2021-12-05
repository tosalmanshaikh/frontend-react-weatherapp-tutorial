// import React from 'react';
// import './WeatherDetail.css';
//
// function WeatherDetail() {
//   return (
//     <section className="day-part">
//       <span className="icon-wrapper">
//         *Icoontje van het weer*
//       </span>
//       <p className="description">Zonnig</p>
//       <p>13&deg; C</p>
//     </section>
//   );
// }
//
// export default WeatherDetail;


// use iconmapper for icon
//
// import React from 'react';
// import './WeatherDetail.css';
// import kelvinToCelsius from '../../helpers/kelvinToCelsius';
// import iconMapper from '../../helpers/iconMapper';
//
// function WeatherDetail({ description, temp, type }) {
//     return (
//         <section className="day-part">
//       <span className="icon-wrapper">
//         {iconMapper(type)}
//       </span>
//             <p className="description">{description}</p>
//             <p>{kelvinToCelsius(temp)}</p>
//         </section>
//     );
// }
//
// export default WeatherDetail;


//replace  kelvinToCelsius with kelvinToMetric

import React, { useContext } from 'react';
import { TempContext } from '../../context/TempContext';
import iconMapper from '../../helpers/iconMapper';
import './WeatherDetail.css';

function WeatherDetail({ description, temp, type }) {
    const { kelvinToMetric } = useContext(TempContext);

    return (
        <section className="day-part">
      <span className="icon-wrapper">
        {iconMapper(type)}
      </span>
            <p className="description">{description}</p>
            <p>{kelvinToMetric(temp)}</p>
        </section>
    );
}

export default WeatherDetail;

