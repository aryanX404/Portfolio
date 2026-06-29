import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import styles from "./Contact.module.css";
import Gmail from "../../assets/Gmail_logo.png";
import Linkedin from "../../assets/linkedin.svg";
import Git from "../../assets/git-icon-logo.svg";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  zoom,
  staggerContainer,
} from "../../utils/animations";

const contactLinks = [
  {
    label: "Email",
    value: "aaryankumarsingh3153@gmail.com",
    icon: Gmail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aryankumarsingh",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/aryanX404",
    icon: Git,
  },
];
export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.from_name.trim().length < 3) {
      toast.error("Name should contain at least 3 characters.");
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message should contain at least 10 characters.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send.");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className={styles.section}>
      <h2 className={styles.heading}>
        <motion.span
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className={styles.bright}
        >
          LET'S WORK
        </motion.span>
        <motion.span
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className={styles.dim}
        >
          TOGETHER
        </motion.span>
      </h2>

      <div className={styles.layout}>
        {/* Left — contact info + availability */}
        <div className={styles.left}>
          {contactLinks.map((c) => (
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              key={c.label}
              className={styles.infoCard}
            >
              <div className={styles.iconBox}>
                <img src={c.icon} alt={c.label} className={styles.icon} />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>{c.label}</span>
                <span className={styles.infoValue}>{c.value}</span>
              </div>
            </motion.div>
          ))}

          <div className={styles.availCard}>
            <div className={styles.availTitle}>
              <span className={styles.dot} />
              Available for work
            </div>
            <div className={styles.availBig}>Open to freelance projects</div>
          </div>
        </div>

        {/* Right — message form */}
        <motion.form
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className={styles.formCard}
          onSubmit={handleSubmit}
        >
          <div className={styles.field}>
            <label className={styles.label}>Name</label>
            <input
              className={styles.input}
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea
              className={styles.textarea}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? (
              <div className={styles.loadingContent}>
                <ClipLoader size={18} color="#111111" speedMultiplier={0.9} />
                <span>Sending...</span>
              </div>
            ) : (
              <>
                <span>Send Message</span>
                <span className={styles.btnArrow}>↗</span>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
