import React, { useState } from "react";
import "./team.css";
import "./team.css"

const Gallery = () => {
  const [active, setActive] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // ✅ Only these names open the modal (not expand)
  const modalNames = ["Aditya Vyas", "Yash Jain", "Kushagra Singh","Nakul Goyal","Ojas Singhai","Arnold Philip","Anupam Dwivedi","Devesh Kumar","Shivansh Shukla","Aman Sharma"];

  const people = [
    {
      name: "Nakul Goyal",
      role: "Treasurer",
      img: require("../../assests/final_team/Nakul.JPG"),
      email: "nakul.goyal@example.com",
      phone: "+91 9812345678",
      department: "Finance",
      responsibilities: ["Manage budget", "Oversee payments"],
    },
    {
      name: "Ojas Singhai",
      role: "Designing Head",
      img: require("../../assests/final_team/ojas.JPG"),
      email: "ojas.singhai@example.com",
      phone: "+91 9876501234",
      department: "Designing",
      responsibilities: ["Visual design supervision", "Poster creation"],
    },
    {
      name: "Arnold Philip",
      role: "Designing Co-Head",
      img: require("../../assests/final_team/Arnold.JPG"),
      email: "arnold.philip@example.com",
      phone: "+91 9876502234",
      department: "Designing",
      responsibilities: ["Team management", "Design reviews"],
    },
    {
      name: "Anupam Dwivedi",
      role: "Designing Co-Head",
      img: require("../../assests/final_team/DSC00231.JPG"),
      email: "anupam.dwivedi@example.com",
      phone: "+91 9876503234",
      department: "Designing",
      responsibilities: ["UI/UX supervision", "Illustration support"],
    },
    {
      name: "Yash Jain",
      role: "Designing Co-Head",
      img: require("../../assests/final_team/yash_jain.JPG"),
      email: "yash.jain@example.com",
      phone: "+91 9876504234",
      department: "Designing",
      responsibilities: ["Graphic coordination", "Digital creatives"],
    },
    {
      name: "Aditya Vyas",
      role: "Organizer",
      img: require("../../assests/final_team/Aditya_vyas.JPG"),
      email: "aditya.vyas@example.com",
      phone: "+91 9876543210",
      department: "Management",
      responsibilities: ["Oversee event logistics", "Coordinate with sponsors"],
    },
    {
      name: "Kushagra Singh",
      role: "Co-Organizer",
      img: require("../../assests/final_team/kushagra.jpg"),
      email: "kushagra.singh@example.com",
      phone: "+91 9823456710",
      department: "Management",
      responsibilities: ["Volunteer management", "Event scheduling"],
    },
    {
      name: "Devesh Kumar",
      role: "Sponsorship Head",
      img: require("../../assests/final_team/devesh.jpg"),
      email: "devesh.kumar@example.com",
      phone: "+91 9876511234",
      department: "Sponsorship",
      responsibilities: ["Sponsor acquisition", "Partnership strategy"],
    },
   
    
    
    
    {
      name: "Shivansh Shukla",
      role: "Operations Head",
      img: require("../../assests/final_team/Shivansh_shukla.JPG"),
      email: "shivansh.shukla@example.com",
      phone: "+91 9876521234",
      department: "Operations",
      responsibilities: ["Oversee event flow", "Team coordination"],
    },
   
    {
      name: "Aman Sharma",
      role: "Development Head",
      img: require("../../assests/final_team/Aman.jpg"),
      email: "aman.sharma@example.com",
      phone: "+91 9876541234",
      department: "Development",
      responsibilities: ["Technical supervision", "Website maintenance"],
    },
    {
      name: "Harsh Patel",
      role: "Sponsorship Co-Head",
      img: require("../../assests/final_team/Harsh_patel.JPG"),
      email: "harsh.patel@example.com",
      phone: "+91 9876546789",
      department: "Sponsorship",
      responsibilities: ["Sponsor coordination", "Partnership management"],
    },
    {
      name: "Samriddhi Sati",
      role: "Hospitality Head",
      img: require("../../assests/final_team/Samriddhi_sati.JPG"),
      email: "samriddhi.sati@example.com",
      phone: "+91 9876547890",
      department: "Hospitality",
      responsibilities: ["Guest management", "Hospitality coordination"],
    },
    {
      name: "Samriddhi Tripathi",
      role: "Sponsorship Co-Head",
      img: require("../../assests/final_team/Samriddhi_tripathi.JPG"),
      email: "samriddhi.tripathi@example.com",
      phone: "+91 9876548901",
      department: "Sponsorship",
      responsibilities: ["Sponsor outreach", "Partnership coordination"],
    },
    {
      name: "Shouray Soni",
      role: "Operations Co-Head",
      img: require("../../assests/final_team/Shaurya.JPG"),
      email: "shouray.soni@example.com",
      phone: "+91 9876549012",
      department: "Operations",
      responsibilities: ["Event operations", "Team coordination"],
    },
    {
      name: "Amisha Sahasrabuddhe",
      role: "Sponsorship Co-Head",
      img: require("../../assests/final_team/amisha.JPG"),
      email: "amisha.sahasrabuddhe@example.com",
      phone: "+91 9876550123",
      department: "Sponsorship",
      responsibilities: ["Sponsor relations", "Partnership strategy"],
    },
    {
      name: "Arnav Kumar",
      role: "Operations Co-Head",
      img: require("../../assests/final_team/arnav_kumar.JPG"),
      email: "arnav.kumar@example.com",
      phone: "+91 9876551234",
      department: "Operations",
      responsibilities: ["Operations management", "Event coordination"],
    },
    {
      name: "Pulakita Maity",
      role: "Sponsorship Co-Head",
      img: require("../../assests/final_team/pulakita.JPG"),
      email: "pulakita.maity@example.com",
      phone: "+91 9876552345",
      department: "Sponsorship",
      responsibilities: ["Sponsor engagement", "Partnership development"],
    },
    {
      name: "Srishti Somya",
      role: "Hospitality Co-Head",
      img: require("../../assests/final_team/srishti.JPG"),
      email: "srishti.somya@example.com",
      phone: "+91 9876553456",
      department: "Hospitality",
      responsibilities: ["Guest services", "Hospitality management"],
    },
    {
      name: "Sajal",
      role: "Team Member",
      img: require("../../assests/final_team/sajal.jpg"),
      email: "sajal@example.com",
      phone: "+91 9876554567",
      department: "Team",
      responsibilities: ["Event coordination", "Team support"],
    },
    {
      name: "Shashwat",
      role: "Team Member",
      img: require("../../assests/final_team/shashwat.jpg"),
      email: "shashwat@example.com",
      phone: "+91 9876555678",
      department: "Team",
      responsibilities: ["Technical support", "Event activities"],
    },
    {
      name: "Devansh Bhargava",
      role: "Operations Co-Head",
      img: require("../../assests/final_team/Devansh_bhargava.JPG"),
      email: "devansh.bhargava@example.com",
      phone: "+91 9876556789",
      department: "Operations",
      responsibilities: ["Operations coordination", "Event management"],
    },
    {
      name: "Karan Chandrawanshii",
      role: "Operations Co-Head",
      img: require("../../assests/final_team/karan.JPG"),
      email: "karan.chandrawanshii@example.com",
      phone: "+91 9876557890",
      department: "Operations",
      responsibilities: ["Operations support", "Team coordination"],
    },
  ];

  // ✅ Click logic
const handleCardClick = (person, index) => {
  if (modalNames.includes(person.name)) {
    if (active === index) {
      // If already expanded → open modal
      setSelectedPerson(person);
    } else {
      // If not expanded yet → expand first
      setActive(index);
    }
  } else {
    // For all others → normal expand/collapse behavior
    setActive(index === active ? null : index);
  }
};


  const closeModal = () => setSelectedPerson(null);

  return (
    <div className="gallery-wrapper">
      <div className="gallery">
        {people.map((person, index) => (
          <div
            key={index}
            className={`panel ${active === index ? "active" : ""}`}
            onClick={() => handleCardClick(person, index)}
            style={{
              backgroundImage: `url(${person.img})`,
              cursor: "pointer",
            }}
          >
            <div className="overlay">
              <h2>{person.name}</h2>
              <p>{person.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {selectedPerson && (
        <div className="organizer-modal-overlay" onClick={closeModal}>
          <div
            className="organizer-modal-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="organizer-modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="organizer-modal-content">
              <div className="organizer-modal-left">
                <div className="organizer-detail-item">
                  <span className="organizer-detail-label">Name:</span>
                  <span className="organizer-detail-value">
                    {selectedPerson.name}
                  </span>
                </div>

                <div className="organizer-detail-item">
                  <span className="organizer-detail-label">Designation:</span>
                  <span className="organizer-detail-value">
                    {selectedPerson.role}
                  </span>
                </div>

                <div className="organizer-detail-item">
                  <span className="organizer-detail-label">Email:</span>
                  <span className="organizer-detail-value">
                    {selectedPerson.email}
                  </span>
                </div>
              </div>

              <div className="organizer-modal-center">
                <img
                  src={selectedPerson.img}
                  alt={selectedPerson.name}
                  className="organizer-modal-image"
                />
                <h2 className="organizer-modal-title">
                  {selectedPerson.name}
                </h2>
                <span className="organizer-modal-role">
                  {selectedPerson.role}
                </span>
              </div>

              <div className="organizer-modal-right">
                <div className="organizer-detail-item">
                  <span className="organizer-detail-label">Phone:</span>
                  <span className="organizer-detail-value">
                    {selectedPerson.phone}
                  </span>
                </div>

                {selectedPerson.department && (
                  <div className="organizer-detail-item">
                    <span className="organizer-detail-label">Department:</span>
                    <span className="organizer-detail-value">
                      {selectedPerson.department}
                    </span>
                  </div>
                )}

                {selectedPerson.responsibilities && (
                  <div className="organizer-detail-item">
                    <span className="organizer-detail-label">
                      Key Responsibilities:
                    </span>
                    <ul className="organizer-responsibilities-list">
                      {selectedPerson.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;