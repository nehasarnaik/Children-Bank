import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/User';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit{
    users: any;
    dataSource: any;
    @ViewChild(MatPaginator) paginator = MatPaginator;
    @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
      this.dataSource.paginator = paginator;
    }
    
    constructor(private router:Router,private service:ServiceService){
      
    }
  
    ngOnInit(): void {
      this.service.GetUserDetails().subscribe(
        (res: any)=>{
          this.users=res;
          this.dataSource=new MatTableDataSource(this.users);
        });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    displayedColumns : string[]= ['accountnumber','name', 'fathername','mothername','parentnumber','parentemailid','adharcardnumber','dateofbirth','address','branchcode'];
  
  }