import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  users: User[];
  dataSource:any;
  paginator: any;
  // @ViewChild('paginator') paginator!: MatPaginator;
  
  constructor(private router:Router){
    this.users=[
      {
        accountnumber:"1",
        firstname: "a",
        middlename: "a",
        lastname: "a",
        fathername: "a",
        mothername: "a",
        parentnumber: "a",
        parentemailid: "a",
        adharcardnumber: "a",
        dateofbirth: "a",
        address: "a"
    },
    {
        accountnumber:"2",
        firstname: "b",
        middlename: "b",
        lastname: "b",
        fathername: "b",
        mothername: "b",
        parentnumber: "b",
        parentemailid: "b",
        adharcardnumber: "b",
        dateofbirth: "b",
        address: "b"
    },
    {
        accountnumber:"3",
        firstname: "c",
        middlename: "c",
        lastname: "c",
        fathername: "c",
        mothername: "c",
        parentnumber: "c",
        parentemailid: "c",
        adharcardnumber: "c",
        dateofbirth: "c",
        address: "c"
    }
  ]}

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(this.users);
    this.dataSource = new MatTableDataSource<User>(this.users);
    this.dataSource.paginator=this.paginator;
  }

  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }

  displayedColumns : string[]= ['accountnumber','firstname', 'middlename', 'lastname', 'fathername','mothername','parentnumber','parentemailid','adharcardnumber','dateofbirth','address'];

}
