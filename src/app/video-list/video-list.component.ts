import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs:['SelectVideo']
})
export class VideoListComponent implements OnInit {

  public SelectVideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid : Video){
    console.log(vid);
    this.SelectVideo.emit(vid);
  }

}
