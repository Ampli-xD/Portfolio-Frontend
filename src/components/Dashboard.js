import React, { useState } from 'react';
import './Dashboard.css';

const skillsData = [
  {
    name: 'Python',
    icon: <i className="fab fa-python"></i>,
    color: '#3776AB'
  },
  {
    name: 'Java',
    icon: <i className="fab fa-java"></i>,
    color: '#007396'
  },
  {
    name: 'C++',
    icon: <i className="fas fa-code"></i>,
    color: '#00599C'
  },
  {
    name: 'Scala',
    icon: <i className="fas fa-code"></i>,
    color: '#DC322F'
  },
  {
    name: 'Groq',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6.4 3.2-6.4 3.2L5.6 8 12 4.8zM4 16.5v-7l7 3.5v7l-7-3.5zm9 3.5v-7l7-3.5v7l-7 3.5z"/>
    </svg>,
    color: '#FF6B6B'
  },
  {
    name: 'Claude',
    icon: <i className="fas fa-robot"></i>,
    color: '#7B61FF'
  },
  {
    name: 'ChatGPT',
    icon: <i className="fas fa-comment-dots"></i>,
    color: '#10A37F'
  },
  {
    name: 'Gemini',
    icon: <i className="fas fa-brain"></i>,
    color: '#4285F4'
  },
  {
    name: 'ChromaDB',
    icon: <i className="fas fa-database"></i>,
    color: '#00C4CC'
  },
  {
    name: 'PostgreSQL',
    icon: <i className="fas fa-database"></i>,
    color: '#336791'
  },
  {
    name: 'Redis',
    icon: <i className="fas fa-database"></i>,
    color: '#DC382D'
  },
  {
    name: 'IntelliJ IDEA',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0v24h24V0H0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723V3.111zm11.055 0H17v6.5c0 .612-.055 1.111-.167 1.5-.111.39-.278.723-.5 1-.222.278-.5.5-.833.667-.334.167-.722.278-1.167.333-.444.056-.944.084-1.5.084l-.333-.006a8.213 8.213 0 0 1-.834-.083v-2c.223.055.39.083.5.083.112 0 .223-.005.334-.016.11-.012.222-.04.333-.084.111-.045.206-.1.283-.167a.64.64 0 0 0 .167-.25c.033-.1.05-.223.05-.366V3.11zM2.222 19.5h9V21h-9v-1.5z"/>
    </svg>,
    color: '#000000'
  },
  {
    name: 'VS Code',
    icon: <i className="fas fa-code"></i>,
    color: '#007ACC'
  },
  {
    name: 'Windsurf',
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M12 17l5-5h-3V7h-4v5H7l5 5z"/>
    </svg>,
    color: '#E7A143'
  }
];

