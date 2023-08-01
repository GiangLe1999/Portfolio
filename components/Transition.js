import { motion } from "framer-motion";

// Variants
const transitionVariants = {
  // initial là tình trạng ban đầu
  // x là viết tắt của translateX
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      {/* Layer ban đầu có right 100% và translateX 100% nên phủ kín màn hình
      Khi chạy animate, translate trở lại về 0%, tức là về vị trí ban đầu (sát cạnh trái)
      width cũng thu nhỏ về 0% nên màn hình ko bị phủ nữa.
      */}
      {/* Khi exit tức là thoát trang, translateX chạy từ 0 - 100% và width chạy từ 0 - 100%, tức là về trạng thái ban đầu
      , phủ kín màn hình.
      Khi trang mới vừa được mount, animate chạy nối tiếp, layer đang phủ kín chạy tới width 0% và translate 0%
      tức là về vị trí cạnh trái màn hình và lớp phủ biến mất vì width = 0%
      */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transition;
