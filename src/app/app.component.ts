import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="container py-3">
      <youtube-embed *ngIf="!changing" [videoId]="id" height="540" width="960" (ready)="savePlayer($event)" (change)="onStateChange($event)" [playerVars]="playerVars"></youtube-embed>
      <div class="row my-3">
        <div class="col-12">
          <input type="text" class="mx-1" [(ngModel)]="id" placeholder="Video ID">
          <button type="button" class="btn-success mx-1" (click)="update()">Update</button>
          <button type="button" class="btn-primary mx-1" (click)="playVideo()">Play</button>
          <button type="button" class="btn-warning mx-1" (click)="pauseVideo()">Pause</button>
        </div>
      </div>
    </div>
  `,

})
export class AppComponent {
  id = '';
  changing = false;
  playerVars: YT.PlayerVars = {
    controls: 2, 
    showinfo: 0, 
    rel: 0,
    autoplay: 1, 
    modestbranding: 1
  };
  private player: YT.Player;
  private ytEvent: YT.PlayerEvent;

  constructor() {}
  onStateChange(event) {
    this.ytEvent = event;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  update() {
    this.changing = true;
    setTimeout(() => { this.changing = false }, 500)
  }
}