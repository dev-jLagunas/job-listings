# Job Listings Filtering - Intermediate Frontend Mentor Challenge

## Description

This project is a responsive web application built with Angular 17, SCSS, and TypeScript. It allows users to filter job listings based on keywords and bookmark jobs they are interested in.

## Features

- **Job Filtering**: Users can filter job listings based on keywords. This feature was implemented using Angular's powerful data binding and event handling capabilities.
- **Job Bookmarking**: Users can bookmark jobs they are interested in. This state is maintained across user sessions.
- **Responsive Design**: The application is fully responsive and provides an optimal user experience on all screen sizes.
- **Data Handling**: The application works with a data.json file, using Angular's HttpClient to fetch and manipulate the data.

## Challenges and Learnings

- **Data Expansion**: As an extra challenge, I added more job data to the data.json file. This allowed me to work with a larger dataset and further improve the application's filtering functionality.
- **SVG Manipulation**: This was my first time directly manipulating SVGs. The logos I used for the job listings were not in the right format, so I had to manipulate them directly in VS Code. This was a brand new learning experience for me and helped me understand the intricacies of working with SVGs.

## Technologies Used

-Angular 17
-SCSS
-TypeScript

This project was a great opportunity to deepen my understanding of Angular and TypeScript, and to learn new skills such as SVG manipulation. I look forward to applying these learnings to future projects.

## Screenshots

### Desktop View

![Desktop view](https://github.com/dev-jLagunas/job-listings/blob/main/src/assets/images/jobs-desktop.png)

## Getting Started

### Prerequisites

### Prerequisites

- [Node.js and npm](https://nodejs.org/) installed on your machine.
- [Angular CLI](https://angular.io/cli) installed globally on your machine.
- Basic knowledge of HTML, SCSS, and TypeScript.
- Familiarity with Angular framework and its core principles..

### Installation

### Installation

1. Clone this repository to your local machine or download the files as a zip.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Run `ng serve` to start the Angular development server. By default, this will start the server on `http://localhost:4200/`.

## Usage

## Usage

This project is a job listing web application with some interactive features. Users can filter job listings based on keywords and bookmark jobs they are interested in.

To use the application:

1. Start the development server by running `ng serve` in the project directory. This will start the server on `http://localhost:4200/` by default.
2. Open your web browser and navigate to `http://localhost:4200/`.
3. Use the keyword buttons to filter job listings based on them.
4. Click the bookmark button on a job listing to bookmark the job. The bookmarked jobs will be highlighted.

Although the project is mainly viewed as a static HTML and SCSS project, it does have some interactivity thanks to Angular's powerful data binding and event handling capabilities.

If you want to build the project for production, run `ng build`. This will create a `dist` directory with the built files.

## Contributing

This project is a simple practice project and is not currently accepting contributions.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Contact

For any questions or concerns, please contact Juan Lagunas at dev.jlagunas@gmail.com.
