  import { useState } from 'react';
  import "./speakerspage.css"
  import { Linkedin, Instagram } from 'lucide-react';

  const speakers = [
    {
      name: "Gaurish Baliga",
      role: "Software Engineer @Rubrik",
      imageUrl: "./5cc7f4e1-368d-43d8-a887-94db3d175b3d.jpg",
      linkedIn: "https://www.linkedin.com/in/gaurish-baliga-443894131/",
      alumini:false,
      instagram: "",
      details: "Avid Learner | Software Engineer @Rubrik | Ex-Google | Master @Codeforces | ICPC Asia West Finalist | ETHGlobal Finalist"  },
   
    ,
    
  ];
  const alumini=[
   
   
  ]

  const SpeakerCard = ({ speaker, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div 
        className="speaker-card"
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
          {/* Front of card */}
          <div className="card-face card-front">
            <img
              src={speaker.imageUrl}
              alt={speaker.name}
              className="speaker-image"
            />
            <div className="speaker-overlay">
              <h2 className="speaker-name" style={{color:'white'}}>{speaker.name}</h2>
              <p className="speaker-role">{speaker.role}</p>
            </div>
          </div>

          {/* Back of card */}
          <div className="card-face card-back">
            <div className="card-content">
              <h2 className="speaker-name" style={{color:speaker.alumini===true?'#0077b5':'gold'}}>{speaker.name}</h2>
              <p className="speaker-role">{speaker.role}</p>
              <p className="speaker-details">{speaker.details}</p>
              <div className="social-links">
                <a
                  href={speaker.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button linkedin-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={speaker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button instagram-button"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const SpeakersPage = () => {
    return (
      <div className="speakers-page">
        <header className="speakers-header">
          <h1 className="page-title">Our Speakers</h1>
        </header>
        
        <main className="speakers-grid">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} index={index} />
          ))}
          </main>
          <main className="alumni-grid">
          {alumini.map((alumini, index) => (
            <SpeakerCard key={index} speaker={alumini} index={index + speakers.length} />
          ))}
      </main>
      </div>
    );
  };

  export default SpeakersPage;