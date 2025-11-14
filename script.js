// CV Data
const cvData = {
    competencies: [
        { name: 'Financial Analysis', level: 100 },
        { name: 'Strategic Planning', level: 100 },
        { name: 'Budget Management', level: 100 },
        { name: 'Academic Research', level: 100 },
        { name: 'Team Leadership', level: 100 },
         { name: 'Trainer', level: 100 }
    ],

    experience: [
        {
            title: 'Operations Manager',
            date: 'Jan 2023 - Present',
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
            date: 'Feb 2017 - Date',
            company: 'University of Embu / Rongo University | Higher Education',
            skills: ['Curriculum Development', 'Academic Research', 'Student Mentoring', 'Publication', 'Industry Engagement'],
            achievements: [
                'Designed and delivered curriculum for 4+ undergraduate finance courses, consistently receiving 4.5/5 student evaluation scores',
                'Mentored 150+ students through academic research projects and industry placements, with 85% achieving distinction grades',
                'Published peer-reviewed research in International Journal of Social Sciences, contributing to academic discourse on dividend policies',
                'Developed innovative assessment methods that improved learning outcomes by 25% compared to traditional examination approaches',
                'Experience managing educational content via Learning Management Systems (LMS) and updating web content using basic CMS platforms.',
                'Collaborated with industry partners to integrate real-world case studies into coursework, enhancing practical application'
            ]
        },
        {
            title: 'Supervisor/ Credit Administrator',
            date: 'Feb 2018 - Dec 2022',
            company: 'Itoleka FSA (Financial Services Association)',
            skills: ['Leadership & Team Management', 'Financial Portfolio Management', 'Risk Management', 'Training & Development (Sales)', 'Collections & Negotiation'],
            achievements: [
                'Supervising a portfolio of 52 Million with 4 Loan officers under me, achieving a 98% loan recovery rate over 3 years',
                'Ensured timely collection of loan repayments by implementing proactive follow-up strategies, significantly minimizing portfolio-at-risk.',
                'Mobilized and trained new members on a full range of FSA products and services, driving client acquisition and product adoption.',
                'Managed the complete default process, from following up on late repayments to executing the full loan recovery from defaulting accounts.'
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
        },
        {
            degree: 'Kenya Certificate of Secondary Education',
            date: '2006-2009',
            institution: 'Lenana School, Nairobi, Kenya',
            details: 'B - Plain'
        }
    ],
     professional: [
    {
        qualification: 'CPA Section 3',
        date: '',
        details: 'Advanced Financial Accounting, Financial Management, Management Accounting, and Auditing & Assurance'
    },
    {
        qualification: 'Computer Application Packages',
        institution: '',
        date: '',
        details: 'Microsoft Office Suite (Word, Excel, PowerPoint, Outlook), Database Management, Internet Applications'
    },
    {
        qualification: 'QuickBooks Training',
        details: 'Financial reporting, accounts payable/receivable, inventory management, payroll processing'
    },
    {
        qualification: 'Research Methodology',
        institution: '',
        date: '',
        details: 'Quantitative and qualitative research methods, data collection and analysis, statistical tools, research design, and academic writing'
    },
    {
        qualification: 'SPSS Training',
        details: 'Data analysis, descriptive and inferential statistics, hypothesis testing, regression analysis, and data visualization'
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
            name: 'Ms. Maureen Mwende Titus,',
            position: 'Branch Manager,',
            company: 'Itoleka FSA Ltd - Kitui Branch',
            email: 'titusmwende17@gmail.com'
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

    const professionalContainer = document.getElementById('professional');
cvData.professional.forEach(prof => {
    const profItem = document.createElement('div');
    profItem.className = 'professional-item';
    profItem.innerHTML = `
        <div class="professional-title">${prof.qualification}</div>
        ${prof.institution ? `<div class="institution">${prof.institution}</div>` : ''}
        ${prof.date ? `<div class="professional-date">${prof.date}</div>` : ''}
        ${prof.details ? `<div class="education-details">${prof.details}</div>` : ''}
    `;
    professionalContainer.appendChild(profItem);
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