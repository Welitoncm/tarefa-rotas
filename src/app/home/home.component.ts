import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true
})
export class HomeComponent implements OnInit {
  nome: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.nome = this.route.snapshot.paramMap.get('nome');
  }
}
