import meter1 from "../assets/img/gaming-icon.png";
import meter2 from "../assets/img/gaming-icon.png";
import meter3 from "../assets/img/gaming-icon.png";


export const Explore = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Explore GroovyPlay</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <div className="unique-card-container row">
                <div className="unique-card col-md-3 col-sm-6">
                  <div className="unique-card-inner">
                    <img className="unique-logo" src={meter1} alt="Meter 1" />
                    <h3 className="unique-heading">Extensive Game Library</h3>
                    <p className="unique-description">Dive into a vast collection of games spanning all genres, from action-packed adventures to mind-bending puzzles.</p>
                  </div>
                </div>
                <div className="unique-card col-md-3 col-sm-6">
                  <div className="unique-card-inner">
                    <img className="unique-logo" src={meter2} alt="Meter 2" />
                    <h3 className="unique-heading">Cross-Platform Experience</h3>
                    <p className="unique-description">Play with friends on different platforms seamlessly, whether you're on console, PC, or mobile.</p>
                  </div>
                </div>
                <div className="unique-card col-md-3 col-sm-6">
                  <div className="unique-card-inner">
                    <img className="unique-logo" src={meter3} alt="Meter 3" />
                    <h3 className="unique-heading">Exclusive Content Play</h3>
                    <p className="unique-description">Discover exclusive titles and content you won't find anywhere else, tailored for our PlayFlix community.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
