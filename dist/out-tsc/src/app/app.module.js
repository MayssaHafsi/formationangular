var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { DetailformationComponent } from './detailformation/detailformation.component';
import { GestionformationComponent } from './gestionformation/gestionformation.component';
import { DomainesComponent } from './domaines/domaines.component';
import { NewDomaineComponent } from './new-domaine/new-domaine.component';
import { EditDomaineComponent } from './edit-domaine/edit-domaine.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { NewFormateurComponent } from './new-formateur/new-formateur.component';
import { EditFormateurComponent } from './edit-formateur/edit-formateur.component';
import { NewFormationComponent } from './new-formation/new-formation.component';
import { NewFormationNonCertifiantComponent } from './new-formation-non-certifiant/new-formation-non-certifiant.component';
import { AffectationFormateurFormationComponent } from './affectation-formateur-formation/affectation-formateur-formation.component';
import { SeanceFormationComponent } from './seance-formation/seance-formation.component';
import { EditFormationNonCertifiantComponent } from './edit-formation-non-certifiant/edit-formation-non-certifiant.component';
import { EditFormationFormateurComponent } from './edit-formation-formateur/edit-formation-formateur.component';
import { EditSeanceFormationComponent } from './edit-seance-formation/edit-seance-formation.component';
import { DetailFromationNCComponent } from './detail-fromation-nc/detail-fromation-nc.component';
import { NewDemandeurComponent } from './new-demandeur/new-demandeur.component';
import { InscriptionFormationComponent } from './inscription-formation/inscription-formation.component';
import { GestionInscriptionFormationComponent } from './gestion-inscription-formation/gestion-inscription-formation.component';
import { GestionThemeComponent } from './gestion-theme/gestion-theme.component';
import { GestionNiveauComponent } from './gestion-niveau/gestion-niveau.component';
import { EditNiveauComponent } from './edit-niveau/edit-niveau.component';
import { GestionCertificationComponent } from './gestion-certification/gestion-certification.component';
import { DetailCertificationComponent } from './detail-certification/detail-certification.component';
import { NewCertificationComponent } from './new-certification/new-certification.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { EditCertificationComponent } from './edit-certification/edit-certification.component';
import { TabsCertiicationComponent } from './tabs-certiication/tabs-certiication.component';
import { InscriptionCertificationComponent } from './inscription-certification/inscription-certification.component';
import { GestionInscriptionCertificationComponent } from './gestion-inscription-certification/gestion-inscription-certification.component';
import { PrintInscritFormationComponent } from './print-inscrit-formation/print-inscrit-formation.component';
import { DetailCertificationAuxInscritComponent } from './detail-certification-aux-inscrit/detail-certification-aux-inscrit.component';
import { PrintInscritCerComponent } from './print-inscrit-cer/print-inscrit-cer.component';
import { AttestationFormationComponent } from './attestation-formation/attestation-formation.component';
import { TestComponent } from './test/test.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { DetailUploadComponent } from './uploadcertification/detail-upload/detail-upload.component';
import { FormUploadCertificationComponent } from './uploadcertification/form-upload-certification/form-upload-certification.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                SidebarComponent,
                FooterComponent,
                DashboardComponent,
                FormsComponent,
                ButtonsComponent,
                TablesComponent,
                TypographyComponent,
                IconsComponent,
                AlertsComponent,
                AccordionsComponent,
                BadgesComponent,
                ProgressbarComponent,
                BreadcrumbsComponent,
                PaginationComponent,
                DropdownComponent,
                TooltipsComponent,
                CarouselComponent,
                TabsComponent,
                DetailformationComponent,
                GestionformationComponent,
                DomainesComponent,
                NewDomaineComponent,
                EditDomaineComponent,
                FormateursComponent,
                NewFormateurComponent,
                EditFormateurComponent,
                NewFormationComponent,
                NewFormationNonCertifiantComponent,
                AffectationFormateurFormationComponent,
                SeanceFormationComponent,
                EditFormationNonCertifiantComponent,
                EditFormationFormateurComponent,
                EditSeanceFormationComponent,
                DetailFromationNCComponent,
                NewDemandeurComponent,
                InscriptionFormationComponent,
                GestionInscriptionFormationComponent,
                GestionThemeComponent,
                GestionNiveauComponent,
                EditNiveauComponent,
                GestionCertificationComponent,
                DetailCertificationComponent,
                NewCertificationComponent,
                EditThemeComponent,
                EditCertificationComponent,
                TabsCertiicationComponent,
                InscriptionCertificationComponent,
                GestionInscriptionCertificationComponent,
                PrintInscritFormationComponent,
                DetailCertificationAuxInscritComponent,
                PrintInscritCerComponent,
                AttestationFormationComponent,
                TestComponent,
                FormUploadComponent,
                DetailsUploadComponent,
                DetailUploadComponent,
                FormUploadCertificationComponent
            ],
            imports: [
                BrowserModule,
                RouterModule,
                AppRoutingModule,
                FormsModule,
                NgbModule.forRoot(),
                DataTablesModule,
            ],
            providers: [],
            bootstrap: [AppComponent],
            entryComponents: [TestComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map