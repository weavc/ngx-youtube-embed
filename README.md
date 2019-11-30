# ngx-youtube-embed
[![npm version](https://badge.fury.io/js/ngx-youtube-embed.svg)](https://badge.fury.io/js/ngx-youtube-embed)
[![npm downloads a month](https://img.shields.io/npm/dm/ngx-youtube-embed.svg)](https://img.shields.io/npm/dm/ngx-youtube-embed.svg)
[![npm downloads a week](https://img.shields.io/npm/dt/ngx-youtube-embed.svg)](https://img.shields.io/npm/dt/ngx-youtube-embed.svg)
### Install

`npm i ngx-youtube-embed`

### Usage
Import the module:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-embed';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
Add to template:
```html
<youtube-embed videoId="<video id>"></youtube-embed>
```
```html
<youtube-embed [videoId]="id" width="1280" height="720" (ready)="savePlayer($event)"
        (change)="onStateChange($event)" [protocol]="'https'" 
        [playerVars]="{ controls: 1, showinfo: 0, rel: 0, autoplay: 1, modestbranding: 0 }">
</youtube-embed>
```

Handle variables & events/methods inside the component:
```typescript
export class AppComponent {

  id: string = '';
  private ytEvent: YT.PlayerEvent;
  private player: YT.Player;
  playerVars: YT.PlayerVars = {
    controls: 1, 
    showinfo: 0, 
    rel: 0, 
    autoplay: 1, 
    modestbranding: 0 
  };
  
  constructor() {}

  onStateChange(event) {
    this.ytEvent = event.data;
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
}
```

### Additional Info

The project is based off of [ngx-youtube-player](https://github.com/orizens/ngx-youtube-player). The [MIT license](https://github.com/orizens/ngx-youtube-player/blob/a4b348ee089158637c15ade744567e6ed60352c1/LICENSE) for this is kept intact [here](lib/LICENSE).

Look into the `YT.Player` interface for more details on what is or is not possible.
