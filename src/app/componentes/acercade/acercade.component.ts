import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {


  personas:Persona[];
  
  constructor(private http:PortfolioService, private router:Router ) { }

  ngOnInit(): void {
    this.http.getPersona()
    .subscribe(data=>{
    this.personas=data;
    })
  }
  

  public mostrar:boolean = true;
  public esconder:boolean = false;

  cambiarInput() {
    this.mostrar = !this.mostrar;
    this.esconder = !this.esconder;
    }
}

