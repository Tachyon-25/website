  import { useState } from 'react';
  import "./speakerspage.css"
  import { Linkedin, Instagram } from 'lucide-react';

  const speakers = [
    {
      name: "Harsh Sharma",
      role: "Founder @Shreyians Coding School",
      imageUrl: "./harshsharma.jpg",
      linkedIn: "https://in.linkedin.com/in/harshvandanasharma",
      alumini:false,
      instagram: "https://www.instagram.com/iamharshvandanasharma/?hl=en",
      details: "Harsh Sharma is the visionary founder of **Shreyians Coding School**, an innovative platform dedicated to empowering the next generation of tech leaders through coding and data science education."  },
    {
      name: "Kushal Vijay",
      role: "SDE-2 @Microsoft",
      imageUrl: "./kushalviajy.jpg",
      alumini:false,
      linkedIn: "https://in.linkedin.com/in/kushalvijay",
      instagram: "https://www.instagram.com/kushal_vijay_/?hl=en",
      details: "Kushal Vijay is an experienced Software Development Engineer (SDE-2) at Microsoft, specializing in building innovative technologies . He plays a key role in shaping the future of the country."
    }
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