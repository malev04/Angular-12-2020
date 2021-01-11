import { DogService } from './dog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dogs;
  
  constructor(private DogService: DogService) { }

  ngOnInit(): void {
    this.dogs = this.DogService.dogs;
    //this.dog = this.DogService.dogs;
  }

}
