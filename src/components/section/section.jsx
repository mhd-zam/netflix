import React, { useEffect, useState } from "react";
import "../../components/section/section.css";
import axios from '../../axios/axios'
import { imageUrl ,API_KEY} from "../../constant/constant";
import YouTube from 'react-youtube';
function Section(props) {
  const [poster, posterSet] = useState([])
  const [url,urlset]=useState('')
    useEffect(() => {
      axios.get(props.url).then((response) => {
        console.log(response.data.results);
        posterSet(response.data.results)
      })
    }, [])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
  };
  
  function youtube(id) {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response) => {
      console.log(Response.data.results[0]);
      if (Response.data.results.length !== 0) {
        urlset(Response.data.results[0].key)
      } else {
        console.log('no video');
      }
    })
  }

  return (
    <div>
      <section>
        <h3 className="category">{props.title}</h3>
        <div className="posterrow">
          {poster.map((movie,index) => {
            return (
              <div onClick={()=>{youtube(movie.id)}} key={index} className="item">
              <img
                  className={props.isSmall?'small':'poster'}
                src={imageUrl+movie.backdrop_path}
                alt=''
                />
                <h5>{movie.name || movie.title}</h5>
              </div>
            )
          })}
        </div>
       {url && <YouTube videoId={url} opts={opts}/> } 
      </section>
    </div>
  );
}

export default Section;
