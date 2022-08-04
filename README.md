# Blog API

This project serves two different frontend built with ReactJS, both of which are served by a server.

## Frontend
The first website enables users to view blogs created by me.<br/>
https://blogspace-view.herokuapp.com/

<img src="https://user-images.githubusercontent.com/88147891/182830152-609e57a5-51ba-4d56-81f6-dc4a235e265d.png" width="1000" height="600" />

The second website enables me to create, edit, and delete blog posts that are served by the first website above.<br/>
I can also choose whether to publish or unpublish the blogs.<br/>
https://blogspace-edit.herokuapp.com/

<img src="https://user-images.githubusercontent.com/88147891/182830770-98787f87-dd7a-46a2-9699-a5f0fb229c05.png" width="1000" height="600" />

## Backend
With the help of Express, I've set up several endpoints to handle API calls from the frontend. At the same time, utilising MongoDB to store data.<br/>
In order to protect the routes, I've utilised JWT token and Bcrypt to validate every API call, and safely store user passwords.
