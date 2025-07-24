import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
faqs = [
    {
      question: 'What is equalall?',
      answer: 'EqualAll is a crowdfunding platform dedicated to promoting equality and supporting causes that make a positive impact in communities around the world.'
    },
    {
      question: 'What is the equalall guarantee?',
      answer: 'The EqualAll guarantee ensures that your donations are protected and will reach the intended recipients. If a campaign is found to be fraudulent, we provide full refunds to donors.'
    },
    {
      question: 'Does equalall provide funds to individuals or start campaigns for them?',
      answer: 'No, EqualAll does not provide direct funding or start campaigns. We are a platform that enables individuals and organizations to create their own fundraising campaigns and connect with potential donors.'
    },
    {
      question: 'I am unable to login to my account/ forgot password',
      answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. If you continue to experience issues, please contact our support team for assistance.'
    },
    {
      question: 'Is my donation eligible for tax benefit?',
      answer: 'Tax deductibility depends on the recipient organization\'s tax-exempt status and your local tax laws. Please consult with a tax professional for specific advice regarding your donations.'
    },
    {
      question: 'What is the minimum donation on equal all?',
      answer: 'The minimum donation amount is $5. This low threshold ensures that anyone can contribute to causes they care about, regardless of their financial situation.'
    },
    {
      question: 'How do I contact you?',
      answer: 'You can contact us through our support email, phone number, or by using the contact form on our website. Our customer service team is available 24/7 to assist you.'
    },
    {
      question: 'How do I request a refund?',
      answer: 'To request a refund, please contact our support team with your donation details. Refunds are processed according to our refund policy and may take 5-10 business days to appear in your account.'
    },
    {
      question: 'What are the different modes of Payments to donate?',
      answer: 'We accept various payment methods including credit cards, debit cards, PayPal, bank transfers, and mobile payment options. All transactions are processed securely through encrypted channels.'
    },
    {
      question: 'How do I know my donation is protected?',
      answer: 'Your donations are protected through our secure payment processing, fraud detection systems, and our guarantee policy. We also provide transparency reports and regular updates on how funds are being used.'
    }
  ];
}
