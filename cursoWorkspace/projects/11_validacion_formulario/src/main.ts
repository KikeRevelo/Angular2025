import { ValidacionComponent } from './app/validacion/validacion.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


bootstrapApplication(ValidacionComponent, appConfig)
  .catch((err) => console.error(err));
