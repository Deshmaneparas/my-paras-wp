import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
  imports:[ChatsComponent],
})
export class ChatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}