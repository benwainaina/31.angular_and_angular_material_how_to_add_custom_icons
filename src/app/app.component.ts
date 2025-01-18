import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public exampleMaterialIcons: Array<{ iconName: string; iconLabel: string }> =
    [
      { iconName: 'play_arrow', iconLabel: 'Play' },
      { iconName: 'speed', iconLabel: 'Default Speed' },
      { iconName: 'skip_next', iconLabel: 'Play Next' },
      { iconName: 'video_library', iconLabel: 'Video Library' },
      { iconName: 'headset_mic', iconLabel: 'Music Icon' },
    ];
  public exampleCustomIcons: Array<{ iconName: string; iconLabel: string }> = [
    { iconName: 'shared__custom_play_icon', iconLabel: 'Custom Play' },
    { iconName: 'shared__speed_red', iconLabel: 'Custom Red Speed' },
    { iconName: 'shared__speed_orange', iconLabel: 'Custom Orange Speed' },
    { iconName: 'shared__speed_green', iconLabel: 'Custom Green Speed' },
    { iconName: 'shared__logo_icon', iconLabel: 'Logo Icon' },
  ];
}
