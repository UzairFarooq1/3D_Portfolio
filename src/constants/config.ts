type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    certifications: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Uzair Farooq — 3D Portfolio",
    fullName: "Uzair Farooq",
    email: "uzairf2580@gmail.com",
  },
  hero: {
    name: "Uzair Farooq",
    p: ["I develop web applications, mobile apps", "and create innovative IT solutions"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a passionate Business Information Technology graduate from Strathmore University with First-Class Honors and 3x Dean's list recognition. My educational journey includes specialized training in Business Intelligence and international exposure through Tallinn University's virtual program in Applications Programming and Interaction Design Methods. I specialize in web development using ReactJS, NextJS, and mobile app development with Kotlin and Flutter. Currently serving as Head of IT at Vanguard Group of Companies and working as a freelance developer, I create innovative solutions that solve real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    certifications: {
      p: "My credentials",
      h2: "Certifications.",
      content: `Professional certifications and courses that demonstrate my commitment to continuous learning and expertise in various technologies and methodologies.`,
    },
  },
};
