import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EventsPage.css';
import { MapPin, Clock4 } from 'lucide-react';
import Footer from "../components/Footer";

const eventsData = { 
  "CSE": {
    "Rospinot": [
      { id: 1, name: "Robo Race", description: "Witness two robots clash in a thrilling soccer showdown — a test of precision, control, and strategy!", venue: "AB Corridor", time: "Day 3: 10:00 AM - 1:00 PM" },
      { id: 2, name: "Cicada 036", description: "Epiphany is upon you. The pilgrimage begins — chase enlightenment, if you dare.", venue: "LT-2", time: "Day 2: 2:00 PM - 6:00 PM" },
      { id: 3, name: "Robo Race F1", description: "Feel the rush as Lego F1-style robots blaze down the track, racing head-to-head for ultimate glory!", venue: "AB Corridor", time: "Day 3: 3:00 PM - 6:00 PM" },
    ],
    "CSI-Bitwise": [
      { id: 5, name: "Newbie Code", description: "Kodeathon for freshman year", venue: "CL (ALL)", time: "Day 3: 11:00 AM - 1:00 PM" },
      { id: 6, name: "Blind Code", description: "Test your coordination in a challenging blindfolded coding relay", venue: "CL-3 & CL-5", time: "Day 2: 1:30 PM - 3:30 PM" },
      { id: 7, name: "Code Mania", description: "Multiple round coding event", venue: "Online", time: "Day 1: 7:00 PM - 10:00 PM" },
      { id: 9, name: "Debug Meme", description: "Only the smartest minds get the joke", venue: "Online", time: "Day 3: 4:00 PM - 6:00 PM" },
    ],
    "CSI-Development": [
      { id: 10, name: "Snake And CSS", description: "Control the snake's movement using CSS — move it with justify-content and align-items", venue: "LT-2", time: "Day 3: 2:00 PM - 4:00 PM" },
      { id: 11, name: "HackSprint", description: "Code against the clock to solve real-world problems (Hackathon)", venue: "MPH", time: "Day 2: 8:00 PM - 11:00 PM" },
      { id: 12, name: "Smash Cart", description: "Gaming event", venue: "LT-2", time: "Day 1: 7:00 PM - 8:00 PM" },
      { id: 13, name: "Build It Wrong", description: "Collaborate seamlessly to tackle coding challenges in relay style", venue: "LT-1", time: "Day 3: 4:00 PM - 6:00 PM" },
      { id: 14, name: "Vibe Coding Hackathon", description: "A fast-paced hackathon where vibe coders blend logic, creativity, and style to craft fun, animated, and expressive projects!", venue: "CL-4", time: "Day 2: 1:00 PM - 3:00 PM" },
    ],
    "CSI-Botnet": [
      { id: 15, name: "Cryptic Hunt", description: "Solve thrilling digital riddles and race to uncover hidden clues", venue: "LT-1", time: "Day 1: 7:00 PM - 8:00 PM" },
      { id: 16, name: "Mine Arena", description: "Build, fight, and survive in the ultimate Minecraft competition", venue: "Nehru Plaza", time: "Day 3: 11:00 AM - 3:00 PM" },
      { id: 17, name: "LAN Party", description: "Battle it out in an intense local gaming showdown with your squad", venue: "CL-4", time: "Day 2: 3:00 PM - 5:00 PM" },
    ],
    "CSI-MM&UI/UX": [
      { id: 18, name: "GLITCH 1", description: "BGMI and RC tournament", venue: "LT-6 & LT-7", time: "Day 2: 2:00 PM - 6:00 PM" },
      { id: 19, name: "Arcade Box", description: "A fun retro game base console system for reliving the old games era", venue: "Nehru Plaza", time: "Day 2: 1:00 PM - 4:00 PM" },
      { id: 20, name: "Typolymics", description: "Speed typing event", venue: "CL-3", time: "Day 2: 4:00 PM - 5:00 PM" },
      { id: 21, name: "GLITCH 2", description: "BGMI and RC tournament", venue: "LT-5", time: "Day 3: 12:00 PM - 3:00 PM" },
      { id: 22, name: "Memeathon", description: "Event based on creating and designing memes", venue: "Online", time: "Day 1: All Day" },
    ],
    "Mozilla": [
      { id: 23, name: "Pixel Art", description: "Create stunning digital artworks using vibrant pixel-style graphics", venue: "Online", time: "Day 1: All Day" },
      { id: 24, name: "War For Trezor", description: "War for Trezor — an exciting quiz battle to unlock hidden treasures", venue: "Online", time: "Day 2: All Day" },
      { id: 25, name: "Vibe Coding", description: "Vibe Code — Showcase your creativity by building an impressive website or game with standout UI/UX design", venue: "Online", time: "Day 3: All Day" }
    ],
    "VR AR MR": [
      { id: 26, name: "2D Gaming", description: "A structured session dedicated to playing and enjoying two-dimensional video games via a dedicated booth", venue: "AB Corridor", time: "Day 1: 7:00 PM - 9:00 PM" },
      { id: 27, name: "Dare Tiles", description: "An interactive dare game likely involving participants performing challenges determined by tiles", venue: "Nehru Plaza", time: "Day 2: 3:00 PM - 7:00 PM" },
      { id: 28, name: "Haunted House", description: "An immersive attraction featuring a Virtual Reality (VR) haunted house experience", venue: "AB Corridor", time: "Day 3: 5:00 PM - 7:00 PM" },
    ],
    "GFG": [
      { id: 29, name: "Add-O-Create", description: "Creative blender design event", venue: "AB Corridor", time: "Day 2: 2:00 PM - 4:00 PM" },
      { id: 30, name: "Stumble Guyz", description: "A fun gaming event with obstacles and competition", venue: "LT-1", time: "Day 2: 4:00 PM - 6:00 PM" },
      { id: 31, name: "QuizSprint", description: "Fast-paced buzzer quiz", venue: "Online", time: "Day 3: 11:00 AM - 12:30 PM" },
    ]
  },
  "ISF": [
    { id: 32, name: "Laser Tag", description: "Event in dark where you have to find the right path for your laser", venue: "In front of ISF Room", time: "Day 1: 6:00 PM - 9:00 PM" },
    { id: 33, name: "Escape Room", description: "Solve fun computer and logic puzzles to find clues and escape the room before time runs out!", venue: "In front of ISF room", time: "Day 2: 1:00 PM - 3:00 PM" },
    { id: 34, name: "Robo Race", description: "High-speed race where robots navigate challenging tracks", venue: "In front of Tuck-1", time: "Day 2: 4:00 PM - 7:00 PM" },
    { id: 35, name: "Robo War", description: "Robots will compete against each other in an arena", venue: "Tuck-1", time: "Day 3: 4:00 PM - 6:00 PM" },
    { id: 36, name: "TDM", description: "Gear up, take aim, and dominate the battlefield — only the fiercest survive in TDM!", venue: "In front of Tuck 1", time: "Day 3: 6:00 PM - 9:00 PM" },
  ],
  "MES": [
    { id: 37, name: "Spring Suspension Car", description: "Event in which basic principles of elasticity will be used to make cars", venue: "MES Club", time: "Day 1: 8:00 PM - 9:00 PM" },
    { id: 38, name: "Equilibria", description: "Two participants have to write the given word using pen tied with thread", venue: "Nehru Plaza", time: "Day 3: 11:00 AM - 1:00 PM" },
    { id: 39, name: "Hawkeye Bow", description: "Archery sport", venue: "MES Club", time: "Day 2: 5:00 PM - 7:00 PM" },
    { id: 40, name: "Buggy Ride", description: "One participant has to pick the ball from one box to another in limited time", venue: "Nehru Plaza", time: "Day 3: 5:00 PM - 7:00 PM" },
    { id: 41, name: "Gear Assembling", description: "Showcasing your coordination and engineering skills", venue: "MES Club", time: "Day 3: 7:00 PM - 8:00 PM" },
  ],
  "CE": [
    { id: 42, name: "Truss It", description: "Design and build strong truss structures to test load-bearing and structural efficiency", venue: "AB Corridor", time: "Day 1: 7:00 PM - 9:00 PM" },
    { id: 43, name: "Clay Modelling", description: "Craft and shape unique designs with clay this artistic challenge", venue: "CE Dept", time: "Day 3: 12:00 PM - 2:00 PM" },
    { id: 44, name: "Float The Ball", description: "A team event to create a seamless pathway for a ball using coordinated pipe movements", venue: "Nehru Plaza", time: "Day 3: 2:00 PM - 3:00 PM" },
    { id: 45, name: "Tic Tac Toe", description: "Strategic building game", venue: "Near Cafeteria", time: "Day 3: 5:00 PM - 6:30 PM" },
  ],
  "CHE": [
    { id: 46, name: "Go Slow", description: "Chemical engineering challenge", venue: "AB Corridor", time: "Day 2: 3:00 PM - 5:00 PM" },
    { id: 47, name: "Locked Up", description: "Chemical puzzle challenge", venue: "AB Corridor", time: "Day 3: 2:00 PM - 4:00 PM" },
    { id: 48, name: "Detective Byomkesh", description: "Solve mysteries using chemical clues", venue: "AB Corridor", time: "Day 3: 2:00 PM - 4:00 PM" },
  ],
  "EDC": [
    { id: 49, name: "InnovateX", description: "The Ultimate Idea Pitching Challenge", venue: "LT-8", time: "Day 2: 3:00 PM - 5:00 PM" },
    { id: 50, name: "Tech Sprint", description: "Scavenger hunt designed to challenge your tech knowledge", venue: "AB Corridor", time: "Day 3: 11:00 AM - 2:00 PM" },
    { id: 51, name: "Gameathon", description: "Gaming competition", venue: "Online", time: "Day 2: All Day" },
  ]
};

