Install Django
https://docs.djangoproject.com/en/3.1/intro/install/

Create virtual env
(command)mkvirtualenv aviajem

Install requirements
(command) pip install -r requirements.txt

Configure the database
../server/settings.py

Migrate the models
py manage.py migrate

Create a superuser
py manage.py createsuperuser

Run application
(command) py manage.py runserver

Links:
http://127.0.0.1:8000/admin/
http://127.0.0.1:8000/api/