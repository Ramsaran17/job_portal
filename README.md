# Job Portal

A full-stack job portal where job seekers can find and apply for jobs, while recruiters can post and manage job openings.

## Features

- User authentication and account management using Clerk
- Search and browse jobs by title and location
- View detailed job information and apply for jobs
- Upload and manage resumes
- Track applied jobs and application status
- Recruiter dashboard for posting and managing jobs
- Manage job applications and update their status

## Tech Stack

**Frontend:** React.js, Tailwind CSS, Axios, React Router

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** Clerk

**Cloud Services:** Cloudinary, Vercel

## Project Structure

```text
job_portal/
├── client/        # React frontend
├── server/        # Node.js + Express backend
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Clerk
- Cloudinary

### Installation

Clone the repository:

```bash
git clone https://github.com/Ramsaran17/job_portal.git
cd job_portal
```

Install dependencies:

```bash
cd client
npm install

cd ../server
npm install
```

Create the required `.env` files in the `client` and `server` folders and add your environment variables.

### Run Locally

Start the backend:

```bash
cd server
npm run server
```

Start the frontend in a separate terminal:

```bash
cd client
npm run dev
```

The application will be available at the local Vite URL shown in the terminal.
