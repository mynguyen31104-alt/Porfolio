const projectDetails = {
    p1: {
        img: 'assets/images/project1.png',
        techs: ['C#.NET', 'SQL Server', 'Functional Testing', 'Authentication']
    },
    p2: {
        img: 'assets/images/project2.png',
        techs: ['Power BI', 'SQL', 'Python', 'Data Analytics']
    },
    p3: {
        img: 'assets/images/project3.png',
        techs: ['SEO', 'Content Writing', 'UX Optimization', 'Website Management']
    }
};

const translations = {
    vi: {
        nav_about: "About me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        hero_hello: "Xin chào, mình là",
        hero_title: "Tối ưu hóa quy trình & quản trị dữ liệu.",
        hero_btn_projects: "Xem Dự Án",
        hero_btn_about: "Về Tôi",
        about_title: "Về Tôi",
        about_p1: "Tôi là sinh viên chuyên ngành <strong>Hệ thống Thông tin Quản lý</strong> với định hướng phát triển sự nghiệp trong lĩnh vực <strong>Business Analysis</strong>. Tôi quan tâm đến việc tìm hiểu nhu cầu kinh doanh, phân tích vấn đề và chuyển đổi các yêu cầu nghiệp vụ thành giải pháp hệ thống rõ ràng và khả thi. Trong quá trình học tập, tôi đã có cơ hội tham gia phân tích yêu cầu người dùng, xây dựng user persona, user journey và mô hình hóa hệ thống.",
        about_p2: "Nền tảng kết hợp giữa tư duy kinh doanh và kiến thức công nghệ giúp tôi hiểu cách một sản phẩm hình thành từ ý tưởng đến triển khai. Tôi luôn chủ động rèn luyện khả năng giao tiếp với stakeholder và phát triển tư duy giải quyết vấn đề nhằm hướng đến mục tiêu trở thành một Business Analyst chuyên nghiệp, đóng góp giá trị thông qua các giải pháp lấy người dùng làm trung tâm.",
        about_btn_cv: "Download CV",
        skills_title: "Kỹ Năng Nổi Bật",
        projects_title: "Dự Án & Thành Tựu",
        btn_view_details: "Xem Chi Tiết",
        challenge: "Mục tiêu / Thách thức:",
        solution: "Giải pháp & Thực hiện:",
        result: "Kết quả đạt được:",
        tech_stack: "Công cụ & Kỹ năng:",
        
        p1_role: "Đồ án Đại học",
        p1_title: "Hệ thống E-Commerce Web App",
        p1_challenge: "Xây dựng ứng dụng quản lý bán hàng toàn diện, đảm bảo tính bảo mật và trải nghiệm người dùng xuyên suốt.",
        p1_solution: "Lập trình C#.NET và thiết kế CSDL SQL Server. Xây dựng các chức năng cốt lõi: giỏ hàng, thanh toán, phân quyền người dùng (RBAC) và hệ thống Admin Dashboard.",
        p1_result: "Thực hiện test chức năng (Functional Testing) kỹ lưỡng, đảm bảo hệ thống vận hành mượt mà, không có lỗi nghiêm trọng (critical bugs) trước khi báo cáo.",
        
        p2_role: "Dự án thực tế @ VN Digital",
        p2_title: "Tự động hóa & Báo cáo quản trị (Power BI)",
        p2_challenge: "Ban giám đốc cần báo cáo trực quan để ra quyết định nhanh chóng, tuy nhiên quy trình xử lý dữ liệu trước đó lại hoàn toàn thủ công và mất nhiều thời gian.",
        p2_solution: "Sử dụng SQL và Python để tự động hóa luồng trích xuất, xử lý dữ liệu. Sau đó thiết kế các Dashboard trực quan trên Power BI.",
        p2_result: "Giảm 25% thời gian phân tích số liệu thủ công và tăng hiệu suất báo cáo lên tới 30%, hỗ trợ hiệu quả cho quá trình ra quyết định của cấp quản lý.",
        
        p3_role: "Thành tựu thực tập",
        p3_title: "Tối ưu hóa SEO & Trải nghiệm người dùng",
        p3_challenge: "Tăng độ nhận diện thương hiệu số, tiếp cận khách hàng tiềm năng và giữ chân người dùng trên các nền tảng website của công ty.",
        p3_solution: "Trực tiếp quản trị 3 website, phân tích UX để cải thiện trải nghiệm và tự tay chắp bút ~40 bài viết chuẩn SEO chất lượng cao.",
        p3_result: "Tăng 35% lượng truy cập tự nhiên (Organic Traffic), tiếp cận 50-80 khách hàng tiềm năng/tháng và giảm tỷ lệ thoát trang (Bounce rate) xuống 10-15%.",
        
        experience_title: "Kinh Nghiệm Hoạt Động",
        exp1_date: "T5/2025 - T9/2025",
        exp1_title: "Business Analyst Intern @ VN Digital Technology",
        exp1_desc1: "Phân tích dữ liệu vận hành và xây dựng Power BI Dashboard cho cấp quản lý, tăng 30% hiệu suất làm báo cáo.",
        exp1_desc2: "Hợp tác với các phòng ban liên quan để lấy yêu cầu, viết bài SEO, quản lý website tăng 35% traffic tự nhiên.",
        exp2_date: "T6/2022 - T2/2025",
        exp2_title: "Ban Truyền thông @ Youth Connection Club",
        exp2_desc1: "Sáng lập chiến dịch 'Learn and Share', chia sẻ hơn 100+ tài liệu học tập, tiếp cận 500 sinh viên mùa thi.",
        exp2_desc2: "Đồng tổ chức các lớp ôn tập WE CAN với 150-300 người tham gia, đạt 90% phản hồi tích cực.",
        exp3_date: "Đang theo học",
        exp3_title: "Sinh viên @ Đại học Tài chính - Marketing",
        exp3_desc1: "Chuyên ngành Hệ thống Thông tin Quản lý. Hoàn thành xuất sắc các đồ án xây dựng phần mềm và phân tích cơ sở dữ liệu.",
        footer_title: "Sẵn sàng cho mọi cơ hội mới?",
        footer_desc: "Tôi luôn mở lòng với các cơ hội thực tập mảng ERP, Business Analyst hoặc Data Analysis.",
        footer_btn: "Gửi Email Cho Tôi"
    },
    en: {
        nav_about: "About me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        hero_hello: "Hello, I am",
        hero_title: "Optimizing processes & data management.",
        hero_btn_projects: "View Projects",
        hero_btn_about: "About Me",
        about_title: "About Me",
        about_p1: "I am a student majoring in <strong>Management Information Systems</strong> with a career focus on <strong>Business Analysis</strong>. I am passionate about understanding business needs, analyzing problems, and translating business requirements into clear and feasible system solutions. Through academic projects, I have gained hands-on experience in analyzing user requirements, building user personas and journeys, and system modeling.",
        about_p2: "My foundation bridging business thinking and technological knowledge helps me understand how a product evolves from an idea to practical deployment. I continuously strive to improve my stakeholder communication and problem-solving skills, aiming to become a professional Business Analyst who delivers value through user-centric technological solutions.",
        about_btn_cv: "Download CV",
        skills_title: "Core Skills",
        projects_title: "Projects & Achievements",
        btn_view_details: "View Details",
        challenge: "Objective / Challenge:",
        solution: "Solution & Execution:",
        result: "Key Results:",
        tech_stack: "Tools & Skills:",
        
        p1_role: "University Project",
        p1_title: "E-Commerce Web Application",
        p1_challenge: "Build a comprehensive sales management application, ensuring data security and a seamless user experience.",
        p1_solution: "Programmed in C#.NET and designed a SQL Server database. Built core modules: shopping cart, product management, Role-Based Access Control (RBAC), and Admin Dashboard.",
        p1_result: "Conducted rigorous functional testing, ensuring the system operated smoothly with no critical bugs prior to final presentation.",
        
        p2_role: "Practical Project @ VN Digital",
        p2_title: "Data Automation & Power BI Dashboards",
        p2_challenge: "The Board of Directors needed visual reports for quick decision-making, but the previous data processing workflow was entirely manual and time-consuming.",
        p2_solution: "Utilized SQL and Python to automate data extraction and processing workflows. Designed interactive management dashboards on Power BI.",
        p2_result: "Reduced manual analysis time by 25% and improved reporting efficiency by up to 30%, highly supporting management decision-making.",
        
        p3_role: "Internship Achievements",
        p3_title: "SEO & UX Optimization",
        p3_challenge: "Increase digital brand awareness, reach potential customers, and retain users on the company's web platforms.",
        p3_solution: "Directly managed 3 websites, analyzed UX to improve user journeys, and self-authored ~40 high-quality SEO-standardized articles.",
        p3_result: "Increased organic traffic by 35%, reached 50-80 potential customers/month, and reduced website bounce rate to 10-15%.",
        
        experience_title: "Experience & Activities",
        exp1_date: "May 2025 - Sep 2025",
        exp1_title: "Business Analyst Intern @ VN Digital Technology",
        exp1_desc1: "Analyzed operational data and built Power BI Dashboards for management, increasing reporting efficiency by 30%.",
        exp1_desc2: "Collaborated with cross-functional teams to gather requirements, write SEO content, and manage websites, boosting organic traffic by 35%.",
        exp2_date: "Jun 2022 - Feb 2025",
        exp2_title: "Communication Team @ Youth Connection Club",
        exp2_desc1: "Proposed the 'Learn and Share' campaign, distributing 100+ study materials and reaching 500 students.",
        exp2_desc2: "Co-organized WE CAN review classes with 150-300 participants, achieving 90% positive feedback.",
        exp3_date: "Ongoing",
        exp3_title: "Student @ University of Finance - Marketing",
        exp3_desc1: "Major in Management Information Systems. Successfully completed multiple software development and database analysis projects.",
        footer_title: "Ready for new opportunities?",
        footer_desc: "I am open to internship opportunities in ERP, Business Analysis, or Data Analysis.",
        footer_btn: "Send Me an Email"
    }
};

