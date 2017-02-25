import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}


/*
*
* Here is the application entry point
*
*
* */
platformBrowserDynamic().bootstrapModule(AppModule);
