# Next.js and Django App

## How to start Django app

This will allow you to start up the Django application by itself

1. Go into the django-app folder
```
cd django-app
```

2. Create a Python virtual environment
```
python3 -m venv venv
```

3. Activate the virtual environment
```
source venv/bin/activate
```

4. Install the Python dependencies of the application
```
pip install django djangorestframework django-cors-headers python-dotenv
```

5. Run the application
```
python3 manage.py runserver
```

Note: The Django application will be accessible at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

Note 2: If you need to start the server up again in the future, make sure to activate the virtual environment again if needed

## How to start Next.js app

This will allow you to start the Next.js application by itself

1. Go into the nextjs-app folder
```
cd nextjs-app
```

2. Install the Node dependencies of the application
```
npm install
```

3. Start the development server
```
npm run dev
```

Note: The Next.js application will be accessible at [http://localhost:3000](http://localhost:3000)

Note 2: If you load the webpage and see the text "Hello World From Django" it means the website has successfully made a request to and received a response from the Django API server

## How to run Docker containers

This will create and run Docker containers for the Django application, Next.js application, and Nginx. Nginx will act as the entry point and route requests to the Django and Next.js applications.

1. Go into the nginx-app folder
```
cd nginx-app
```

2. Create a .env file inside the nginx-app folder that contains this text
```
DJANGO_SECRET_KEY=django-insecure-abcd1234
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,backend
NEXT_PUBLIC_API_URL=/api
```

3. Build and start the containers
```
docker compose up --build
```

Note: The application entrypoint will be accesible at [http://localhost:8080](http://localhost:8080/)
