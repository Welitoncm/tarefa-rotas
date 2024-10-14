import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa o CommonModule para ngIf
import { FormsModule } from '@angular/forms';  // Importa o FormsModule para ngModel
import { Router } from '@angular/router';  // Importa o Router para redirecionamento

@Component({
  selector: 'app-login',
  standalone: true,  // Componente standalone
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule]  // Importa os módulos necessários
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}  

  onSubmit() {
    if (this.username === 'admin' && this.password === '123') {
      
      this.router.navigate(['/home', this.username]);
    } else {
      this.errorMessage = 'Usuário ou senha inválidos';
    }
  }
}

