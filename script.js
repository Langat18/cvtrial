// CV Data
const cvData = {
    competencies: [
        { name: 'Financial Analysis', level: 100 },
        { name: 'Strategic Planning', level: 100 },
        { name: 'Budget Management', level: 100 },
        { name: 'Academic Research', level: 100 },
        { name: 'Team Leadership', level: 100 }
    ],

    experience: [
        {
            title: 'Operations Manager',
            date: 'Jan 2020 - Present',
            company: 'Natah Investment Limited | Financial Services',
            skills: ['Strategic Planning', 'Budget Management', 'Team Leadership', 'Process Improvement', 'Digital Transformation'],
            achievements: [
                'Transformed operational efficiency by implementing new workflow systems, reducing processing time by 25% and improving team productivity',
                'Managed annual operations budget of KES 15M+, achieving 12% cost reduction through strategic resource allocation and vendor negotiations',
                'Led cross-functional team of 8 professionals, providing mentorship and implementing performance metrics that increased output by 30%',
                'Developed and executed quality control framework that improved client satisfaction scores from 78% to 92% within 18 months',
                'Spearheaded digital transformation initiative, automating 40% of manual reporting processes and enhancing data accuracy'
            ]
        },
        {
            title: 'Part-time Lecturer & Research Associate',
            date: 'Feb 2017 - Dec 2019',
            company: 'University of Embu / Rongo University | Higher Education',
            skills: ['Curriculum Development', 'Academic Research', 'Student Mentoring', 'Publication', 'Industry Engagement'],
            achievements: [
                'Designed and delivered curriculum for 4+ undergraduate finance courses, consistently receiving 4.5/5 student evaluation scores',
                'Mentored 150+ students through academic research projects and industry placements, with 85% achieving distinction grades',
                'Published peer-reviewed research in International Journal of Social Sciences, contributing to academic discourse on dividend policies',
                'Developed innovative assessment methods that improved learning outcomes by 25% compared to traditional examination approaches',
                'Collaborated with industry partners to integrate real-world case studies into coursework, enhancing practical application'
            ]
        },
        {
            title: 'Audit Assistant',
            date: 'July 2015 - Nov 2017',
            company: 'Makeni Mutua & Associates (CPA) | Accounting & Auditing',
            skills: ['Financial Auditing', 'Compliance', 'Process Automation', 'Team Training', 'Financial Analysis'],
            achievements: [
                'Conducted financial audits for 15+ clients across various industries, identifying compliance issues and recommending improvements',
                'Analyzed financial statements with total assets exceeding KES 500M, providing insights that informed strategic decision-making',
                'Developed automated audit templates that reduced documentation time by 40% while improving accuracy and compliance',
                'Assisted in forensic accounting investigations that recovered KES 2.3M in misappropriated funds for client organizations',
                'Trained 3 junior staff members in audit methodologies and accounting software, enhancing team capabilities'
            ]
        }
    ],

    education: [
        {
            degree: 'Master of Business Administration (Finance)',
            date: '2015 - 2018',
            institution: 'Jomo Kenyatta University of Agriculture & Technology, Kenya',
            details: ''
        },
        {
            degree: 'Bachelor of Business Management (Finance)',
            date: '2010 - 2014',
            institution: 'Masinde Muliro University of Science and Technology, Kenya',
            details: 'Second Class Honors, Upper Division'
        }
    ],

    references: [
        {
            name: 'Professor. Jonathan Mwau Mulwa',
            position: 'Dean, School of Business & Human Resource Development',
            company: 'Rongo University',
            address: 'P.O. Box 103-40404, Rongo',
            email: 'jmwau84@gmail.com'
        },
        {
            name: 'Mr. Ronald Wambua Matheka',
            position: 'Business Relationship Officer',
            company: 'Co-operative Bank, Mwingi',
            email: 'mathekaronald@gmail.com'
        },
        {
            name: 'Mr. Dan Ajenga',
            position: 'Operations Manager',
            company: 'Makeni Mutua CPA Nairobi',
            email: 'info@makenimutuacpa.co.ke'
        }
    ]
};

// Render Competencies
function renderCompetencies() {
    const container = document.getElementById('competencies');
    cvData.competencies.forEach(comp => {
        const competencyDiv = document.createElement('div');
        competencyDiv.className = 'competency';
        
        competencyDiv.innerHTML = `
            <div class="competency-name">
                <span>${comp.name}</span>
            </div>
            <div class="competency-bar">
                <div class="competency-fill" data-level="${comp.level}"></div>
            </div>
        `;
        
        container.appendChild(competencyDiv);
    });

    // Animate bars
    setTimeout(() => {
        document.querySelectorAll('.competency-fill').forEach(bar => {
            bar.style.width = bar.dataset.level + '%';
        });
    }, 100);
}

// Render Experience
function renderExperience() {
    const container = document.getElementById('experience');
    cvData.experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';
        
        const skillsHTML = job.skills.map(skill => 
            `<span class="skill-tag">${skill}</span>`
        ).join('');
        
        const achievementsHTML = job.achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');
        
        jobDiv.innerHTML = `
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <span class="job-date">${job.date}</span>
            </div>
            <p class="job-company">${job.company}</p>
            <div class="skills-tags">${skillsHTML}</div>
            <ul class="achievements">${achievementsHTML}</ul>
        `;
        
        container.appendChild(jobDiv);
    });
}

// Render Education
function renderEducation() {
    const container = document.getElementById('education');
    cvData.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'education-item';
        
        eduDiv.innerHTML = `
            <h3 class="degree-title">${edu.degree}</h3>
            <p class="education-date">${edu.date}</p>
            <p class="institution">${edu.institution}</p>
            ${edu.details ? `<p class="education-details">${edu.details}</p>` : ''}
        `;
        
        container.appendChild(eduDiv);
    });
}

// Render References
function renderReferences() {
    const container = document.getElementById('references');
    const gridDiv = document.createElement('div');
    gridDiv.className = 'references-grid';
    
    cvData.references.forEach(ref => {
        const refDiv = document.createElement('div');
        refDiv.className = 'reference';
        
        refDiv.innerHTML = `
            <h3 class="reference-name">${ref.name}</h3>
            <p class="reference-position">${ref.position}</p>
            <p class="reference-company">${ref.company}</p>
            ${ref.address ? `<p class="reference-contact">📍 ${ref.address}</p>` : ''}
            ${ref.email ? `<p class="reference-contact">✉️ ${ref.email}</p>` : ''}
        `;
        
        gridDiv.appendChild(refDiv);
    });
    
    container.appendChild(gridDiv);
}

// Initialize the CV
function initCV() {
    renderCompetencies();
    renderExperience();
    renderEducation();
    renderReferences();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initCV);