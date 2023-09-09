import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [FormsModule, MatInputModule, MatIconModule],
})
export class SearchComponent {
  @Input() placeholder: string;
  @Input() term: string;

  @Output() searchTermEventEmitter = new EventEmitter<string>();

  // Create a subject to handle debouncing
  private searchTermsSubject = new Subject<string>();

  constructor() {
    this.placeholder = '';
    this.term = '';
    // Subscribe to the subject with debounceTime
    this.searchTermsSubject
      .pipe(debounceTime(300)) // Adjust the debounce time as needed (e.g., 300 milliseconds)
      .subscribe((term: string) => {
        this.searchTermEventEmitter.emit(term);
      });
  }

  onSearchType(term: string) {
    // Push the typed term into the subject for debouncing
    this.searchTermsSubject.next(term);
  }
}
