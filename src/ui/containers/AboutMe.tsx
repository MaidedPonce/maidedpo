import { Animation } from "components/Animation";
import { SocialLinks } from "components/SocialLinks";

const AboutMe = () => {
  return (
    <Animation
      attributes={{
        className:
          "min-h-[80vh] flex flex-col items-start justify-center text-white px-8 lg:px-24 space-y-12",
      }}
    >
      <div className="space-y-12 max-w-[60%]">
        <h1 className="text-5xl lg:text-7xl font-medium">
          Hi,
          <br /> I am Maided
          <br /> Frontend Developer
        </h1>
        <p>
          I specialize in creating modern, responsive, and user-friendly
          websites. With experience in JavaScript, React, and UI design, I help
          businesses bring their digital vision to life.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="font-semibold">Contact Me</h2>
        <SocialLinks />
      </div>
    </Animation>
  );
};

export { AboutMe };
