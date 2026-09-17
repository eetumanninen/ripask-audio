import {Component, OnInit, ChangeDetectionStrategy, Input, forwardRef} from "@angular/core";
import {SubsonicService} from "../subsonic/subsonic.service";
import {Album} from "../subsonic/subsonic.model";
import {ActivatedRoute} from "@angular/router";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./genre.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() value: string = "";
  @Input() label: string = "";
  @Input() type: string = "text";
  albums: Album[] = [];
  genre = "";

  constructor(
    private subsonicService: SubsonicService,
    private router: ActivatedRoute,
  ) {
  }

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }
}
