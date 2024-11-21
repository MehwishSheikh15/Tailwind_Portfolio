

import { motion } from "framer-motion";

// Define animation variants for the icons
const iconVariants = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// Custom icons as SVG
const icons = {
  react: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-12 h-12 text-cyan-400"
    >
      <path d="M12 0c-3.313 0-6 2.687-6 6 0 .361.03.715.09 1.06C3.206 7.424 0 10.903 0 15c0 4.418 3.582 8 8 8 4.22 0 7.681-3.263 7.978-7.45C17.84 16.975 20.902 20 24 20c0-4.963-3.771-9.117-8.778-9.922A5.956 5.956 0 0 0 18 6c0-3.313-2.687-6-6-6zm0 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z" />
    </svg>
  ),
  html: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-12 h-12 text-orange-500"
    >
      <path d="M1.5 0h21l-1.92 21.84L12 24l-8.58-2.16L1.5 0zm17.028 5.4H5.472l.33 3.696h12.426l-.678 7.614-5.55 1.56v.006h-.006l-5.544-1.56-.336-3.756h3.066l.144 1.572 2.664.75v-.006h.006l2.664-.75.27-2.964H6.084l-.792-8.856h14.22l-.984 11.034-.27 3.03-.03.33H7.188l.51-5.814H18l-.246 2.7z" />
    </svg>
  ),
  css: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-12 h-12 text-blue-500"
    >
      <path d="M1.5 0h21l-1.92 21.84L12 24l-8.58-2.16L1.5 0zm17.028 5.4H5.472l.33 3.696h12.426l-.678 7.614-5.55 1.56v.006h-.006l-5.544-1.56-.336-3.756h3.066l.144 1.572 2.664.75v-.006h-.006l2.664-.75.27-2.964H6.084l-.792-8.856h14.22l-.984 11.034-.27 3.03-.03.33H7.188l.51-5.814H18l-.246 2.7z" />
    </svg>
  ),
  tailwind: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-12 h-12 text-teal-400"
    >
      <path d="M12 0C9.748 0 7.572 1.011 6 2.868 5.336 3.615 4.746 4.48 4.243 5.43 2.706 5.06 0 7.78 0 11.943 0 14.375.963 16.309 2.572 17.776 3.657 18.8 5.06 19.22 6.572 19.22 8.495 19.22 10.372 18.011 11.5 16.171 12.6 14.235 12.686 12.285 12 9.943 12.514 11.601 13.08 12.994 14.5 14.848 15.932 16.714 17.712 18 19.572 18c2.272 0 4.857-1.777 6.14-3.5 2.18-2.973 2.396-6.18 2.392-6.5C24.532 6.115 21.395 2.582 17.065 2.582c-2.477 0-4.686 1.095-6.026 2.942-.6.85-1.027 1.75-1.487 2.666C8.178 4.234 9.152 2.07 11.572.57c2.416-1.506 5.4-2 8.285-1.154 2.88.842 5.494 2.71 7.14 5.08z" />
    </svg>
  ),
  figma: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-12 h-12 text-purple-500"
    >
      <path d="M12 2c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4v4c0 2.21-1.79 4-4 4S0 16.21 0 14s1.79-4 4-4v-4h4c2.21 0 4-1.79 4-4s1.79-4 4-4zm6 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0z" />
    </svg>
  ),
  nextjs: (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-12 h-12 text-white"
    fill="currentColor"
  >
    <path d="M10 10h20v80L70 10h20v80H70V30L30 90H10z" />
    <path d="M70 50h20v40H70z" />
  </svg>
  ),

  
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      {/* Icons Section */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {Object.entries(icons).map(([key, icon]) => (
          <motion.div
            key={key}
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            {icon}
            <p className="mt-2 text-sm font-semibold capitalize">{key}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
