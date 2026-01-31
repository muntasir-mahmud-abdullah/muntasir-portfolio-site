"use client";

import FadeIn from "components/animations/FadeIn";
import Container from "components/ui/Container";
import MagneticButton from "components/ui/MagneticButton";
import SpotlightCard from "components/ui/SpotlightCard";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <FadeIn>
            <h1 className="text-6xl font-bold font-heading mb-8 text-white">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-xl text-base-content/70 mb-12 max-w-lg">
              Have a project in mind, a question, or just want to chat about tech? 
              I'm currently <span className="text-emerald-400 font-medium bg-emerald-400/10 px-2 py-0.5 rounded">available</span> for new opportunities.
            </p>

            <div className="space-y-6 mb-12">
                <SpotlightCard className="p-6 bg-base-200/30">
                    <h3 className="text-sm uppercase tracking-wider text-base-content/60 mb-1">Email</h3>
                    <a href="mailto:muntasirm525@gmail.com" className="text-xl md:text-2xl text-white hover:text-primary transition-colors font-heading">
                        muntasirm525@gmail.com
                    </a>
                </SpotlightCard>

                <div className="grid grid-cols-2 gap-6">
                    <SpotlightCard className="p-6 bg-base-200/30">
                        <h3 className="text-sm uppercase tracking-wider text-base-content/60 mb-1">GitHub</h3>
                        <a href="https://github.com/muntasir-mahmud-abdullah" target="_blank" className="text-lg text-white hover:text-primary transition-colors">
                            @muntasir
                        </a>
                    </SpotlightCard>
                    <SpotlightCard className="p-6 bg-base-200/30">
                        <h3 className="text-sm uppercase tracking-wider text-base-content/60 mb-1">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/muntasir-mahmud-abdullah47" target="_blank" className="text-lg text-white hover:text-primary transition-colors">
                            /in/muntasir
                        </a>
                    </SpotlightCard>
                </div>
            </div>
          </FadeIn>

          {/* Form Side */}
          <FadeIn delay={0.2}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
              
              <h2 className="text-2xl font-bold mb-8 text-white relative z-10">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="form-control">
                  <label className="label pl-0">
                    <span className="label-text font-medium text-base-content/80">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input bg-black/20 border-white/10 focus:border-primary focus:outline-none w-full text-white h-12 rounded-xl transition-all"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-control">
                  <label className="label pl-0">
                    <span className="label-text font-medium text-base-content/80">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input bg-black/20 border-white/10 focus:border-primary focus:outline-none w-full text-white h-12 rounded-xl transition-all"
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-control">
                  <label className="label pl-0">
                    <span className="label-text font-medium text-base-content/80">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea bg-black/20 border-white/10 focus:border-primary focus:outline-none h-40 rounded-xl w-full text-white transition-all text-base"
                    required
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.message && (
                  <div
                    className={`alert rounded-xl border-none text-white ${status.type === "success" ? "bg-emerald-500/20 text-emerald-200" : "bg-red-500/20 text-red-200"}`}
                  >
                    {status.message}
                  </div>
                )}

                <MagneticButton
                  type="submit"
                  className="w-full btn btn-primary btn-lg rounded-xl border-none shadow-lg shadow-primary/20 hover:shadow-primary/40 text-black font-bold"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </MagneticButton>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
