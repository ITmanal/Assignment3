import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment3';
  isClicked = false;
  arr: number[] = [];

  onClickBtn() {
    this.isClicked = !this.isClicked;
    this.arr.push(this.arr.length + 1);
  }

  getColor(click:number) {
    return click >= 5 ? 'blue' : 'transparent';
  }


}
