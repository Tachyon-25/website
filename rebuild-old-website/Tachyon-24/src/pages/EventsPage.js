import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './EventsPage.css';
import { MapPin ,Clock4} from 'lucide-react';
import Footer from "../components/Footer";

const eventsData = { 
  "CSE": {
    "Rospinot": [
      { id: 1, name: "Robo Bazzinga", description: "Rospinot fun maze solving challenge for robots", venue: "AB Corridor", time: "17th, 10:00 AM" },
      { id: 2, name: "Cicada 036", description: "A mysterious online puzzle, with complex cryptography and intelligence clues", venue: "LT-2", time: "16th, 2:00 PM - 6:00 PM"},
      { id: 3, name: "Robo Soccer", description: "Robots compete to score goals on the field", venue: "AB Corridor", time: "16th, 6:00 PM - 8:00 PM" },
      { id: 4, name: "The Escape Room", description: "Robots race to solve clues and escape", venue: "AB Corridor", time: "17th, 10:00 AM" },
    ],
    "CSI-Bitwise": [
      { id: 5, name: "Newbie Code", description: "Kodeathon for freshman year", venue: "CL-2, CL-3, CL-4, CL-5" },
      { id: 6, name: "Blind Code", description: "Test your coordination in a challenging blindfolded coding relay", venue: "CL-3, CL-4" },
      { id: 7, name: "Code Mania", description: "Multiple round coding event", venue: "Online" },
      { id: 8, name: "Bug Hunt", description: "Find and fix bugs in the code", venue: "CL-3, CL-4" },
      { id: 9, name: "Debug Meme", description: "Debugging with a twist of humor", venue: "Online" },
    ],
    "CSI-Development": [
      { id: 10, name: "Snake And CSS", description: "Creative CSS challenge", venue: "LT-2" },
      { id: 11, name: "HackSprint", description: "Code against the clock to solve real-world problems (Hackathon)", venue: "Tagore Hall" },
      { id: 12, name: "Smash Cart", description: "Gaming event", venue: "LT-2" },
      { id: 13, name: "Build It Wrong", description: "Anti-coding challenge", venue: "CL-4" },
      { id: 14, name: "Vibe Coding Hackathon", description: "2–3 hour hackathon where participants solve problem statements using vibe coding tools. Focus on creativity, style, and fun with animations, themes, and playful designs", venue: "CL-4" },
    ],
    "CSI-Botnet": [
      { id: 15, name: "Cryptic Hunt", description: "Decode and debug your way through a cryptic, beginner-friendly hunt", venue: "CL-4" },
      { id: 16, name: "MineTech Arena", description: "Minecraft technical challenge", venue: "Open ground near Nehru Plaza" },
      { id: 17, name: "LAN Party", description: "Multiplayer gaming event", venue: "CL-2" },
    ],
    "CSI-MM&UI/UX": [
      { id: 18, name: "Memeathon", description: "Creative meme making competition", venue: "Online" },
      { id: 19, name: "Arcade Box", description: "A fun retro game base console system for reliving the old games era", venue: "Nehru Plaza" },
      { id: 20, name: "Typoolymics", description: "Speed typing event", venue: "CL-3" },
      { id: 21, name: "GLITCH", description: "E-sports zone", venue: "Nehru Plaza" },
    ],
    "Mozilla": [
      { id: 22, name: "Website Pixel Art", description: "Fun event where students have to find correct answers for problems", venue: "Online" },
      { id: 23, name: "War For Trezor", description: "Web security challenge", venue: "Online" },
      { id: 24, name: "Hack in a Box", description: "Online coding challenge for beginners with a virtual 'mystery box' of prompts, APIs, and fun twists", venue: "Online" }
    ]
  },
  "ISF": [
    { id: 30, name: "Robo War", description: "Robot combat challenge", venue: "Arena", image: "./eventgame5.jpeg", time: "16th, 6:00 - 8:00 PM" },
    { id: 31, name: "Laser Tag", description: "Event in dark where you have to find the right path for your laser", venue: "In front of ISF Room", image: "./eventgame1.jpeg", time: "15th, 7:00 - 9:00 PM" },
    { id: 32, name: "Robo Race", description: "A high-speed race where robots navigate challenging tracks to the finish line", venue: "Chhota Mandir", time: "17th, 10:00 AM - 12:00 PM" },
    { id: 33, name: "Maze Bot", description: "Navigate unseen twists in the ultimate maze challenge", venue: "In front of Tuck 1", time: "17th, 2:00 - 4:00 PM" },
    // { id: 34, name: "Pinball", description: "Robotics challenge", venue: "Arena", time: "16th, 3:00 - 5:00 PM" },
    { id: 34, name: "Junkyard War", description: "Treasure hunt to create something unique by finding hidden tools", venue: "In front of ISF room", time: "16th, 3:00 - 5:00 PM" },
    // { id: 36, name: "Exhibition", description: "Robotics challenge", venue: "Arena", time: "16th, 6:00 - 8:00 PM" },
  ],
  "MES": [
    { id: 35, name: "Hawkeye Bow", description: "Mechanical bow design", venue: "Workshop", image: "./eventgame2.jpeg", time: "16th, 5:00 - 7:00 PM" },
    { id: 36, name: "Buggy Ride", description: "A funny buggy ride demo", venue: "MES Club", image: "./eventgame3.jpeg", time: "17th, 5:00 - 7:00 PM" },
    { id: 37, name: "Assembling Gear", description: "A speed test competition for assembling and de-assembling of gearbox", venue: "MES Club", time: "16th, 6:00 - 7:30 PM" },
    { id: 38, name: "Waterjet", description: "Mechanical bow design", venue: "Workshop", time: "16th, 3:00 - 5:00 PM" },
    { id: 39, name: "Spring Suspension Car", description: "Event in which basic principles of elasticity will be used to make cars", venue: "MES Club", time: "15th, 8:00 - 9:00 PM" },
    { id: 40, name: "DIY Engineering Competition", description: "Showcasing your coordination and engineering skills", venue: "MES Club", time: "17th, 7:00 - 8:00 PM" },
    { id: 41, name: "WorkShop Worriror", description: "Design something creative by using carpentary skills", venue: "MES Department", time: "17th, 11:00 AM - 1:00 PM" },
  ],
  "CE": [
    { id: 42, name: "Truss It", description: "Design and build strong truss structures to test load-bearing and structural efficiency", venue: "AB Corridor", image: "./eventgame4.jpeg" , time: "15th, 7:00 - 9:00 PM"},
    { id: 43, name: "TIC TAC TOE", description: "Strategic building game", venue: "Lab", image: "./eventgame5.jpeg", time: "17th, 5:00 - 6:30 PM" },
    { id: 44, name: "Float The Ball", description: "A team event to create a seamless pathway for a ball using coordinated pipe movements.", venue: "Nehru Plaza", time: "17th, 2:00 - 3:00 PM" },
    { id: 45, name: "Clay Modelling", description: "Craft and shape unique designs with clay this artistic challenge", venue: "CE Dept" , time: "17th, 10:00 - 11:30 AM"},
    { id: 46, name: "DEFYROULETTE", description: "Scan Virtual card in AR to complete thrilling real-world dare", venue: "Nehru Plaza" , time: "16th, 6:00 - 7:00 PM"},
  ],
  "CHE": [
    { id: 49, name: "Flame Fun", description: "Colourful flames from different salts", venue: "AB Corridor", image: "./eventgame1.jpeg", time: "17th, 10:00 - 11:00 AM" },
    { id: 50, name: "Litmus Art", description: "Using the properties of turmeric powder, letting people draw on plain canvas", venue: "AB Corridor", image: "./eventgame2.jpeg" , time: "16th, 1:00 - 3:00 PM"},
    { id: 51, name: "Non-Newtonian Fluid", description: "Your force matters", venue: "Lab", time: "17th, 1:00 - 2:00 PM" },
    { id: 52, name: "Chemical Chameleon", description: "Color change automation by titration", venue: "Lab", time: "17th, 5:00 - 6:00 PM" },
    { id: 53, name: "Lava Lamp", description: "Miniature volcano by different chemicals", venue: "Lab", time: "16th, 1:00 - 3:00 PM" },
    { id: 54, name: "Racing Car", description: "Fun event in which chemical compounds will be used as fuel for racing cars", venue: "In front of Tuck-2", time: "16th, 1:00 - 2:00 PM" },
  ],
  "IIC":[
    {id:55,name:"Bit to Build" ,description:"Founders Bidding Leaque",venue:"LT-1", image: "./eventgame2.jpeg",time:"17th,11am"},
    
  ]
};

const branchImages = {
  'CSE': '/event_main_logo/test/six.png',
  'ISF': '/event_main_logo/test/ala.png',
  'MES': '/event_main_logo/test/three.png',
  'CE': '/event_main_logo/test/four.png',
  'CHE': '/event_main_logo/test/ele.png',
  'IIC': '/event_main_logo/test/five.png'
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
   'IIC': '🚀'
};

const extendedDescriptions = { 
  1: "Test your skills in communicating ideas without words in this unique Robot Charades event, where robots mimic actions for participants to guess.",
  2: "A fast-paced Robo Soccer competition where bots collide on the field for victory. Navigate, tackle, and score in a challenging arena.",
  // More extended descriptions...
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
    // Get the display name for the events
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
