import Button from "react-bootstrap/Button";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./overlay.css";


const work = [
  {
    title: "3D Animal and Nautral Environment Portfolio",
    image: "image here",
    description: "A semester long project to create a portfolio of fully modeled, rigged, textured, and animated 3D subjects with a focus on animal and environments. Composed a showreel utilizing Adobe Premier Pro and After effects.",
    button: <Button variant="secondary">view showreel</Button>,
  },
  {
    title: "CARVR Drum Rhythm Game",
    image: "image here",
    description: "I worked with a small team in UNC AR&VR club to create a VR simulation of the player as an aspiring drum player in the city! Developed in Unity, I programmed adaptive sound to the drum and used open source building models to set design a city environment.",
    button: <Button variant="secondary">see demo here</Button>,
  },
  {
    title: "Vanilla HTML, CSS, and JavaScript Portfolio Website",
    image: "image here",
    description: "A simpler version of a personal website but made in entirely HTML with CSS styling and an interactive JSX element.",
    button: <Button variant="secondary">check it out</Button>,
  },
  {
    title: "Figma Prototypes", 
    image: "image here", 
    description: "Two examples of wire framed figma prototypes. The first is a potential sustainable shopping website I made with a small team for a hackathon. The second is a re-design of a politial activist website to improve user experience by promoting feelings of community.",
    button: <Button variant="secondary">see protoypes</Button>,
  },
];
//fix button on the slide to make it not look wacky
function CustomSlide(props){
  const {image, title, desc, button} = props;
  return (
    <div className="carousel-container flex flex-row place-self-center">
      <div className="overlay-row">
        <p>{image}</p>
        <p>{button}</p>
      </div>
      <div className="overlay-row">
        <h3 style={{fontSize: 20}}>{title}</h3>
        <p>{desc}</p>
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
        <CustomSlide image = {w.image} title = {w.title} desc = {w.description} button = {w.button} />
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
