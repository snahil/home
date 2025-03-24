/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Professional Tech Color Palette */
    --primary-dark: #1a237e;    /* Deep Blue - represents trust and professionalism */
    --primary-light: #534bae;   /* Lighter Blue - for accessibility */
    --accent-1: #00838f;        /* Teal - represents stability and growth */
    --accent-2: #006064;        /* Dark Teal - for depth */
    --success: #2e7d32;         /* Green - represents capability and success */
    --warning: #f57c00;         /* Orange - for emphasis */
    --text-primary: #263238;    /* Dark Blue-Grey - for readability */
    --text-secondary: #455a64;  /* Blue-Grey - for secondary information */
    --background: #f5f7fa;      /* Light Grey-Blue - easy on eyes */
    --card-bg: rgba(255, 255, 255, 0.95);
    --tech-gradient: linear-gradient(135deg, var(--primary-dark) 0%, var(--accent-1) 100%);
    --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --transition: all 0.3s ease;
}

body {
    background: 
        linear-gradient(120deg, rgba(26, 35, 126, 0.03) 0%, rgba(0, 131, 143, 0.03) 100%),
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a237e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-attachment: fixed;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
.header {
    background: var(--tech-gradient);
    padding: 3rem 0;
    position: relative;
    overflow: hidden;
}

.header::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.1;
}

.profile-info {
    text-align: center;
}

.profile-info h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 700;
}

.title-bar {
    margin-bottom: 20px;
}

.title {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.contact-link {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
}

.contact-link:hover {
    color: #ecf0f1;
    transform: translateY(-2px);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-links a {
    color: white;
    font-size: 1.5rem;
    transition: var(--transition);
}

.social-links a:hover {
    transform: translateY(-3px);
    color: var(--accent-1);
}

/* Section Styles */
.section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: var(--card-shadow);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Stagger section animations - runs only once on page load */
.section:nth-child(1) { animation-delay: 0.1s; }
.section:nth-child(2) { animation-delay: 0.2s; }
.section:nth-child(3) { animation-delay: 0.3s; }
.section:nth-child(4) { animation-delay: 0.4s; }

.section-title {
    color: var(--primary-dark);
    margin-bottom: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--accent-1);
}

/* Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.skill-category {
    margin-bottom: 20px;
}

.skill-category h3 {
    color: var(--primary-dark);
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-tag {
    background: var(--light-gray);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.skill-tag:hover {
    transform: translateY(-3px);
    background: var(--secondary-color);
    color: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Timeline Structure */
.timeline {
    position: relative;
    padding: 2rem 0;
    margin: 0 auto;
}

/* Vertical Line */
.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, 
        var(--primary-dark),
        var(--accent-1)
    );
}

/* Timeline Items */
.timeline-item {
    position: relative;
    padding-left: 3rem;
    margin-bottom: 3rem;
}

/* Date Circle */
.timeline-dot {
    position: absolute;
    left: -9px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--accent-1);
    border: 4px solid var(--primary-dark);
    box-shadow: 0 0 0 5px rgba(26, 35, 126, 0.1);
}

/* Year Label */
.timeline-date {
    position: absolute;
    left: -80px;
    top: -5px;
    padding: 5px 10px;
    background: var(--primary-dark);
    color: white;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1rem;
}

/* Content Box */
.timeline-content {
    background: var(--card-bg);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;
}

.timeline-content:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Job Details */
.job-header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.job-header h3 {
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
}

.company {
    color: var(--accent-1);
    font-weight: 600;
    display: block;
    margin-bottom: 0.3rem;
}

.duration, .location {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-right: 1rem;
}

/* Achievements List */
.achievements {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

.achievements li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.5;
}

.achievements li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-1);
    font-size: 1.1rem;
}

/* Add some spacing between major achievement points */
.achievements li:not(:last-child) {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
    padding-bottom: 0.8rem;
}

/* Highlight key achievements */
.achievements li:nth-child(1),
.achievements li:nth-child(3),
.achievements li:nth-child(4) {
    font-weight: 500;
    color: var(--primary-dark);
}

/* Technology tags within achievements */
.achievements li:last-child {
    margin-top: 1.5rem;
    padding: 1rem;
    background: rgba(26, 35, 126, 0.05);
    border-radius: 6px;
    font-family: monospace;
}

/* Certifications Section */
.cert-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
}

.cert-item {
    transition: all 0.3s ease;
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
}

.cert-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.cert-item h3 {
    color: var(--primary-dark);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

.cert-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.8rem;
}

.cert-id {
    color: #666;
    font-size: 0.9rem;
}

.cert-verify {
    color: var(--accent-1);
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
    border: 1px solid var(--accent-1);
    border-radius: 4px;
    transition: all 0.2s ease;
}

.cert-verify:hover {
    background: var(--accent-1);
    color: white;
}

/* Education Section */
.education-item {
    margin-bottom: 20px;
}

.edu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.institution {
    color: #666;
}

/* Footer */
.footer {
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
    color: #666;
}

