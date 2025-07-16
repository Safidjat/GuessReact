import { useEffect, useRef, useState } from "react";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

function HomeVideo() {
    const [play, setPlay] = useState(true);
    const videoRef = useRef(null);

    function handleVideoPlay() {
        if (play) { videoRef.current.pause(); setPlay(false) }
        else { videoRef.current.play(); setPlay(true) }
    }

    useEffect(() => {
        return () => {                     //React итак сам планирует при переходе на др стр:
            if (videoRef.current) {        //1.Запустить функцию очистки (cleanup) из useEffect компонента HomeVideo.
                videoRef.current.pause();
                                           //2.!!!Удалить DOM-узлы, принадлежащие HomeVideo, из HTML-документа.
                videoRef.current = null;   //на этапе 1 ты опустошаешь один из узлов и реакт на 2 этапе его не находит чтобы опустошить самому 
            }
        }
    }, []);

    return (
        <div className="relative min-[700px]:max-[770px]:w-[86%] m-auto" data-init="true">
            <NavLink className="text-decoration-none w-100" aria-label="Shop for new arrivals and refresh your look." >
                <video ref={videoRef} className=" img-fluid position-absolute top-0 bottom-0 start-0 end-0 m-auto" autoPlay loop muted playsInline data-user-paused="true">
                    <source src="https://img.guess.com/video/upload/q_auto,w_1920,h_1080,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10774/G_Site_Home_ContentCenter_July_10774_01.mp4" type="video/mp4" />
                </video>
            </NavLink>

            <div onClick={(e) => e.preventDefault()} className="absolute bottom-[12%] right-[12%]">
                <button onClick={handleVideoPlay} className="bg-transparent border-0 ">
                    {
                        play ? <FaPause color="#e9e6e1" opacity={.85} cursor={'pointer'} />
                            : <FaPlay color="#e9e6e1" opacity={.85} cursor={'pointer'} />
                    }
                </button>
            </div>

            <Parallax
                speed={15}
                className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
            >
                <div className="max-[590px]:w-[200px] max-[590px]:h-[40px] max-[350px]:w-[100px] max-[350px]:h-[20px] w-[338px] h-[70px]"><img src="/assets/img/logoWhite.svg" className="w-full h-full object-cover" /></div>
            </Parallax>
        </div>
    )
}

export default HomeVideo
