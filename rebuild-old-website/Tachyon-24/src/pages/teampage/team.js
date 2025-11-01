import React, { useState } from "react";
import "./team.css";
import "./team.css"

const Gallery = () => {
  const [active, setActive] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showCoHeads, setShowCoHeads] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [operationsTab, setOperationsTab] = useState("senior"); // "senior" or "junior"
  const [designingTab, setDesigningTab] = useState("senior"); // "senior" or "junior"
  const [hospitalityTab, setHospitalityTab] = useState("senior"); // "senior" or "junior"
  const [sponsorshipTab, setSponsorshipTab] = useState("senior"); // "senior" or "junior"
  const [developmentTab, setDevelopmentTab] = useState("senior"); // "senior" or "junior"

  // Co-Heads data organized by department
  const coHeads = {
    Designing: [
      {
        name: "Arnold Philip",
        role: "Designing Co-Head",
        img: require("../../assests/final_team/Arnold.JPG"),
        email: "arnold.philip@example.com",
        phone: "+91 9876502234",
      },
      {
        name: "Anupam Dwivedi",
        role: "Designing Co-Head",
        img: require("../../assests/final_team/DSC00231.JPG"),
        email: "anupam.dwivedi@example.com",
        phone: "+91 9876503234",
      },
      {
        name: "Yash Jain",
        role: "Designing Co-Head",
        img: require("../../assests/final_team/yash_jain.JPG"),
        email: "yash.jain@example.com",
        phone: "+91 9876504234",
      },
    ],
    Sponsorship: [
      {
        name: "Amisha Sahasrabuddhe",
        role: "Sponsorship Co-Head",
        img: require("../../assests/final_team/amisha.JPG"),
        email: "amisha.sahasrabuddhe@example.com",
        phone: "+91 9876550123",
      },
      {
        name: "Samriddhi Tripathi",
        role: "Sponsorship Co-Head",
        img: require("../../assests/final_team/Samriddhi_tripathi.JPG"),
        email: "samriddhi.tripathi@example.com",
        phone: "+91 9876548901",
      },
      {
        name: "Pulakita Maity",
        role: "Sponsorship Co-Head",
        img: require("../../assests/final_team/pulakita.JPG"),
        email: "pulakita.maity@example.com",
        phone: "+91 9876552345",
      },
      {
        name: "Harsh Patel",
        role: "Sponsorship Co-Head",
        img: require("../../assests/final_team/Harsh_patel.JPG"),
        email: "harsh.patel@example.com",
        phone: "+91 9876546789",
      },
    ],
    Operations: [
      {
        name: "Shouray Soni",
        role: "Operations Co-Head",
        img: require("../../assests/final_team/Shaurya.JPG"),
        email: "shouray.soni@example.com",
        phone: "+91 9876549012",
      },
      {
        name: "Arnav Kumar",
        role: "Operations Co-Head",
        img: require("../../assests/final_team/arnav_kumar.JPG"),
        email: "arnav.kumar@example.com",
        phone: "+91 9876551234",
      },
      {
        name: "Devansh Bhargava",
        role: "Operations Co-Head",
        img: require("../../assests/final_team/Devansh_bhargava.JPG"),
        email: "devansh.bhargava@example.com",
        phone: "+91 9876556789",
      },
      {
        name: "Karan Chandrawanshii",
        role: "Operations Co-Head",
        img: require("../../assests/final_team/karan.JPG"),
        email: "karan.chandrawanshii@example.com",
        phone: "+91 9876557890",
      },
    ],
    Hospitality: [
      {
        name: "Srishti Somya",
        role: "Hospitality Co-Head",
        img: require("../../assests/final_team/srishti.JPG"),
        email: "srishti.somya@example.com",
        phone: "+91 9876553456",
      },
    ],
  };

  // Operations Team Members by year
  const operationsTeamMembers = {
    senior: [
      { name: "Vidit Mukesh Sethiya", year: "3rd Year" },
      { name: "Raj Singh", year: "3rd Year" },
      { name: "Shambhavi Gupta", year: "3rd Year" },
      { name: "Ansh Kushwah", year: "3rd Year" },
    ],
    junior: [
      { name: "Sudhanshu Ranjan", year: "2nd Year" },
      { name: "Narayan Thakur", year: "2nd Year" },
      { name: "Yash", year: "2nd Year" },
      { name: "Amogh Rathod", year: "1st Year" },
      { name: "Samriddhi Trivedi", year: "1st Year" },
      { name: "Kartik Nayak", year: "1st Year" },
      { name: "Shivang Shiv Murthy", year: "1st Year" },
      { name: "Sujal Sharma", year: "1st Year" },
      { name: "Simanshu Singh", year: "1st Year" },
      { name: "Ravish Raj", year: "1st Year" },
      { name: "Rishika Singh", year: "1st Year" },
      { name: "Prakhar Modi", year: "1st Year" },
      { name: "Mohd Bakhtiyar Khan", year: "1st Year" },
      { name: "Kritarth Singh Baghel", year: "1st Year" },
      { name: "Anshika Subhash", year: "1st Year" },
      { name: "Awanish Sinha", year: "1st Year" },
      { name: "Reeti Keshari", year: "1st Year" },
      { name: "Shreeya Dixit", year: "1st Year" },
      { name: "Megha Namdev", year: "1st Year" },
      { name: "Paras Jain", year: "1st Year" },
      { name: "Meet Solanki", year: "1st Year" },
      { name: "Aadrika Gupta", year: "1st Year" },
      { name: "Mayank Namdev", year: "1st Year" },
    ],
  };

  // Designing Team Members by year
  const designingTeamMembers = {
    senior: [
      { name: "Ashish Chhabra", year: "3rd Year" },
      { name: "Jainam", year: "3rd Year" },
      { name: "Kanchi Gupta", year: "3rd Year" },
      { name: "Mihika Jain", year: "3rd Year" },
      { name: "Niharika", year: "3rd Year" },
      { name: "Shreya", year: "3rd Year" },
      { name: "Ajitesh", year: "3rd Year" },
    ],
    junior: [
      { name: "Aryan Nayak", year: "2nd Year" },
      { name: "Aadish Jain", year: "2nd Year" },
      { name: "Akshat Vijay", year: "2nd Year" },
      { name: "Arunam Jain", year: "2nd Year" },
      { name: "Krishna Tiwari", year: "2nd Year" },
      { name: "Kavya Jain", year: "2nd Year" },
      { name: "Suhani Rai", year: "2nd Year" },
      { name: "Gulshan Yadav", year: "2nd Year" },
      { name: "Ayushman Pandey", year: "2nd Year" },
      { name: "Anushka Jadon", year: "2nd Year" },
      { name: "Eklavya Verma", year: "2nd Year" },
      { name: "Avi Pareta", year: "2nd Year" },
      { name: "Kratika Yadav", year: "2nd Year" },
      { name: "Krish Lall", year: "2nd Year" },
      { name: "Navya", year: "2nd Year" },
      { name: "Shubham", year: "2nd Year" },
      { name: "Pratap Mishra", year: "1st Year" },
      { name: "Nirvansha Sharma", year: "1st Year" },
      { name: "Mandar Dubey", year: "1st Year" },
      { name: "Aarush Agrawal", year: "1st Year" },
      { name: "Aparna Dwivedi", year: "1st Year" },
      { name: "Jeevansh Talwar", year: "1st Year" },
      { name: "Oasya Gupta", year: "1st Year" },
      { name: "Aadi Jain", year: "1st Year" },
      { name: "Dhairya Saxena", year: "1st Year" },
      { name: "Alok Kumar", year: "1st Year" },
      { name: "Harsh Vijay", year: "1st Year" },
      { name: "Vaibhav", year: "1st Year" },
    ],
  };

  // Hospitality Team Members by year
  const hospitalityTeamMembers = {
    senior: [
      { name: "Yash Parsai", year: "3rd Year" },
      { name: "Puru Asthana", year: "3rd Year" },
    ],
    junior: [
      { name: "Prafull Kumar Vats", year: "2nd Year" },
      { name: "Asmi Gupta", year: "2nd Year" },
    ],
  };

  // Sponsorship Team Members by year
  const sponsorshipTeamMembers = {
    senior: [
      { name: "Anjali", year: "3rd Year" },
      { name: "Khushi", year: "3rd Year" },
      { name: "Kritika Shukla", year: "3rd Year" },
      { name: "Vishwajeet", year: "3rd Year" },
      { name: "Anupam Kumar", year: "3rd Year" },
    ],
    junior: [
      { name: "Esha Tiwari", year: "1st Year" },
      { name: "Lavanya Patidar", year: "1st Year" },
      { name: "Sheikh Adeel", year: "1st Year" },
      { name: "Aditi Khanna", year: "1st Year" },
      { name: "Aadiya Lal", year: "1st Year" },
      { name: "Krishna Tiwari", year: "1st Year" },
      { name: "Gopesh Jha", year: "1st Year" },
      { name: "Adarsh Jain", year: "1st Year" },
      { name: "Aarushi Garg", year: "1st Year" },
      { name: "Dhruv Jain", year: "1st Year" },
      { name: "Aasim Ansari", year: "1st Year" },
      { name: "Aaron Richard Preminger", year: "1st Year" },
      { name: "Sapna Singh", year: "1st Year" },
      { name: "Jash Gurnani", year: "1st Year" },
      { name: "Sarmistha Dwivedi", year: "1st Year" },
    ],
  };

  // Development Team Members by year
  const developmentTeamMembers = {
    senior: [
      { name: "Ayush", year: "3rd Year" },
      { name: "Pratham", year: "3rd Year" },
      { name: "Yash Singhal", year: "3rd Year" },
      { name: "Shivansh", year: "3rd Year" },
      { name: "Aditya Sharma", year: "3rd Year" },
    ],
    junior: [],
  };

  // ✅ Only these names open the modal (not expand)
  const modalNames = ["Aditya Vyas", "Kushagra Singh","Nakul Goyal","Ojas Singhai","Devesh Kumar","Shivansh Shukla","Samriddhi Sati","Aman Sharma"];

  const people = [
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
      name: "Samriddhi Sati",
      role: "Hospitality Head",
      img: require("../../assests/final_team/Samriddhi_sati.JPG"),
      email: "samriddhi.sati@example.com",
      phone: "+91 9876547890",
      department: "Hospitality",
      responsibilities: ["Guest management", "Hospitality coordination"],
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
  ];

  // ✅ Click logic - Check if department has Co-Heads or Team Members
  const handleCardClick = (person, index) => {
    if (modalNames.includes(person.name)) {
      if (active === index) {
        // If already expanded → check if department has Co-Heads or Team Members
        const hasCoHeads = coHeads[person.department] && coHeads[person.department].length > 0;
        const hasTeamMembers = person.department === "Operations" || 
                               person.department === "Designing" || 
                               person.department === "Hospitality" || 
                               person.department === "Sponsorship" || 
                               person.department === "Development";
        
        if (hasCoHeads || hasTeamMembers) {
          setSelectedDepartment(person.department);
          setShowCoHeads(true);
        } else {
          setSelectedPerson(person);
        }
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
  const closeCoHeadsModal = () => {
    setShowCoHeads(false);
    setSelectedDepartment(null);
  };

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

      {/* ✅ Co-Heads Modal */}
      {showCoHeads && selectedDepartment && (
        <div className="coheads-modal-overlay" onClick={closeCoHeadsModal}>
          <div
            className="coheads-modal-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="coheads-modal-close" onClick={closeCoHeadsModal}>
              ×
            </button>

            <h2 className="coheads-modal-title">{selectedDepartment} Team</h2>
            
            {coHeads[selectedDepartment] && coHeads[selectedDepartment].length > 0 && (
              <>
                <p className="coheads-modal-subtitle">Co-Heads</p>
                <div className="coheads-grid">
                  {coHeads[selectedDepartment].map((coHead, index) => (
                    <div key={index} className="cohead-card">
                      <div className="cohead-image-wrapper">
                        <img
                          src={coHead.img}
                          alt={coHead.name}
                          className="cohead-image"
                        />
                      </div>
                      <h3 className="cohead-name">{coHead.name}</h3>
                      <p className="cohead-role">{coHead.role}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Operations Department Team Members Section */}
            {selectedDepartment === "Operations" && (
              <div className="operations-team-section">
                <h3 className="operations-team-title">Team Members</h3>
                
                {/* Tabs - Only show if both teams have members */}
                {operationsTeamMembers.senior.length > 0 && operationsTeamMembers.junior.length > 0 && (
                  <div className="operations-tabs">
                    <button 
                      className={`operations-tab ${operationsTab === "senior" ? "active" : ""}`}
                      onClick={() => setOperationsTab("senior")}
                    >
                      Senior Team
                    </button>
                    <button 
                      className={`operations-tab ${operationsTab === "junior" ? "active" : ""}`}
                      onClick={() => setOperationsTab("junior")}
                    >
                      Junior Team
                    </button>
                  </div>
                )}

                {/* Team Members List */}
                <div className="operations-members-list">
                  {operationsTeamMembers[operationsTab].length > 0 ? (
                    operationsTeamMembers[operationsTab].map((member, index) => (
                      <div key={index} className="operations-member-item">
                        <span className="member-name">{member.name}</span>
                        <span className="member-year">{member.year}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{textAlign: 'center', color: '#888', marginTop: '20px'}}>No team members</p>
                  )}
                </div>
              </div>
            )}

            {/* Designing Department Team Members Section */}
            {selectedDepartment === "Designing" && (
              <div className="operations-team-section">
                <h3 className="operations-team-title">Team Members</h3>
                
                {/* Tabs - Only show if both teams have members */}
                {designingTeamMembers.senior.length > 0 && designingTeamMembers.junior.length > 0 && (
                  <div className="operations-tabs">
                    <button 
                      className={`operations-tab ${designingTab === "senior" ? "active" : ""}`}
                      onClick={() => setDesigningTab("senior")}
                    >
                      Senior Team
                    </button>
                    <button 
                      className={`operations-tab ${designingTab === "junior" ? "active" : ""}`}
                      onClick={() => setDesigningTab("junior")}
                    >
                      Junior Team
                    </button>
                  </div>
                )}

                {/* Team Members List */}
                <div className="operations-members-list">
                  {designingTeamMembers[designingTab].length > 0 ? (
                    designingTeamMembers[designingTab].map((member, index) => (
                      <div key={index} className="operations-member-item">
                        <span className="member-name">{member.name}</span>
                        <span className="member-year">{member.year}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{textAlign: 'center', color: '#888', marginTop: '20px'}}>No team members</p>
                  )}
                </div>
              </div>
            )}

            {/* Sponsorship Department Team Members Section */}
            {selectedDepartment === "Sponsorship" && (
              <div className="operations-team-section">
                <h3 className="operations-team-title">Team Members</h3>
                
                {/* Tabs - Only show if both teams have members */}
                {sponsorshipTeamMembers.senior.length > 0 && sponsorshipTeamMembers.junior.length > 0 && (
                  <div className="operations-tabs">
                    <button 
                      className={`operations-tab ${sponsorshipTab === "senior" ? "active" : ""}`}
                      onClick={() => setSponsorshipTab("senior")}
                    >
                      Senior Team
                    </button>
                    <button 
                      className={`operations-tab ${sponsorshipTab === "junior" ? "active" : ""}`}
                      onClick={() => setSponsorshipTab("junior")}
                    >
                      Junior Team
                    </button>
                  </div>
                )}

                {/* Team Members List */}
                <div className="operations-members-list">
                  {sponsorshipTeamMembers[sponsorshipTab].length > 0 ? (
                    sponsorshipTeamMembers[sponsorshipTab].map((member, index) => (
                      <div key={index} className="operations-member-item">
                        <span className="member-name">{member.name}</span>
                        <span className="member-year">{member.year}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{textAlign: 'center', color: '#888', marginTop: '20px'}}>No team members</p>
                  )}
                </div>
              </div>
            )}

            {/* Hospitality Department Team Members Section */}
            {selectedDepartment === "Hospitality" && (
              <div className="operations-team-section">
                <h3 className="operations-team-title">Team Members</h3>
                
                {/* Tabs - Only show if both teams have members */}
                {hospitalityTeamMembers.senior.length > 0 && hospitalityTeamMembers.junior.length > 0 && (
                  <div className="operations-tabs">
                    <button 
                      className={`operations-tab ${hospitalityTab === "senior" ? "active" : ""}`}
                      onClick={() => setHospitalityTab("senior")}
                    >
                      Senior Team
                    </button>
                    <button 
                      className={`operations-tab ${hospitalityTab === "junior" ? "active" : ""}`}
                      onClick={() => setHospitalityTab("junior")}
                    >
                      Junior Team
                    </button>
                  </div>
                )}

                {/* Team Members List */}
                <div className="operations-members-list">
                  {hospitalityTeamMembers[hospitalityTab].length > 0 ? (
                    hospitalityTeamMembers[hospitalityTab].map((member, index) => (
                      <div key={index} className="operations-member-item">
                        <span className="member-name">{member.name}</span>
                        <span className="member-year">{member.year}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{textAlign: 'center', color: '#888', marginTop: '20px'}}>No team members</p>
                  )}
                </div>
              </div>
            )}

            {/* Development Department Team Members Section */}
            {selectedDepartment === "Development" && (
              <div className="operations-team-section">
                <h3 className="operations-team-title">Team Members</h3>
                
                {/* Tabs - Only show if both teams have members */}
                {developmentTeamMembers.senior.length > 0 && developmentTeamMembers.junior.length > 0 && (
                  <div className="operations-tabs">
                    <button 
                      className={`operations-tab ${developmentTab === "senior" ? "active" : ""}`}
                      onClick={() => setDevelopmentTab("senior")}
                    >
                      Senior Team
                    </button>
                    <button 
                      className={`operations-tab ${developmentTab === "junior" ? "active" : ""}`}
                      onClick={() => setDevelopmentTab("junior")}
                    >
                      Junior Team
                    </button>
                  </div>
                )}

                {/* Team Members List */}
                <div className="operations-members-list">
                  {developmentTeamMembers[developmentTab].length > 0 ? (
                    developmentTeamMembers[developmentTab].map((member, index) => (
                      <div key={index} className="operations-member-item">
                        <span className="member-name">{member.name}</span>
                        <span className="member-year">{member.year}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{textAlign: 'center', color: '#888', marginTop: '20px'}}>No team members</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;