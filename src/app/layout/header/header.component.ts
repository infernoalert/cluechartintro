import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  showUseCaseMenu = false;
  isTouchDevice = false;
  showMobileMenu = false;

  ngOnInit() {
    // Detect touch device
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMobileMenu() {
    this.showMobileMenu = false;
  }

  onUseCaseMouseEnter() {
    // Only use hover on non-touch devices
    if (!this.isTouchDevice) {
      this.showUseCaseMenu = true;
    }
  }

  onUseCaseMouseLeave() {
    // Only use hover on non-touch devices
    if (!this.isTouchDevice) {
      this.showUseCaseMenu = false;
    }
  }

  onUseCaseClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.showUseCaseMenu = !this.showUseCaseMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Only handle click-outside on touch devices (mobile)
    if (this.isTouchDevice && this.showUseCaseMenu) {
      const target = event.target as HTMLElement;
      const useCaseButton = target.closest('button[type="button"]');
      const useCaseMenu = target.closest('.absolute');
      // Don't close if clicking the button (it toggles) or inside the menu
      if (!useCaseButton && !useCaseMenu) {
        this.showUseCaseMenu = false;
      }
    }
  }

  onMobileMenuLinkClick() {
    this.closeMobileMenu();
    this.showUseCaseMenu = false;
  }

}
