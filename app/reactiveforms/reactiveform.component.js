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
// import { FormGroup, FormControl } from '@angular/forms';
var forms_1 = require("@angular/forms");
var customer_1 = require("../models/customer");
require("rxjs/add/operator/debounceTime");
var ReactiveFormComponent = (function () {
    // 1 .  customerForm.Controls.firstName.valid
    // 2 .  customerForm.get('firstName').valid
    // 3 .  firstName= new FormControl();
    //  ngOnInit(): void {
    //    this.customerForm = new FormGroup({
    //         firstName= this.firstName,
    //         ...
    //    })
    //  }
    function ReactiveFormComponent(fb) {
        this.fb = fb;
        this.customer = new customer_1.Customer();
        this.pageTitle = 'Reactive Forms';
        this.ValidationMessages = {
            pattern: 'Please enter a valid email address.',
            required: 'Please enter your email address.'
        };
    }
    Object.defineProperty(ReactiveFormComponent.prototype, "addresses", {
        get: function () {
            return this.customerForm.get('addresses');
        },
        enumerable: true,
        configurable: true
    });
    ReactiveFormComponent.prototype.addAddresses = function () {
        debugger;
        this.addresses.push(this.buildAddress());
    };
    ReactiveFormComponent.prototype.ngOnInit = function () {
        // // it is a lengthy way as number of fields keep on adding it become bigger so there is method to reduce it through formbuilder, formbuilder is a factory to produce formgroups and formcontrols
        // this.customerForm = new FormGroup({
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     sendCatalog: new FormControl(true)
        // });
        var _this = this;
        //here is the form builder
        this.customerForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            // lastName: { value: 'NA', disabled: true },
            lastName: ['', [forms_1.Validators.maxLength(8), forms_1.Validators.required]],
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', forms_1.Validators.required]
            }, { validator: this.emailMatcher }),
            phone: [''],
            ////for hardcoded  // rating: ['', this.rangeRating],
            rating: ['', this.rangeRating(1, 5)],
            notification: 'email',
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });
        this.customerForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotifications(value); });
        var emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) { return _this.setMessages(emailControl); });
    };
    ReactiveFormComponent.prototype.save = function () {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    };
    ReactiveFormComponent.prototype.setNotifications = function (notify) {
        var phoneControl = this.customerForm.get('phone');
        // if (notify === 'text') {
        //     phoneControl.setValidators(Validators.required)
        // } else {
        //     phoneControl.clearValidators()
        // }
        notify === 'text' ? phoneControl.setValidators(forms_1.Validators.required) : phoneControl.clearValidators();
        phoneControl.updateValueAndValidity();
    };
    ReactiveFormComponent.prototype.buildAddress = function () {
        return this.fb.group({
            addressType: '',
            street1: '',
            street2: '',
            state: '',
            zip: '',
            city: ''
        });
    };
    //// hardcoded limits and if not require parameter
    // rangeRating(c: AbstractControl): { [key: string]: boolean } | null {
    //     debugger;
    //     if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    //         return { 'range': true };
    //     };
    //     return null;
    // }
    //called factory function that wrap validatorFn and if require paramter
    ReactiveFormComponent.prototype.rangeRating = function (min, max) {
        return function (c) {
            if (c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            ;
            return null;
        };
    };
    ReactiveFormComponent.prototype.emailMatcher = function (c) {
        var emailControl = c.get('email');
        var emailConfirmControl = c.get('confirmEmail');
        if (emailControl.pristine || emailConfirmControl.pristine) {
            return null;
        }
        if (emailControl.value == emailConfirmControl.value) {
            return null;
        }
        return { 'match': true };
    };
    ReactiveFormComponent.prototype.setMessages = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.dirty || c.touched) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.ValidationMessages[key];
            }).join(' ');
        }
    };
    ReactiveFormComponent.prototype.populateTestData = function () {
        ////setting all fields values in forms
        // this.customerForm.setValue({
        //     firstName: 'Lovepreet',
        //     lastName: 'khera',
        //     email: 'preet@gmail.com',
        //     sendCatalog: false
        // });
        // setting subset of fields in forms
        this.customerForm.patchValue({
            firstName: 'Lovepreet',
            lastName: 'khera',
            email: 'preet@gmail.com',
        });
    };
    return ReactiveFormComponent;
}());
ReactiveFormComponent = __decorate([
    core_1.Component({
        selector: 'reactive',
        templateUrl: 'app/reactiveforms/reactiveform.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ReactiveFormComponent);
exports.ReactiveFormComponent = ReactiveFormComponent;
//# sourceMappingURL=reactiveform.component.js.map