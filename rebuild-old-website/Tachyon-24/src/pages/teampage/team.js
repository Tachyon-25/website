import React, { useState } from "react";
import "./team.css";

// Import images
import anjanaeymain from "../../assests/team/file.png"
import gauravbg from "../../assests/team/gauravSirBg.jpg";
import gaurav from "../../assests/team/IMG_2691 - GAURAV TIWARI.png";
import saketsirbg from "../../assests/team/draken.jpg";
import Saketsir from "../../assests/team/_CLG0484 - HIMANSHU KUMAR MAHTO.png";
import organizerImage from "../../assests/team/WhatsApp Image 2024-11-09 at 6.13.48 PM.png";
import coOrganizerImage from "../../assests/team/20241013_165421(2).png";
import aliceImage from "../../assests/download (3).jpg";
//import bobImage from "../../assests/download (3).jpg";
import shivani from "../../assests/team/IMG20240824173138.png";
import charlieImage from "../../assests/download (3).jpg";
import himanshuSir from "../../assests/team/himanshusir.png";
import himanshuSirBg from "../../assests/team/c6c2ceb6baa9990646e5466518b470da.png";
import hardikSirBg from "../../assests/team/main-qimg-e023e6d31c3f1dd8ad673464e1b52c08-lq.jpg";
import alisirbg from "../../assests/team/OIP.png";
import sampurn from "../../assests/team/sampurn1 - SAMPURN CHOUKSEY.png";
import sampurnbg from "../../assests/team/5e0a02131c0567d225ee1b2d5c25232b.jpg";
import yrichi from "../../assests/team/yorichi.jpg";
import pritam from "../../assests/team/pritam.png";
import alakh from "../../assests/team/alakh.png";
import aakarsh from "../../assests/team/aakarsh.png";
import deepak from "../../assests/team/deepak.png";
import kavya from "../../assests/team/kavya.png";
import om from "../../assests/team/om.png";
import sankalp from "../../assests/team/sankalp.png";
import yashaggrahari from "../../assests/team/yashaggrahari.png";
import pritambg from "./../../assests/team/pritambackground.jpg"
import kavyabg from "../../assests/team/kavyabg.jpg"
import anjanney from "../../assests/team/roy_mustang___fma_by_gbtz007_d584obo-fullview.jpg"
import chojibg from "../../assests/team/chojibg.jpg"
import killua from "../../assests/team/killua.jpg"
import yami from "../../assests/team/yami.jpg"
import download from "../../assests/team/download.jpg"
import ichigo from "../../assests/team/ichigo.jpg"
import thorfinn from "../../assests/team/thorfinn.jpg"
const OrganizerModal = ({ isOpen, onClose, organizerData }) => {
  if (!isOpen) return null;

  return (
    <div className="organizer-modal-overlay" onClick={onClose}>
      <div
        className="organizer-modal-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="organizer-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="organizer-modal-content">
          {/* Left Details */}
          <div className="organizer-modal-left">
            <div className="organizer-detail-item">
              <span className="organizer-detail-label">Name:</span>
              <span className="organizer-detail-value">
                {organizerData.name}
              </span>
            </div>

            <div className="organizer-detail-item">
              <span className="organizer-detail-label">Designation:</span>
              <span className="organizer-detail-value">
                {organizerData.designation}
              </span>
            </div>

            <div className="organizer-detail-item">
              <span className="organizer-detail-label">Email:</span>
              <span className="organizer-detail-value">
                {organizerData.email}
              </span>
            </div>
          </div>

          {/* Center Photo Section */}
          <div className="organizer-modal-center">
            <div className="organizer-photo-container">
              <img
                src={organizerData.image}
                alt={organizerData.name}
                className="organizer-modal-image"
              />
            </div>
            <h2 className="organizer-modal-title">{organizerData.name}</h2>
            <span className="organizer-modal-role">{organizerData.role}</span>
          </div>

          {/* Right Details */}
          <div className="organizer-modal-right">
            <div className="organizer-detail-item">
              <span className="organizer-detail-label">Phone:</span>
              <span className="organizer-detail-value">
                {organizerData.phone}
              </span>
            </div>

            {organizerData.department && (
              <div className="organizer-detail-item">
                <span className="organizer-detail-label">Department:</span>
                <span className="organizer-detail-value">
                  {organizerData.department}
                </span>
              </div>
            )}

            {organizerData.responsibilities && (
              <div className="organizer-detail-item">
                <span className="organizer-detail-label">
                  Key Responsibilities:
                </span>
                <ul className="organizer-responsibilities-list">
                  {organizerData.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const TeamModal = ({ isOpen, onClose, teamData }) => {
  if (!isOpen) return null;

  // Normalize co-leads data to always be an array
  const coLeads = teamData.coLead
    ? Array.isArray(teamData.coLead)
      ? teamData.coLead
      : [teamData.coLead]
    : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal-title">{teamData.title}</h2>

        <div className="modal-body">
          <div className="leads-section">
            <div className="leads-container">
              {/* Team Lead */}
              <div className="lead-card">
                <h3>Team Lead</h3>
                <div className="lead-info">
                  <div style={{ 
                    position: 'relative',
                    width: '150px',  // Adjust based on your image size
                    height: '150px', // Adjust based on your image size
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto'
                  }}>
                    {/* Background Image */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `url(${teamData.backGroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(2px)',
                        transform: 'scale(1.1)',
                        zIndex: 1,
                      }}
                    />
                    {/* Profile Image */}
                    <img
                      src={teamData.leadImage}
                      alt={teamData.leadName}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2,
                      }}
                    />
                  </div>
                  <h4>{teamData.leadName}</h4>
                </div>
              </div>

              {/* Co-Leads */}
              {coLeads.map((coLead, index) => (
                <div key={index} className="lead-card">
                  <h3>Co-Lead</h3>
                  <div className="lead-info">
                    <div style={{ 
                      position: 'relative',
                      width: '150px',  // Adjust based on your image size
                      height: '150px', // Adjust based on your image size
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto'
                    }}>
                      {/* Background Image */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `url(${coLead.backGroundImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          filter: 'blur(2px)',
                          transform: 'scale(1.1)',
                          zIndex: 1,
                        }}
                      />
                      {/* Profile Image */}
                      <img
                        src={coLead.image}
                        alt={coLead.name}
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          zIndex: 2,
                        }}
                      />
                    </div>
                    <h4>{coLead.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="members-section">
            <h3>Team Members</h3>
            {teamData.members && teamData.members.length > 0 ? (
              <div className="members-list">
                {teamData.members.map((member, index) => (
                  <div key={index} className="member-item">
                    <p className="member-name">{member.name}</p>
                    <p className="member-designation">{member.role}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-members">No team members to display</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const [isOrganizerModalOpen, setIsOrganizerModalOpen] = useState(false);

  const organizersData = {
    organizer: {
      name: "Hardik Sharma",
      role: "Organiser",
      image: organizerImage,
      backgroundImage: hardikSirBg,
      designation: "Senior Event Coordinator",
      email: "hardik.sharma@example.com",
      phone: "+91 98765 43210",
      department: "Event Management",
      responsibilities: [
        "Overall event coordination",
        "Strategic planning",
        "Team leadership",
        "Budget management",
      ],
    },
    coorganizer: {
      name: "Ali Shaharyar Abbas",
      role: "Co-organiser",
      image: coOrganizerImage,
      backgroundImage: alisirbg,
      designation: "Assistant Event Coordinator",
      email: "ali.abbas@example.com",
      phone: "+91 98765 43211",
      department: "Event Management",
      responsibilities: [
        "Support event planning",
        "Team coordination",
        "Logistics management",
        "Vendor relations",
      ],
    },
  };

  const teamData = [
    {
      title: "Development Team",
      leadName: "Himanshu Kumar Mahto",
      leadRole: "Development Head",
      leadImage: himanshuSir,
      backGroundImage: himanshuSirBg,
      coLead: [
        {
          name: "Pritam Singh Shaktawat",
          role: "Co-Lead",
          image: pritam,
          backGroundImage:pritambg
        },
      ],
      members: [
        { name: "Aditya Vyas", role: "Senior Developer", image: charlieImage },
        { name: "Vansh Verma", role: "Senior Developer", image: aliceImage },
        { name: "Ranjan Mishra", role: "Developer", image: aliceImage },
        { name: "Pushkar Chaturvedi", role: "Developer", image: aliceImage },
        { name: "Suraj Kumar", role: "Developer", image: aliceImage },
        {
          name: "Divyanshi Ghatiya",
          role: "Junior Developer",
          image: aliceImage,
        },
        {
          name: "Vedansh Dhingra",
          role: "Junior Developer",
          image: aliceImage,
        },
      ],
    },
    {
      title: "Sponsorship",
      leadName: "Sampurn Chouksey",
      leadRole: "Sponsorship Head",
      leadImage: sampurn,
      backGroundImage: sampurnbg,
      coLead: [
        {
          name: "Kavya Singh",
          role: "Co-Lead",
          image: kavya,
          backGroundImage:kavyabg
        },
        {
          name: "Aanjaney Mishra",
          role: "Co-Lead",
          image: anjanaeymain,
          backGroundImage:anjanney
        },
      ],
      members: [
        {
          name: "Devesh Kumar",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Aditri Jain",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Harsh Patel",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Laxmikant Shukla",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Aditya Sachan",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Adarsh Singh",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Sejal Raghuvanshi",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Divyanshi Dixit",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Kanishk Donderia",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Rishabh Keshari",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Riya Dwivedi",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Swapnil Bam",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Harshit Mishra",
          role: "Sponsorship Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Subhi Jain",
          role: "Sponsorship Co-ordinator",
          image: aliceImage,
        },
      ],
    },
    {
      title: "Management ",
      leadName: "Gaurav Tiwari",
      leadRole: "Management Head",
      leadImage: gaurav,
      backGroundImage: gauravbg,
      coLead: [
        { name: "Yash Agrahari", role: "Co-Lead", image: yashaggrahari,
          backGroundImage:chojibg
         },
        {
          name: "Deepak Prajapati",
          role: "Co-Lead",
          image: deepak,
          backGroundImage:killua
        },
      ],
      members: [
    {
          name: "Ashutosh Sultania",
          role: "Management Co-ordinator",
          image: charlieImage,
        }   , {
          name: "Ajitesh Singh",
          role: "Management Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Priyanshi Mishra",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Devansh Bhargava",
          role: "Management Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Ajitesh Awasthi",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Astha Singh",
          role: "Management Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Sejal Raghuwanshi",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Palak Chauhan",
          role: "Management Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Himesh verma",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Gagan Shivhare",
          role: "Management Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Priyansh Goyal",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Narayan Singh",
          role: "Management Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Dhruv Diggiwal",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Sarthak Sirvaiya",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Juhi Gupta",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Namaswi Dubey",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Nandini Kaushik",
          role: "Management Co-ordinator",
          image: aliceImage,
        },
      ],
    },
    {
      title: "Designing and Social Media",
      leadName: "Saket Bagdi",
      leadRole: "Designing Head",
      leadImage: Saketsir,
      backGroundImage: saketsirbg,
      coLead: [
        {
          name: "Alakh Shrivastava",
          role: "Co-Lead",
          image: alakh,
          backGroundImage:yami
        },
        {
          name: "Aakarsh Dubey",
          role: "Co-Lead",
          image: aakarsh,
          backGroundImage:ichigo
        },
      ],
      members: [
        {
          name: "Kushagra Singh",
          role: "Senior Designer",
          image: charlieImage,
        },
        { name: "Ojas Singhai", role: "Senior Designer", image: aliceImage },
        {
          name: "Vishwesh Patidar",
          role: "Senior Designer",
          image: charlieImage,
        },
        { name: "Yash Jain", role: "Senior Designer", image: aliceImage },
        { name: "Yuvika Yadav", role: "Senior Designer", image: charlieImage },
        { name: "Bhumika Soni", role: "Designer", image: aliceImage },
        { name: "Kanchi Gupta", role: "Designer", image: charlieImage },
        { name: "Kavya Jain", role: "Junior Designer", image: aliceImage },
        {
          name: "Manas Upadhyay",
          role: "Junior Designer",
          image: charlieImage,
        },
        {
          name: "Ajinkya Borwankar",
          role: "Junior Designer",
          image: aliceImage,
        },
        { name: "Aryan Nayak", role: "Junior Designer", image: charlieImage },
        {
          name: "Chitranshi Tiwari",
          role: "Junior Designer",
          image: aliceImage,
        },
        { name: "Gulsahn Yadav", role: "Junior Designer", image: charlieImage },
        { name: "Kratika Yadav", role: "Junior Designer", image: aliceImage },
      ],
    },
    {
      title: "Hospitality ",
      leadName: "Shivani Singh",
      leadRole: "Hospitality Head",
      leadImage: shivani,
      backGroundImage: yrichi,
      coLead: [
        {
          name: "Om Parate",
          role: "Co-Lead",
          image: om,
          backGroundImage:download
        },
        {
          name: "Sankalp Pathak",
          role: "Co-Lead",
          image: sankalp,
          backGroundImage:thorfinn
        },
      ],
      members: [
        {
          name: "Shouray Soni",
          role: "Hospitality Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Tanya Singh",
          role: "Hospitality Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Anchit Dixit",
          role: "Hospitality Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Brij Sharma ",
          role: "Hospitality Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Divya Jain",
          role: "Hospitality Co-ordinator",
          image: aliceImage,
        },
        {
          name: "Shejal Dubey",
          role: "Hospitality Co-ordinator",
          image: charlieImage,
        },
        {
          name: "Piyush Kumar",
          role: "Hospitality Co-ordinator",
          image: aliceImage,
        },
      ],
    },
  ];

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setIsTeamModalOpen(true);
  };

  const handleOrganizerClick = (organizer) => {
    setSelectedOrganizer(organizer);
    setIsOrganizerModalOpen(true);
  };

  return (
    <div className="container" style={{ marginTop: "10vw" }}>
      <div className="hostsection">
        <div
          className="organizer-section"
          onClick={() => handleOrganizerClick(organizersData.organizer)}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url(${organizersData.organizer.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(2px)",
              transform: "scale(1.1)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src={organizerImage}
              alt="Organizer"
              className="organizer-image"
            />
            <div
              style={{
                backgroundColor: "black",
                Width: "100%",
                paddingLeft: "120px",
                paddingRight: "120px",
                borderRadius: "15px",
              }}
            >
              <h2>Organiser</h2>
              <p>Hardik Sharma</p>
            </div>
          </div>
        </div>
        <div
          className="coorganizer-section"
          onClick={() => handleOrganizerClick(organizersData.coorganizer)}
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url(${organizersData.coorganizer.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(2px)",
              transform: "scale(1.1)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <img
              src={coOrganizerImage}
              alt="Organizer"
              className="organizer-image"
              style={{ Width: "100%" }}
            />
            <div
              style={{
                backgroundColor: "black",
                Width: "100%",
                paddingLeft: "100px",
                paddingRight: "100px",
                borderRadius: "15px",
              }}
            >
              <h2>CoOrganiser</h2>
              <p>Ali Shaharyar Abbas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* ... (previous hostsection remains the same) */}
        <div className="core-team-section">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="team-member"
              onClick={() => handleTeamClick(team)}
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background div with blur effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundImage: team.backGroundImage
                    ? `url(${team.backGroundImage})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: "blur(2px)",
                  transform: "scale(1.1)", // Prevents blur edges from showing
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "150px",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "150px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              {/* Content div */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: adds a slight overlay
                }}
              >
                <img
                  src={team.leadImage}
                  alt={team.leadName}
                  className="team-member-image"
                />
                <div
                  style={{
                    backgroundColor: "black",
                    Width: "100%",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    borderRadius: "15px",
                  }}
                >
                  <h3>{team.leadRole}</h3>
                  <p>{team.leadName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ... (modals remain the same) */}
      </div>
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        teamData={selectedTeam}
      />

      <OrganizerModal
        isOpen={isOrganizerModalOpen}
        onClose={() => setIsOrganizerModalOpen(false)}
        organizerData={selectedOrganizer}
      />
    </div>
  );
};

export default Team;
