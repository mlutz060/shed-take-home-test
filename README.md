# ShedRx Takehome Test

This repo is a template that is meant to serve as a base project where you can show us what you can do.

### Getting started

1. This app has been bootstrapped with Vite + React
2. This app has [TailwindCSS](https://tailwindcss.com) installed for styling (We will not be grading this based on styling. If Tailwind is not preferred, feel free to use any other styles)

To get started, clone this repo, run `npm install`, and then `npm run dev` to start. Upon starting, you should see the image below:

## Test instructions

### Objective

The objective of this project is to create a basic scheduling tool. This template provides a basic calendar view as a starting point. Your job is to make it functional. Here is the functionality we want you to add:

1. Display a form when the "Schedule Appointment" button is clicked.
2. The form should be able to create a new appointment and have the following fields:
   - Patient Name
   - Select a provider (use the predifined providers in the Calendar.jsx file)
   - Select a time (Times should be hour only (no 30 min or 15 min), and should be between the start and end time defined in Calendar.jsx)
3. Save the appointment.
4. Display the appointment on the calendar. For this step, you can use the scaffolding that we have set up, or display it a different way if you prefer (we aren't looking for a specific way, more so just that you can display it.)

#### Requirements

This is a transparent view of what we will/will not be looking at

- We won't be overly judgy on styling. Don't worry about spending a lot of time on this. We are more focussed on the functionality
- You don't need to save the appointment to a database. Saving to state, or any other easy way you prefer is fine. We are more so looking at the ability to create a form, submit, and use the data
- If the page is refreshed and the data lost, that is ok.
- Feel free to use react-hook-form, formik, or any other form library you prefer.
- Feel free to pull in other packages that you prefer. We are more focussed on your ability to complete the task, and realize that in the real world this often includes pulling in packages.
- We are not looking for a specific solution to anything here. Don't feel like you have to code this the perfect way. We want you to feel that you can show us your skills, and we will be looking more at that than a specific rubric!
- For the form, feel free to show it on the same page, in a modal, or in a seprate page. We will be looking for at the form functionality, not the architecture. We don't want the architecture to become cumbersome or take up the majority of time.

### Time

We want to be respectful of your time with this test. Do not spend more than 1 hour on this test. If you aren't able to complete it, try to get as far as you can. We ask that you stop at that 1 hour limit, regardless of progress.
