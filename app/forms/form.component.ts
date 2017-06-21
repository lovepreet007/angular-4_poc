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
    styleUrls: ['app/assets/css/spinner.css']
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
    public gridviewSuccess: string = '';
    private divShow: boolean = false;



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
                // this.gridOptions.columnApi.autoSizeColumns(['employeeId', 'firstName', 'isFullTime', 'lastName', 'paymentType', 'primaryLanguage', 'action']);
                this.gridOptions.editType = 'fullRow';
                this.gridOptions.context = {
                    _this: this,
                    // _http: this.http,

                }
                // this.gridOptions.api.showLoadingOverlay()               
            },
            enableFilter: true,
            singleClickEdit: true,
            stopEditingWhenGridLosesFocus: true,
            enableSorting: true,
            // overlayLoadingTemplate: '<div *ngIf="loadingSpinner" class="spinner"></div>',
            overlayLoadingTemplate: '<div *ngIf="loadingSpinner" class="fa fa-spinner fa-pulse fa-3x fa-fw"></div>',
            overlayNoRowsTemplate: '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">This is a custom \'no rows\' overlay</span>',

            // set in grid options


        };
        this.columnDefs = [
            { headerName: "Employee ID", field: "employeeId", suppressNavigable: true },
            { headerName: "First Name", field: "firstName", editable: true },
            { headerName: "Is FullTime", field: "isFullTime", editable: true },
            { headerName: "Last Name", field: "lastName", editable: true },
            { headerName: "Payment Type", field: "paymentType", editable: true },
            { headerName: "Primary Language", field: "primaryLanguage", editable: true },
            {
                headerName: "Action", field: "action", editable: false,
                cellRenderer: this.buttonCellRenderer

            }
        ];
        this.GridViewEmplyeeDetails();
        // this.rowData = [
        //     { make: "Toyota", model: "Celica", price: 35000 },
        //     { make: "Ford", model: "Mondeo", price: 32000 },
        //     { make: "Porsche", model: "Boxter", price: 72000 }
        // ];
    }
    buttonCellRenderer = function (params) {
        var button = document.createElement('button');
        button.innerHTML = 'Delete';

        button.addEventListener('click', function () {
            console.log(params.data);
            // document.getElementById('output').innerHTML = "You clicked on id " + params.data.id + " with name " + params.data.name      
            params.context._this.http.post('/DeleteRow', JSON.stringify(params.data)).subscribe(data => {
                console.log('success');
                params.context._this.divShow = true;
                params.context._this.gridviewSuccess = 'Deleted Successfully !!';
                params.context._this.getEmployeeDetails(data.json())
            },
                err => console.log('error', err)
            );
        });
        return button;
    }
    hel() {
        alert('hel deleted');
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


