import { ShelfItem } from '../shelf-item/shelf-item.model';

export interface ShelfLevel {
  name?: string;
  items: ShelfItem[];
}