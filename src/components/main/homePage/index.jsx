import { ParallaxProvider } from "react-scroll-parallax"
import HomeVideo from "./HomeVideo"
import HomeSlider from "../HomeSlider"
import HomeThreesomeImg from "../HomeThreesomeImg"
import HomeDefine from "./HomeDefine"



function Main() {
  return (
    <ParallaxProvider>
      <HomeVideo />
      <HomeSlider />
      <HomeThreesomeImg />
      <HomeDefine />
    </ParallaxProvider>
  )
}

export default Main
