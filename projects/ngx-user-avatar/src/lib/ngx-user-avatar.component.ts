import { Component, computed, input, Input, output, signal } from '@angular/core';

@Component({
  selector: 'ngx-user-avatar',
  imports: [],
  template: `
    <p
      [style.backgroundColor]="backgroundColor()"
      [style.color]="color()"
      [style.opacity]="isActive() ? 0.7 : 1"
      (mousedown)="isActive.set(true)"
      (mouseup)="isActive.set(false)"
      (click)="click.emit()">
      {{ userInitials() }}
    </p>
  `,
  styles: `
    p {
      display: inline-block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      user-select: none;
      font-family: Arial, sans-serif;
      font-size: 16px;
      font-weight: bold;
    }

    p:hover {
      cursor: pointer;
    }
  `
})
export class NgxUserAvatarComponent {
  fullname = input.required<string>({ alias: 'fullname' })
  color = input<string>('#f0f0f0')
  click = output<void>();

  isActive = signal(false);
  backgroundColor = input<string>('#f0f0f0')
  userInitials = computed(() => this.fullname().split(' ').map(name => name[0]).join(''))

  backgrountTransparent() {
    return this.backgroundColor().replace(')', ', 0.5)').replace('rgb', 'rgba')
  }
}
