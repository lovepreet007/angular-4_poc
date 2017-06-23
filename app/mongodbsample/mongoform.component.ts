import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Students } from '../models/students.model'
import { Http } from '@angular/http'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({

    templateUrl: 'app/mongodbsample/mongoform.component.html'
})
export class MongoComponent implements OnInit {
    hasSubjectSelected: boolean;
    mongo: string = 'mongo data !!';
    model = new Students('', '', '', 0, 'default', '')
    modalUpdate = new Students('', '', '', 0, 'default', '')
    students: Students[];
    subjects: string[] = ['Punjabi', 'Hindi', 'English', 'Maths', 'Science', 'History'];
    onSubmit(ngForm: NgForm) {
        debugger;
        if (ngForm.valid) {
            //this.students.push(this.model);
            this.http.post('/SaveStudent', JSON.stringify(this.model)).subscribe(data => this.Response(data.json(), 'save'));
        }
    }
    validateSubjectSelected(value: string) {
        this.hasSubjectSelected = value === 'default' ? true : false;
    }
    public constructor(private http: Http, vcr: ViewContainerRef, public toastr: ToastsManager, ) {
        this.toastr.setRootViewContainerRef(vcr);
    }
    ngOnInit(): void {
        this.http.get('/GetStudents').subscribe(data => { this.Response(data.json(), ''); err => console.log('error') })
    }
    Response(data: any, flag: string) {
        if (flag === 'save') {
            this.students = data;
            this.toastr.success('You are awesome! Data is successfully saved', 'Success!');
        } else {  
            document.getElementById("close").click();        
            this.students = data;
        }

        //  this.toastr.success('You are awesome! Data is successfully saved', 'Success!');       

    }
    DeleteStudent(modelToDelete: Students): void {
        this.http.post('/DeleteStudent', JSON.stringify(modelToDelete)).subscribe(data => this.Response(data.json(), ''));
    }
    UpdateStudent(modelToUpdate: Students): void {      
        this.http.post('/UpdateStudent', JSON.stringify(modelToUpdate)).subscribe(data => this.Response(data.json(), ''));
    }
    AssignForModal(assignToModal: Students): void {
        debugger;
        this.modalUpdate = assignToModal;
    }
}