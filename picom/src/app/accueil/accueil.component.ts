import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';
import { AuthentificationService } from '../Service/authentification.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

    currentUser: Utilisateur |null;

    loginForm :FormGroup;
    motDePasse: FormControl;
    email: FormControl;

    loading = false;
    submitted = false;
    returnUrl: string= "";


    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentificationService: AuthentificationService,
    ) {
        // redirect to home if already logged in
        // if (this.authentificationService.currentUserValue) {
        //     this.router.navigate(['/annonces-liste']);
        // }

        this.currentUser = this.authentificationService.currentUserValue();

        this.loginForm = fb.group({
          email: ['', Validators.required],
          motDepasse: ['', Validators.required]
        });

        this.email = this.loginForm.controls['email'] as FormControl;
        this.motDePasse = this.loginForm.controls['motDepasse'] as FormControl;


    }

    ngOnInit() {

        // get return url from route parameters or default to '/'

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get fields() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
         // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authentificationService.login(this.fields['email'].value, this.fields['motDePasse'].value)
            .pipe(first())
            .subscribe(
                data => {
                console.log(data);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });


    }


}
