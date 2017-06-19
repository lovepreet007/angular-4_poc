import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef, ViewContainerRef, HostListener } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs/Rx';
import { Http } from "@angular/http";
import { GridOptions } from "../../node_modules/ag-grid/main";


// import { ToasterService, ToasterConfig } from 'angular2-toaster';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    templateUrl: 'app/forms/form.component.html',
    // styleUrls:['app/assets/css/agency.css']
})

export class FormComponent implements OnInit, OnDestroy {

    title: string = 'Form Page';
    language: string[] = ['Punjabi', 'Hindi', 'English', 'Other'];
    model = new Employee('', '', true, '', 'default');
    hasPrimaryLanguageSelected: boolean;
    ticks = 0;
    timerStatus: boolean = false;
    private alive: boolean = true;
    public gridOptions: GridOptions;
    public rowData: Employee[];
    public columnDefs: any[];



    // timer: any;
    // Subscription object
    private sub: Subscription;


    ngOnInit() {
        this.getTempInfo();
    }
    getTempInfo() {
        // this.formPoster.getTemporaryEmployeeForm().subscribe(data => { this.getTemp(data) },
        //     err => console.log('error', err)
        // );
        this.sub = this.http.get('/GetTempEmployee').subscribe(data => { this.getTemp(data.json()) },
            err => console.log('error', err)
        );
    }
    getTemp(data: Employee) {
        if (data != null) {
            this.model = data;
        } else {
            this.model = new Employee('', '', true, '', 'default');
        }
    }
    getEmployeeDetails(data: Employee[]) {
        debugger;
        if (data != null) {
            this.rowData = data;
        } else {
            this.rowData = [];
        }
    }
    timerFunction(value: any) {
        if (!this.timerStatus) {
            this.timerStatus = true;
            var timer = Observable.timer(1000, 1000);
            // subscribing to a observable returns a subscription object
            this.sub = timer.subscribe(t => this.tickerFunc(t));
        } else {
            if (value === 'alreadyrunning') {
                this.ngOnDestroy();
                var timer = Observable.timer(0, 1000);
                // subscribing to a observable returns a subscription object
                this.sub = timer.subscribe(t => this.tickerFunc(t));
            }
        }
    }
    tickerFunc(tick: any) {
        console.log(this);
        this.ticks = tick
        if (this.ticks == 20) {

            this.timerFunction('alreadyrunning');
            // this.formPoster.postTemporaryEmployeeForm(this.model).subscribe(data => console.log('Temporary data success :  ', data),
            //     err => console.log('error', err)
            // );
            this.http.post('/SaveTempEmployee', JSON.stringify(this.model)).takeWhile(() => this.alive).subscribe(data => this.EmployeeSave(data, 'temp'),
                err => console.log('error', err)
            );
        }
    }
    ngOnDestroy() {

        console.log("Destroy timer");
        // unsubscribe here
        this.sub.unsubscribe();
        this.alive = false;

    }
    constructor(private formPoster: FormPoster, vcr: ViewContainerRef, private http: Http, public toastr: ToastsManager, private _zone: NgZone, private _changeDetectorRef: ChangeDetectorRef) {
        // constructor(private formPoster: FormPoster, private http: Http, private _zone: NgZone, private _changeDetectorRef: ChangeDetectorRef) {
        // this.formPoster.getAllLanguages().subscribe(lang=>console.log('languages',lang));
        this.toastr.setRootViewContainerRef(vcr);
        this.initializingGridview();

    }

    initializingGridview() {
        this.gridOptions = {
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            }
        };
        this.columnDefs = [
            { headerName: "Employee ID", field: "employeeId" },
            { headerName: "First Name", field: "firstName" },
            { headerName: "Is FullTime", field: "isFullTime" },
            { headerName: "Last Name", field: "lastName" },
            { headerName: "Payment Type", field: "paymentType" },
            { headerName: "Primary Language", field: "primaryLanguage" }
        ];
        this.GridViewEmplyeeDetails();
        // this.rowData = [
        //     { make: "Toyota", model: "Celica", price: 35000 },
        //     { make: "Ford", model: "Mondeo", price: 32000 },
        //     { make: "Porsche", model: "Boxter", price: 72000 }
        // ];
    }
    GridViewEmplyeeDetails() {
        this.http.get('/GetEmployeeDetails').subscribe(data => { this.getEmployeeDetails(data.json()) },
            err => console.log('error', err)
        );
    }
    firstNameToUpperCase(value: string) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

    validatePrimaryLanguage(value: string) {
        this.hasPrimaryLanguageSelected = value === 'default' ? true : false;
    }
    onSubmit(ngForm: NgForm) {
        this.validatePrimaryLanguage(this.model.primaryLanguage)
        if (this.hasPrimaryLanguageSelected)
            return;

        // this.formPoster.postEmployeeForm(this.model).subscribe(data => { this.permanentEmployeeSave(data) },
        //     err => console.log('error', err)
        // );
        this.http.post('/SaveEmployee', JSON.stringify(this.model)).subscribe(data => { this.EmployeeSave(data, 'permanent'); this.GridViewEmplyeeDetails(); },
            err => console.log('error', err)
        );
    }
    EmployeeSave(data: any, check: string) {

        if (check === 'permanent') {
            console.log('success', data)
            this.timerStatus = false;
            this.ticks = 0;
            this.toastr.success('You are awesome! Data is successfully saved', 'Success!');
            this.ngOnDestroy();
        } else {

            this.timerStatus = false;
            this.ticks = 0;
            this.ngOnDestroy();
        }

    }

    @HostListener('window:popstate', ['$event'])
    onPopState(event: any) {
        console.log('Back button pressed');
        this.ngOnDestroy();
    }

    // we pass an empty gridOptions in, so we can grab the api out




}


