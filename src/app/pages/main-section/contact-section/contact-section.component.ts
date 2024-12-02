import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GoogleSheetsService } from '../../../services/google-sheets-service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  constructor(private http: HttpClient, private fb: FormBuilder, private service: GoogleSheetsService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.submitToGoogleForm(formData);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  submitToGoogleForm(formData: any) {
    const { name, email, message } = formData;
  
    this.service.createSheet(name, email, message).subscribe({
      next: (res) => {
        // Resetea el formulario completamente
        this.contactForm.reset();
        console.log('Formulario enviado con éxito:', res);
      },
      error: (error) => {
        console.error('Error al enviar el formulario:', error);
      }
    });
  }
}
