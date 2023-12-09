# Dog Hotel

"Dog Hotel" is a web platform which provides the service of a hotel where you can leave your dog for a few days while you are away.

Functionality:

  Unregisterd users can view the available rooms catalog and the reviews left by other people below each room. Thay also have access to the "Home" page, "Login" and "Register" pages, about page and contacts page.

After successful register and login the user is redirected to Home page and given access to "Write a review", "Booking" and "My reservations" page, and of course - the Logout button.

The "Booking" form allow the user the place a reservation on the desired room for a specific dates if they are not already taken. After some validation and availability check the page accepts the reservation period and redirects the user to his "My reservations" page where they can view and cancel reservations. In the "Room details" page every logged user can leave a review.

This web site has also an "admin" role which have access to creating new rooms in the catalog, editing them and deleting them. After room removal, reservations made for that room are deleted also. The Admin also have access to the "All Reservations" page where he can view all reservations made by users and cancels them.

Userd tools: 

  For the whole client-site part is used React.js library. 

For the back-end part I used the softUni practice server to witch all fetch request are made and data is stored.
Authetication is achieved through using authentications context and persisted state using custom react hook and context.Provider to wrap all context needing components.
Client-side routing is achieved by using the react-router-dom library.
Form data validation is made with the help of Formik, Yup and React-datepicker libraries.
Most of the stylization is done in a single CSS file by bootstrap library, but some components hava a separate CSS files.
The site has a Error boundary implemented by using a Class Component which is a "parent" to the whole application and be albe to "catch" errors.
In the contacts page using iframe element there is google.maps window showing the location of the hotel.
