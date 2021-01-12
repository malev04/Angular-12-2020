import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.css']
})
export class DogViewComponent implements OnInit {
  id;
  nimi;
  vanus;
  omanik;

  constructor(private route: ActivatedRoute,
    // service'i rakendamine konstruktoris.
    private dogService: DogService) { } 

  ngOnInit(): void {
      this.route.params.subscribe(param => {
      this.id = param.id;  
      this.nimi = param.koeraNimi;
      this.vanus = param.koeraVanus;
      this.omanik = param.koeraOmanik;
    })
  }

}
