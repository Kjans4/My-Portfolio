"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { personal } from "@/data/placeholder";
import styles from "./Contact.module.css";

export default function Contact() {
  // [REPLACE] "YOUR_FORM_ID" with your Formspree form ID from formspree.io
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section className="section" id="contact">
      <div className="page-wrapper">

        <div className="section-title-row">
          <h2 className={styles.sectionTitle}>CONTACT</h2>
        </div>

        <div className={styles.inner}>

          {/* Left: info */}
          <div className={styles.infoCol}>
            <p className={styles.infoLabel}>// SEND A MESSAGE</p>
            <p className={styles.infoBio}>
              Got a project in mind, a job offer, or just want to say hi?
              Drop me a message and I&apos;ll get back to you as soon as possible!
            </p>
            <div className={styles.contactLinks}>
              <a href={`mailto:${personal.email}`} className={styles.contactItem}>
                <span className={styles.contactIcon}>✉</span>
                <span>{personal.email}</span>
              </a>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>⌨</span>
                <span>GitHub</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <span className={styles.contactIcon}>◈</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className={styles.formCol}>
            {state.succeeded ? (
              <div className={styles.successBox}>
                <p className={styles.successText}>[ MESSAGE SENT! ]</p>
                <p className={styles.successSub}>Thanks! I&apos;ll reply soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={`${styles.field} ${focused === "name" ? styles.fieldFocused : ""}`}>
                    <label className={styles.label} htmlFor="name">NAME</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Juan dela Cruz"
                      className={styles.input}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.error} />
                  </div>

                  <div className={`${styles.field} ${focused === "email" ? styles.fieldFocused : ""}`}>
                    <label className={styles.label} htmlFor="email">EMAIL</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className={styles.input}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.error} />
                  </div>
                </div>

                <div className={`${styles.field} ${focused === "subject" ? styles.fieldFocused : ""}`}>
                  <label className={styles.label} htmlFor="subject">SUBJECT</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project proposal / Job offer / Hello!"
                    className={styles.input}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className={`${styles.field} ${focused === "message" ? styles.fieldFocused : ""}`}>
                  <label className={styles.label} htmlFor="message">MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className={styles.textarea}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.error} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={styles.submitBtn}
                >
                  {state.submitting ? "[ SENDING... ]" : "[ SEND MESSAGE ]"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}