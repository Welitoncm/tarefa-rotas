import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Certifique-se de importar o FormsModule

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  templateUrl: './cadastrar.component.html',
  imports: [FormsModule]  // Certifique-se de que o FormsModule está incluído aqui
})
export class CadastrarComponent {
  nome: string = '';
  senha: string = '';
  confirmSenha: string = '';
  mensagemSucesso: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      this.mensagemSucesso = 'Cadastro salvo com sucesso!';
    }
  }
}
