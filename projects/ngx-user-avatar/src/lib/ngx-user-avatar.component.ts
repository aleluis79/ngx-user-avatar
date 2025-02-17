import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'ngx-user-avatar',
  imports: [],
  template: `
    <p
      [style.backgroundColor]="backgroundColor()"
      [style.color]="color()"
      [style.opacity]="isActive() ? 0.7 : 1"
      [style.width.px]="size()"
      [style.height.px]="size()"
      [style.lineHeight.px]="size()"
      [style.fontSize.px]="countInitials() == 1 ? size() * 0.8 : countInitials() == 2 ? size() * 0.5 : size() * 0.35"
      (mousedown)="isActive.set(true)"
      (mouseup)="isActive.set(false)"
      (click)="click.emit()">
      {{ userInitials() }}
    </p>
  `,
  styles: `

    p {
      margin: 0;
      padding: 0;
      display: inline-block;
      border-radius: 50%;
      text-align: center;
      user-select: none;
      font-family: Arial, sans-serif;
      font-weight: bold;
      overflow: hidden;
    }

    p:hover {
      cursor: pointer;
    }
  `
})
export class NgxUserAvatarComponent {
  fullname = input.required<string>({ alias: 'fullname' })
  color = input<string>('gray')
  backgroundColor = input<string>('#f0f0f0')
  size = input<number>(50)
  click = output<void>();

  isActive = signal(false);
  userInitials = computed(() => this.fullname().trim().split(' ').map(name => name[0].toUpperCase()).join(''))
  countInitials = computed(() => this.fullname().split(' ').length)

  backgrountTransparent() {
    return this.backgroundColor().replace(')', ', 0.5)').replace('rgb', 'rgba')
  }
}
