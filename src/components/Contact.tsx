import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
  </svg>
);

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/meeprwgj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-linear-to-b from-transparent to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">
              LET'S <span className="gradient-text">TALK</span>
            </h2>
            <p className="text-text-sub text-lg mb-12 max-w-md">
              Have a project in mind or just want to say hello? I'm always open to new opportunities and creative collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-accent-orange/20 transition-colors">
                  <Mail className="text-accent-orange" size={20} />
                </div>
                <span className="text-lg text-text-sub group-hover:text-white transition-colors">hpthakur8181@gmail.com</span>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-sub mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/harshpratapsingh8181/" },
                  { icon: <DiscordIcon size={20} />, href: "https://discord.com/users/591908800210927618" },
                  { icon: <Instagram size={20} />, href: "https://www.instagram.com/_harsh_thakur_07_/" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-sub hover:text-white hover:border-accent-orange transition-all shadow-sm hover:shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Subtle glow in corner */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-orange/10 rounded-full blur-[60px]"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              {/* Formspree Hidden Inputs */}
              <input type="hidden" name="_subject" value="New Portfolio Message!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-sub ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Enter Your Name Here."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-sub ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="Enter Your Mail Address Here."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-sub ml-1">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Enter Your Message Here."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-orange transition-colors resize-none"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 gradient-bg rounded-2xl font-bold text-white flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,106,0,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-green-400 font-medium pt-2"
                >
                  <CheckCircle2 size={18} />
                  <span>Message sent successfully 🚀</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-red-400 font-medium pt-2"
                >
                  <AlertCircle size={18} />
                  <span>Something went wrong ❌</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-text-sub text-sm">
          <p>&copy; 2026 Harsh Pratap Singh. All rights reserved. Designed with passion.</p>
        </footer>
      </div>
    </section>
  );
}
