import "../styling/intro.css"

const Intro = () => {
  return <div className = "intro">
      <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className = "i-intro">Hello, my name is</h2>
            <h1 className = "i-name">Ben Juan </h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    {/* Add more titles in the future when I get more positions */}
                    <div className="i-title-item">Software Developer</div>
                </div>
            </div>
            <div className="i-description">
              I'm a software developer with 4 years of experience at Paycom, building and maintaining software used by thousands of businesses across the country. I hold a Bachelor of Science in Computer Science from the University of Texas at Dallas.
            </div>
        </div>
      </div>
            
      <div className="i-right">
        <img src="/me.jpeg" alt="" className="i-image" />
      </div>
  </div>;
};

export default Intro;
