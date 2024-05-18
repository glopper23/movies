import { Component, Input, HostListener, OnInit } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';

@Component({
  selector: 'visual-artifacts',
  templateUrl: './visual-artifacts.component.html',
  styleUrls: ['./visual-artifacts.component.scss']
})
export class VisualArtifactsComponent implements OnInit {
  @Input() selectedItem: ShelfItem = {
    cover: '',
director: '',
movieName: '',
case: '',
trailer: '',
description: '',
scene: '',
protagonists: [],
}
screenWidth: number = window.innerWidth;

ngOnInit() {
  this.screenWidth = window.innerWidth;
}

play (){
}

@HostListener('window:resize', ['$event'])
      onResize() {
        const width = window.innerWidth;
        this.screenWidth = width;
        // if (this.screenWidth < 1161) {
        //   this.shelveItemNumber = 18;
        // }
        // if (this.screenWidth < 844) {
        //   this.shelveItemNumber = 12;
        // }
        // if (this.screenWidth < 560) {
        //   this.shelveItemNumber = 8;
        // }
        // if (this.screenWidth < 375) {
        //   this.shelveItemNumber = 5;
        // }
        // this.parseItemList(this.shelveItemNumber);
      }

}
