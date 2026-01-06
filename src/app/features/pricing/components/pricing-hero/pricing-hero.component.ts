import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

export interface PricingFeature {
  name: string;
  icon: string;
  description?: string;
}

@Component({
  selector: 'app-pricing-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pricing-hero.component.html',
  styleUrl: './pricing-hero.component.scss'
})
export class PricingHeroComponent implements OnInit {
  email: string = '';
  showThankYouModal: boolean = false;
  emailError: string = '';
  isSubmitting: boolean = false;

  features: PricingFeature[] = [
    { name: 'Specialist Agents', icon: 'group_add' },
    { name: 'Deep Memory', icon: 'memory' },
    { name: 'Reference Assets', icon: 'cloud_upload', description: '(PDFs, Emails)' },
    { name: 'Unlimited Runs', icon: 'bolt' },
    { name: 'Export Docs, Slides, Code', icon: 'download' }
  ];

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
    // Reset error
    this.emailError = '';

    // Validate email format
    if (!this.email || !this.email.trim()) {
      this.emailError = 'Please enter your email address';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.emailError = 'Please enter a valid email address';
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
          message: this.email.trim()
        }
      );

      // Show thank you modal
      this.showThankYouModal = true;
      
      // Reset form
      this.email = '';
      
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
}

