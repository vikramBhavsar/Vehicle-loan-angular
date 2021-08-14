import { Component, OnInit } from '@angular/core';
import { UploadDocumentService } from '../upload-document.service';

@Component({
  selector: 'app-uddetails',
  templateUrl: './uddetails.component.html',
  styleUrls: ['./uddetails.component.css']
})
export class UDDetailsComponent implements OnInit {

    // Variable to store shortLink from api response
    shortLink: string = "";
    loading: boolean = false; // Flag variable
    file?: File ; // Variable to store file

    shortLink1: string = "";
    file1?: File ; // Variable to store file

    shortLink2: string = "";
    file2?: File ; // Variable to store file

    shortLink3: string = "";
    file3?: File ; // Variable to store file
  
    // Inject service 
    constructor(private service: UploadDocumentService) { }
  
    ngOnInit(): void {
    }
  
    // On file Select
    onChange(event:any) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.service.upload(this.file).subscribe( 
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }

     // On file1 Select
     onChange1(event:any) {
        this.file1 = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload1() {
        this.loading = !this.loading;
        console.log(this.file1);
        this.service.upload(this.file1).subscribe( 
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink1 = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }

     // On file2 Select
     onChange2(event:any) {
        this.file2 = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload2() {
        this.loading = !this.loading;
        console.log(this.file2);
        this.service.upload(this.file2).subscribe( 
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink2 = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }

     // On file3 Select
     onChange3(event:any) {
        this.file3 = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload3() {
        this.loading = !this.loading;
        console.log(this.file3);
        this.service.upload(this.file3).subscribe( 
            (event: any) => {
                if (typeof (event) === 'object') {
  
                    // Short link via api response
                    this.shortLink3 = event.link;
  
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
}