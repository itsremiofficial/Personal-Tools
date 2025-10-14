import React, { useState } from "react";
import { IconInstagram } from "@/components/icons/version02";
import IconLinkedIn from "@/components/icons/Linkedin";

type AvatarProps = {
  imageSrc: string;
  delay: number;
};

const Avatar: React.FC<AvatarProps> = ({ imageSrc, delay }) => {
  return (
    <div
      className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-3 border-icu-900 shadow-lg animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img
        src={imageSrc}
        alt="User avatar"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

const TrustElements: React.FC = () => {
  const avatars = ["/one.avif", "/two.avif", "/three.avif", "/four.avif"];

  return (
    <div className="inline-flex items-center space-x-3 bg-icu-900 border-icu-800 border backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
      <div className="flex -space-x-4 sm:-space-x-4">
        {avatars.map((avatar, index) => (
          <Avatar key={index} imageSrc={avatar} delay={index * 200} />
        ))}
      </div>
      <p
        className="text-white animate-fadeIn whitespace-nowrap font-space pr-4"
        style={{ animationDelay: "800ms" }}
      >
        <span className="text-white font-semibold">2.4K</span> currently on the
        waitlist
      </p>
    </div>
  );
};

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative z-10 w-full">
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-icu-1100/50 border border-icu-100 focus:border-accent outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 font-space"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-40 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform whitespace-nowrap text-sm sm:text-base flex items-center justify-center font-space cursor-pointer ${
              isSubmitting
                ? "bg-icu-900 text-gray-300 cursor-not-allowed"
                : "bg-icu-300 hover:bg-icu-100 text-icu-1100"
            }`}
          >
            {isSubmitting ? (
              <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-icu-700 border-t-accent rounded-full animate-spin"></div>
            ) : (
              "Join Waitlist"
            )}
          </button>
        </form>
      ) : (
        <div className="bg-green-500/20 border border-green-500/30 text-green-300 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-center animate-fadeIn text-sm sm:text-base font-space">
          Thanks! We'll notify you when we launch.
        </div>
      )}
    </div>
  );
};

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;

    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);

    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="flex h-full"
        style={{
          width: "100%",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: "1 0 calc(100% / 15)",
                maxWidth: "calc(100% / 15)",
                height: "100%",
                background:
                  "linear-gradient(to top, oklch(58.41% 0.201 26.027), transparent)",
                transform: `scaleY(${height / 100})`,
                transformOrigin: "bottom",
                transition: "transform 0.5s ease-in-out",
                animation: "pulseBar 2s ease-in-out infinite alternate",
                animationDelay: `${index * 0.1}s`,
                outline: "1px solid rgba(0, 0, 0, 0)",
                boxSizing: "border-box",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const ComingSoon: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 sm:px-8 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-icu-1000"></div>
      <GradientBars />

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen py-8 sm:py-16 gap-8 sm:gap-16">
        <div className="mb-6 sm:mb-8">
          <TrustElements />
        </div>

        <h1 className="w-full text-white leading-tight tracking-tight mb-6 sm:mb-8 animate-fadeIn px-4">
          <span className="block font-press font-medium text-[clamp(1.5rem,2.5vw,5.75rem)] text-center">
            Portfolio in progress,
          </span>
          <span className="block font-press text-[clamp(1rem,2vw,2.75rem)] mt-4">
            One Pixel at a Time
          </span>
          <div className="mt-6 sm:mt-10 px-4">
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed animate-fadeIn animation-delay-200 font-space">
              Be the first to see my new portfolio where design
            </p>
            <p className="text-[clamp(1rem,3vw,1.5rem)] text-gray-400 leading-relaxed animate-fadeIn animation-delay-300 font-space">
              and development meet with precision.
            </p>
          </div>
        </h1>

        <div className="w-full max-w-2xl mb-6 sm:mb-8 px-4">
          <p className="text-icu-300 mb-8">
            Enter your email to get updates and early access.
          </p>
          <WaitlistForm />
        </div>

        <div className="flex justify-center flex-col space-y-2">
          <div className="uppercase text-icu-500 font-semibold">Follow</div>
          <div className="flex justify-center gap-6 bg-icu-1100/50 px-6 py-3 rounded-full border border-icu-1100 backdrop-blur-sm">
            <a
              href="https://www.instagram.com/itsremiofficial/"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              <IconInstagram fill className="w-6 h-6 sm:w-[22px] sm:h-[22px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/itsremiofficial/"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            >
              <IconLinkedIn fill className="w-6 h-6 sm:w-[22px] sm:h-[22px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComingSoon;
