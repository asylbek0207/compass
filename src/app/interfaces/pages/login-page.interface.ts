import {FormControl} from '@angular/forms';

export interface ILoginPageForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}
