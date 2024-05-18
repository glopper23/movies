import { Component, Input, HostListener, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ShelfItem } from '../shelf-item/shelf-item.model';
import { ShelfLevel } from './shelf-levels.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from '../../services/movie.service';
import { Subscription } from 'rxjs';
import { ScreenSizes, ItemsPerLevel } from './shelf-levels.enum';

@Component({
    selector: 'shelf-levels',
    templateUrl: './shelf-levels.component.html',
    styleUrls: ['./shelf-levels.component.scss']
  })
export class ShelfLevelsComponent implements OnInit {
     @Input() itemList: ShelfItem[] = [];
     @Input() shelvesType: string = '';
     screenWidth: number = window.innerWidth;
     shelveItemNumber: number = 25
     parsedList: ShelfLevel[] = [];
     selectedIndex: number = 0;

     movieServiceSub?: Subscription;

     constructor(private sanitizer: DomSanitizer, private movieService: MovieService) {}

     ngOnInit() {
      this.screenWidth = window.innerWidth;
      this.generateShelves();
       this.movieServiceSub = this.movieService.indexChanged.subscribe(
        (newVal) => {
          this.selectedIndex = newVal;
        }
      );
     }

     changeSelectedIndex(newRow: number, newIndex: number) {
      
           
      this.movieService.changeSelectedIndex(newRow, newIndex, this.shelveItemNumber);
    }

     

    // ngOnChanges(changes: SimpleChanges) {
    //   changes.screenWidth.currentValue
    // }

    parseItemList(width: number) {
      // if (width <= ScreenSizes.tablet) {
        
      // }
      let sum = this.itemList.reduce((accumulator: ShelfLevel[], currentValue: ShelfItem, index) => {
        console.log('index', index);
        if (accumulator.length && accumulator[accumulator.length - 1].items.length < this.shelveItemNumber) {
          if (accumulator[accumulator.length - 1]) accumulator[accumulator.length - 1]['items'].push(currentValue);
          // if (!accumulator[index]) accumulator[index] =  { items: [currentValue] };
          return accumulator;
        }
        if (!accumulator.length || accumulator[accumulator.length - 1].items.length === this.shelveItemNumber) {
          accumulator.push({ items: [currentValue] });
          return accumulator;
        }
        return accumulator;
        
        // if (accumulator.indexOf(currentValue) === -1) {
        //   accumulator.push(currentValue);
        // }
        
      }, []);
      this.parsedList = sum;
      console.log('sum', sum);
    }

    getUrl(url: string)
      {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

      generateShelves() {
        if (this.screenWidth < 1161) {
          this.shelveItemNumber = 18;
        }
        if (this.screenWidth < 844) {
          this.shelveItemNumber = 12;
        }
        if (this.screenWidth < 560) {
          this.shelveItemNumber = 8;
        }
        if (this.screenWidth < 375) {
          this.shelveItemNumber = 5;
        }
        this.parseItemList(this.shelveItemNumber);
      }

    @HostListener('window:resize', ['$event'])
      onResize() {
        const width = window.innerWidth;
        this.screenWidth = width;
        this.generateShelves();
      }

      ngOnDestroy(): void {
        if (this.movieServiceSub) {
          this.movieServiceSub.unsubscribe();
        }
      }
}