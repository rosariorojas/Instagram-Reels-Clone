import React, { useEffect, useState } from 'react';
import './App.css';
import './VideoCard';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([]);

  useEffect(()=>{
    //app component will run ONCE when it loads 
    //get an array of objects
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data()))
      ))
  }, [])

  return (
    //BEM naming convention
    <div className="app">

      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
          alt=""/>
        <h1>Reels</h1>
      </div>
      
      <div className="app__videos">
        {/*container of app__videos (scrollable container)*/}
        {reels.map(({channel,avatarSrc,song,url,likes, shares}) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
