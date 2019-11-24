import { NgModule, ModuleWithProviders } from '@angular/core';
import { YoutubePlayerComponent } from './ngx-youtube-embed.component';
import { YoutubePlayerService } from './ngx-youtube-embed.service';

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [],
  providers: [YoutubePlayerService],
  exports: [YoutubePlayerComponent]
})
export class NgxYoutubePlayerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxYoutubePlayerModule,
      providers: [YoutubePlayerService]
    };
  }
}
