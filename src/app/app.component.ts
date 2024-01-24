import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

// Structure of job objest in data.json
interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  bookmarked: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  jobData: Job[] = [];
  filters: string[] = [];
  filteredJobs: Job[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Job[]>('/assets/data.json').subscribe((data: Job[]) => {
      this.jobData = data;
      this.filteredJobs = [...this.jobData];
    });
  }

  toggleBookmark(job: any) {
    job.bookmarked = !job.bookmarked;
  }

  addFilter(filter: string) {
    this.filters.push(filter);
    this.filterJobs();
  }

  removeFilter(filter: string) {
    this.filters = this.filters.filter((f) => f !== filter);
    this.filterJobs();
  }

  filterJobs() {
    this.filteredJobs = this.jobData.filter((job: Job) =>
      this.filters.every(
        (filter) =>
          job.role === filter ||
          job.level === filter ||
          job.languages.includes(filter) ||
          job.tools.includes(filter)
      )
    );
  }

  clearFilters() {
    this.filters = [];
    this.filteredJobs = [...this.jobData];
  }
}
