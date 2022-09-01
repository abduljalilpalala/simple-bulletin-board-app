## Simple Bulletin Board App

An App where you can Create, Edit, Delete, View and Upvote/Downvote an Article

## Technologies used:
- NextJS
- Typescript
- Material UI
- Laravel

## Installation
1. git clone `git@github.com:abduljalilpalala/simple-bulletin-board-app.git`
2. cd simple-bulletin-board-app
3. cd frontend
4. npm install
5. cp .env.example .env
6. Go to the frontend folder and set the `NEXT_PUBLIC_BACKEND_URL` variable in `.env` with the laravel's backend url *(default: http://localhost:8000)*
7. cd ../backend
8. composer install
9. cp .env.example .env
10. Go to the backend folder and update `.env` and set your database credentials
11. php artisan key:generate
12. php artisan migrate:fresh --seed

## Commands to run the app
1. cd simple-bulletin-board-app
2. cd frontend
3. npm run dev
4. cd ../backend
5. php artisan serve

## Notes
Make sure your XAMPP *(or other web server)* is running when starting the app
