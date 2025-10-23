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
  },
  {
    name: "Raghu Pandey",
    role: "Founder @iMature",
    imageUrl: "./raghupandey.jpg",
    alumini:false,
    linkedIn: "https://www.linkedin.com/in/raghupandey/",
    instagram: "https://www.instagram.com/raghupandey1/",
    details: "Raghu Pandey is the founder of iMature, focusing on empowering youth through tech and mentorship. He drives digital transformation and innovation, with a passion for sustainable solutions."
  },
  
];
const alumini=[
  {
    name: "Bhoomik Sharma",
    role: "Team lead Wipro",
    imageUrl: "./bhoomiksharma.jpg",
    alumini:true,
    linkedIn: "https://www.linkedin.com/in/bhoomik-sharma/?originalSubdomain=in",
    instagram: "https://www.instagram.com/bhoomik10/profilecard/?igsh=bnNyNHdyY2diYjIz",
    details: "Bhoomik Sharma is a Team Lead at Wipro, specializing in leading tech teams and driving innovative solutions in software development."
  },
  {
    name: "Aagam Jain",
    role: "SDE @Goldman Sachs",
    imageUrl: "./AAGAMJAIN.jpg",
    alumini:true,
    linkedIn: "https://www.linkedin.com/in/aagam-jain-a47144176/",
    instagram: "https://www.instagram.com/aagam_jain__/?igsh=cGMzc2p6MnI2YjZu",
    details: "Aagam Jain is a Software Development Engineer (SDE) at Goldman Sachs, focusing on building robust software solutions and driving innovation in the financial tech space."
  },
  {
    name: "Shubhangi Bhargava",
    role: "UX Designer",
    imageUrl: "./shubhangi.jpg",
    alumini:true,
    linkedIn: "https://www.linkedin.com/in/shubhangi-bhargava-3270a7125/",
    instagram: "https://www.instagram.com/shubhangibhargava/profilecard/?igsh=bTdjNjVsMHhkNHl2",
    details: "Shubhangi Bhargava is a UX Designer, creating intuitive and engaging user experiences with a focus on accessibility and design innovation."
  },
  {
    name: "Ritesh Yadav",
    role: "Full Stack Data Scientist",
    imageUrl: "./riteshyadav.jpg",
    alumini:true,
    linkedIn: "https://www.linkedin.com/in/ritesh-yadav2011/",
    instagram: "https://www.instagram.com/whoriteshyadav/profilecard/?igsh=bnZ3YmhoNDkzZTZy",
    details: "Ritesh Yadav is a Full Stack Data Scientist, specializing in end-to-end data solutions, from data analysis to model deployment, driving impactful business insights."
  }
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