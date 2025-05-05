import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { CalculadoraComponent } from '../projects/09_calculadora_servicio/src/app/calculadora/calculadora.component';

bootstrapApplication(CalculadoraComponent, appConfig)
  .catch((err) => console.error(err));