.footer a {
    color: var(--accent-1);
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header {
        padding: 40px 0 30px;
    }

    .profile-info h1 {
        font-size: 2rem;
    }

    .title {
        font-size: 1rem;
    }

    .contact-info {
        flex-direction: column;
        gap: 10px;
    }

    .section {
        animation: none;
        opacity: 1;
        transform: none;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .edu-header {
        flex-direction: column;
        align-items: flex-start;
    }

    .date {
        margin-top: 5px;
    }

    .cert-grid {
        grid-template-columns: 1fr;
    }

    .cert-item {
        padding: 1.2rem;
    }

    body {
        background: linear-gradient(120deg, rgba(44, 62, 80, 0.05) 0%, rgba(52, 152, 219, 0.05) 100%);
    }
    
    .section {
        backdrop-filter: none;
        background: rgba(255, 255, 255, 0.98);
    }

    .timeline::before {
        left: 15px;
    }

    .timeline-item {
        padding-left: 45px;
    }

    .timeline-date {
        position: relative;
        left: -30px;
        top: 0;
        margin-bottom: 1rem;
        display: inline-block;
    }

    .timeline-dot {
        left: 6px;
    }

    .achievements li {
        font-size: 0.95rem;
        padding-left: 1.2rem;
    }
}

@media (max-width: 480px) {
    .profile-info h1 {
        font-size: 1.8rem;
    }

    .section {
        padding: 15px;
    }

    .achievements li {
        padding-left: 15px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
    }

    .header {
        background: none;
        color: var(--primary-dark);
    }

    .section {
        animation: none !important;
        opacity: 1 !important;
        transform: none !important;
        box-shadow: none !important;
    }

    .social-links {
        display: none;
    }
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.section {
    animation: fadeInUp 0.6s ease forwards;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    :root {
        --text-color: #e1e1e1;
        --light-gray: #1a1a1a;
    }
    
    body {
        background: 
            linear-gradient(120deg, rgba(44, 62, 80, 0.1) 0%, rgba(52, 152, 219, 0.1) 100%),
            #121212;
    }
    
    .section {
        background: rgba(30, 30, 30, 0.95);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
}

/* Modern Tech Background */
body {
    background: 
        linear-gradient(120deg, rgba(26, 35, 126, 0.03) 0%, rgba(0, 131, 143, 0.03) 100%),
        url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a237e' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    color: var(--text-primary);
}

/* Enhanced Header */
.header {
    background: var(--tech-gradient);
    padding: 3rem 0;
    position: relative;
    overflow: hidden;
}

.header::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.1;
}

/* Technical Expertise Section */
#technical-expertise {
    padding: 1.5rem;  /* Reduced padding */
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* Changed to 2 columns */
    gap: 1rem;  /* Reduced gap */
}

.skill-category {
    background: var(--card-bg);
    border-radius: 6px;  /* Smaller radius */
    padding: 1rem;  /* Reduced padding */
    border: 1px solid rgba(26, 35, 126, 0.1);
}

.skill-category h3 {
    color: var(--primary-dark);
    font-size: 0.95rem;  /* Smaller font */
    margin-bottom: 0.8rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--accent-1);
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;  /* Reduced gap between tags */
}

.skill-tag {
    padding: 0.3rem 0.8rem;  /* Smaller padding */
    font-size: 0.8rem;  /* Smaller font */
    border-radius: 15px;
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-light) 100%);
    color: white;
    transition: all 0.2s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: 1fr;  /* Single column on mobile */
    }
    
    .skill-category {
        padding: 0.8rem;
    }
}

/* Hover effect */
.skill-tag:hover {
    transform: translateY(-2px);  /* Reduced lift */
    box-shadow: 0 3px 8px rgba(26, 35, 126, 0.2);  /* Smaller shadow */
}

/* Experience Section Enhancement */
.job {
    border-left: 3px solid var(--primary-light);
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: var(--card-bg);
    border-radius: 0 8px 8px 0;
    transition: all 0.3s ease;
}

.job:hover {
    border-left-color: var(--accent-1);
    transform: translateX(10px);
    box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.1);
}

.job-header h3 {
    color: var(--primary-dark);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.company {
    color: var(--accent-1);
    font-weight: 600;
}

/* Certification Cards */
.cert-item {
    background: var(--card-bg);
    border-radius: 8px;
    padding: 1.5rem;
    border: 1px solid rgba(26, 35, 126, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.cert-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--success);
    transition: all 0.3s ease;
}

.cert-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(26, 35, 126, 0.15);
}

.cert-item:hover::before {
    width: 100%;
    opacity: 0.05;
}

/* Modern Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--background);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-light);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}

/* Print-friendly dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --background: #0a192f;
        --card-bg: rgba(26, 35, 126, 0.1);
        --text-primary: #e6f1ff;
        --text-secondary: #8892b0;
    }
    
    .skill-category,
    .job,
    .cert-item {
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
    }
}

/* Hover Effects */
.timeline-dot::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--accent-1);
    opacity: 0.2;
    transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot::after {
    width: 40px;
    height: 40px;
    opacity: 0.4;
}

/* Technology Stack Section */
.tech-stack {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px dashed rgba(0, 0, 0, 0.1);
}

.tech-stack h4 {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tags span {
    background: var(--primary-dark);
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-family: 'SF Mono', 'Fira Code', monospace;
    transition: all 0.2s ease;
}

.tech-tags span:hover {
    transform: translateY(-2px);
    background: var(--accent-1);
    box-shadow: 0 3px 8px rgba(26, 35, 126, 0.2);
}

/* Achievements styling */
.achievements {
    list-style: none;
    padding: 0;
    margin-bottom: 0; /* Adjusted to work with tech-stack section */
}

.achievements li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    line-height: 1.5;
}

.achievements li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .tech-tags {
        gap: 0.4rem;
    }

    .tech-tags span {
        font-size: 0.75rem;
        padding: 0.25rem 0.6rem;
    }
}
