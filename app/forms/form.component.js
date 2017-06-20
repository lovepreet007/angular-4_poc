"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_model_1 = require("../models/employee.model");
var form_poster_service_1 = require("../services/form-poster.service");
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
// import { ToasterService, ToasterConfig } from 'angular2-toaster';
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var FormComponent = (function () {
    function FormComponent(formPoster, vcr, http, toastr, _zone, _changeDetectorRef) {
        this.formPoster = formPoster;
        this.http = http;
        this.toastr = toastr;
        this._zone = _zone;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = 'Form Page';
        this.language = ['Punjabi', 'Hindi', 'English', 'Other'];
        this.model = new employee_model_1.Employee('', '', true, '', 'default');
        this.ticks = 0;
        this.timerStatus = false;
        this.alive = true;
        this.loadingSpinner = false;
        // constructor(private formPoster: FormPoster, private http: Http, private _zone: NgZone, private _changeDetectorRef: ChangeDetectorRef) {
        // this.formPoster.getAllLanguages().subscribe(lang=>console.log('languages',lang));
        this.toastr.setRootViewContainerRef(vcr);
        this.initializingGridview();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.loadingSpinner = true;
        this.getTempInfo();
    };
    FormComponent.prototype.getTempInfo = function () {
        var _this = this;
        // this.formPoster.getTemporaryEmployeeForm().subscribe(data => { this.getTemp(data) },
        //     err => console.log('error', err)
        // );
        this.sub = this.http.get('/GetTempEmployee').subscribe(function (data) { _this.getTemp(data.json()); }, function (err) { return console.log('error', err); });
    };
    FormComponent.prototype.getTemp = function (data) {
        if (data != null) {
            this.model = data;
        }
        else {
            this.model = new employee_model_1.Employee('', '', true, '', 'default');
        }
    };
    FormComponent.prototype.getEmployeeDetails = function (data) {
        if (data != null) {
            this.rowData = data;
        }
        else {
            this.rowData = [];
        }
    };
    FormComponent.prototype.timerFunction = function (value) {
        var _this = this;
        if (!this.timerStatus) {
            this.timerStatus = true;
            var timer = Rx_1.Observable.timer(1000, 1000);
            // subscribing to a observable returns a subscription object
            this.sub = timer.subscribe(function (t) { return _this.tickerFunc(t); });
        }
        else {
            if (value === 'alreadyrunning') {
                this.ngOnDestroy();
                var timer = Rx_1.Observable.timer(0, 1000);
                // subscribing to a observable returns a subscription object
                this.sub = timer.subscribe(function (t) { return _this.tickerFunc(t); });
            }
        }
    };
    FormComponent.prototype.tickerFunc = function (tick) {
        var _this = this;
        console.log(this);
        this.ticks = tick;
        if (this.ticks == 20) {
            this.timerFunction('alreadyrunning');
            // this.formPoster.postTemporaryEmployeeForm(this.model).subscribe(data => console.log('Temporary data success :  ', data),
            //     err => console.log('error', err)
            // );
            this.http.post('/SaveTempEmployee', JSON.stringify(this.model)).takeWhile(function () { return _this.alive; }).subscribe(function (data) { return _this.EmployeeSave(data, 'temp'); }, function (err) { return console.log('error', err); });
        }
    };
    FormComponent.prototype.ngOnDestroy = function () {
        console.log("Destroy timer");
        // unsubscribe here
        this.sub.unsubscribe();
        this.alive = false;
    };
    FormComponent.prototype.initializingGridview = function () {
        var _this = this;
        this.gridOptions = {
            onGridReady: function () {
                _this.gridOptions.api.sizeColumnsToFit();
                // this.gridOptions.columnApi.autoSizeColumns(['employeeId', 'firstName', 'isFullTime', 'lastName', 'paymentType', 'primaryLanguage', 'action']);
                _this.gridOptions.editType = 'fullRow';
                // this.gridOptions.api.showLoadingOverlay()
            },
            enableFilter: true,
            singleClickEdit: true,
            stopEditingWhenGridLosesFocus: true,
            enableSorting: true,
            // overlayLoadingTemplate: '<div *ngIf="loadingSpinner" class="spinner"></div>',
            overlayLoadingTemplate: '<div *ngIf="loadingSpinner" class="fa fa-spinner fa-pulse fa-3x fa-fw"></div>',
            overlayNoRowsTemplate: '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">This is a custom \'no rows\' overlay</span>'
        };
        this.columnDefs = [
            { headerName: "Employee ID", field: "employeeId", suppressNavigable: true },
            { headerName: "First Name", field: "firstName", editable: true },
            { headerName: "Is FullTime", field: "isFullTime", editable: true },
            { headerName: "Last Name", field: "lastName", editable: true },
            { headerName: "Payment Type", field: "paymentType", editable: true },
            { headerName: "Primary Language", field: "primaryLanguage", editable: true },
            { headerName: "Action", field: "action" }
        ];
        this.GridViewEmplyeeDetails();
        // this.rowData = [
        //     { make: "Toyota", model: "Celica", price: 35000 },
        //     { make: "Ford", model: "Mondeo", price: 32000 },
        //     { make: "Porsche", model: "Boxter", price: 72000 }
        // ];
    };
    FormComponent.prototype.GridViewEmplyeeDetails = function () {
        var _this = this;
        this.http.get('/GetEmployeeDetails').subscribe(function (data) { _this.getEmployeeDetails(data.json()); }, function (err) { return console.log('error', err); });
    };
    FormComponent.prototype.firstNameToUpperCase = function (value) {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            this.model.firstName = value;
        }
    };
    FormComponent.prototype.validatePrimaryLanguage = function (value) {
        this.hasPrimaryLanguageSelected = value === 'default' ? true : false;
    };
    FormComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if (this.hasPrimaryLanguageSelected)
            return;
        // this.formPoster.postEmployeeForm(this.model).subscribe(data => { this.permanentEmployeeSave(data) },
        //     err => console.log('error', err)
        // );
        this.http.post('/SaveEmployee', JSON.stringify(this.model)).subscribe(function (data) { _this.EmployeeSave(data, 'permanent'); _this.GridViewEmplyeeDetails(); }, function (err) { return console.log('error', err); });
    };
    FormComponent.prototype.EmployeeSave = function (data, check) {
        if (check === 'permanent') {
            console.log('success', data);
            this.timerStatus = false;
            this.ticks = 0;
            this.toastr.success('You are awesome! Data is successfully saved', 'Success!');
            this.ngOnDestroy();
        }
        else {
            this.timerStatus = false;
            this.ticks = 0;
            this.ngOnDestroy();
        }
    };
    FormComponent.prototype.onPopState = function (event) {
        console.log('Back button pressed');
        this.ngOnDestroy();
    };
    return FormComponent;
}());
__decorate([
    core_1.HostListener('window:popstate', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormComponent.prototype, "onPopState", null);
FormComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/forms/form.component.html',
        styleUrls: ['app/assets/css/spinner.css']
    }),
    __metadata("design:paramtypes", [form_poster_service_1.FormPoster, core_1.ViewContainerRef, http_1.Http, ng2_toastr_1.ToastsManager, core_1.NgZone, core_1.ChangeDetectorRef])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map