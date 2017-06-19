
import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Customer } from '../models/customer'
import 'rxjs/add/operator/debounceTime'


@Component({
    selector: 'reactive',
    templateUrl: 'app/reactiveforms/reactiveform.component.html',

})
export class ReactiveFormComponent implements OnInit {

    // 1 .  customerForm.Controls.firstName.valid
    // 2 .  customerForm.get('firstName').valid

    // 3 .  firstName= new FormControl();
    //  ngOnInit(): void {
    //    this.customerForm = new FormGroup({
    //         firstName= this.firstName,
    //         ...
    //    })
    //  }
    constructor(private fb: FormBuilder) {

    }

    customerForm: FormGroup;
    customer: Customer = new Customer();
    pageTitle: string = 'Reactive Forms';
    emailMessage: string;
    private ValidationMessages = {
        pattern: 'Please enter a valid email address.',
        required: 'Please enter your email address.'
    }

    get addresses(): FormArray {
        return <FormArray>this.customerForm.get('addresses');
    }

    addAddresses(): void {
        debugger
        this.addresses.push(this.buildAddress());
    }
    ngOnInit(): void {

        // // it is a lengthy way as number of fields keep on adding it become bigger so there is method to reduce it through formbuilder, formbuilder is a factory to produce formgroups and formcontrols
        // this.customerForm = new FormGroup({
        //     firstName: new FormControl(),
        //     lastName: new FormControl(),
        //     email: new FormControl(),
        //     sendCatalog: new FormControl(true)
        // });

        //here is the form builder
        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            // lastName: { value: 'NA', disabled: true },
            lastName: ['', [Validators.maxLength(8), Validators.required]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', Validators.required]
            }, { validator: this.emailMatcher }),
            phone: [''],
            ////for hardcoded  // rating: ['', this.rangeRating],
            rating: ['', this.rangeRating(1, 5)],
            notification: 'email',
            sendCatalog: true,
            addresses: this.fb.array([this.buildAddress()])
        });

        this.customerForm.get('notification').valueChanges.subscribe(value => this.setNotifications(value));

        const emailControl = this.customerForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value => this.setMessages(emailControl));
    }




    save() {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }


    setNotifications(notify: string) {
        const phoneControl = this.customerForm.get('phone');
        // if (notify === 'text') {
        //     phoneControl.setValidators(Validators.required)
        // } else {
        //     phoneControl.clearValidators()
        // }

        notify === 'text' ? phoneControl.setValidators(Validators.required) : phoneControl.clearValidators();
        phoneControl.updateValueAndValidity();
    }

    buildAddress(): FormGroup {
        return this.fb.group({
            addressType: '',
            street1: '',
            street2: '',
            state: '',
            zip: '',
            city: ''
        })
    }

    //// hardcoded limits and if not require parameter
    // rangeRating(c: AbstractControl): { [key: string]: boolean } | null {
    //     debugger;
    //     if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    //         return { 'range': true };
    //     };
    //     return null;
    // }

    //called factory function that wrap validatorFn and if require paramter
    rangeRating(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {

            if (c.value != undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            };
            return null;
        }
    }

    emailMatcher(c: AbstractControl) {
        const emailControl = c.get('email');
        const emailConfirmControl = c.get('confirmEmail');
        if (emailControl.pristine || emailConfirmControl.pristine) {
            return null;
        }
        if (emailControl.value == emailConfirmControl.value) {
            return null;
        }
        return { 'match': true };
    }

    setMessages(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.dirty || c.touched) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.ValidationMessages[key]).join(' ');
        }
    }

    populateTestData() {
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
    }
}