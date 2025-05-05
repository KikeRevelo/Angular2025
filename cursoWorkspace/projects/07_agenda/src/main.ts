import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AgendaComponent } from './app/app.component';

bootstrapApplication(AgendaComponent, appConfig)
  .catch((err) => console.error(err));
