import "dotenv/config";
import mongoose from "mongoose";
import Company from "./models/Company.js";
import Job from "./models/Job.js";

const companies = [
    {
        name: "Amazon",
        email: "amazon@demo.com",
        image: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128"
    },
    {
        name: "Google",
        email: "google@demo.com",
        image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
    },
    {
        name: "Flipkart",
        email: "flipkart@demo.com",
        image: "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128"
    },
    {
        name: "Wipro",
        email: "wipro@demo.com",
        image: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128"
    },
    {
        name: "Visa",
        email: "visa@demo.com",
        image: "https://www.google.com/s2/favicons?domain=visa.com&sz=128"
    },
    {
        name: "Samsung",
        email: "samsung@demo.com",
        image: "https://www.google.com/s2/favicons?domain=samsung.com&sz=128"
    },
    {
        name: "PhonePe",
        email: "phonepe@demo.com",
        image: "https://www.google.com/s2/favicons?domain=phonepe.com&sz=128"
    },
    {
        name: "Texas Instruments",
        email: "texasinstruments@demo.com",
        image: "https://www.google.com/s2/favicons?domain=ti.com&sz=128"
    },
    {
        name: "Amdocs",
        email: "amdocs@demo.com",
        image: "https://www.google.com/s2/favicons?domain=amdocs.com&sz=128"
    },
    {
        name: "Infosys",
        email: "infosys@demo.com",
        image: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128"
    },
    {
        name: "Larsen & Toubro",
        email: "lnt@demo.com",
        image: "https://www.google.com/s2/favicons?domain=larsentoubro.com&sz=128"
    },
    {
        name: "Bharat Electronics Limited",
        email: "bel@demo.com",
        image: "https://www.google.com/s2/favicons?domain=bel-india.in&sz=128"
    },
    {
        name: "Microsoft",
        email: "microsoft@demo.com",
        image: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128"
    },
    {
        name: "JPMorgan Chase",
        email: "jpmorgan@demo.com",
        image: "https://www.google.com/s2/favicons?domain=jpmorganchase.com&sz=128"
    },
    {
        name: "Accenture",
        email: "accenture123@gmail.com",
        image: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128"
    }
];

const demoPassword =
    "$2b$10$cfnhNRNqh6mgT9HgTc3l7e.2yfrdINCJwQCSsz1fLYAoDa/3qV.by";