const branchImages = {
  'CSE': '/event_main_logo/test/six.png',
  'ISF': '/event_main_logo/test/ala.png',
  'MES': '/event_main_logo/test/three.png',
  'CE': '/event_main_logo/test/four.png',
  'CHE': '/event_main_logo/test/ele.png',
  'EDC': '/event_main_logo/test/five.png'
};

const clubIcons = {
  'Rospinot': '🤖',
  'CSI-Bitwise': '💻',
  'CSI-Development': '🛠️',
  'CSI-Botnet': '🕸️',
  'CSI-MM&UI/UX': '🎨',
  'VR AR MR': '👓',
  'GFG': '📚',
  'Mozilla': '🦊'
};

const clubImages = {
  'Rospinot': '/ultimate/rospinot.jpg',
  'CSI-Bitwise': '/ultimate/bitwise.jpg',
  'CSI-Development': '/ultimate/devlopment.jpg',
  'CSI-Botnet': '/ultimate/botnet.jpg',
  'CSI-MM&UI/UX': '/ultimate/multimedia.png',
  'VR AR MR': '/ultimate/vrarmr_02.jpg',
  'GFG': '/ultimate/gfg.jpg',
  'Mozilla': '/ultimate/mozilla_02.jpg'
};

const branchIcons = {
  'CSE': '💻',
  'ISF': '⚡',
  'MES': '⚙️',
  'CE': '🏗️',
  'CHE': '🧪',
  'EDC': '🚀'
};

