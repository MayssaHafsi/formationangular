var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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
import { HttpClientModule } from '@angular/common/http';
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
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { FormUploadCertificationComponent } from './uploadcertification/form-upload-certification/form-upload-certification.component';
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'alerts', component: AlertsComponent },
    { path: 'accordions', component: AccordionsComponent },
    { path: 'badges', component: BadgesComponent },
    { path: 'progressbar', component: ProgressbarComponent },
    { path: 'breadcrumbs', component: BreadcrumbsComponent },
    { path: 'pagination', component: PaginationComponent },
    { path: 'dropdowns', component: DropdownComponent },
    { path: 'tooltips', component: TooltipsComponent },
    { path: 'carousel', component: CarouselComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'formation', component: GestionformationComponent },
    { path: 'domaines', component: DomainesComponent },
    { path: 'newDomaine', component: NewDomaineComponent },
    { path: 'editDomaine/:id', component: EditDomaineComponent },
    { path: 'formateurs', component: FormateursComponent },
    { path: 'addFormateur', component: NewFormateurComponent },
    { path: 'editFormateur/:cin', component: EditFormateurComponent },
    { path: 'newFormation', component: NewFormationComponent },
    { path: 'newFormationNC', component: NewFormationNonCertifiantComponent },
    { path: 'formationFormateur/:id', component: AffectationFormateurFormationComponent },
    { path: 'detailFormation/:id', component: DetailformationComponent },
    { path: 'seanceFormation/:id', component: SeanceFormationComponent },
    { path: 'editFormationNC/:id', component: EditFormationNonCertifiantComponent },
    { path: 'editFormationFormateur/:id', component: EditFormationFormateurComponent },
    { path: 'editSeanceFormation/:id', component: EditSeanceFormationComponent },
    { path: 'detailFormationNC/:id', component: DetailFromationNCComponent },
    { path: 'newDemandeur', component: NewDemandeurComponent },
    { path: 'inscrireFormation/:id', component: InscriptionFormationComponent },
    { path: 'gestionInscriptionFormation', component: GestionInscriptionFormationComponent },
    { path: 'gestionTheme', component: GestionThemeComponent },
    { path: 'gestionNiveau/:id', component: GestionNiveauComponent },
    { path: 'editNiveau/:id', component: EditNiveauComponent },
    { path: 'gestionCertification', component: GestionCertificationComponent },
    { path: 'detailCertification/:id', component: DetailCertificationComponent },
    { path: 'newCertification', component: NewCertificationComponent },
    { path: 'editTheme/:id', component: EditThemeComponent },
    { path: 'editCertification/:id', component: EditCertificationComponent },
    { path: 'tabsCertification', component: TabsCertiicationComponent },
    { path: 'tabsCertification', component: TabsCertiicationComponent },
    { path: 'inscrireCertification/:id', component: InscriptionCertificationComponent },
    { path: 'gestionInscriptionCertification', component: GestionInscriptionCertificationComponent },
    { path: 'printInscritFNC/:id', component: PrintInscritFormationComponent },
    { path: 'detailCertInscrit/:id', component: DetailCertificationAuxInscritComponent },
    { path: 'printInscritCer/:id', component: PrintInscritCerComponent },
    { path: 'attestationFormation/:id', component: AttestationFormationComponent },
    { path: 'cours/:id', component: FormUploadComponent },
    { path: 'coursCertification/:id', component: FormUploadCertificationComponent },
    { path: 'detailformation', component: DetailformationComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes), HttpClientModule],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map