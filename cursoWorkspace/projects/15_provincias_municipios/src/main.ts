import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provinciasComponent } from './app/components/provincias/provincias.component';

bootstrapApplication(provinciasComponent, appConfig)
  .catch((err) => console.error(err));
