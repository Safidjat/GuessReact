import { ParallaxProvider } from "react-scroll-parallax"
import HomeSlider from "./HomeSlider"
import HomeVideo from "./HomeVideo"
import HomeThreesomeImg from "./HomeThreesomeImg"
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
