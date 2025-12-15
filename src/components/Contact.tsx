import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resp = await fetch(`${import.meta.env.VITE_API_URL}/cerere`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        throw new Error(`Server error: ${resp.status}`);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Submission failed:', error);
      alert(t('contact.form.error'));
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      key: 'address',
      icon: <MapPin size={24} />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'phone',
      icon: <Phone size={24} />,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      key: 'email',
      icon: <Mail size={24} />,
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      key: 'schedule',
      icon: <Clock size={24} />,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const subjectOptions = [
    { value: 'civila', key: 'civil' },
    { value: 'familiala', key: 'family' },
    { value: 'comerciala', key: 'commercial' },
    { value: 'comunitara', key: 'community' },
    { value: 'scolara', key: 'school' },
    { value: 'consultanta', key: 'legal' },
  ];

  const stats = [
    { key: 'cases' },
    { key: 'success' },
    { key: 'availability' },
    { key: 'experience' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('contact.intro')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="scroll-animate bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('contact.info.title')}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="interactive-card flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`bg-gradient-to-r ${info.gradient} p-3 rounded-xl text-white shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-2">
                        {t(`contact.info.items.${info.key}.title`)}
                      </h4>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {t(`contact.info.items.${info.key}.content`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free consultation banner */}
            <div className="scroll-animate bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl animate-gradient">
              <h3 className="text-2xl font-bold mb-4">
                {t('contact.freeConsult.title')}
              </h3>
              <p className="mb-6 text-lg leading-relaxed">
                {t('contact.freeConsult.text')}
              </p>
              <a
                href="tel:+40725693521"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold inline-block hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 btn-animated"
              >
                {t('contact.freeConsult.button')}
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="scroll-animate bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('contact.form.title')}
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center space-x-3 animate-fadeInUp">
                <CheckCircle className="text-green-500" size={24} />
                <p className="text-green-700 font-medium">
                  {t('contact.form.success')}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    {t('contact.form.phoneLabel')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-700 mb-3"
                  >
                    {t('contact.form.subjectLabel')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                  >
                    <option value="">
                      {t('contact.form.subjectPlaceholder')}
                    </option>
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(`contact.form.subjectOptions.${opt.key}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-700 mb-3"
                >
                  {t('contact.form.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-8 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-2xl transform hover:scale-105 btn-animated disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>{t('contact.form.submitting')}</span>
                  </>
                ) : (
                  <>
                    <Send size={24} />
                    <span>{t('contact.form.submit')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Optional stats block reusing contact results if you want,
            but you didn't have stats in the Contact section,
            so we leave it out here. */}
      </div>
    </section>
  );
};

export default Contact;
