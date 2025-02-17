import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxUserAvatarComponent } from "../../../ngx-user-avatar/src/lib/ngx-user-avatar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxUserAvatarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngx-user-avatar-example';

  onClick() {
    console.log('Clicked');
  }
}
