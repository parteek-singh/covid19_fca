import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/service/dataset.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tweetData: any;
  fakeTweetData: any;
  sadSentimentData: any;
  botGenrated: any;
  loading: boolean = true;
  constructor(private datasetservice: DatasetService) { }

  ngOnInit(): void {
    let data = this.datasetservice.getHeaderData();

    this.tweetData = {
      avatar: "notifications_active",
      title: "Total Tweets",
      value: data[0].value
    }

    this.botGenrated = {
      avatar: "poll",
      title: "Bot generated",
      value: data[1].value
    }

    this.fakeTweetData = {
      avatar: "poll",
      title: "False Claims",
      value: data[2].value
    }

    this.sadSentimentData = {
      avatar: "sentiment_very_dissatisfied",
      title: "Sad Emotion",
      value: data[3].value
    }

    this.loading = false;
    // this.datasetservice.getHeaders().subscribe(data => {
    //   this.tweetData = data[0];
    //   this.botGenrated = data[1];
    //   this.fakeTweetData = data[2];
    //   this.sadSentimentData = data[3];
    //   this.loading = false;
    // },
    //   error => {
    //     console.log(error);
    //   });
  }
}
