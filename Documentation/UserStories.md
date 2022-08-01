#### User Stories

<table>
<tr>
<th>User Stories</th>
<th>Details</th>
<th>Tests</th>
</tr>
<tr>
<td>As a student I want to be able to provide my student information when registering for projects</td>
<td>Details will include student id, name and course details</td>
<td>Input name, student id and course details into provided boxes. The boxes should be required and not allow submission if they are not filled out</td>
</tr>
<tr>
<td>As a student I want to be able to specify if my course is in cyber security and if my project is in cyber security</td>
<td>Check boxes will be given to specify if the project or course is in cyber security</td>
<td>Check boxes to confirm that they are in cyber security. Leave boxes empty. Both scenarios should still allow students to submit the form</td>
</tr>
<tr>
<td>As a student I want to be able to specify if my project is an individual or group project</td>
<td>Registering as a group should open a section to input the information of group members</td>
<td>

Tick checkbox when in a group project. Fill out information of group members.

Submit form without ticking checkbox to signify individual project.
</td>
</tr>
<tr>
<td>As a student, I would like to receive notifications when I have been registered as part of a group project</td>
<td>The notifications would be sent in emails and have a section to confirm their place in the group</td>
<td>Register as a group. Emails sent will have a section to confirm or deny a user's place on the project. Accept and deny the registration</td>
</tr>
<tr>
<td>As a student I should be able to provide information on my supervisor in the registration form</td>
<td>There can either be 1 or 2 supervisors</td>
<td>Register with 1 supervisor. Register with 2 supervisors. Fill out their information in the provided sections. Boxes should be required for submission</td>
</tr>
<tr>
<td>As a student I should be able to specify if my project has ethical concerns</td>
<td>When specifying that the project has ethical concerns, I should be given a text box to provide details of the project</td>
<td>Tick a box whether there are ethical concerns. Fill out the text box provided to explain the concerns.</td>
</tr>
<tr>
<td>As a student I would like to check the status of group members on whether they have confirmed their place on the project</td>
<td>There will be a section in the form showing the statuses of each member in one place</td>
<td>Access form and check if all group members have accepted and registered their details to the project</td>
</tr>
<tr>
<td>As a student I would like to send reminders to group members if they have not confirmed their place on the project</td>
<td>There will be buttons next to each group member's information to remind them if they have not confirmed their place. Group members that have already been registered should not be able to be sent reminders</td>
<td>Send notifications to group members that have not registered. Attempt to send reminders to group members that have already confirmed their place</td>
</tr>
<tr>
<td>As a supervisor I should be sent details of the projects I am supervising to check that the project is appropriate for the student</td>
<td>Cyber security students should only be able to register to projects listed as cyber security. Only projects supervised by the supervisor should be accessible</td>
<td>View project details of students. Check that only project being supervised are available for viewing</td>
</tr>
<tr>
<td>As a supervisor I should be able to generate reports on the students I am flag those that are in an inappropriate project</td>
<td>Reports may be generated into a spreadsheet with students that are in cyber security being highlighted for easy viewing</td>
<td>Generate report on students. Highlight students that are cyber security students</td>
</tr>
<tr>
<td>As a supervisor, I should be notified when students register my for their project</td>
<td>Notifications will be sent by email to the relevant supervisor given by the student</td>
<td>Send notification to supervisor that they have been registered with a project. Check that email correctly provides project and student details</td>
</tr>
<tr>
<td>As a supervisor, I should be able to accept or reject registration forms submitted by students with me as their supervisor</td>
<td>Acceptance will be provided in the email detailing the project when students submit</td>
<td>Accept project proposed by students. Reject project using the notification email sent</td>
</tr>
<tr>
<td>As a member of professional services (PS) I should be able to remind students or supervisors if they have not registered with a project</td>
<td>The reminders should be sent by email and could be sent all at once with a provided button</td>
<td>Send reminder email to students not registered. Send reminders to academic staff not registered with projects</td>
</tr>
<tr>
<td>As a member of PS I should be able to generate a report on students and staff related to project registration</td>
<td>

Students and staff might be separated into their own sections to allow for easy viewing

Reports will be generated in a spreadsheet and can be filtered based on name, degree or project registration status
</td>
<td>Query database and generate spreadsheet containing relevant information on project registration status, course details etc.</td>
</tr>
<tr>
<td>As a member of PS I should be able to check if there are any students registered to a project not appropriate for their course</td>
<td>The spreadsheet will specifically search for cyber security students to check if their project is a cyber security one</td>
<td>Query database and check students that are registered with inappropriate projects for their course. E.g. Cyber security student not registered with a cyber security project</td>
</tr>
<tr>
<td>As a module convenor I would like to generate reports on how many of my students have registered for a project</td>
<td>Reports might also show if the student is in cyber security and if their project is in cyber security</td>
<td>Query database to check students that are in the module convenor’s course have registered a project</td>
</tr>
<tr>
<td>As a director of graduate studies I would like to be able to access a list of students and see their registration status as well as the statuses of supervisors</td>
<td>This would be similar to reports generated by PS and module convenors</td>
<td>Query for a spreadsheet detailing the information of students and academic staff</td>
</tr>
<tr>
<td>All users will have the ability to declare what type of user they are to be granted more access to the microservice</td>
<td>User types will be student, academic staff, PS, modules convenor or director of graduate studies. Each will provide varying levels of access to information</td>
<td>Tick box announcing user is a student, academic staff, PS, module convenor or director of graduate studies. Check that appropriate access has been provided for each user type</td>
</tr>
<tr>
<td>As a superuser, I would like a developer mode in order to change fields in the registration form as needed</td>
<td>Superusers should be able to add additional fields to the form without having to change backend or database directly</td>
<td>Register as superuser. Add or take away an input of the registration form. Submission of project should still be allowed after changing the form</td>
</tr>
<td>As a member of PS, I should be able to upload excel spreadsheets containing student information to automatically populate the database</td>
<td>There will be an upload file section of the form that is only accessible to PS to upload excel spreadsheets directly to database</td>
<td>Login as PS. Upload excel file containing student information. Attempt to upload a different file format than excel</td>
</tr>
<tr>

