import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Job } from './job.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  jobData = signal<Job[]>([]); // Signal for job data
  filters = signal<string[]>([]); // Signal for filters

  // Computed signal for filtered jobs
  filteredJobs = computed(() =>
    this.jobData().filter((job) =>
      this.filters().every((filter) =>
        [job.role, job.level, ...job.languages, ...job.tools].includes(filter)
      )
    )
  );

  constructor(private http: HttpClient) {
    this.loadJobs();
  }

  private loadJobs(): void {
    this.http.get<Job[]>('/assets/data.json').subscribe({
      next: (jobs) => this.jobData.set(jobs),
      error: (error) => console.error('Error fetching job data:', error),
    });
  }

  toggleBookmark(job: Job): void {
    job.bookmarked = !job.bookmarked;
    this.jobData.update((jobs) => [...jobs]);
  }

  addFilter(filter: string): void {
    this.filters.update((current) => [...current, filter]);
  }

  removeFilter(filter: string): void {
    this.filters.update((current) => current.filter((f) => f !== filter));
  }

  clearFilters(): void {
    this.filters.set([]);
  }
}
