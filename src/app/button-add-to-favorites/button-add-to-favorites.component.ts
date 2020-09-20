import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add-to-favorites',
  templateUrl: './button-add-to-favorites.component.html',
  styleUrls: ['./button-add-to-favorites.component.scss']
})
export class ButtonAddToFavoritesComponent implements OnInit {
  disabled: boolean = false;

  @Input() status: string;
  @Input() added: boolean;
  @Output() filmChoosen = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.added) {
      this.status = "Добавлен в избранное";
      this.disabled = true;
    }
  }

  onClick() {
    this.status = "Добавлен в избранное";
    this.filmChoosen.emit();
    this.disabled = true;
  }

}
