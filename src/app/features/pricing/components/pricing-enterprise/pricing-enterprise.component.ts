import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-pricing-enterprise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pricing-enterprise.component.html',
  styleUrl: './pricing-enterprise.component.scss'
})
export class PricingEnterpriseComponent implements OnInit {
  email: string = '';
  message: string = '';
  showThankYouModal: boolean = false;
  emailError: string = '';
  messageError: string = '';
  isSubmitting: boolean = false;

  private readonly EMAILJS_PUBLIC_KEY = 'lI6-05Xk75oPSmcHP';
  private readonly EMAILJS_SERVICE_ID = 'service_s0axndg';
  private readonly EMAILJS_TEMPLATE_ID = 'template_9jeouy6';

  ngOnInit(): void {
    // Initialize EmailJS
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async sendEmail(): Promise<void> {
    // Reset errors
    this.emailError = '';
    this.messageError = '';

    // Validate email format
    if (!this.email || !this.email.trim()) {
      this.emailError = 'Please enter your email address';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.emailError = 'Please enter a valid email address';
      return;
    }

    // Validate message
    if (!this.message || !this.message.trim()) {
      this.messageError = 'Please enter your message';
      return;
    }

    // Prevent multiple submissions
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    try {
      // Send email via EmailJS
      await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        {
          message: `Email: ${this.email.trim()}\n\nMessage: ${this.message.trim()}`
        }
      );

      // Show thank you modal
      this.showThankYouModal = true;
      
      // Reset form
      this.email = '';
      this.message = '';
      
      // Auto-close modal after 5 seconds
      setTimeout(() => {
        this.closeThankYouModal();
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      this.emailError = 'Failed to send email. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }

  closeThankYouModal(): void {
    this.showThankYouModal = false;
  }

  onEmailInput(): void {
    // Clear error when user starts typing
    if (this.emailError) {
      this.emailError = '';
    }
  }

  onMessageInput(): void {
    // Clear error when user starts typing
    if (this.messageError) {
      this.messageError = '';
    }
  }
}

