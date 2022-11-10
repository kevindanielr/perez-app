import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
    loading: boolean = false;// Loading
    searchTerm: string = "";// Search term
  
    constructor(
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.getProducts()
    }
  
    /**
     * [Show modal with opening crawl]
     */
     getProducts() {
      // this.loading = true;
      // this.swService.getFilms().subscribe( (films: Film[]) => {
      //   this.films = films;
      //   this.filmsFilter = films;
      //   this.loading = false;
      // }, error => {
      //   this.loading = false;
      // }); 
    }
  

  
    /**
     * [Search for films by term]
     */
    search( event ) {    
      // if (this.searchTerm === "") {
      //   this.filmsFilter = this.films;
      // } else {
      //   this.filmsFilter = this.films.filter( film => film.title.toLowerCase().includes(this.searchTerm.toLowerCase()) )
      // }
    }
  
  }
  