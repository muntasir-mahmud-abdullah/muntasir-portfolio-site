'use client';

import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you within 24 hours.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-20">
      <Container>
        <FadeIn>
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-base-content/70 mb-12 max-w-3xl">
            Have a project in mind, a question, or just want to connect? I'd love to hear from you.
            I typically respond within 24 hours.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn delay={0.1}>
            <div className="bg-base-200 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                    placeholder="Your Name"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered h-32"
                    required
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                {status.message && (
                  <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:your.email@example.com" className="text-primary hover:underline">
                    your.email@example.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/yourusername
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Twitter/X</h3>
                  <a 
                    href="https://twitter.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @yourusername
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-base-200 rounded-lg">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-base-content/70">
                  I typically respond to inquiries within <strong>24 hours</strong> during weekdays.
                  If you don't hear back, please feel free to send a follow-up message.
                </p>
              </div>

              <div className="mt-8 p-6 bg-base-200 rounded-lg">
                <h3 className="font-semibold mb-2">Open To</h3>
                <ul className="list-disc list-inside space-y-2 text-base-content/70">
                  <li>Freelance projects (MERN stack, Next.js)</li>
                  <li>Remote full-stack developer roles</li>
                  <li>Collaborative tech initiatives</li>
                  <li>Research partnerships (Water tech + AI)</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}
