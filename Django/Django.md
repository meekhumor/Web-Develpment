### Process

1. cd to folder
2. setup `django-admin startproject project_name`
3. run `python manage.py runserver`
4. For including a component `python manage.py startapp component_name` 

# Note: 
 1. Whenever you make a new component, you need to add the component to the `INSTALLED_APPS` in the `settings.py` file.
 2. After updating `models.py` for database 
   - Run `python manage.py makemigrations`
   - Run `python manage.py migrate`
 3. After making templates folder include its path in the `settings.py` file.


- Make a `views.py` file in the component folder [Rendering]
- Make a `urls.py` file in the component folder [Routing]
- Make a `models.py` file in the component folder [Database]
- Make a `templates` folder in the component folder [Templates]
