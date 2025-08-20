export const slideInFromLeft = {
  initial: { x: "-90%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50, damping: 20 },
};

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

export const slideInFromTop = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  viewport: { once: true },
  transition: { type: "tween", duration: 0.5 },
};

export const appear = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50, damping: 20 },
};


export const slideLeftFromMiddle = {
  initial: { x: "30%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50, damping: 20 },
};

export const slideRightFromMiddle = {
  initial: { x: "-30%", opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { amount: 0.04, once: true },
  transition: { type: "spring", stiffness: 50, damping: 20 },
};


export const rotateX = { // not used
  initial: { rotateX: 90, opacity: 0 },
  whileInView: { rotateX: 0, opacity: 1 },
  viewport: { amount: 0.4, once: true },
  transition: { type: "spring", stiffness: 40, damping: 20 },
};
