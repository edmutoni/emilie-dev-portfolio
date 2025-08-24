import Button from "react-bootstrap/Button";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./overlay.css";


const work = [
  {
    title: "3D Animal and Natural Environment Portfolio",
    image: <img src= "textured-turtle.png" className="image-frame"/>,
    description: "A semester long project to create a portfolio of fully modeled, rigged, textured, and animated 3D subjects with a focus on animal and environments.",
    button: <Button variant="secondary" href="https://youtu.be/PQKNqOZMBts" target="_blank" style={{fontStyle :"italic"}}>view showreel</Button>,
    tags: "#Maya #Mudbox #AdobeAfterEffects #AdobePremierPro",
  },
  {
    title: "CARVR Drum Rhythm Game",
    image: <img src = "drum_screenshot.png" className="image-frame"/>,
    description: "UNC AR&VR Software team project. A VR mini-simulation as an aspiring dummer in a city! I programmed adaptive sound to the drum and used open source building models to set design a city environment",
    button: <Button style={{fontStyle :"italic"}} variant="secondary" href="https://github.com/carolina-ar-vr/drum-rhythm-game" target="_blank">git repo</Button>,
    tags: "#Unity #CSharp",
  },

  {
    title: "Vanilla HTML, CSS, and JavaScript Portfolio Website",
    image: <img src = "simple_site.png" className="image-frame"/>,
    description: "A simpler version of a personal website but made in entirely HTML with CSS styling and an interactive JSX element.",
    button: <Button className="justify-self-center" style={{fontStyle :"italic"}} variant="secondary" href="https://edmutoni.github.io/MEJO161-website/" target="_blank">check it out</Button>,
    tags: "#HTML #CSS #JavaScript",
  },
  {
    title: "Figma Prototypes", 
    image: "image here", 
    description: "Two examples of wire framed figma prototypes. The first is a potential sustainable shopping website I made with a small team for a hackathon. The second is a re-design of a politial activist website to improve user experience by promoting feelings of community.",
    button: (
  <div className="flex flex-row gap-3">
    <Button className="btn btn-small"
      variant="secondary" 
      href="https://www.figma.com/design/MgkFswkoiwB4c4R1cWXABS/Pearl-Hacks-Project-App?node-id=161-325&t=n6oOxIOvo7kzbJsQ-1" 
      target="_blank"
    >
      Pearl Website Mockup
    </Button>
    <Button 
      variant="secondary" 
      href="https://www.figma.com/design/vEfIQRjjjC9w2N0Noxek6A/INLS-201--5Calls-Prototype?node-id=0-1&t=fU5kHEz5xcGnrCWq-1" 
      target="_blank"
    >
      5Calls Redesign
    </Button>
  </div>
),

    tags: "#Figma",
  },
];
//fix button on the slide to make it not look wacky
function CustomSlide(props){
  const {image, title, desc, button, tags} = props;
  return (
    <div className="carousel-container flex h-full flex-row" style={{gap: .25}}>
      <div className="overlay-row flex-1 flex  items-center justify-center">
        <p>{image}</p>
        <p style={{fontSize: 14, fontStyle: "italic"}}>{tags}</p>
      </div>
      <div className="overlay-row flex-1 flex items-center justify-center">
        <h3 style={{fontSize: 20, fontStyle: "italic"}}>{title}</h3>
        <p style={{fontSize: 16}}>{desc}</p>
        <div className = "self-center">{button}</div>
      </div>
    </div>
  );
}

export default function WorkCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
   return (
    <div style={{width: 600, height: 300}}>
      <Slider {...settings}>
      {work.map((w) => (
        <CustomSlide image = {w.image} title = {w.title} desc = {w.description} button = {w.button} tags = {w.tags}/>
      ))}
      </Slider>
    </div>
   );
  
}

/* return (

    <div className="w-3/4 m-auto"
    >
      <div className= "self-center " style={{width: 500, borderColor: "green", borderWidth: 2, position: "center"}}>
      <Slider {...settings}>
      {work.map((w) => (
        <div className="carousel-container h-auto" 
        style={{ borderColor: "green",
              borderWidth: 5, width: 500
              }}>
          <div style={{borderColor: "black", borderWidth: 2}}>
            <p>{w.image}</p>
          </div>
          <div className= "flex flex-col" style={{borderColor: "orange", borderWidth: 2}}>
            <p>{w.title}</p>
            <p>{w.description}</p>
            <>{w.button}</>
          </div>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  ); */