const jobs = [

    // AMAZON
    {
        company: "Amazon",
        title: "Software Development Engineer",
        location: "Bangalore",
        category: "Programming",
        level: "Fresher",
        salary: 90000,
        description: `
            <p>We are looking for a motivated Software Development Engineer to join our engineering team and build scalable, reliable software solutions.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Design, develop and test scalable software applications.</li>
                <li>Write clean, maintainable and well-tested code.</li>
                <li>Work closely with product managers and other engineers.</li>
                <li>Debug production issues and improve application performance.</li>
                <li>Participate in code reviews and technical discussions.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong knowledge of data structures and algorithms.</li>
                <li>Proficiency in Java, C++, Python or a similar programming language.</li>
                <li>Understanding of object-oriented programming.</li>
                <li>Good problem-solving and communication skills.</li>
            </ul>
        `
    },

    {
        company: "Amazon",
        title: "Cloud Support Engineer",
        location: "Washington",
        category: "Cybersecurity",
        level: "Intermediate level",
        salary: 75000,
        description: `
            <p>Join our cloud engineering team and help build reliable cloud-based solutions while supporting customers with complex technical challenges.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Troubleshoot cloud infrastructure and application issues.</li>
                <li>Work with compute, storage, networking and database services.</li>
                <li>Analyze logs and identify root causes of technical problems.</li>
                <li>Automate repetitive operational tasks.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Knowledge of Linux and networking fundamentals.</li>
                <li>Understanding of cloud computing concepts.</li>
                <li>Basic knowledge of scripting using Python or Bash.</li>
                <li>Strong analytical and troubleshooting skills.</li>
            </ul>
        `
    },

    // GOOGLE
    {
        company: "Google",
        title: "Software Engineer",
        location: "Bangalore",
        category: "Programming",
        level: "Intermediate level",
        salary: 110000,
        description: `
            <p>We are seeking a Software Engineer to develop high-quality software and solve challenging technical problems at scale.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Design and implement reliable software components.</li>
                <li>Develop efficient algorithms and scalable systems.</li>
                <li>Collaborate with engineers, designers and product teams.</li>
                <li>Review code and improve engineering standards.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong programming fundamentals and data structures knowledge.</li>
                <li>Proficiency in C++, Java or Python.</li>
                <li>Understanding of distributed systems is a plus.</li>
                <li>Strong problem-solving ability.</li>
            </ul>
        `
    },

    {
        company: "Google",
        title: "Data Analyst",
        location: "California",
        category: "Data Science",
        level: "Fresher",
        salary: 70000,
        description: `
            <p>Join our analytics team to transform business data into meaningful insights that support better product and business decisions.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Analyze large datasets and identify useful trends.</li>
                <li>Create dashboards and reports for stakeholders.</li>
                <li>Write SQL queries for data analysis.</li>
                <li>Work with cross-functional teams to solve analytical problems.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong SQL knowledge.</li>
                <li>Basic knowledge of Python and data analysis libraries.</li>
                <li>Understanding of statistics and data visualization.</li>
                <li>Good analytical and communication skills.</li>
            </ul>
        `
    },

    // FLIPKART
    {
        company: "Flipkart",
        title: "Backend Developer",
        location: "Bangalore",
        category: "Programming",
        level: "Intermediate level",
        salary: 85000,
        description: `
            <p>We are looking for a Backend Developer to build scalable services powering high-volume e-commerce applications.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop RESTful APIs and backend services.</li>
                <li>Design database schemas and optimize queries.</li>
                <li>Build reliable and scalable microservices.</li>
                <li>Monitor and improve application performance.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong knowledge of Java, Node.js or similar technologies.</li>
                <li>Experience with SQL or NoSQL databases.</li>
                <li>Understanding of REST APIs and backend architecture.</li>
                <li>Knowledge of Git and software development practices.</li>
            </ul>
        `
    },

    // WIPRO
    {
        company: "Wipro",
        title: "Graduate Engineer Trainee",
        location: "Hyderabad",
        category: "Programming",
        level: "Fresher",
        salary: 35000,
        description: `
            <p>We are looking for enthusiastic engineering graduates to join our technology team and begin their careers in software development.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Work on software development and maintenance projects.</li>
                <li>Understand business requirements and technical specifications.</li>
                <li>Write and test application code.</li>
                <li>Participate in team meetings and code reviews.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Bachelor's degree in Computer Science, IT, Electronics or related field.</li>
                <li>Basic programming knowledge.</li>
                <li>Understanding of databases and software development.</li>
                <li>Good communication and learning ability.</li>
            </ul>
        `
    },

    // VISA
    {
        company: "Visa",
        title: "Software Engineer",
        location: "New York",
        category: "Programming",
        level: "Intermediate level",
        salary: 85000,
        description: `
            <p>Join our engineering team to build secure, scalable and highly available payment technology used across the world.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop and maintain backend services.</li>
                <li>Build secure APIs and transaction processing systems.</li>
                <li>Write automated tests and participate in code reviews.</li>
                <li>Investigate performance and reliability issues.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong programming skills in Java, C++ or Python.</li>
                <li>Knowledge of databases and REST APIs.</li>
                <li>Understanding of distributed systems is beneficial.</li>
                <li>Strong problem-solving skills.</li>
            </ul>
        `
    },

    // SAMSUNG
    {
        company: "Samsung",
        title: "Embedded Systems Engineer",
        location: "Bangalore",
        category: "Networking",
        level: "Fresher",
        salary: 65000,
        description: `
            <p>We are looking for an Embedded Systems Engineer to work on next-generation electronic products and embedded software platforms.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop and debug embedded C/C++ software.</li>
                <li>Work with microcontrollers and hardware interfaces.</li>
                <li>Perform firmware testing and debugging.</li>
                <li>Collaborate with hardware and software engineering teams.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong knowledge of C and C++.</li>
                <li>Understanding of microcontrollers and embedded systems.</li>
                <li>Knowledge of operating systems and computer architecture.</li>
                <li>Good debugging and analytical skills.</li>
            </ul>
        `
    },

    // PHONEPE
    {
        company: "PhonePe",
        title: "Backend Engineer",
        location: "Bangalore",
        category: "Programming",
        level: "Intermediate level",
        salary: 90000,
        description: `
            <p>Join our backend engineering team to develop reliable services supporting large-scale digital payment and financial applications.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Design and develop scalable backend services.</li>
                <li>Build secure and reliable APIs.</li>
                <li>Work with databases and distributed systems.</li>
                <li>Monitor application performance and reliability.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong knowledge of Java, Go, Python or similar languages.</li>
                <li>Understanding of databases and REST APIs.</li>
                <li>Knowledge of distributed systems is a plus.</li>
                <li>Strong coding and problem-solving skills.</li>
            </ul>
        `
    },

    // TEXAS INSTRUMENTS
    {
        company: "Texas Instruments",
        title: "Embedded Software Engineer",
        location: "California",
        category: "Networking",
        level: "Fresher",
        salary: 70000,
        description: `
            <p>Work with an engineering team developing embedded software and firmware for advanced semiconductor and electronic systems.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop firmware using C and C++.</li>
                <li>Debug embedded software on hardware platforms.</li>
                <li>Work with hardware engineers to integrate software and hardware.</li>
                <li>Develop unit tests and technical documentation.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong C programming skills.</li>
                <li>Knowledge of microcontrollers and embedded systems.</li>
                <li>Understanding of digital electronics.</li>
                <li>Knowledge of communication protocols is an advantage.</li>
            </ul>
        `
    },

    // AMDOCS
    {
        company: "Amdocs",
        title: "Java Developer",
        location: "Chennai",
        category: "Programming",
        level: "Intermediate level",
        salary: 65000,
        description: `
            <p>We are looking for a Java Developer to develop enterprise applications and scalable backend services for large technology platforms.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop Java-based enterprise applications.</li>
                <li>Design REST APIs and backend components.</li>
                <li>Write unit tests and troubleshoot application issues.</li>
                <li>Collaborate with development and QA teams.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong knowledge of Java and object-oriented programming.</li>
                <li>Understanding of Spring Boot is preferred.</li>
                <li>Knowledge of SQL and databases.</li>
                <li>Familiarity with Git and REST APIs.</li>
            </ul>
        `
    },

    // INFOSYS
    {
        company: "Infosys",
        title: "Systems Engineer",
        location: "Hyderabad",
        category: "Programming",
        level: "Fresher",
        salary: 38000,
        description: `
            <p>Start your technology career by working on enterprise software projects and solving real-world business problems with modern technologies.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop and maintain software applications.</li>
                <li>Analyze technical requirements and implement solutions.</li>
                <li>Perform application testing and debugging.</li>
                <li>Collaborate with project teams and clients.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Good programming fundamentals.</li>
                <li>Knowledge of Java, Python, C++ or JavaScript.</li>
                <li>Basic database and SQL knowledge.</li>
                <li>Strong communication and analytical skills.</li>
            </ul>
        `
    },

    // L&T
    {
        company: "Larsen & Toubro",
        title: "Graduate Engineer Trainee",
        location: "Mumbai",
        category: "Management",
        level: "Fresher",
        salary: 42000,
        description: `
            <p>Join our engineering team as a Graduate Engineer Trainee and work on technology-driven engineering and infrastructure projects.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Assist senior engineers in project execution.</li>
                <li>Analyze technical requirements and project specifications.</li>
                <li>Prepare technical documentation and reports.</li>
                <li>Collaborate with multidisciplinary engineering teams.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Bachelor's degree in Engineering.</li>
                <li>Strong technical fundamentals.</li>
                <li>Good analytical and problem-solving skills.</li>
                <li>Strong communication and teamwork abilities.</li>
            </ul>
        `
    },

    // BEL
    {
        company: "Bharat Electronics Limited",
        title: "Electronics Engineer",
        location: "Bangalore",
        category: "Networking",
        level: "Fresher",
        salary: 55000,
        description: `
            <p>Work on electronics and embedded technology projects involving hardware development, testing and system integration.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Support electronic circuit design and testing.</li>
                <li>Work with embedded systems and hardware interfaces.</li>
                <li>Perform debugging and system-level testing.</li>
                <li>Prepare technical documentation and test reports.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Degree in Electronics, Electrical or related engineering discipline.</li>
                <li>Knowledge of digital and analog electronics.</li>
                <li>Basic knowledge of embedded systems and microcontrollers.</li>
                <li>Strong analytical and troubleshooting skills.</li>
            </ul>
        `
    },

    // MICROSOFT
    {
        company: "Microsoft",
        title: "Full Stack Engineer",
        location: "Washington",
        category: "Programming",
        level: "Intermediate level",
        salary: 100000,
        description: `
            <p>Join our engineering team to build modern web applications and scalable cloud-connected services.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop responsive frontend applications using modern JavaScript frameworks.</li>
                <li>Build backend APIs and scalable services.</li>
                <li>Work with databases and cloud services.</li>
                <li>Write automated tests and maintain high code quality.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong JavaScript or TypeScript knowledge.</li>
                <li>Experience with React or similar frontend frameworks.</li>
                <li>Knowledge of Node.js and REST APIs.</li>
                <li>Understanding of SQL or NoSQL databases.</li>
            </ul>
        `
    },

    {
        company: "Microsoft",
        title: "Azure Cloud Engineer",
        location: "Washington",
        category: "Cybersecurity",
        level: "Intermediate level",
        salary: 95000,
        description: `
            <p>Work with cloud technologies to design, deploy and maintain scalable applications and infrastructure on Microsoft Azure.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Deploy and maintain cloud-based applications.</li>
                <li>Monitor infrastructure performance and availability.</li>
                <li>Automate deployment and operational processes.</li>
                <li>Collaborate with software engineering teams.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Knowledge of cloud computing fundamentals.</li>
                <li>Understanding of Azure services.</li>
                <li>Basic knowledge of Linux and networking.</li>
                <li>Familiarity with CI/CD and DevOps practices.</li>
            </ul>
        `
    },

    // JPMORGAN
    {
        company: "JPMorgan Chase",
        title: "Software Engineer",
        location: "New York",
        category: "Programming",
        level: "Fresher",
        salary: 80000,
        description: `
            <p>Join our technology team to develop secure, scalable financial applications and services used by customers around the world.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop and test enterprise software applications.</li>
                <li>Build reliable APIs and backend services.</li>
                <li>Work with engineers and business teams to deliver solutions.</li>
                <li>Participate in code reviews and technical discussions.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Strong programming and object-oriented programming skills.</li>
                <li>Knowledge of Java, Python or C++.</li>
                <li>Understanding of databases and SQL.</li>
                <li>Strong problem-solving and analytical skills.</li>
            </ul>
        `
    },

    // ACCENTURE
    {
        company: "Accenture",
        title: "Full Stack Developer",
        location: "Hyderabad",
        category: "Programming",
        level: "Intermediate level",
        salary: 65000,
        description: `
            <p>Join our application development team to build modern full-stack applications for enterprise clients across different industries.</p>

            <h3>Responsibilities</h3>
            <ul>
                <li>Develop frontend applications using React or similar technologies.</li>
                <li>Build backend APIs using Node.js, Java or related technologies.</li>
                <li>Work with SQL and NoSQL databases.</li>
                <li>Participate in testing, debugging and code reviews.</li>
            </ul>

            <h3>Requirements</h3>
            <ul>
                <li>Knowledge of JavaScript, React and Node.js.</li>
                <li>Understanding of REST APIs.</li>
                <li>Knowledge of databases and Git.</li>
                <li>Good communication and teamwork skills.</li>
            </ul>
        `
    }
];


