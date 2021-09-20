import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-gallery-link',
  templateUrl: './view-gallery-link.component.html',
  styleUrls: ['./view-gallery-link.component.css']
})
export class ViewGalleryLinkComponent implements OnInit {
  public imagesArr=[
    'assets/images/cricket.jpg',
    'assets/images/football.jpg',
    'assets/images/basketball.jpg',
    'assets/images/kabbadi.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
