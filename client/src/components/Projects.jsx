import './projects.css'
import humancoin from '.././humancoin.png'
import ysfj from '.././ysfj.png'
import musicphile from '.././musicphile.jpg'

function Work() {
  return (
    <div className="projectsContainer">
      <div className="project">
        <img src={humancoin} />
        <h3>Human Coin</h3>
        <p>Human Coin is a React application that introduces the innovative concepts of cryptocurrencies to manual labor. By tapping or clicking on the coin found in your wallet, you chip closer to finding a coin.</p>
        <a target="_blank" href="https://https://github.com/francisco-rosado-dev/human-coin"><button type="button" className="resume">GitHub</button></a>
        <a target="_blank" href="https://https://human-coin.netlify.app/"><button type="button" className="resume">Live Site</button></a>
      </div>
      <div className="project">
        <img src={ysfj} />
        <h3>YSFJ</h3>
        <p>From the creators of the famous blog 'four-eyes', YSFJ is a streamlined virtual eyewear boutique. Don't lose sight of what matters most. Glasses for adventure.</p>
        <a target="_blank" href="https://github.com/yeana-dev/YSFJ/tree/main"><button type="button" className="resume">GitHub</button></a>
        <a target="_blank" href="https://https://ysfj.netlify.app/"><button type="button" className="resume">Live Site</button></a>
      </div>
      <div className="project">
        <img src={musicphile} />
        <h3>Musicphile</h3>
        <p>Musicphile is a music sharing library. Share what you find with the world, and amuse yourself with arcane tunes brought to you by other music enthusiasts.</p>
        <a target="_blank" href="https://github.com/francisco-rosado-dev/musicphile"><button type="button" className="resume">GitHub</button></a>
        <a target="_blank" href="https://musicphile-app.netlify.app/"><button type="button" className="resume">Live Site</button></a>
      </div>
    </div>
  )
}

export default Work;