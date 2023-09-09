import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { GabsService } from './gabs.service';

class GabRequest {
  content: string = '';
}

@Component({
  standalone: true,
  selector: 'app-write-gab',
  styleUrls: ['./write-gab.component.scss'],
  templateUrl: './write-gab.component.html',
  imports: [FormsModule, MatButtonModule, MatCardModule, MatDividerModule, MatInputModule, RouterLink],
})
export class WriteGabComponent {
  constructor(
    private gabsService: GabsService,
    private router: Router,
  ) {}

  model = new GabRequest();

  async submit() {
    await this.gabsService.new(this.model);
    this.router.navigate(['/']);
  }
}