const extendedDescriptions = { 
  1: "Witness two robots clash in a thrilling soccer showdown — a test of precision, control, and strategy!",
  2: "Epiphany is upon you. The pilgrimage begins — chase enlightenment, if you dare.",
  3: "Feel the rush as Lego F1-style robots blaze down the track, racing head-to-head for ultimate glory!",
};

const Events = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const branch = params.get('branch');
    const club = params.get('club');
    const eventId = params.get('event');

    if (branch) {
      setSelectedBranch(branch);
      if (club) {
        setSelectedClub(club);
        if (eventId) {
          const branchData = eventsData[branch];
          let event;
          if (club && branchData[club]) {
            event = branchData[club].find(e => e.id === parseInt(eventId));
          } else if (Array.isArray(branchData)) {
            event = branchData.find(e => e.id === parseInt(eventId));
          }
          setSelectedEvent(event || null);
        } else {
          setSelectedEvent(null);
        }
      } else {
        setSelectedClub(null);
        setSelectedEvent(null);
      }
    } else {
      setSelectedBranch(null);
      setSelectedClub(null);
      setSelectedEvent(null);
    }
  }, [location.search]);

  const updateHistory = (branch, club = null, event = null) => {
    const params = new URLSearchParams();
    if (branch) params.set('branch', branch);
    if (club) params.set('club', club);
    if (event) params.set('event', event.id.toString());
    navigate(`?${params.toString()}`, { replace: false });
  };

  const handleBranchClick = (branch) => {
    if (branch === selectedBranch) {
      setSelectedBranch(null);
      setSelectedClub(null);
      setSelectedEvent(null);
      navigate('', { replace: false });
    } else {
      setSelectedBranch(branch);
      setSelectedClub(null);
      setSelectedEvent(null);
      updateHistory(branch);
    }
  };

  const handleClubClick = (club) => {
    if (club === selectedClub) {
      setSelectedClub(null);
      setSelectedEvent(null);
      updateHistory(selectedBranch);
    } else {
      setSelectedClub(club);
      setSelectedEvent(null);
      updateHistory(selectedBranch, club);
    }
  };

  const toggleCardFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderBranches = () => (
    <>
      <h1 className="events-page-title">BRANCHES</h1>
      <div className="branches-container">
        {Object.keys(eventsData).map((branch) => (
          <div
            key={branch}
            className="branch-card"
            onClick={() => handleBranchClick(branch)}
          >
            <div className="branch-image-container">
              <img 
                src={branchImages[branch]} 
                alt={branch} 
                className="branch-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="branch-icon" style={{ display: 'none' }}>
                {branchIcons[branch]}
              </div>
            </div>
            <h2>{branch}</h2>
            <p>{Array.isArray(eventsData[branch]) ? `${eventsData[branch].length} Events` : `${Object.keys(eventsData[branch]).length} Clubs`}</p>
          </div>
        ))}
      </div>
    </>
  );

  const renderEventCard = (event) => (
    <div
      key={event.id}
      className={`event-card main-event ${flippedCards[event.id] ? 'flipped' : ''}`}
      onClick={() => toggleCardFlip(event.id)}
    >
      <div className="card-front">
        <img src={event.image} alt={event.name} />
        <h3>{event.name}</h3>
        <p>{event.venue}</p>
      </div>
      <div className="card-back">
        <h3>{event.name}</h3>
        <p className='event-p'>{event.venue}</p>
        <p><strong>Description:</strong>{extendedDescriptions[event.id] || event.description}</p>
      </div>
    </div>
  );

  const renderEventsBox = (events, clubName) => (
    <div className="events-box">
      <h3 className="other-events" style={{marginBottom:'2rem'}}>{clubName} Events</h3>
      <hr style={{width:'100%'}}></hr>
      <div className="event-boxes-container">
        {events.length === 0 ? (
          <p>No upcoming events available at the moment.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-box">
              <div className="event-box-header">
                <h4>{event.name}</h4>
              </div>
              <p><strong>Description:</strong> {event.description || 'No description available.'}</p>
              <p><strong><MapPin size={18} /></strong> {event.venue || 'Venue details unavailable.'}</p>
              <span className="event-time"><Clock4 size={18} /><span style={{marginLeft:'10px'}}>{event.time || 'TBA'}</span></span>
            </div>
          ))
        )}
      </div>
    </div>
  );

  const renderEvents = (events) => {
    const displayName = selectedClub || selectedBranch;

    return (
      <div className="events-container">
        {events.length > 0 && renderEventsBox(events, displayName)}
      </div>
    );
  };

  const renderContent = () => {
    if (!selectedBranch) return renderBranches();
    const branchData = eventsData[selectedBranch];
    if (Array.isArray(branchData)) return renderEvents(branchData);

    if (!selectedClub) {
      return (
        <>
          <h1 className="clubs-page-title">{selectedBranch} CLUBS</h1>
          <div className="clubs-container">
            {Object.keys(branchData).map((club) => (
              <div
                key={club}
                className="club-card"
                onClick={() => handleClubClick(club)}
                data-club={club}
              >
                <div className="club-image-container">
                  <img 
                    src={clubImages[club]} 
                    alt={club} 
                    className="club-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="club-icon" style={{ display: 'none' }}>
                    {clubIcons[club] || '🏛️'}
                  </div>
                </div>
                <h3>{club}</h3>
                <p>{branchData[club].length} Events</p>
              </div>
            ))}
          </div>
        </>
      );
    }

    const events = branchData[selectedClub];
    return renderEvents(events);
  };

  return (
    <div className="events-page">
      {renderContent()}
      <Footer />
    </div>
  );
};

export default Events;