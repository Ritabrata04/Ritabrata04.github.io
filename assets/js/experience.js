AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
   {
    title: "Deep Learning Intern",
    cardImage: "assets/images/experience-page/ISI.png",
    place: "Purdue University",
    time: "(Jan,2024 - present)",
    desp: "<li>Working at CLAN Lab under Prof Dr. Vaneet Aggarwal.</li><li>Currently working on Interpretability of Sepsis DT framework.</li>",
  },
  {
    title: "Computer Vision Research Intern",
    cardImage: "assets/images/experience-page/ISI.png",
    place: "ISI Kolkata",
    time: "(Aug,2023 - present)",
    desp: "<li>Working under the able guidance of Dr Umapada Pal..</li> <li>Worked on the Segment-Anything-Model (SAM) and created an inference structure for remote sensed images.</li> <li>Currently working on Handwriting Style Transfer for Indic languages.</li>",
  },
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/feynn.jpeg",
    place: "Feynn Labs",
    time: "(May,2023 - Jul,2023)",
    desp: "<li>Product Ideation for Parkinson’s Disease patients using Gait Analysis.</li><li>Led a team of five individuals as a Team Lead for Market Segmentation of the Indian EV Industry.</li><li>Financial modelling for Parkinson’s Disease solution.</li><li>Freezing-of-gait analysis using tDCS.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
   {
    title: "Dell Hack2Hire",
    subtitle: "ML Lead",
    image: "assets/images/experience-page/uplift.png",
    desp: "Led a team of 5 in the ML Operations department in creating SIBYL.ai, a deep learning tool for employee career path recommendation.",
    href: "https://uplift.girlscript.tech/",
   },
   {
    title: "MUJ HACKX",
    subtitle: "Participant",
    image: "assets/images/experience-page/uplift.png",
    desp: "Developed PhishGuard, an AI tool a cybersecurity application for phishing detection.",
    href: "https://uplift.girlscript.tech/",
      
   }, 

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
