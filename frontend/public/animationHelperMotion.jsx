export const slideInFromLeft = {
  initial: { x: "-90%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50, damping: 20 },
};

// Slide in from right
export const slideInFromRight = {
  initial: { x: "90%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50, damping: 20 },
};

export const slideInFromBottom = {
  initial: { y: "20%", opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50 },
};

export const appear = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 40, damping: 20 },
};