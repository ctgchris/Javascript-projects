import React from 'react';
import './App.css';
import FavThing from './FavThing';
import ListItems from './ListItems';




const favMovies = [
  {name: "Chappie (2015)", link:"https://m.media-amazon.com/images/I/71GzvpejFRL._AC_UF894,1000_QL80_.jpg" },
  {name: "Logan (2017)", link:  "https://i.ebayimg.com/images/g/IgYAAOSwBr1kXLCG/s-l1600.jpg"},
  {name: "Maze Runner (2014)", link: "https://m.media-amazon.com/images/I/71p1ct3-qZL._AC_UF894,1000_QL80_.jpg" },
  {name: "Hacksaw Ridge (2016)", link: "https://m.media-amazon.com/images/I/61k5gp0ii-S._AC_UF894,1000_QL80_.jpg"},
  {name: "Cinderella Man (2005)", link: "https://m.media-amazon.com/images/I/416WP1nwPNL._AC_UF894,1000_QL80_.jpg"}

]

const favShows = [
  {name: "Invincible", link:"https://m.media-amazon.com/images/S/pv-target-images/9d48f23388585503e97a585d7f5289de4e6b263a912f3ac6c8ccfa758bc2a8a4._UR2000,3000_SX375_FMwebp_.png" },
  {name: "Castlevania", link: "https://i.ebayimg.com/images/g/jgUAAOSwZXZkxIE7/s-l1200.jpg"},
  {name: "Jujutsu Kaisen", link: "https://m.media-amazon.com/images/I/818DUzqnwES.jpg" },
  {name: "Mr. Robot", link:"https://m.media-amazon.com/images/I/41JfhK54IiL._AC_UF894,1000_QL80_.jpg" },
  {name: "Kim's Convenience", link: "https://m.media-amazon.com/images/M/MV5BODQxMmI3ZGQtOGRlNy00MzI3LWE3ZmItOWRjM2I2YjQyYzgzXkEyXkFqcGdeQXVyMzI2MzYyNzI@._V1_FMjpg_UX1000_.jpg"},
  {name: "Avatar The Last Airbender", link: "https://m.media-amazon.com/images/I/91dHG8syi-L._AC_UF1000,1000_QL80_.jpg" }
]


const hobbies= [
  {info: "Volleyball"},
  {info: "PC Video games"},
  {info: "Reading Jujustsu Kaisen"},
  {info: "Cooking"},
  {info: "Video Editing"}
]
function App() {
  return (
    <div className="App">
      <div id="introduction">
        <title>About Me</title>
        <h1 id = "title">Christopher Giang</h1>
        <h2>Junior studying Computer Science</h2>
        <img src="./headshot.jpg" id="aboutMeImage" alt="About Me Pic" />
        <p> Hi my name is Chris, I am a junior Computer Science student at the
            University of Maryland. I'm a part time CS tutor at UMD and enjoy teaching. 
            Career-wise, I'm interested in web development, mobile development, and data science. 
        </p>
        <div id="schedule">
          <table>
            <caption>
              <em><a href="https://www.htmldog.com/">Class Schedule</a></em>
            </caption>
            <thead>
              <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td rowspan="2">Freetime</td>
                <td>CMSC420</td>
                <td rowspan="2">Freetime</td>
                <td><strong>Tutoring</strong></td>
                <td rowspan="3">Freetime</td>
              </tr>
              <tr>
                <td>TA</td>
                <td>CMSC420</td>
            
              </tr>
              <tr>
                <td>CMSC335</td>
                <td>Volleyball</td>
                <td>CMSC335</td>
                <td>Hack4Impact</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr className="tinyBreak"/>
      <ListItems title="Hobbies" items={hobbies}/>
      <hr className="tinyBreak"/>
      <h2> Fav Movies</h2>
      <FavThing items={favMovies}/>
      <h2>Fav Shows</h2>
      <FavThing items={favShows}/>
      <hr className="tinyBreak"/>




    </div>
  );
}

export default App;
