import { BUSINESS_INFO } from './constants';

export const generateWhatsAppMessage = (formData) => {
  const message = `Hello ARA Mobile Valeting,\n\nI would like to book a service:\n\n📝 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📧 Email: ${formData.email || 'Not provided'}\n📍 Location: ${formData.postcode}\n🚗 Service: ${formData.service}\n📅 Preferred Date: ${formData.date}\n🕐 Preferred Time: ${formData.time}\n${formData.notes ? `\n💬 Additional Notes:\n${formData.notes}` : ''}\n\nLooking forward to your service!`;
  return encodeURIComponent(message);
};

export const generateEmailLink = (formData) => {
  const subject = `Booking Request - ${formData.service}`;
  const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nLocation: ${formData.postcode}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\n${formData.notes ? `\nAdditional Notes:\n${formData.notes}` : ''}`;
  return `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const getWhatsAppLink = (phone, message = '') => {
  const cleanPhone = phone.replace(/\D/g, '');
  const whatsappMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${cleanPhone}${whatsappMessage}`;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
