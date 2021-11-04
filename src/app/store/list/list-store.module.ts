import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { featureName } from './list.state';
import { reducer } from './list.reducer';
import { ListEffects } from './list.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([ListEffects])
  ]
})
export class ListStoreModule {}
