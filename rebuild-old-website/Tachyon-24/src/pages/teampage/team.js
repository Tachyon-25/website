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
      img: "https://picsum.photos/id/1013/600/800",
      email: "nakul.goyal@example.com",
      phone: "+91 9812345678",
      department: "Finance",
      responsibilities: ["Manage budget", "Oversee payments"],
    },
    {
      name: "Ojas Singhai",
      role: "Design Head",
      img: "https://picsum.photos/id/1014/600/800",
      email: "ojas.singhai@example.com",
      phone: "+91 9876501234",
      department: "Design",
      responsibilities: ["Visual design supervision", "Poster creation"],
    },
    {
      name: "Arnold Philip",
      role: "Design Co-Head",
      img: "https://picsum.photos/id/1015/600/800",
      email: "arnold.philip@example.com",
      phone: "+91 9876502234",
      department: "Design",
      responsibilities: ["Team management", "Design reviews"],
    },
    {
      name: "Anupam Dwivedi",
      role: "Design Co-Head",
      img: "https://picsum.photos/id/1016/600/800",
      email: "anupam.dwivedi@example.com",
      phone: "+91 9876503234",
      department: "Design",
      responsibilities: ["UI/UX supervision", "Illustration support"],
    },
    {
      name: "Yash Jain",
      role: "Design Co-Head",
      img: "https://picsum.photos/id/1017/600/800",
      email: "yash.jain@example.com",
      phone: "+91 9876504234",
      department: "Design",
      responsibilities: ["Graphic coordination", "Digital creatives"],
    },
    {
      name: "Aditya Vyas",
      role: "Organizer",
      img: "https://picsum.photos/id/1011/600/800",
      email: "aditya.vyas@example.com",
      phone: "+91 9876543210",
      department: "Management",
      responsibilities: ["Oversee event logistics", "Coordinate with sponsors"],
    },
    {
      name: "Kushagra Singh",
      role: "Co-Organizer",
      img: "https://picsum.photos/id/1012/600/800",
      email: "kushagra.singh@example.com",
      phone: "+91 9823456710",
      department: "Operations",
      responsibilities: ["Volunteer management", "Event scheduling"],
    },
    {
      name: "Devesh Kumar",
      role: "Sponsorship Head",
      img: "https://picsum.photos/id/1018/600/800",
      email: "devesh.kumar@example.com",
      phone: "+91 9876511234",
      department: "Sponsorship",
      responsibilities: ["Sponsor acquisition", "Partnership strategy"],
    },
   
    
    
    
    {
      name: "Shivansh Shukla",
      role: "Operations Head",
      img: "https://picsum.photos/id/1023/600/800",
      email: "shivansh.shukla@example.com",
      phone: "+91 9876521234",
      department: "Operations",
      responsibilities: ["Oversee event flow", "Team coordination"],
    },
   
    {
      name: "Aman Sharma",
      role: "Development Head",
      img: "https://picsum.photos/id/1030/600/800",
      email: "aman.sharma@example.com",
      phone: "+91 9876541234",
      department: "Development",
      responsibilities: ["Technical supervision", "Website maintenance"],
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