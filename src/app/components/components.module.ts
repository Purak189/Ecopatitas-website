import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DvNavbarComponent } from './dv-navbar/dv-navbar.component';
import { DvBannerHomeComponent } from './dv-banner-home/dv-banner-home.component';
import { DvFooterComponent } from './dv-footer/dv-footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DvAboutUsComponent } from './dv-about-us/dv-about-us.component';
import { DvModalWspComponent } from './dv-modal-wsp/dv-modal-wsp.component';
import { DvBannerCardsComponent } from './dv-banner-cards/dv-banner-cards.component';
import { DvOurSkillsComponent } from './dv-our-skills/dv-our-skills.component';
import { DvServicesListComponent } from './dv-services-list/dv-services-list.component';
import { DvBestProductsComponent } from './dv-best-products/dv-best-products.component';
import { DvClassicProductComponent } from './dv-classic-product/dv-classic-product.component';
import { DvFusionProductComponent } from './dv-fusion-product/dv-fusion-product.component';
import { DvImageComponent } from './dv-image/dv-image.component';
import { DvCtaComponent } from './dv-cta/dv-cta.component';
import { DvBannerPagesComponent } from './dv-banner-pages/dv-banner-pages.component';
import { DvOurHistoryComponent } from './dv-our-history/dv-our-history.component';
import { DvMissionVisionComponent } from './dv-mission-vision/dv-mission-vision.component';
import { DvOurValuesComponent } from './dv-our-values/dv-our-values.component';
import { DvProductsListSectionComponent } from './dv-products-list-section/dv-products-list-section.component';
import { DvTypeSelectionSectionComponent } from './dv-type-selection-section/dv-type-selection-section.component';

const components = [
	DvNavbarComponent,
	DvBannerHomeComponent,
	DvFooterComponent,
	DvAboutUsComponent,
	DvModalWspComponent,
	DvOurSkillsComponent,
  DvBannerCardsComponent,
  DvServicesListComponent,
  DvBestProductsComponent,
  DvClassicProductComponent,
]

@NgModule({
	declarations: [
		...components,
  DvFusionProductComponent,
  DvImageComponent,
  DvCtaComponent,
  DvBannerPagesComponent,
  DvOurHistoryComponent,
  DvMissionVisionComponent,
  DvOurValuesComponent,
  DvProductsListSectionComponent,
  DvTypeSelectionSectionComponent,
	],
  exports: [
    ...components,
    DvFusionProductComponent,
    DvImageComponent,
    DvCtaComponent,
    DvBannerPagesComponent,
    DvOurHistoryComponent,
    DvMissionVisionComponent,
    DvOurValuesComponent,
    DvProductsListSectionComponent,
    DvTypeSelectionSectionComponent,
  ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule
	]
})
export class ComponentsModule { }