const Dashboard = () => {
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setIsMobileMenuOpen(false);
    } else if (isRightSwipe) {
      setIsMobileMenuOpen(true);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const toggleMessages = () => {
    setIsMessagesOpen(!isMessagesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div 
      className={`dashboard-container ${isMobileMenuOpen ? 'menu-open' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Navigation Panel */}
      <div className={`panel panel-left ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="nav-menu" aria-label="Main navigation">
          <ul>
            <li>
              <i className="fas fa-home" aria-label="Home"></i>
              <span className="nav-label">Home</span>
            </li>
            <li>
              <i className="fas fa-project-diagram" aria-label="Projects"></i>
              <span className="nav-label">Projects</span>
            </li>
            <li>
              <i className="fas fa-user" aria-label="About"></i>
              <span className="nav-label">About</span>
            </li>
            <li onClick={toggleMessages}>
              <i className="fas fa-robot" aria-label="Chat"></i>
              <span className="nav-label">Chat</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Center Panel - Main Content */}
      <div className="panel panel-center">
        <main className="content-main">
          <div className="profile-section">
            <div className="profile-container">
              <div className="name-header-section">
                <div className="name-title-container">
                  <h2 className="name-main-title">DISHANT KAPOOR</h2>
                  <div className="name-background-text">DISHANT KAPOOR</div>
                </div>
              </div>
            </div>
            <div className="split-layout">
              <div className="box box-small">
                <div className="card card-glass profile-section">
                  <div className="profile-content">
                    <div className="photo-container">
                      <div className="flip-card">
                        <div className="flip-card-inner">
                          <div className="flip-card-front">
                            <img 
                              src="/Photo.png"
                              alt="Dishant Kapoor"
                              className="profile-image"
                              loading="eager"
                              style={{
                                width: '300px',
                                height: '300px',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                          <div className="flip-card-back">
                            <div className="back-content">
                              <p>"Good Morning! And if I don't see ya, Good Afternoon, Good Evening, and Good Night!"</p>
                              <div className="quote-attribution">- Truman</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="social-links">
                      <a href="https://github.com/Ampli-xD" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/dishant29" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="mailto:dishantkapoor29@gmail.com" title="Email">
                        <i className="fas fa-envelope"></i>
                      </a>
                      <a href="https://drive.google.com/file/d/1N77p-e6LKDtJWIYKoOTeqAtnV-Zmpl5B/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Resume">
                        <i className="fas fa-file-alt"></i>
                      </a>
                      <a href="https://www.instagram.com/dishant.pyw" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=918130332537" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a href="https://linktr.ee/dishant.pyw" target="_blank" rel="noopener noreferrer" title="Linktree">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="profile-section">
                  <p className="bio-text">
                    Heyo! I am Dishant, a <span className="highlight-primary">Computer Science Major</span> with a <span className="highlight-secondary">Minor in AI/ML</span> at Bharati Vidyapeeth's College of Engineering, with a passion for innovation and creative problem-solving. I've developed a strong foundation in programming languages like <span className="highlight-secondary">Python, Java, C, C++, and Scala</span>, and I'm interested in exploring their applications. I'm also drawn to the areas of <span className="highlight-primary">Large Language Models</span> and <span className="highlight-primary">Vector Databases</span>, where I <span className="highlight-primary">actively study and analyze research papers</span> to stay at the forefront of these fields. Specifically, I'm interested in <span className="highlight-secondary">LLM-based pipelines, Semantic Search</span>, and how they can be used to drive insight and innovation. I'm excited to continue learning and growing, and I'm looking to explore opportunities that align with my interests. Outside of coding, I enjoy <span className="highlight-primary">Design and Photography</span>, and I often look for ways to integrate my technical and artistic interests in my projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="skills-section">
              <div className="skills-header">
                <ul>
                  <li>SKILLS</li>
                  <li>SUITE</li>
                  <li>STACK</li>
                </ul>
              </div>
              <div className="skills-grid">
                {skillsData.map((skill, index) => (
                  <div key={index} className="skill-flip-card">
                    <div className="skill-flip-card-inner">
                      <div className="skill-flip-card-front">
                        <div className="skill-logo" style={{ color: skill.color }}>
                          {skill.icon}
                        </div>
                      </div>
                      <div className="skill-flip-card-back">
                        <div className="skill-name">
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="experience-header-section">
              <div className="experience-title-container">
                <h2 className="experience-main-title">EXPERIENCE</h2>
                <div className="experience-background-text">EXPERIENCE</div>
              </div>
            </div>
            
            <div className="experience-panels">
            <div className="experience-panel">
                <div className="experience-header">
                  <div className="company-logo">
                    <i className="fas fa-business-time"></i>
                  </div>
                  <div className="experience-title">
                    <h3 className="company-name">ELEVATE VYAPAR</h3>
                    <div className="job-title">Freelancer</div>
                    <div className="duration">Nov 2023 - May 2024</div>
                  </div>
                </div>
                <p className="experience-description">
                  Enhanced design efficiency in a fast-paced startup environment. Developed strong problem-solving and client collaboration skills. Mastered client communication and design iteration process, focusing on meeting expectations with minimal revisions.
                </p>
                <div className="tech-stack">
                  <span className="tech-tag">UI/UX</span>
                  <span className="tech-tag">Design</span>
                  <span className="tech-tag">Client Relations</span>
                  <span className="tech-tag">Project Management</span>
                </div>
              </div>
              
              <div className="experience-panel featured">
                <div className="experience-header">
                  <div className="company-logo">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div className="experience-title">
                    <h3 className="company-name">CallPrep.io</h3>
                    <div className="job-title">Backend Engineering Intern</div>
                    <div className="duration">July 2024 - August 2024</div>
                  </div>
                </div>
                <p className="experience-description">
                  Improved Django backends and managed complex, scalable APIs. Built LLM pipeline with vector databases for semantic search. Implemented WebSocket and Socket.IO for real-time communication. Applied service-oriented architecture with AI services using LLM APIs.
                </p>
                <div className="tech-stack">
                  <span className="tech-tag">Django</span>
                  <span className="tech-tag">LLM</span>
                  <span className="tech-tag">Vector DB</span>
                  <span className="tech-tag">WebSocket</span>
                  <span className="tech-tag">Socket.IO</span>
                </div>
              </div>


              <div className="experience-panel">
                <div className="experience-header">
                  <div className="company-logo">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="experience-title">
                    <h3 className="company-name">LEARNING FOLKS</h3>
                    <div className="job-title">PR: Researcher, Analyst & Designer</div>
                    <div className="duration">May 2023 - July 2023</div>
                  </div>
                </div>
                <p className="experience-description">
                  Progressed from Analyst and trainee Graphic Designer to Public Relations team. Conducted market research, created social media content, and optimized workflows. Gained valuable experience in company operations and team collaboration.
                </p>
                <div className="tech-stack">
                  <span className="tech-tag">Market Research</span>
                  <span className="tech-tag">Graphic Design</span>
                  <span className="tech-tag">Social Media</span>
                  <span className="tech-tag">Public Relations</span>
                </div>
              </div>

              <div className="experience-panel darker">
                <div className="experience-header">
                  <div className="company-logo">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <div className="experience-title">
                    <h3 className="company-name">MLSAC-BVP</h3>
                    <div className="job-title">Technical Core</div>
                    <div className="duration">Sep 2024 - Present</div>
                  </div>
                </div>
                <p className="experience-description">
                  Leading technical initiatives and workshops in Microsoft Learn Student Ambassador community. Organizing hands-on sessions in emerging technologies and fostering a collaborative learning environment.
                </p>
                <div className="tech-stack">
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Technical Leadership</span>
                  <span className="tech-tag">Community Building</span>
                  <span className="tech-tag">Workshop Facilitation</span>
                </div>
              </div>

              <div className="experience-panel darker">
                <div className="experience-header">
                  <div className="company-logo">
                    <i className="fas fa-palette"></i>
                  </div>
                  <div className="experience-title">
                    <h3 className="company-name">Qaafila BVP</h3>
                    <div className="job-title">General Secretary & Head of Design</div>
                    <div className="duration">Jan 2023 - Present</div>
                  </div>
                </div>
                <p className="experience-description">
                  Progressed from Design Executive to General Secretary, leading creative initiatives and managing organizational operations. Spearheaded brand identity development and implemented design systems for consistent visual communication.
                </p>
                <div className="tech-stack">
                  <span className="tech-tag">Leadership</span>
                  <span className="tech-tag">Graphic Design</span>
                  <span className="tech-tag">Brand Strategy</span>
                  <span className="tech-tag">Team Management</span>
                </div>
              </div>

              <div className="experience-panel darker">
                <div className="experience-header">
                  <div className="company-logo">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="experience-title">
                    <h3 className="company-name">Internshala</h3>
                    <div className="job-title">Student Partner</div>
                    <div className="duration">Feb 2023 - Apr 2023</div>
                  </div>
                </div>
                <p className="experience-description">
                  Served as a campus ambassador, promoting career opportunities and professional development. Organized workshops and events to enhance student engagement and career awareness.
                </p>
                <div className="tech-stack">
                  <span className="tech-tag">Marketing</span>
                  <span className="tech-tag">Event Management</span>
                  <span className="tech-tag">Leadership</span>
                  <span className="tech-tag">Community Engagement</span>
                </div>
              </div>
          </div>
            <div className="education-header-section">
              <div className="section-header">
                <h2 className="experience-main-title">Education</h2>
                <div className="experience-background-text">Education</div>
              </div>
            </div>
            <div className="education-panels">
              <div className="education-panel">
                <div className="education-header">
                  <div className="education-info">
                    <h3 className="institution-name">Cambridge School, Noida</h3>
                    <div className="degree-name">Senior Secondary (XII) | 85.5%</div>
                    <div className="degree-name">Matriculation (X) | 86%</div>
                    <div className="education-duration">2018 - 2022</div>
                  </div>
                </div>
                <div className="education-details">
                  Completed comprehensive education with focus on PCM and Computer Science. 
                  Engaged in technical competitions and cultural activities.
                </div>
                <div className="education-highlights">
                  <span className="highlight-tag">Physics</span>
                  <span className="highlight-tag">Chemistry</span>
                  <span className="highlight-tag">Maths</span>
                  <span className="highlight-tag">Computer Science</span>
                </div>
              </div>
              
              <div className="education-panel">
                <div className="education-header">
                  <div className="education-info">
                    <h3 className="institution-name">Bharati Vidyapeeth's College of Engineering, GGSIPU, New Delhi</h3>
                    <div className="degree-name">B.Tech Computer Science | GPA: 8.1</div>
                    <div className="education-duration">2022 - 2026 (Expected)</div>
                  </div>
                </div>
                <div className="education-details">
                  Specializing in full-stack development and system design while maintaining strong academic performance.
                  Active participation in technical clubs and coding competitions.
                </div>
                <div className="education-highlights">
                  {/* <span className="highlight-tag">Development</span> */}
                  <span className="highlight-tag">System Design</span>
                  <span className="highlight-tag">Data Structures</span>
                  <span className="highlight-tag">Algorithms</span>
                </div>
              </div>

              <div className="education-panel">
                <div className="education-header">
                  <div className="education-info">
                    <h3 className="institution-name">Indian Institute of Photography</h3>
                    <div className="degree-name">Professional Diploma in Photography</div>
                    <div className="education-duration">2022 - 2024 (Expected)</div>
                  </div>
                </div>
                <div className="education-details">
                  Mastering digital photography and post-processing techniques. 
                  Specializing in portrait and composition studies.
                </div>
                <div className="education-highlights">
                  <span className="highlight-tag">Digital</span>
                  <span className="highlight-tag">Portrait</span>
                  <span className="highlight-tag">Composition</span>
                  <span className="highlight-tag">Post-Processing</span>
                </div>
              </div>
            </div>
            </div>
        </main>
      </div>

      {/* Messages Overlay */}
      {isMessagesOpen && (
        <div className="messages-overlay" onClick={(e) => {
          if (e.target.className === 'messages-overlay') {
            toggleMessages();
          }
        }}>
          <div className="messages-content">
            <div className="messages-header">
              <div className="header-content">
                <i className="fas fa-robot"></i>
                <h2>Ask AI about me</h2>
              </div>
              <button className="close-button" onClick={toggleMessages}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="messages-body">
              <div className="messages-list">
                {/* AI chat messages will go here */}
              </div>
              <div className="messages-input">
                <input 
                  type="text" 
                  placeholder="Ask anything about Dishant..." 
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      // Handle message send
                    }
                  }}
                />
                <button aria-label="Send message">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