let currentLang = 'vi';
let currentOpenProject = null;

function switchLanguage(lang) {
    if(lang === currentLang) return;
    
    currentLang = lang;
    
    // Update active button state
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-vi').classList.remove('active');
    document.getElementById('lang-' + lang).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // If modal is open, update its content explicitly to ensure it matches
    if (currentOpenProject) {
        populateModal(currentOpenProject);
    }

    // Update typewriter text
    const typewriterText = lang === 'vi' 
        ? "Ứng dụng phân tích dữ liệu và tư duy hệ thống để giải quyết bài toán doanh nghiệp." 
        : "Applying data analysis and systems thinking to solve business problems.";
    
    startTypewriter(typewriterText);
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-vi').addEventListener('click', () => switchLanguage('vi'));

// Modal Logic
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close-btn');

function populateModal(projectId) {
    const data = projectDetails[projectId];
    const dict = translations[currentLang];
    
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalRole').innerHTML = dict[`${projectId}_role`];
    document.getElementById('modalTitle').innerHTML = dict[`${projectId}_title`];
    document.getElementById('modalChallenge').innerHTML = dict[`${projectId}_challenge`];
    document.getElementById('modalSolution').innerHTML = dict[`${projectId}_solution`];
    document.getElementById('modalResult').innerHTML = dict[`${projectId}_result`];
    
    const techsContainer = document.getElementById('modalTechs');
    techsContainer.innerHTML = '';
    data.techs.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.innerText = tech;
        techsContainer.appendChild(span);
    });
}

document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project-id');
        currentOpenProject = projectId;
        populateModal(projectId);
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    currentOpenProject = null;
}

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Typewriter Effect logic
let typewriterTimeout;
function startTypewriter(text) {
    const terminalElement = document.getElementById('typewriter');
    if (!terminalElement) return;
    
    if(typewriterTimeout) clearTimeout(typewriterTimeout);
    
    terminalElement.innerHTML = '';
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            terminalElement.innerHTML += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(typeWriter, 30);
        }
    }
    typeWriter();
}

startTypewriter("Ứng dụng phân tích dữ liệu và tư duy hệ thống để giải quyết bài toán doanh nghiệp.");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

fadeElements.forEach(el => {
    appearOnScroll.observe(el);
});
