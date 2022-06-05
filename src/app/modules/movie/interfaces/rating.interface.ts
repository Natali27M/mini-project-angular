import {ThemePalette} from "@angular/material/core";

export interface IRating {
  value: number;
  max: number;
  color?: ThemePalette;
  disabled?: boolean;
  dense?: boolean;
  readonly?: boolean;
}
