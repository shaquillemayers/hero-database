# By Bits Code Challenge

This project has been deployed: https://shaquille-mayers-by-bits.surge.sh/

## Project Assumptions & Notes

The main project assumptions that I made were regarding the log in form validation. I allowed for a simple password minLength of 6, assumed that any username was valid and set both fields as required. 

I also implemented an auto logout feature after 1 minute, due to the sensitive information accessible on the policy page once logged in, which was an assumption of sorts.

The final thing of note is that I began by passing the access token via props, but later opted to use app wide state via useContext. However, both are being used throughout the app, just to display that I understand how to implement both.

## Time Spent

I spent somewhere between 6-8 hours on this task. This was mainly due to an issue I had implementing the auto logout feature that took a while to solve. Most of the css and layout I was able to quickly pull across from previous projects and edit, and then I began on the basic functionality and http requests which didn't take too long, before adjusting things such as protected routes and conditional rendering based on the log in state.

Time break down:

1 hour planning

1.5 hours setting up & creating file structure and layout as well as the CSS

Approx 4-5 hours development

The only thing I would have done if I had more time, was add testing. But this isn't something I have learned in React yet, so I was unable to add it in time.