# The Wild Oasis

A small boutique hotel with 8 luxurious wooden cabins.

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a free account and get a supabase api key at `https://supabase.com/`.
4. Add the API key to **src/services/supabase.js**
5. Run `npm run dev` to start the web server.
6. Open your web browser and navigate to `http://localhost:5173/` to access the application.

## Usage

Here are a few examples of how the application works;

1. Users of the app are employees and need to be logged in to perform tasks
2. New users can only be signed up inside the application (to guarantee that only actual hotel employees can get accounts)
3. Users can upload an avatar, and change their name and password
4. Users are able to view all the cabins containing a photo, name, capacity, price, and current discount. At the same time can perform the CRUD operations
5. Can view a table with all all bookings, showing arrival and departure information
6. On checkin, the guests have the ability to add breakfast for the entire stay, if they hadn't already
7. The dashboard on the home page can display information for the last 7, 30, or 90 days with the following:
   - a list of guests checking in and out on the current day
   - statistics on recent bookings, sales, check ins, and occupancy rate
   - a chart showing daily hotels sales
   - a chart showing statistics on stay duration
8. Users are able to define different application-wide settings such as:
   - breakfast price, min and max nights/booking, max guests/booking
9. Switch between dark and light mode

## Media

![Timeline](/public/dashboard-1.png)
![Timeline](/public/dashboard-2.png)
![Timeline](/public/bookings.png)
![Timeline](/public/bookings-pagination.png)
![Timeline](/public/cabins.png)
![Timeline](/public/cabins-add.png)
![Timeline](/public/settings.png)
![Timeline](/public/update-user.png)
