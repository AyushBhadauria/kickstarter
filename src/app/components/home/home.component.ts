import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../../service/pagerService';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   loading: boolean;
   posts:Post[]=[];
   page:any
   pager: any = {};
   pagedItems: any[];
   query:string;
  constructor(private route:ActivatedRoute,private dataService:DataService,private pagerService: PagerService) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params=>{
  this.query=params.get('query');
  })
  
   if(!this.query){
      this.loading=true
      this.dataService.getPosts().subscribe(data=>{
      this.posts=data
      this.setPage(1);
      this.loading=false
    })
   }
else{ 
  this.loading=true
  this.dataService.getPosts().subscribe(data=>{
    this.posts=data
    this.posts=this.query ?
    this.posts.filter(p=>p.title.toLowerCase().includes(this.query.toLowerCase())):
    null
    this.setPage(1);
   this.loading=false
})
  
  }
}

setPage(page: number) {
  if (page < 1 || page > this.pager.totalPages) {
      return;
  }
  this.pager = this.pagerService.getPager(this.posts.length, page);
  this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
}