import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, of } from 'rxjs';
import { Job } from './job.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  jobData$: Observable<Job[]> | undefined;
  filters: string[] = [];
  filteredJobs$: Observable<Job[]> | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.jobData$ = this.http.get<Job[]>('/assets/data.json').pipe(
      catchError((error) => {
        console.error('Error fetching job data:', error);
        return throwError(
          () => new Error('Error fetching job data. Please try again later.')
        );
      })
    );

    this.filterJobs();
  }

  toggleBookmark(job: Job) {
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
    if (this.jobData$) {
      this.filteredJobs$ = this.jobData$.pipe(
        map((jobs: Job[]) => {
          return jobs.filter((job: Job) =>
            this.filters.every(
              (filter) =>
                job.role === filter ||
                job.level === filter ||
                job.languages.includes(filter) ||
                job.tools.includes(filter)
            )
          );
        })
      );
    }
  }

  clearFilters(): void {
    this.filters = [];
    this.filteredJobs$ = this.jobData$;
  }
}
