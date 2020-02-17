# Hack the North 2020 Frontend Developer Challenge

As a developer on the Frontend team at Hack the North, you'll build amazingly beautiful web applications that receive millions of impressions a year - all while owning various projects and providing input on a diverse set of tasks: everything from scoping a tool with other teams, discussing UX with designers, and collaborating on code with your fellow team members.

The following challenge and accompanying writeup is intended to help us better understand how you work and allows you to showcase some of your skills and thought process as you complete it. 

Please submit your challenge via email to [alex.xie@hackthenorth.com](mailto:alex.xie@hackthenorth.com) by **11:59PM EST** on **Feb 20, 2020**. 
Your full submission should include:

1. A link to your codebase and project URL (Part 1)
2. A link to your writeup (Part 2) if it is not included with your codebase

If you encounter any issues or questions, don't hesitate to shoot an email to me at the address above - looking forward to seeing your creations!




## Storytime

Here at Hackathon Global Inc.™, we've been running hackathons successfully for the past 18 years. While doing so, we've noticed that there are always unwanted guests that show up to each event. These pesky hackathon crashers always try to take food and use up resources that were allocated for hackers, sponsors, volunteers, and other guests. 

You've been tasked with building a tool for volunteers to log in to the application. After logging in, an attendee profile and available actions should be displayed.




## Part 1: Project

### Specifications

An endpoint for attendee information is available at `https://hackthenorth.netlify.com/api/fe-challenge-attendee`. Making a `GET` request to the endpoint will return a **random** attendee profile. The profile data in the response will follow the following format:

```typescript
// This is TypeScript, if you don't know TypeScript, no problem! You can read up about
// it here https://www.typescriptlang.org/docs/handbook/advanced-types.html or just
// have a look at the sample data by visiting the endpoint above.

// Each attendee will belong to one of the following groups
type AttendeeType = "hacker" | "organizer" | "volunteer | "sponsor";

// Actions that can be applied to a profile
// Note: some actions will only appear on profiles of certain types! (ex. call_phone for an "organizer")
type Action = "check_in" | "attend_workshop" | "call_phone";

// A profile for an attendee will look like so
interface AttendeeProfile {
  id: number;
  name: string;
  profile_pic: string; // a url to an image
  bio?: string; // a paragraph describing the attendee
  type: AttendeeType;
  checked_in: boolean;
  actions: Action[];
  num_workshops_attended?: number; // all "hacker" type attendees (and no other types) will have this field
  sponsor_company?: string; // all "sponsor" type attendees (and no other types) will have this field
  sponsor_company_link?: string; // all "sponsor" type attendees (and no other types) will have this field
  next_shift?: number; // datetime (ms); all "volunteer" type attendees (and no other types) will have this field
  phone_number?: string; // all "organizer" type attendees (and no other types) will have this field
}

// What the endpoint will return (null means no profile was found)
type EndpointResponse = AttendeeProfile | null;
```

> For testing, you may want to use `/api/fe-challenge-attendee?id={ATTENDEE_ID}` to fetch a specific attendee's information.



### Requirements

The functionality of the app is split into multiple portions:

1. Display a full profile with all information for an attendee when visiting the app
2. Display a meaningful message when no profile is found (when the endpoint returns `null`)
3. Provide a way to perform the actions that are available for an attendee (buttons would work here!) 
   - You don't actually have to make another request when performing the action
4. Hide the ability to fetch profile information behind a login screen
   - Login details can be hard-coded (i.e. you can choose the username/password combination that will login properly)

> *If you feel you are strapped for time, it's okay to choose not to implement the latter portions of the challenge. We would rather see a partially implemented but well-crafted submission. However, do note that a complete submission should have all the functionality listed above.*

If you have completed your implementation of the above points, you may want to consider adding additional functionality. 

<details>
  <summary>Some possibilities, for your inspiration</summary>
  <ul>
    <li>Update the profile upon performing an action (e.g. incrementing the # of workshops attended)</li>
    <li>Allowing the volunteer to search for a specific user</li>
    <li>Persisting the currently displayed profile offline/across refreshes</li>
    <li>Making the application into a <a href="https://developers.google.com/web/progressive-web-apps">Progressive Web App</a></li>
  </ul>
</details>



### Considerations

We'll be assessing your challenge on multiple aspects. While you're working on it, you may want to keep the following points in mind:

 - Is the code written and documented such that a developer who is unfamiliar with the code can understand it relatively quickly?
 - Is your project structured in a way that is extensible and scalable? For example, if we wanted to add more attendee types, would it be possible to do so easily?
 - Are you following best practices to make sure the project is maintainable if development were to continue on it?
 - Is your application accessible and responsive (usable on multiple device types and/or for individuals with impairments)?
 - Is the styling and appearance of your application consistent and appealing?

Keeping the above in mind will be beneficial for those who advance to the next and final step of the hiring process: an interview where you'll be asked to walk through your implementation and any thought processes that guided you through the creation of your project. 



### Appearance

The tool does not have to be on brand with Hack the North, but we highly encourage you to make it visually appealing. You may make use of pre-styled components or designs, but we would love to see your own unique styling and creativeness 😊



### Resources

You may want to use packages and libraries to assist you in building this project. Feel free to integrate frameworks and libraries like React or Bootstrap to help you complete your project. However, you may **not** use any resources that have existing functionality satisfying many of the requirements listed above.

<details>
  <summary>These resources may be of interest in helping you speed up your completion of the project</summary>
  <ul>
    <li><a href="https://create-react-app.dev/">Create React App</a></li>
    <li><a href="https://cli.vuejs.org/">VueJS CLI</a></li>
    <li><a href="https://github.com/angular/angular-cli">Angular CLI</a></li>
    <li><a href="https://getbootstrap.com/">Bootstrap</a> (UI library)</li>
    <li><a href="https://lodash.com">Lodash</a> (utility library)</li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">Fetch</a> (native HTTP client)</li>
    <li><a href="https://github.com/axios/axios">Axios</a> (HTTP client)</li>
  </ul>
</details>




## Part 2: Writeup

To help us understand your work and thought process outside of code, please answer the following questions in a document:

1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?
2. Given additional time, how would you extend your application to become a fully functional product that hundreds of volunteers would use at Hackathon Global Inc.™'s next event? 

There are no right answers in this writeup. We just want to provide a spot for you to show us your insight into your project. This is a great place to discuss some of the points in the Considerations section above.

> *If you did not fully implement all of the functionality listed in the Requirements section, you should tell us here how you would have done so given additional time. You should also elaborate on any additional functionality you have already implemented in your current application here.*