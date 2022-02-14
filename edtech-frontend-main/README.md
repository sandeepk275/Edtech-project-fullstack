# Course Catalog

This application is a front-end project which is designed for students learning **React.js** course via **upGrad** platform.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Types of Roles](#types-of-roles)\
   i. [User](#user)\
   ii. [Admin](#admin)
4. [Workflows](#workflows)\
   i. [User Workflow](#user-workflow)\
   ii. [Admin Workflow](#admin-workflow)
5. [Pages](#pages)\
   i. [Onboard](#onboard)\
   ii. [Home](#home)\
   iii. [Course Details](#course-details)\
   iv. [Checkout](#checkout)\
   v. [Summary](#summary)\
   vi. [Course List](#course-list)\
   vii. [Add Course](#add-course)\
   viii. [Edit Course](#edit-course)
6. [Bonus Features](#bonus-features)
7. [Bootstrapping](#bootstrapping)

## Overview

Course Catalog application lets a _user_ browse different online courses, view the details of each course, select a course and enrol in it. On the other hand, this application allows an _admin_ to view, add, edit and delete courses. The type of user is determined by the login credentials.

## Installation

1. Run the backend code corresponding to this application.\
   (Contact your program's Point of Contact from the upGrad team to get the backend code.)
2. Clone the [repository](https://github.com/srishti/edtech-frontend)\* using Git on your machine. Alternatively, download the `.zip` file of current repository on your machine and then unzip the downloaded zipped file.
3. Go inside the application's directory on your local machine.
4. Install all packages using the following command:\
   `npm i`
5. Run the application using the following command:\
   `npm start`

The application will be run in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

_\*Note that this repository only contains the frontend code of the Course Catalog application._

## Types of Roles

### User

A user is able to view all published courses, search for a course based on its title or category, select a course, enter address, and place an order for a selected course.

### Admin

An admin is able to view all published and non-published courses, add a course, edit a course, convert a non-published course to a published course, and delete a course.

## Workflows

### [User](#user) Workflow

1. Sign yourself up for the application on the [onboard](#onboard) page. All the details entered by the user will be validated on the client-side against rules of validation defined in the application.
2. Once signed up successfully, login to the application on the onboard page.
3. When a user is successfully logged in, they will be redirected to [home](#home) page where they can see the overview of all published courses.
4. Click on any course on home page to go to the [course details](#course-details) page which shows more details about the selected course.
5. Click on 'Enrol Me' button on the details page to navigate to the checkout page.
6. Enter address details on the [checkout](#checkout) page where the user wants the course material to be delivered.
7. Click on 'Show Summary' button on the checkout page to go to the [summary](#summary) page where the details of selected course and entered address is shown.
8. Click on 'Place Order' button on the summary page to place an order for the selected course.
9. On successful placement of order, the user is redirected to the home page.

### [Admin](#admin) Workflow

1. Login to the application as an _admin\*_.
2. Land on the [course list](#course-list) page to see the list of all published and non-published courses available in the database.
3. Click on 'Add Course' button to go to the [add course](#add-course) page where all the details about a new course to be added in the database are captured.

   Click on 'Add' button at the bottom of add course page to add the course in the database with the filled-in details. Once a course is successfully added, the admin will be redirected to the list page.

4. Click on pencil-shaped 'edit' icon corresponding to a course on the list page to go to the [edit course](#edit-course) page where the admin can edit the details of a course.

   Click on 'Edit' button on the bottom of edit course page to edit detail(s) of the selected course. Once the course is successfully edited, the admin will be redirected to the list page.

5. Click on bin-shaped 'delete' icon corresponding to a course on the list page to delete a course from the database.

_\*Admin already exists in the corresponding backend code of this application with the required credentials. The frontend does not allow you to sign up as an admin._

## Pages

### Onboard

- A user can sign up in to the application by entering details including first name, last name, email and password. On successful signup, the user is redirected to the login tab on the same page.
- A registered user/admin can login to the application by providing credentials including email and password. If the role type is [user](#user), then on successful login, the user is taken to the [home](#home) page. If the role type is [admin](#admin), then on successful login, the admin is taken to the [course list](#course-list) page.
- A user/admin can view the upGrad logo in the header.
- A user/admin can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

### Home

- A user can view a maximum of 5 new courses in a horizontal grid view where each grid displays the course thumbnail and its title.
- A user can view all the published courses as cards where each card contains an overview of the course showing course thumbnail, title, instructor, rating, duration, original price, and discounted price.
- A user can search for a course using its title. Any course whose title contains the entered search input as a substring is returned back in the search results.
- A user can view all the courses corresponding to a category selected from the header.
- A user can logout of the application from the header.
- A user can click on a course card from the 'New Courses' section or from the 'Published Courses' section to view more details about the course on the [course details](#course-details) page.
- A user can view the footer for more details about copyright information, social media handles of upGrad, and developer of the application.

### Course Details

- A user can view all the details about a course including course title, instructor, duration, published date, category, original price, discounted price, preview on YouTube, skills covered, and chapters.
- A user can click on the 'Enrol Me' button to enrol in the currently selected course.
- A user can go back to the home page by clicking on the upGrad logo inside header.
- A user can logout of the application from the header.
- A user can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

### Checkout

- A user can enter their address details where the course material is to be delivered.
- All the details entered by the user will be validated on the client-side against rules of validation defined in the application.
- A user can go back to the [home](#home) page by clicking on the upGrad logo inside header.
- A user can click on 'Show Summary' button to go to the [summary](#summary) page.
- A user can logout of the application from the header.
- A user can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

### Summary

- A user can view the summary of selected course (title, instructor and final/discounted price) and complete formatted address (as entered in the [checkout](#checkout) page).
- A user can click on 'Place Order' button to place an order for the selected course.
- Once the order is successfully placed, the user is redirected to the [home](#home) page.
- A user can logout of the application from the header.
- A user can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

### Course List

- An admin can view the list of all published as well as non-published courses present in the database. Corresponding to each course, the details including course ID, category, title, instructor, duration, published status, final/discounted price and actions block is visible.
- An admin can view only published courses if the 'Published Only' filter is toggled on. If the 'Published Only' filter is toggled off, published as well as non-published courses are displayed.
- An admin can click on 'Add Course' button to add a course in the database using the [add course](#add-course) page.
- An admin can click on pencil-shaped 'edit' icon corresponding to a course to edit the course detail(s) using the [edit course](#edit-course) page.
- An admin can click on bin-shaped 'delete' icon corresponding to a course to delete the course from the database.
- An admin can logout of the application from the header.
- An admin can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

### Add Course

- An admin can add details of a course to be added. The details consist of course title, description, category, instructor, associated skills, chapters, price before discount and price after discount, duration, popularity, image URL, video URL, and published status.
- An admin can click on 'Add' button to add the course with the entered details in the database and be redirected to the [course list](#course-list) page on course being added successfully.
- An admin can logout of the application from the header.
- An admin can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

### Edit Course

- An admin can edit any or all of the details of the selected course including course title, description, category, instructor, associated skills, chapters, price before discount and price after discount, duration, popularity, image URL, video URL, and published status.
- All the originally saved details of the selected course will be pre-populated in respective fields inside the course form displayed on this page. This makes it convenient for the admin to edit only required detail(s) and not enter all the redundant details again.
- An admin can convert a non-published course to a published course by toggling on the published status.
- An admin can click on 'Edit' button to edit the course with the entered details in the database and be redirected to the [course list](#course-list) page on course being edited successfully.
- An admin can logout of the application from the header.
- An admin can view the footer for more details about copyright information, social media handles of upGrad, and the developer of the application.

## Bonus Features

- **Responsive Application**\
   The entire application is responsive to devices of varied dimensions.

- **Loader**\
   During asynchronous calls such as API requests, a loading indicator is shown. This loading indicator disappears when the API request is complete (either successful or a failure).

- **Common Error Handling Mechanism for APIs**\
   The entire application shares a common error handling mechanism when dealing with API requests and responses. If an error is encountered while sending a request, receiving a response or with a response received, a snackbar (or toast) is shown on the bottom left of the screen, which contains the error message notifying the user/admin about what went wrong.

- **Client-side Form Validation**\
   Wherever there's an input field inside a form accepting inputs from the user/admin, the entered input is validated on the client-side against the validation rules defined in the application. For example, some fields are required to be mandatorily filled in, an email must be in the proper format, the password must meet the defined criteria, the pincode/phone number must be numerical and of certain length, the video URL of a course should be a valid YouTube URL, etc.

- **Protected Routes**\
  The authenticated routes are protected on the client-side. This implies that a _user_ will not be able to view the authenticated routes of _admin_ ([course list](#course-list) page, [add course](#add-course) page and [edit course](#edit-course) page) . Similarly, an _admin_ will not be able to view the authenticated routes of a _user_ ([home](#home) page, [course details](#course-details) page, [checkout](#checkout) page, [summary](#summary) page). If the URL is known to an unauthorized user and they try to enter the restricted URL, they will be redirected to the [onboard](#onboard) page where they will have an option to either sign up as a _user_ or log in as a _user/admin_.

- **[404] Page Not Found**\
  If a user/admin tries to access a route which does not match any of the defined routes in the application, they will be taken to a '404: Not Found' page where they will be notified that the entered URL does not exist in the application.

- **Client-Side Data Persistence**\
  The login details of a user/admin is persisted in the client-side until the user/admin logs out from the application or the browser's local storage is cleared. This helps a user/admin to smoothly navigate to different pages in application as well as view the application even after the window or tab is closed, thereby, not requiring the user/admin to login each time the application is viewed.

  For similar reasons, the selected course and address of a user are also persisted in the application.

## Bootstrapping

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
