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
var students_model_1 = require("../models/students.model");
var http_1 = require("@angular/http");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var MongoComponent = (function () {
    function MongoComponent(http, vcr, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.mongo = 'mongo data !!';
        this.model = new students_model_1.Students('', '', '', 0, 'default', '');
        this.modalUpdate = new students_model_1.Students('', '', '', 0, 'default', '');
        this.subjects = ['Punjabi', 'Hindi', 'English', 'Maths', 'Science', 'History'];
        this.toastr.setRootViewContainerRef(vcr);
    }
    MongoComponent.prototype.onSubmit = function (ngForm) {
        var _this = this;
        debugger;
        if (ngForm.valid) {
            //this.students.push(this.model);
            this.http.post('/SaveStudent', JSON.stringify(this.model)).subscribe(function (data) { return _this.Response(data.json(), 'save'); });
        }
    };
    MongoComponent.prototype.validateSubjectSelected = function (value) {
        this.hasSubjectSelected = value === 'default' ? true : false;
    };
    MongoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/GetStudents').subscribe(function (data) { _this.Response(data.json(), ''); (function (err) { return console.log('error'); }); });
    };
    MongoComponent.prototype.Response = function (data, flag) {
        if (flag === 'save') {
            this.students = data;
            this.toastr.success('You are awesome! Data is successfully saved', 'Success!');
        }
        else {
            document.getElementById("close").click();
            this.students = data;
        }
        //  this.toastr.success('You are awesome! Data is successfully saved', 'Success!');       
    };
    MongoComponent.prototype.DeleteStudent = function (modelToDelete) {
        var _this = this;
        this.http.post('/DeleteStudent', JSON.stringify(modelToDelete)).subscribe(function (data) { return _this.Response(data.json(), ''); });
    };
    MongoComponent.prototype.UpdateStudent = function (modelToUpdate) {
        var _this = this;
        this.http.post('/UpdateStudent', JSON.stringify(modelToUpdate)).subscribe(function (data) { return _this.Response(data.json(), ''); });
    };
    MongoComponent.prototype.AssignForModal = function (assignToModal) {
        debugger;
        this.modalUpdate = assignToModal;
    };
    return MongoComponent;
}());
MongoComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/mongodbsample/mongoform.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, core_1.ViewContainerRef, ng2_toastr_1.ToastsManager])
], MongoComponent);
exports.MongoComponent = MongoComponent;
//# sourceMappingURL=mongoform.component.js.map