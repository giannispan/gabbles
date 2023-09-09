import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { Gab, GabsService } from './gabs.service';
import { SearchComponent } from '../components/search/search.component';
import { WriteGabComponent } from './write-gab.component';

@Component({
  standalone: true,
  styleUrls: ['./list-gabs.component.scss'],
  templateUrl: './list-gabs.component.html',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    RouterLink,
    SearchComponent,
    WriteGabComponent,
  ],
})
export class ListGabsComponent implements OnInit {
  public search: string;

  constructor(private gabsService: GabsService) {
    this.search = '';
  }

  gabs: Gab[] = [];

  async ngOnInit() {
    this.gabs = await this.gabsService.list();
  }

  async getSearchTerm(term: string) {
    this.search = term;
    this.gabs = await this.gabsService.list(this.search);
  }
}
