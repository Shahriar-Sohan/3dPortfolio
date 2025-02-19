const styles = {
  paddingX: {
    sm: { paddingLeft: "4rem", paddingRight: "4rem" }, // sm:px-16
    default: { paddingLeft: "1.5rem", paddingRight: "1.5rem" } // px-6
  },
  paddingY: {
    sm: { paddingTop: "4rem", paddingBottom: "4rem" }, // sm:py-16
    default: { paddingTop: "1.5rem", paddingBottom: "1.5rem" } // py-6
  },
  padding: {
    sm: { paddingLeft: "4rem", paddingRight: "4rem", paddingTop: "4rem", paddingBottom: "4rem" }, // sm:px-16 sm:py-16
    default: { paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "2.5rem", paddingBottom: "2.5rem" } // px-6 py-10
  },
  heroHeadText: {
    fontWeight: "bold",
    color: "white",
    fontSize: "40px", // text-[40px]
    lineHeight: "98px", // lg:leading-[98px]
    marginTop: "0.5rem", // mt-2
    '@media (minWidth: 640px)': {
      fontSize: "50px", // xs:text-[50px]
    },
    '@media (minWidth: 768px)': {
      fontSize: "60px", // sm:text-[60px]
    },
    '@media (minWidth: 1024px)': {
      fontSize: "80px", // lg:text-[80px]
    }
  },
  heroSubText: {
    color: "#dfd9ff",
    fontWeight: "500", // font-medium
    fontSize: "16px", // text-[16px]
    lineHeight: "40px", // lg:leading-[40px]
    '@media (minWidth: 640px)': {
      fontSize: "20px", // xs:text-[20px]
    },
    '@media (minWidth: 768px)': {
      fontSize: "26px", // sm:text-[26px]
    },
    '@media (minWidth: 1024px)': {
      fontSize: "30px", // lg:text-[30px]
    }
  },
  sectionHeadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "30px", // text-[30px]
    '@media (minWidth: 640px)': {
      fontSize: "40px", // xs:text-[40px]
    },
    '@media (minWidth: 768px)': {
      fontSize: "50px", // sm:text-[50px]
    },
    '@media (minWidth: 1024px)': {
      fontSize: "60px", // md:text-[60px]
    }
  },
  sectionSubText: {
    fontSize: "14px", // text-[14px]
    color: "var(--secondary-color)", // text-secondary
    textTransform: "uppercase", // uppercase
    letterSpacing: "0.1em", // tracking-wider
    '@media (minWidth: 640px)': {
      fontSize: "18px", // sm:text-[18px]
    }
  }
};

export { styles };
