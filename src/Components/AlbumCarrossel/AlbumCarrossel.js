// import React, { useState, useRef, useEffect } from 'react';

// import './AlbumCarrossel.css'


// import MP from "../../Assets/aiaiaiai.jpg"
// import audioMP from "../../Assets/Pabllo Vittar - Ai Ai Ai Mega Príncipe (Visualizer).mp3"

// import ALIBI from "../../Assets/alibi.jpeg"
// import audioALIBI from "../../Assets/SEVDALIZA - ALIBI FT. PABLLO VITTAR & YSEULT (OFFICIAL MUSIC VIDEO).mp3"

// import US from "../../Assets/ultrassom.jpg"
// import audioUS from "../../Assets/Pabllo Vittar - ULTRA SOM (Official Audio).mp3"

// import PEDE from "../../Assets/pede.png"
// import audioPEDE from "../../Assets/Pabllo Vittar - Pede Pra Eu Ficar (Listen To Your Heart) (Clipe Oficial).mp3"

// import SAO from "../../Assets/SAOAMORES.jpg"
// import audioSAO from "../../Assets/Pabllo Vittar - São Amores (Visualizer).mp3"

// //Criando os albuns:
// const albums = [
//     { id: 1,
//        title: 'Ai ai ai Mega Príncipe',
//         image: MP ,
//         audio: audioMP,
//         descricao: "Vamos fazer o P!!!!" },


//     { id: 2, 
//         title: 'ALIBI',
//          image: ALIBI ,
//           audio: audioALIBI,
//           descricao: "Roooosa, que linda és! ALABAYYYY" },


//     { id: 3,
//          title: 'ULTRA-SOM',
//           image: US,
//            audio: audioUS,
//            descricao: "Tô no ULTRASOM e vim pra remexer, mexe remexe com Chupa Pabllo manda a ver." },


//     { id: 4, 
//         title: 'Pede pra eu ficar', 
//         image: PEDE, 
//         audio: audioPEDE,
//         descricao: "Listen to u Heath numa versão forrózinho pra dançar agarradinho." },


//     { id: 5, 
//         title: 'São Amores', 
//         image: SAO,
//          audio:audioSAO,
//          descricao: "Amores que ferem, amores que doem, amores que amargam"  },
//   ];

//   const App = () => {

//   const [currentAlbum, setCurrentAlbum] = useState(0);

//   const [translateX, setTranslateX] = useState(0);

//   const [playingAudio,  setPlayingAudio] = useState(null)

//   const audioRefs = useRef([]);

//     const handleNext = () => {

//     setCurrentAlbum ((currentAlbum + 1) % albums.length);
//     setTranslateX ((translateX - 300) % (albums.length * 300));
//     };

//     const handlePrev = () => {}

//     if (currentAlbum === 0) return;
    
//     setCurrentAlbum ((currentAlbum - 1 + albums.length) % albums.length);

//     setTranslateX((translateX + 300) % (albums.length * 300));

// const handlePlayPause = () =>{

// const audio = audioRefs.current[currentAlbum];

// if (audio) {
//     if (audio.paused) {
//         if (playingAudio && playingAudio !== audio) {
//             playingAudio.pause();
//         }
//         audio.play();
//         setPlayingAudio(audio);
//     }
//     else{
//         audio.pause();
//         setPlayingAudio(null);

//     }}
// }

// const handleAlbumClick = (index) => {

//     setCurrentAlbum(index);
//     setTranslateX(-index * 300);
// };

// useEffect(() => {
//     const handleKeyDown = (event) => {
//         if (event.key === 'ArrowRight') {
//             handleNext();
        
//         } else if (event.key === 'ArrowLeft') {
//             handlePrev();
//         } else if (event.key === ' '){
//             event.preventDefault();
//             handlePlayPause();
//         }
//     }
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//         window.removeEventListener('keydown', handleKeyDown);
//         if (playingAudio) {
//             playingAudio.pause();
//         }
//     };


// }, [currentAlbum,translateX, playingAudio]);


// useEffect(() => {

//     if (playingAudio) {

//         const newAudio = audioRefs.current[currentAlbum];
//         if (newAudio) {
//             playingAudio.pause();
//             newAudio.play();
//             setPlayingAudio(newAudio);
//         }

//     }
// }, [currentAlbum, playingAudio]);

// return (
//     <div className="carousel-wrapper">
//       <div className="carousel-container">
//         <div className="carousel">
//           <div
//             className="albums"
//             style={{
//               //o estilo se transforma, ele se mexe para
//               //os lados, dependendo da variável translateX
//               transform: `translateX(${translateX}px)`,
//             }}
//           > {/*Percorrendo a lista dos álbuns e pegando
//           o album e a posição dele */}
//             {albums.map((album, index) => {
//               //testa se o alguns dos albuns tem a posição
//               //do album que está em evidência
//               const isActive = index === currentAlbum;
//               return (
//                 <div 
//                   key={album.id} 
//                 /*Adicionando o estilo diferente caso 
//                     o album esteja ativo */
//                   className={`album ${isActive ? 'active' : ''}`}
//                   onClick={() => handleAlbumClick(index)} // Adiciona o evento de clique
//                 >
//                   <img src={album.image} alt={album.title} />
//                   <div className="album-info">
//                     <h2>{album.title}</h2>
//                     <p>{album.descricao}</p>
//                     {album.audio && (
//                       <audio
//                         ref={(el) => (audioRefs.current[index] = el)}
//                       >
//                         <source src={album.audio} type="audio/mp3" />
//                       </audio>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <button className="carousel-control prev" onClick={handlePrev}>
//             &#10094;
//           </button>
//           <button className="carousel-control next" onClick={handleNext}>
//             &#10095;
//           </button>
//         </div>
//         <button className="play-pause-btn" onClick={handlePlayPause}>
//           {playingAudio && !playingAudio.paused ? 'Pause' : 'Play'}
//         </button>
//       </div>
//     </div>
//   );
  
