import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movieInfo;
  posterImageBaseUrl = '';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.posterImageBaseUrl = this.dataService.imageBaseUrl;

  }

  ngOnChanges() {
  }

  goToDetails() {
    console.log(this.movieInfo);
    this.router.navigate(['./details', this.movieInfo.id]);
  }



}
