// Stack technologies data
export interface StackItem {
  name: string;
  src: string;
}

export const STACK_TECHNOLOGIES: StackItem[] = [
  {
    name: "Redux",
    src: "/icons/redux.png",
  },
  {
    name: "NextJS",
    src: "/icons/next.png",
  },
  {
    name: "CSS",
    src: "/icons/css.png",
  },
  {
    name: "JavaScript",
    src: "/icons/js.png",
  },
  {
    name: "Tailwind",
    src: "/icons/tailwind.png",
  },
  {
    name: "React",
    src: "/icons/react.png",
  },
];

// Social media links
export interface SocialLink {
  href: string;
  ariaLabel: string;
  icon: {
    src: string;
    alt: string;
  };
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/MaidedPonce",
    ariaLabel: "GitHub Profile",
    icon: {
      src: "/icons/github.svg",
      alt: "Github",
    },
  },
  {
    href: "https://www.linkedin.com/in/maided-guadalupe-hernandez-ponce-5b2a2a1a5/",
    ariaLabel: "LinkedIn Profile",
    icon: {
      src: "/icons/linkedin.png",
      alt: "LinkedIn",
    },
  },
  {
    href: "mailto:maided.h.p90@gmail.com",
    ariaLabel: "Email",
    icon: {
      src: "/icons/emaill.png",
      alt: "Email",
    },
  },
  {
    href: "https://wa.me/5536058161",
    ariaLabel: "WhatsApp",
    icon: {
      src: "/icons/wp.png",
      alt: "WhatsApp",
    },
  },
];

// Projects data
export interface Project {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export const PROJECTS: Project[] = [
  {
    title: "TODOMACHINE",
    href: "https://maidedponce.github.io/todoMachine/",
    image: {
      src: "/images/todoMachine.png",
      alt: "Screenshot de TODOMACHINE",
    },
  },
  {
    title: "Yes Of Course",
    href: "https://yeahofcourse.com/",
    image: {
      src: "/images/yoc.png",
      alt: "Screenshot de Yes Of Course",
    },
  },
  {
    title: "Rick and Morty",
    href: "https://maidedponce.github.io/rick-and-morty/",
    image: {
      src: "/images/rick.png",
      alt: "Screenshot de Rick and Morty",
    },
  },
];
