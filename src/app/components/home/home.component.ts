import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Item } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getItems().subscribe(
      items => this.items = items
    );
  }
}