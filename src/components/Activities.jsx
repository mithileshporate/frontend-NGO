import React from "react";
import "./Activities.css";

const Activities = () => {
  const activities = [
    {
      id: 1,
      image: "/a1.png",
      title: "Career Counselling",
      description: (
        <div>
          <p className="date">Date of Activity - 28th of May 2023</p>
          <p className="place">
            Place - Tribal village in Melghat-Payvihir Village in Achalpur
            Taluka, Dist Amravati (Maharashtra)
          </p>
          <p className="details">
            Activity - Career Counselling - Guiding tribal students about:
          </p>
          <ol>
            <li>1. Aptitude Test</li>
            <li>2. NEET, JEE/ CET</li>
            <li>3. Exams and opportunities after 10th and 12th Std</li>
            <li>4. Indian Army, Navy, Airforce</li>
            <li>5. ITI, Polytechnic</li>
            <li>6. MPSC/UPSC Exams</li>
            <li>7. Other Competitive Exams</li>
          </ol>
          <p>Number of Beneficiaries - Direct-87, Indirect- 150</p>
          <p>
            Support from - Grampanchayat Upatkheda, Taluka Achalpur, Dist
            Amravati
          </p>
          <p className="youtube-link">
            YouTube Link -{" "}
            <a
              href="https://youtu.be/18HQBsUpd_g?si=Q9JrqrbqaNads22f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 2,
      image: "/a2.png",
      title: "Career Orientation Session",
      description: (
        <div>
          <p className="date">Date of Activity - 11th of June 2023</p>
          <p className="place">
            Place - Sant Jagnade Maharaj Hall, Anjangaon Surji, Dist Amravati
            (Maharashtra)
          </p>
          <p className="details">
            Career Orientation Session (Free for all) for students of 10th,
            11th, 12th, guiding students of rural and semi-urban areas about:
          </p>
          <ol>
            <li>1. Should I choose Arts/Science or Commerce?</li>
            <li>
              2. How is the preparation of 11th and 12th different from 10th?
            </li>
            <li>3. How to choose between Medical and Engineering?</li>
            <li>4. How to use technology for 10th and 12th studies?</li>
            <li>5. Exams and opportunities after 10th and 12th Std</li>
          </ol>
          <p>Number of Beneficiaries - Direct- 92, Indirect - 120</p>
          <p>Support from - Stellar Academy, Paratwada, Dist Amravati</p>
          <p>Career Counsellor Shri. Gulwade Sir (Amravati)</p>
          <p className="youtube-link">
            YouTube Link -{" "}
            <a
              href="https://youtu.be/e9S82dDrLpo?si=byEOE7iqggWV_OCN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 3,
      image: "/a3.png",
      title: "Donation of School Kits",
      description: (
        <div>
          <p className="date">Date of Activity - 19th of June 2023</p>
          <p className="place">
            Place - Singapur, Kusarpeth, Ekalgaon villages of Velhe Taluka, Dist
            Pune (Maharashtra)
          </p>
          <p className="details">
            Activity - Donation of School Kits for all the students of Zilla
            Parishad Schools in the mentioned villages. Each Kit contains:
          </p>
          <ol>
            <li>1. School bag</li>
            <li>2. Water Bottle</li>
            <li>3. 4 Notebooks</li>
            <li>4. Drawing Book</li>
            <li>5. Colour Box</li>
            <li>6. Slate</li>
            <li>7. Pen</li>
            <li>8. Pencil</li>
            <li>9. Eraser</li>
            <li>10.Sharpener</li>
          </ol>
          <p>Number of Beneficiaries - 55</p>
          <p>
            This Activity aligns with one of the objectives of our NGO, i.e., to
            assist needy students by providing them School Kits and other
            educational material, guiding them about career opportunities,
            competitive exams, and vocational trainings.
          </p>
          <p className="youtube-link">
            YouTube Link -{" "}
            <a
              href="https://youtu.be/Hivn4RURXCw?si=A6j0UyCC95sN0ZQn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 4,
      image: "/a4.png",
      title: "Giving Support to the Students",
      description: (
        <div>
          <p className="date">Date of Activity - 16th of July 2023</p>
          <p className="place">
            Place - Tribal Village Awagad of Taluka Chikhaldara, Dist Amravati
            (Maharashtra)
          </p>
          <p className="details">
            Activity - Giving support to the students of Awagad village
            preparing for competitive exams. We donated a number of books to the
            unregistered Study Room in that tribal village. The Govt of
            Maharashtra has issued notifications for various exams like Forest
            Guards, Talathi, and many other vacancies of Nagar Parishad and
            Zilla Parishad. Needy students (mostly graduates) of Awagad village
            approached us for guidance, and we handed over books which can be
            used by those tribals in order to prepare for these exams.
          </p>
          <p>Number of Beneficiaries - 32</p>
          <p>
            This Activity aligns with one of the objectives of our NGO, i.e., to
            assist needy students by providing them educational material,
            guiding them about career opportunities, competitive exams, and
            vocational trainings.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      image: "/a5.png",
      title: "Clothing Charity Drive",
      description: (
        <div>
          <p className="date">Date of Activity - 6th of Aug 2023</p>
          <br></br>
          <p className="details">
            Activity - “Threads of Kindness Initiative”- New Clothing Charity
            Drive
          </p>
          <br></br>
          <p className="place">
            Place - Bhor and Velhe Taluka, Dist Pune (Maharashtra)
          </p>
          <br></br>
          <p>
            We received some new clothes from various donors of Pune District.
            Our Vice President Mr. Akshay Kalamkar is familiar with the
            underdeveloped areas of Pune and the communities staying there. He,
            along with the volunteers from Pune, donated new clothes to 120+
            needy people from Bhor and Velhe Talukas of Pune District. Mainly,
            children were covered.
          </p>
          <br></br>
          <p>Number of Beneficiaries - 120+</p>
          <br></br>
          <p>
            Support from - Ashtitwa Kala Mancha and Advait Pariwar Pune and our
            advisor Mr. Santosh Dimble
          </p>
        </div>
      ),
    },
    {
      id: 6,
      image: "/a6.png",
      title: "Recreational Fun Activity",
      description: (
        <div>
          <p className="date">Date of Activity - 26th of Aug 2023</p>
          <p className="details">
            Activity - “Embracing Culture, Nurturing Hearts” - Recreational Fun
            Activity
          </p>
          <p className="place">
            Place - Zilla Parishad School, Khatkali, Taluka Chikhaldara, Dist
            Amravati (Maharashtra) - Tribal village in core of Melghat Tiger
            Reserve area Amravati
          </p>
          <p>
            Khatkali is a village in a remotely located area of Melghat Tiger
            Reserve, Dist Amravati. The Zilla Parishad School has 120+ students
            studying in standards 1st to 8th. We spent Saturday with these
            students and tried to engage them in recreational learning
            activities like:
          </p>
          <ol>
            <li>1. Rakhi making competition</li>
            <li>2. Painting competition</li>
            <li>3. Making paper boats and other crafts</li>
            <li>4. General awareness exam</li>
            <li>5. Strategy games</li>
          </ol>
          <p>
            Gifts were distributed to many students who did well in the
            competitions organized. We will be visiting the school again on a
            regular basis so that we can witness improvement in these students.
          </p>
          <p>Number of Beneficiaries - 120+</p>
          <p>
            Support from - Teachers of Zilla Parishad School, Khatkali, Taluka
            Chikhaldara, Dist Amravati
          </p>
          <p className="youtube-link">
            YouTube Link -{" "}
            <a
              href="https://youtu.be/wa_7EK_wmQU?si=UXfpV_TJtLic4nuh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 7,
      image: "/a7.png",
      title: "Embracing Culture, Nurturing Hearts",
      description: (
        <div>
          {/* <p className="date">Date of Activity - 14th of Sept 2023</p>
          <p className="details">Activity - “Healthy Villages, Happy Lives” - Community Health Program</p>
          <p className="place">Place - Karjat, Raigad (Maharashtra)</p>
          <p>The aim of this activity was to address the health concerns of the villagers in Karjat. We organized a health camp where:</p>
          <ul>
            <li>Basic health check-ups were conducted</li>
            <li>Free medicines were distributed</li>
            <li>Health awareness sessions were held</li>
            <li>Special focus on maternal and child health</li>
          </ul>
          <p>Number of Beneficiaries - 200+</p>
          <p>Support from - Local health authorities and volunteers</p> */}
          <p className="date">Date of Activity - 9th of Sep 2023</p>
          <p className="details">
            Activity - “Embracing Culture, Nurturing Hearts” - Recreational Fun
            Activity
          </p>
          <p className="place">
            Place - Zilla Parishad School, Ghatang, Taluka Chikhaldara, Dist
            Amravati (Maharashtra)
          </p>
          <p>Tribal village in core of Melghat Tiger Reserve area Amravati</p>
          <p>
            Ghatang is a tribal village in a remotely located area of Melghat
            Tiger Reserve, Dist Amravati. The Zilla Parishad School has 30
            students studying in standard 1st to 5th. With the crucial guidance
            from Assistant Professors Dr. Manisha Jape and Dr. Vasant Jape of
            Govt College of Engineering Amravati, we guided students of this
            school about:
          </p>
          <ul>
            <li>1. Electrical Awareness</li>
            <li>2. Practical Demonstrations of Household appliances</li>
            <li>3. Electrical Safety Awareness</li>
            <li>4. Do’s and Don’ts</li>
            <li>5. Efficient use of electricity</li>
          </ul>
          <p>
            Along with that, some competitions were organized as co-curricular
            activities and prizes were distributed to those performing
            brilliantly in the competitions.
          </p>
          <p>Number of Beneficiaries - Direct 30, Indirect - 60+</p>
          <p>
            Support from - Teachers of Zilla Parishad School, Ghatang, Taluka
            Chikhaldara, Dist Amravati
          </p>
          <p className="youtube-link">
            YouTube Link -{" "}
            <a
              href="https://youtu.be/cuinkJV9vUI?si=VjUZLJnV-ihEezLR"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
        </div>
      ),
    },
    {
      id: 8,
      image: "/a8.png",
      title: "SCHOOL KIT DONATION Activity",
      description: (
        <div>
          {/* <p className="date">Date of Activity - 21st of Sept 2023</p>
          <p className="details">Activity - “Green Earth, Clean Earth” - Environmental Awareness Campaign</p>
          <p className="place">Place - Multiple villages in Melghat, Amravati (Maharashtra)</p>
          <p>This campaign aimed to raise awareness about environmental conservation among the tribal communities in Melghat. Activities included:</p>
          <ul>
            <li>Tree plantation drives</li>
            <li>Workshops on waste management</li>
            <li>Clean-up drives</li>
            <li>Educational sessions on the importance of biodiversity</li>
          </ul>
          <p>Number of Beneficiaries - Entire village communities</p>
          <p>Support from - Forest department and local NGOs</p> */}

          <p className="date">Date of Activity - 16th of Oct 2023</p>
          <p className="details">
            Activity - “Embracing Culture, Nurturing Hearts”-SCHOOL KIT DONATION
            Activity
          </p>
          <p className="place">
            Place - Three Zilla Parishad Schools in core of Melghat Tiger
            Reserve area, Taluka Chikhaldara, Dist Amravati, (Maharashtra)
          </p>
          <ul>
            <li>Zilla Parishad School- Sarwarkheda (21 students)</li>
            <li>Zilla Parishad School- Simori (10 students)</li>
            <li>Zilla Parishad School- Simoridhana (33 students)</li>
          </ul>
          <p>
            We did survey of 5 villages on 19th and 20th May 2023 and out of
            those 5, we selected these 3 villages.
          </p>
          <p>
            YouTube video link of the donation activity conducted on 16th of Oct
            2023 -{" "}
            <a
              href="https://youtu.be/7Pus14QMXuo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
          <p>Each Kit contains:</p>
          <ul>
            <li>1. School bag</li>
            <li>2. 4 Notebooks (4 liner, One liner, Checks, 2 liner etc)</li>
            <li>3. Anklipi</li>
            <li>4. Drawing Book</li>
            <li>5. Colour Box</li>
            <li>6. Slate</li>
            <li>7. Pen</li>
            <li>8. Pencil</li>
            <li>9. Eraser</li>
            <li>10. Sharpener etc</li>
          </ul>
          <p>Number of Beneficiaries - 64 Students of these 3 schools</p>
        </div>
      ),
    },
    {
      id: 9,
      image: "/a9.png",
      title: "Founded Dr. Babasaheb Ambedkar Abhyasika",
      description: (
        <div>
          {/* <p className="date">Date of Activity - 5th of Oct 2023</p>
          <p className="details">
            Activity - “Empower Through Skills” - Skill Development Workshop
          </p>
          <p className="place">Place - Talasari, Palghar (Maharashtra)</p>
          <p>
            This workshop was aimed at empowering the tribal youth in Talasari
            with new skills to improve their employability. The focus areas
            included:
          </p>
          <ul>
            <li>Computer literacy</li>
            <li>Basic accounting</li>
            <li>Handicrafts and local arts</li>
            <li>Soft skills like communication and teamwork</li>
          </ul>
          <p>Number of Beneficiaries - 80+</p>
          <p>
            Support from - Local educational institutes and industry experts
          </p> */}

          <p className="date">
            Date - 6th of Dec 2023 (Death Anniversary of Dr. Babasaheb Ambedkar)
          </p>
          <br></br>
          <p className="details">
            Activity - Founded Dr. Babasaheb Ambedkar Abhyasika (Study Room)
          </p>
          <br></br>
          <p className="place">
            Place - Takarkheda More, Taluka Anjangaon Surji, District Amravati
            (MH)
          </p>
          <br></br>
          <p className="purpose">
            Purpose - Takarkheda More is a village in Amravati district of
            Maharashtra. Boys and Girls have to travel 5km in order to attend
            classes and study room. Study Rooms here in nearby city i.e.
            Anjangaon Surji costs Rs. 800 to Rs. 1000/- per month. Only those
            persons who can afford these fees attend the Study Room. Mostly
            girls from Takarkheda More village avoid going to Anjangaon Surji as
            it is a hectic journey and consumes too much of time.
          </p>
          <p>
            So, Anand Jyoti Foundation has taken initiative and started this
            Abhyasika (Study Room) in the village. It is free of cost for all.
            The Tables and Chairs are arranged there and the place has washroom
            facility also. This platform (i.e Abhyasika) is beneficial for many,
            especially teenage girls who are studying in 11th and 12th and
            avoids going to the city to study.
          </p>
        </div>
      ),
    },
    {
      id: 10,
      image: "/a10.png",
      title: "FINANCIAL AWARENESS Activity",
      description: (
        <div>
          {/* <p className="date">Date of Activity - 19th of Oct 2023</p>
          <p className="details">
            Activity - “Healthy Eating, Healthy Living” - Nutrition Awareness
            Program
          </p>
          <p className="place">Place - Dhadgaon, Nandurbar (Maharashtra)</p>
          <p>
            The aim was to educate the tribal population about the importance of
            nutrition and balanced diets. Activities included:
          </p>
          <ul>
            <li>Nutrition workshops for women and children</li>
            <li>Cooking demonstrations</li>
            <li>Distribution of nutritional supplements</li>
            <li>Health check-ups</li>
          </ul>
          <p>Number of Beneficiaries - 150+</p>
          <p>Support from - Local health workers and nutritionists</p> */}

          <p className="date">Date of Activity- 9th of Dec 2023</p>
          <p className="details">Activity- FINANCIAL AWARENESS Activity</p>
          <p className="place">
            Place- Zilla Parishad School Ghatang in Tribal area of Melghat Tiger
            Reserve, Taluka Chikhaldara, Dist Amravati, (Maharashtra)
          </p>
          <p className="activity">
            Activity - On the invitation from Mr. Shrikant Tote Sir (Head Master
            of the School) and Mr. Vaijnath Ippar Sir (Winner of State Award for
            Ideal teacher for 2021-22), we guided students of this school on
            these topics:
          </p>
          <ul>
            <li>1. Financial Awareness</li>
            <li>2. Saving Account / Current Account</li>
            <li>3. Sukanya Samriddhi Account</li>
            <li>4. Banking Transactions</li>
            <li>5. Interest, Loans</li>
            <li>6. UPI</li>
            <li>7. Etc etc</li>
          </ul>
          <p>
            YouTube Video link of the activity -{" "}
            <a
              href="https://youtu.be/T70vAoqhzdk?si=ypK8YVoHZR4_iq12"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
          <p>
            Along with that, some competitions were organized as co-curricular
            activities and prizes were distributed to those performing
            brilliantly in the competitions.
          </p>
          <p className="beneficiaries">
            Number of students attended the session = 28
          </p>
        </div>
      ),
    },

    {
      id: 11,
      image: "/a11.png",
      title: " FINANCIAL AWARENESS Activity for SHGs and School Students",
      description: (
        <div>
          <p className="date">Date - 23rd of Dec 2023</p>
          <p className="details">
            Activity - FINANCIAL AWARENESS Activity for SHGs and School Students
          </p>
          <p className="place">
            Place - Zilla Parishad School Bhilkheda in Tribal area of Melghat
            Tiger Reserve, Taluka Chikhaldara, Dist Amravati, (Maharashtra)
          </p>
          <p className="classes">Classes - Standard 1st to 5th</p>
          <p className="activity">
            Activity - Govt of Maharashtra announced “MAZI SHALA SUNDAR SHALA
            ABHIYAN”, where schools participated wholeheartedly to win big
            prizes. We assisted schools in order to secure top positions.
          </p>
          <p className="details">
            On the invitation from Mr. Govind Munde Sir (Head Master of the
            School), we guided students of this school on the following topics:
          </p>
          <ul>
            <li>1. Banking Transactions</li>
            <li>2. UPI</li>
            <li>3. Financial Awareness</li>
            <li>4. Saving Account / Current Account</li>
            <li>5. Sukanya Samriddhi Account</li>
            <li>6. Interest, Loans</li>
            <li>7. Etc etc</li>
          </ul>
          <p>
            YouTube Video link of the activity -{" "}
            <a
              href="https://youtu.be/0ouoyxvq7WU?si=ElNkRoG5hEGLrAxV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Here
            </a>
          </p>
          <p>
            We organized co-curricular activities and prizes were distributed to
            those performing brilliantly in the competitions.
          </p>
          <p className="beneficiaries">
            Number of students attended the session = 89
          </p>
        </div>
      ),
    },

    {
      id: 12,
      image: "/a12.png",
      title: "THREADS OF KINDNESS INITIATIVE-  NEW CLOTHING CHARITY DRIVE",
      description: (
        <div>
          <p className="date">Date - 1st Jan 2024</p>
          <p className="details">
            Activity - “THREADS OF KINDNESS INITIATIVE” - NEW CLOTHING CHARITY
            DRIVE
          </p>
          <p className="location">
            1. Location - Malwali, Kondawali, Katkari tribal villages in Velhe
            Taluka of Pune District
          </p>
          <p className="collaborating-partner">
            2. Collaborating Partner - Advait Parivar, Pune
          </p>
          <p className="beneficiaries">3. No. of Beneficiaries - 92</p>
          <p className="purpose">
            Purpose - On the joyous occasion of New Year, Anand Jyoti Foundation
            undertook a heartfelt initiative to distribute warm clothing to the
            tribal communities in the said villages.
          </p>
          <p className="items-donated">Items donated -</p>
          <ul>
            <li>1. Blankets</li>
            <li>2. Cloths</li>
            <li>3. Sweaters</li>
          </ul>
          <p className="purpose">
            Recognizing the critical need for adequate clothing during the cold
            season, our foundation mobilized resources and reached out to the
            most vulnerable families in the area. This distribution was not only
            a means to provide physical warmth but also a gesture of solidarity
            and care towards our community members.
          </p>
          <p className="gratitude">
            We are immensely grateful to Advait Parivar of Pune for their
            generous assistance and collaboration in this activity. Their
            support was instrumental.
          </p>
          <p className="purpose">
            By addressing immediate needs such as protection from the cold, we
            aim to create a foundation for long-term health and happiness.
          </p>
        </div>
      ),
    },

    {
      id: 13,
      image: "/a13.png",
      title:
        "FINANCIAL AWARENESS + Importance of Hygiene and Good Diet for School Students",
      description: (
        <div>
          <p className="date">Date - 7th Jan 2024</p>
          <p className="details">
            Activity - Session on FINANCIAL AWARENESS + Importance of Hygiene
            and Good Diet for School Students
          </p>
          <p className="venue">
            Venue - Z. P. School Jaitadehi in Tribal area of Melghat Tiger
            Reserve, Taluka Chikhaldara, Dist Amravati, (Maharashtra)
          </p>
          <p className="description">
            Under the aegis of the Government of Maharashtra's "Mazi Shala
            Sundar Shala Abhiyan," the Anand Jyoti Foundation undertook a
            crucial initiative to enhance financial literacy among students in
            the tribal regions of Melghat. This activity was under our Project
            Padhai. Also, we conducted seminars on Health and Hygiene here.
          </p>
          <p className="health-seminar">
            Seminar on Health and Hygiene (Under our Project Sehat) was
            Addressed by:
            <ul>
              <li>1. Dr. Vedant Tank</li>
              <li>2. Dr. Abhinav Sontakke</li>
            </ul>
          </p>
          <p className="video-link">
            Video link of the Session -
            <a href="https://youtu.be/JLdf-jwy3nY?si=JtBs76t2QVbCHATP">
              Watch here
            </a>
          </p>
          <p className="activities-conducted">Activities Conducted:</p>
          <ul>
            <li>1. Interactive Seminar</li>
            <li>2. Practical Demonstrations like Role playing</li>
            <li>3. Interactive Q&A Session</li>
          </ul>
        </div>
      ),
    },

    {
      id: 14,
      image: "/a14.png",
      title: "Health Checkup Camp and Provision of Free  Medicines",
      description: (
        <div>
          <p className="date">Date - 27th Jan 2024</p>
          <p className="details">
            Activity - Health Checkup Camp and Provision of Free Medicines
          </p>
          <p className="venue">
            Venue - Z. P. School BHILKHEDA in Tribal area of Melghat Tiger
            Reserve, Taluka Chikhaldara, Dist Amravati, (Maharashtra)
          </p>
          <p className="participants">
            Doctors Participated:
            <ul>
              <li>1. Dr. Vedant Tank</li>
              <li>2. Dr. Abhinav Sontakke</li>
            </ul>
            Pharmacist:
            <ul>
              <li>Mr. Ankush Jawarkar</li>
            </ul>
          </p>
          <p className="description">
            As part of our PROJECT SEHAT, we play our part to improve health and
            well-being in the Melghat tribal area, the Anand Jyoti Foundation
            organized a Health Check-Up Camp in the village of Bhilkheda. This
            initiative focused on the students of the Zilla Parishad School
            Bhilkheda, as well as the villagers. The camp successfully provided
            health check-ups for 150 patients, along with free medicines to
            those in need.
          </p>
          <p className="video-link">
            YouTube video of the session -
            <a href="https://youtu.be/L54uG3yOK_A?si=Rhl8XtLXmxICG6an">
              Watch here
            </a>
          </p>
        </div>
      ),
    },

    {
      id: 15,
      image: "/a15.png",
      title:
        "Session on Skill Development and Health Checkup Camp and   Provision of Free Medicines",
      description: (
        <div>
          <p className="date">Date - 10th Feb 2024</p>
          <p className="details">
            Activity - Session on Skill Development and Health Checkup Camp and
            Provision of Free Medicines
          </p>
          <p className="venue">
            Venue - Z. P. School GHATANG in Tribal area of Melghat Tiger
            Reserve, Taluka Chikhaldara, Dist Amravati, (Maharashtra)
          </p>
          <p className="participants">
            Doctors Participated:
            <ul>
              <li>1. Dr. Abhinav Sontakke</li>
            </ul>
            Session on Skilling & Microbusinesses:
            <ul>
              <li>2. Er. Nilesh Dhote (Principal, Vidyaniketan ITI College)</li>
            </ul>
          </p>
          <p className="description">
            The Anand Jyoti Foundation organized a dual initiative in Ghatang
            village, combining a Health Check-Up Camp (Under our PROJECT SEHAT)
            with a Skill Development Session (Under our PROJECT JIVIKA) for
            students of the Zilla Parishad School Ghatang. We provided health
            check-ups and free medicines for 31 students. The Principal of an
            ITI College emphasized skilling, microenterprises, and vocational
            education.
          </p>
          <p className="video-link">
            Short YouTube video of the Session -
            <a href="https://youtu.be/ouRvcAwRDDo?si=3B853Lu1mRZnioFo">
              Watch here
            </a>
          </p>
          <p className="activities">
            Activities Conducted:
            <ul>
              <li>1. Health Check-Up Camp</li>
              <li>2. Skill Development Session</li>
            </ul>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="activities">
      {activities.map((activity) => (
        <div key={activity.id} className="activity">
          <img src={activity.image} alt={activity.title} />
          <div className="content">
            <h3>{activity.title}</h3>
            <div className="description">{activity.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
