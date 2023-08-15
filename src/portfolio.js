const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/erintomorri',
  title: 'ET.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Erin Tomorri',
  role: 'Software Engineer',
  description:
    "Hi, my name is Erin, I'm currently studying Computer Engineering at TMU. I am very passionate about Machine Learning and Full-Stack Development. I like working on apps and websites in my free time and I am always open to new opportunities!",
  resume: 'https://drive.google.com/file/d/1hvtY7bvRzYfSvVPKTrs1o_bjCm1RsdE1/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/erin-tomorri/?originalSubdomain=ca',
    github: 'https://github.com/erintomorri',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Reddit Video Maker Bot',
    description:
      'Reddit Video Maker Bot, you can seamlessly convert your text-based Reddit content into visually appealing videos that capture attention and boost engagement, along with automatically uploading them with a click of a button.',
    stack: ['Python'],
    sourceCode: 'https://github.com/ErinTomorri/automatic-tiktok-reddit-content-creator',
    livePreview: 'https://www.tiktok.com/@r_askreddits/video/7120660835541863681',
  },
  {
    name: 'CNLC Social Media App',
    description:
      'Designed and launched a social media platform for students, offering a personalized and interactive space for sharing and discovering content within their school',
    stack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/ErinTomorri/CNLC-MAPLE',
    livePreview: 'https://maple-fbla-cnlc.netlify.app/',
  },
  {
    name: 'Vehicle Detection And Speed Measurement System',
    description:
      'Contributed on a joint hackathon project where we created a vehicle detection and speed measurement system using computer vision',
    stack: ['Python'],
    sourceCode: 'https://github.com/vincetrain/yrhacks-car-camera',
  },
  {
    name: 'ML Weather Forecaster',
    description:
      'Developed and implemented machine learning algorithms (ARIMA) to predict the weather forecasting of the next 30 days',
    stack: ['Python'],
    sourceCode: 'https://github.com/ErinTomorri/ML-weather-forecaster-/tree/main',
    livePreview: 'https://devpost.com/software/machine-learning-weather-forecaster',
  },
  {
    name: 'Chess',
    description:
      'Created the game of chess in Java as my final project for ICS4U',
    stack: ['Java'],
    sourceCode: 'https://github.com/ErinTomorri/Chess-Code-GUI-',
    livePreview: 'https://github.com/ErinTomorri/Chess-Code-GUI-',
  },
  {
    name: 'Grades Site',
    description:
      'Contributed on a joint project to showcase students grades in the YRDSB schoolboard region',
    stack: ['JavaScript', 'HTML', 'CSS', 'React'],
    sourceCode: 'https://github.com/MusaAqeel/GradesSite',
    livePreview: 'https://grades-site.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  "Python",
  "C++",
  "Caml"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tomorrierin@gmail.com',
}

export { header, about, projects, skills, contact }