// };

// export default App;
import React, { useState, useRef, useEffect } from 'react';
import './AlbumCarrossel.css'

import MP from "../../Assets/aiaiaiai.jpg"
import audioMP from "../../Assets/Pabllo Vittar - Ai Ai Ai Mega Príncipe (Visualizer).mp3"

import ALIBI from "../../Assets/alibi.jpeg"
import audioALIBI from "../../Assets/SEVDALIZA - ALIBI FT. PABLLO VITTAR & YSEULT (OFFICIAL MUSIC VIDEO).mp3"

import US from "../../Assets/ultrassom.jpg"
import audioUS from "../../Assets/Pabllo Vittar - ULTRA SOM (Official Audio).mp3"

import PEDE from "../../Assets/pede.png"
import audioPEDE from "../../Assets/Pabllo Vittar - Pede Pra Eu Ficar (Listen To Your Heart) (Clipe Oficial).mp3"

import SAO from "../../Assets/SAOAMORES.jpg"
import audioSAO from "../../Assets/Pabllo Vittar - São Amores (Visualizer).mp3"

const albums = [
    {
        id: 1,
        title: 'Ai ai ai Mega Príncipe',
        image: MP,
        audio: audioMP,
        descricao: "Vamos fazer o P!!!!"
    },
    {
        id: 2,
        title: 'ALIBI',
        image: ALIBI,
        audio: audioALIBI,
        descricao: "Roooosa, que linda és! ALABAYYYY"
    },
    {
        id: 3,
        title: 'ULTRA-SOM',
        image: US,
        audio: audioUS,
        descricao: "Tô no ULTRASOM e vim pra remexer, mexe remexe com Chupa Pabllo manda a ver."
    },
    {
        id: 4,
        title: 'Pede pra eu ficar',
        image: PEDE,
        audio: audioPEDE,
        descricao: "Listen to u Heath numa versão forrózinho pra dançar agarradinho."
    },
    {
        id: 5,
        title: 'São Amores',
        image: SAO,
        audio: audioSAO,
        descricao: "Amores que ferem, amores que doem, amores que amargam"
    },
];

const App = () => {
    const [currentAlbum, setCurrentAlbum] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [playingAudio, setPlayingAudio] = useState(null);
    const audioRefs = useRef([]);

    const handleNext = () => {
        setCurrentAlbum((currentAlbum + 1) % albums.length);
        setTranslateX((translateX - 300) % (albums.length * 300));
    };

    const handlePrev = () => {
        setCurrentAlbum((currentAlbum - 1 + albums.length) % albums.length);
        setTranslateX((translateX + 300) % (albums.length * 300));
    };

    const handlePlayPause = () => {
        const audio = audioRefs.current[currentAlbum];
        if (audio) {
            if (audio.paused) {
                if (playingAudio && playingAudio !== audio) {
                    playingAudio.pause();
                }
                audio.play();
                setPlayingAudio(audio);
            } else {
                audio.pause();
                setPlayingAudio(null);
            }
        }
    };

    const handleAlbumClick = (index) => {
        setCurrentAlbum(index);
        setTranslateX(-index * 300);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === ' ') {
                event.preventDefault();
                handlePlayPause();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            if (playingAudio) {
                playingAudio.pause();
                setPlayingAudio(null);
            }
        };
    }, [currentAlbum, playingAudio, handleNext, handlePrev, handlePlayPause]);

    useEffect(() => {
        if (playingAudio) {
            const newAudio = audioRefs.current[currentAlbum];
            if (newAudio) {
                playingAudio.pause();
                newAudio.play();
                setPlayingAudio(newAudio);
            }
        }
    }, [currentAlbum, playingAudio]);

    return (
        <div className="carousel-wrapper">
            <div className="carousel-container">
                <div className="carousel">
                    <div
                        className="albums"
                        style={{
                            transform: `translateX(${translateX}px)`,
                        }}
                    >
                        {albums.map((album, index) => {
                            const isActive = index === currentAlbum;
                            return (
                                <div
                                    key={album.id}
                                    className={`album ${isActive ? 'active' : ''}`}
                                    onClick={() => handleAlbumClick(index)}
                                >
                                    <img src={album.image} alt={album.title} />
                                    <div className="album-info">
                                        <h2>{album.title}</h2>
                                        <p>{album.descricao}</p>
                                        {album.audio && (
                                            <audio
                                                ref={(el) => (audioRefs.current[index] = el)}
                                            >
                                                <source src={album.audio} type="audio/mp3" />
                                            </audio>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button className="carousel-control prev" onClick={handlePrev}>
                        &#10094;
                    </button>
                    <button className="carousel-control next" onClick={handleNext}>
                        &#10095;
                    </button>
                </div>
                <button className="play-pause-btn" onClick={handlePlayPause}>
                    {playingAudio && !playingAudio.paused ? 'Pause' : 'Play'}
                </button>
            </div>
        </div>
    );
};

export default App;
