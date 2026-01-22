import { motion,AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope,FaWhatsapp, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef,useState,useEffect } from "react";


const Contact = () => {
   const [toast, setToast] = useState(null);
   const formRef = useRef();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
  if (toast) {
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }
}, [toast]);

   const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_icbty1r",
      "template_kfuhutb",
      formRef.current,
      "RUhA3WezXUSAVrj0b"
    )
    .then(() => {
      setToast({ type: "success", message: "Message sent successfully" });
      e.target.reset();
    })
    .catch(() => {
      setToast({ type: "error", message: "Something went wrong. Try again." });
    })
    .finally(() => {
    setLoading(false);
  });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-black px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-white mb-10"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT – Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gray-300 space-y-6"
          >
            <p>
              Have a project idea, collaboration, or job opportunity?  
              Feel free to reach out — I’d love to connect.
            </p>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <a
                  href="mailto:adilshinasmongam@gmail.com"
                  className="hover:text-cyan-400 transition break-all"
                >
                  adilshinasmongam@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-cyan-400" />
                <a
                  href="https://github.com/Adil-Aadhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition break-all"
                >
                  Adil-Aadhi
                </a>
              </div>


              <div className="flex items-center gap-3">
                <FaLinkedin className="text-cyan-400" />
                <a
                  href="https://www.linkedin.com/in/adil-shinas-b8545327a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition break-all"
                >
                  adil-shinas-b8545327a
                </a>
              </div>


              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-cyan-400" />
                <a
                  href="https://wa.me/919544773622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  +91 9544773622
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram className="text-cyan-400" />
                <a
                  href="https://instagram.com/adil__a_adhi_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  @adil__a_adhi_
                </a>
              </div>

            </div>
          </motion.div>

          {/* RIGHT – Form */}
          <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6 space-y-4"
            >

              <input
                name="user_name"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400"
                placeholder="Your Name"
                required
              />

              <input
                name="user_email"
                type="email"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400"
                placeholder="Email"
                required
              />

              <textarea
                name="message"
                rows="4"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-cyan-400"
                placeholder="Message"
                required
              />

              <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  className={`
                    w-full py-3 rounded-xl
                    flex items-center justify-center gap-2
                    font-semibold
                    transition-all duration-200
                    ${loading
                      ? "bg-cyan-500/70 cursor-not-allowed"
                      : "bg-cyan-500 text-black hover:bg-cyan-400"}
                  `}
                >
                  {loading ? (
                    <>
                      {/* Spinner */}
                      <motion.span
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
              </motion.button>

            </motion.form>

        </div>
      </div>
      <AnimatePresence>
            {toast && (
              <motion.div
                key="toast-notification"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.9,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn"
                  }
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`fixed bottom-8 right-8 z-[9999]
                  min-w-[320px] max-w-[380px] overflow-hidden
                  backdrop-blur-xl shadow-2xl
                  border rounded-2xl
                  ${toast.type === "success"
                    ? "bg-gradient-to-br from-green-500/10 via-green-400/5 to-emerald-500/5 border-green-500/20 shadow-green-500/10"
                    : "bg-gradient-to-br from-red-500/10 via-rose-500/5 to-pink-500/5 border-red-500/20 shadow-red-500/10"
                  }
                `}
              >
                {/* Animated Background Effects */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 overflow-hidden"
                >
                  {/* Pulse Effect */}
                  {toast.type === "success" ? (
                    <>
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-400/20 blur-2xl"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.1, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-emerald-400/20 to-green-400/10 blur-2xl"
                      />
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-r from-red-400/30 to-rose-400/20 blur-2xl"
                      />
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.1, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-rose-400/20 to-pink-400/10 blur-2xl"
                      />
                    </>
                  )}
                  
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                                      linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                      color: toast.type === "success" ? "#10b981" : "#ef4444"
                    }}
                  />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10 p-5">
                  <div className="flex items-start gap-3">
                    {/* Icon with Animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ 
                        scale: 1, 
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 15,
                          delay: 0.1
                        }
                      }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                        ${toast.type === "success"
                          ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white"
                          : "bg-gradient-to-br from-red-400 to-rose-500 text-white"
                        } shadow-lg`}
                    >
                      {toast.type === "success" ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </motion.div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-between gap-2 mb-1"
                      >
                        <span className={`font-semibold text-base
                          ${toast.type === "success" ? "text-green-400" : "text-red-400"}`}
                        >
                          {toast.type === "success" ? "Success!" : "Error!"}
                        </span>
                        
                        {/* Progress Bar */}
                        <motion.div
                          initial={{ scaleX: 1 }}
                          animate={{ scaleX: 0 }}
                          transition={{ duration: toast.duration || 5000, ease: "linear" }}
                          className="h-1 flex-1 max-w-[100px] rounded-full overflow-hidden bg-white/10"
                        >
                          <div className={`h-full w-full 
                            ${toast.type === "success" 
                              ? "bg-gradient-to-r from-green-400 to-emerald-400" 
                              : "bg-gradient-to-r from-red-400 to-rose-400"
                            }`}
                          />
                        </motion.div>
                      </motion.div>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/90 text-sm leading-relaxed"
                      >
                        {toast.message}
                      </motion.p>
                    </div>
                    
                    {/* Close Button */}
                    <motion.button
                      onClick={() => setToast(null)}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                                bg-white/5 hover:bg-white/10 border border-white/20
                                text-white/60 hover:text-white/80
                                transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>
                  
                  {/* Time Indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10"
                  >
                    <svg className="w-3 h-3 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-white/40">
                      {toast.duration ? `${toast.duration / 1000}s` : "Now"}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
