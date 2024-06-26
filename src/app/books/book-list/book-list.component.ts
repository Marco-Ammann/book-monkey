import { Component } from '@angular/core';

import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private service: BookStoreService) {
    this.books$ = this.service.getAll();
  }
}