const seedDatabase = async () => {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database Connected");

        // -----------------------------------------
        // 1. CREATE / FIND COMPANIES
        // -----------------------------------------

        const companyMap = {};

        for (const companyData of companies) {

            let company = await Company.findOne({
                $or: [
                    { name: companyData.name },
                    { email: companyData.email }
                ]
            });

            if (company) {
                console.log(`✓ Company already exists: ${company.name}`);
            } else {

                company = await Company.create({
                    name: companyData.name,
                    email: companyData.email,
                    image: companyData.image,
                    password: demoPassword
                });

                console.log(`+ Company created: ${company.name}`);
            }

            // Update logo for existing company
            if (company.name === "Google") {
                company.image =
                    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";

                await company.save();

                console.log("✓ Google logo updated");
            }

            companyMap[companyData.name] = company._id;
        }

        // -----------------------------------------
        // 2. CREATE / UPDATE JOBS
        // -----------------------------------------

        for (const jobData of jobs) {

            const companyId = companyMap[jobData.company];

            if (!companyId) {
                console.log(`Company not found: ${jobData.company}`);
                continue;
            }

            const existingJob = await Job.findOne({
                title: jobData.title,
                companyId: companyId
            });

            if (existingJob) {

                existingJob.description = jobData.description;
                existingJob.location = jobData.location;
                existingJob.category = jobData.category;
                existingJob.level = jobData.level;
                existingJob.salary = jobData.salary;
                existingJob.visible = true;

                await existingJob.save();

                console.log(`✓ Job updated: ${jobData.title}`);

            } else {

                await Job.create({
                    title: jobData.title,
                    description: jobData.description,
                    location: jobData.location,
                    category: jobData.category,
                    level: jobData.level,
                    salary: jobData.salary,
                    date: Date.now(),
                    visible: true,
                    companyId: companyId
                });

                console.log(`+ Job created: ${jobData.title}`);
            }
        }

        console.log("\n====================================");
        console.log("      JOB DATABASE SEED COMPLETE");
        console.log("====================================");
        console.log(`Companies processed: ${companies.length}`);
        console.log(`Jobs processed: ${jobs.length}`);
        console.log("====================================\n");

    } catch (error) {

        console.error("SEED ERROR:", error);

    } finally {

        await mongoose.disconnect();

        console.log("MongoDB connection closed.");
    }
};


seedDatabase();