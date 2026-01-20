import emailjs from '@emailjs/browser';
import { database } from '../config/firebaseConfig';
import { ref, push, set, serverTimestamp, get } from 'firebase/database';

// Initialize EmailJS with proper error handling
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (!publicKey) {
  console.error('EmailJS Public Key is not configured');
}
emailjs.init(publicKey);

/**
 * Sends email via EmailJS and stores data in Firebase
 */
export const sendEmail = async (emailData) => {
  try {
    // Validate EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

    if (!serviceId || !templateId || !contactEmail) {
      throw new Error(
        `Missing EmailJS configuration. Service: ${serviceId}, Template: ${templateId}, Contact Email: ${contactEmail}`
      );
    }

    // Prepare email parameters
    const emailParams = {
      to_email: contactEmail,
      from_name: emailData.name,
      from_email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      reply_to: emailData.email,
    };

    console.log('Sending email with params:', emailParams);

    // Send email via EmailJS
    const response = await emailjs.send(serviceId, templateId, emailParams);
    console.log('Email sent successfully via EmailJS', response);

    // Store in Firebase Database
    const emailsRef = ref(database, 'emails');
    const newEmailRef = push(emailsRef);

    const dataToStore = {
      name: emailData.name,
      email: emailData.email,
      subject: emailData.subject,
      message: emailData.message,
      timestamp: serverTimestamp(),
      status: 'sent',
    };

    await set(newEmailRef, dataToStore);
    console.log('Email stored in Firebase with ID:', newEmailRef.key);

    return newEmailRef.key;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

/**
 * Retrieves all stored emails from the database
 */
export const getAllEmails = async () => {
  try {
    const emailsRef = ref(database, 'emails');
    const snapshot = await get(emailsRef);
    
    if (snapshot.exists()) {
      const emails = [];
      snapshot.forEach((childSnapshot) => {
        emails.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      console.log('Fetched emails:', emails);
      return emails;
    } else {
      console.log('No emails found');
      return [];
    }
  } catch (error) {
    console.error('Error fetching emails:', error);
    throw new Error(`Failed to fetch emails: ${error.message}`);
  }
};

/**
 * Marks an email as read
 */
export const markEmailAsRead = async (emailId) => {
  try {
    const emailRef = ref(database, `emails/${emailId}`);
    await set(emailRef, { status: 'read' }, { merge: true });
    console.log('Email marked as read:', emailId);
  } catch (error) {
    console.error('Error marking email as read:', error);
    throw new Error(`Failed to mark email as read: ${error.message}`);
  }
};
