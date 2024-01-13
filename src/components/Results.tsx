import { motion } from "framer-motion";

type Props = {
  accuracyPercentage: number;
  errors: number;
  total: number;
};

const Results = ({ accuracyPercentage, errors, total }: Props) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };
  return (
    <motion.ul className="flex flex-col items-center text-primary-500 space-y-3">
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
        className="text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.3 }}
      >
        Accuracy: {accuracyPercentage}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.6 }}
        className="text-red-500"
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.9 }}
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
};

export default Results;
