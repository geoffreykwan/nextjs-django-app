# Next.js and Django App

You can run the Next.js and Django applications individually or use Docker to run everything for you.

[How to start Django app](#how-to-start-django-app)

[How to start Next.js app](#how-to-start-nextjs-app)

[How to run Docker containers](#how-to-run-docker-containers)

[How to run with Kubernetes](#how-to-run-with-kubernetes)

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

6. Access the Django API at [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

Note: If you need to start the server up again in the future, make sure to activate the virtual environment again if needed

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

4. Access the Next.js application at [http://localhost:3000](http://localhost:3000)

Note: If you load the webpage and see the text "Hello World From Django" it means the website has successfully made a request to the Django API server

## How to run Docker containers

This will create and run Docker containers for the Django application, Next.js application, and Nginx. Nginx will act as the entry point and route requests to the Django and Next.js applications.

1. Go into the nginx-app folder
```
cd nginx-app
```

2. Create a .env file inside the nginx-app folder that contains this text
```
DJANGO_SECRET_KEY=django-insecure-abcd1234
DJANGO_ALLOWED_HOSTS=localhost
NEXT_PUBLIC_API_URL=/api
```

3. Build and start the containers
```
docker compose up --build
```

4. Access the application at [http://localhost:8080](http://localhost:8080/)

## How to run with Kubernetes

This will run the containers in Kubernetes

1. Start minikube. If you do not have minikube installed, you can use the instructions here [https://minikube.sigs.k8s.io/docs/start](https://minikube.sigs.k8s.io/docs/start)
```
minikube start
```

2. Go into the kubernetes-app folder
```
cd kubernetes-app
```

3. Create the Kubernetes resources that are specified in the yaml files
```
kubectl apply -f .
```

4. Create a tunnel so that you can access the web application from your browser
```
kubectl port-forward deployment/ingress-nginx-controller 8080:80 -n ingress-nginx
```

5. Access the web application at [http://localhost:8080](http://localhost:8080/)

Note: If you load the webpage and see the text "Hello, Next.js!" and "Hello World From Django" it means everything is working properly
