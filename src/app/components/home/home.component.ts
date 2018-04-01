import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean;
   posts:Post[]=[]
  constructor(private route:ActivatedRoute,private dataService:DataService) { }
  query : string;
  ngOnInit() {

    this.loading=true
      this.dataService.getPosts().subscribe(data=>{
      this.posts=data
      this.loading=false
    })
    this.route.paramMap.subscribe(params=>{
      this.query=params.get('query');
     this.posts=this.posts.filter(p=>p.title.toLowerCase().includes(this.query.toLowerCase()))
    })
  }

}
