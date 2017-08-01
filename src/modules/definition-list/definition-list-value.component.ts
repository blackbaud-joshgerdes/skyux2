import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { SkyDefinitionListService } from './definition-list.service';

@Component({
  selector: 'sky-definition-list-value',
  templateUrl: './definition-list-value.component.html',
  styleUrls: ['./definition-list-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyDefinitionListValueComponent {
  public defaultValue: string;

  constructor(public service: SkyDefinitionListService) { }
}
