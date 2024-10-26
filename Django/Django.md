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
 4. Attach `LOGIN_URL = "/login/"` in `settings.py` file to redirect to the login page.
 5. Add `tests.py` file in the basics folder for testing.


- Make a `views.py` file in the basics folder [Rendering]
- Make a `urls.py` file in the basics folder [Routing]
- Make a `models.py` file in the basics folder [Database]
- Make a `templates` folder in the basics folder [Templates]

- Create a `form.py` file in articles folder


## To run the code in production env

Refer this for future points:
`https://www.codingforentrepreneurs.com/blog/prepare-django-for-digital-ocean-app-platform`

1. Change `settings.py`

  ```
  SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY',"django-insecure-dd2f&f4$+(%!o^bk3tsh7onpexu1uvi&z@hus8i2=7wprsq@^1")

  DEBUG = str(os.environ.get('DEBUG')) == "1" 

  ALLOWED_HOSTS = []
  if not DEBUG:
      ALLOWED_HOSTS += [os.environ.get('DJANGO_ALLOWED_HOSTS')]
  ```
2. Create '.env' file in root folder
3. `pip install django-dotenv`
4. Add `import dotenv` and `dotenv.load_dotenv() `manage.py`
5. Create 'runtime.txt' file in root folder
6. Run `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'` for secret key
7. In `settings.py` add below database section

```
POSTGRES_DB = os.environ.get("POSTGRES_DB")
POSTGRES_PASSWORD = os.environ.get("POSTGRES_PASSWORD")
POSTGRES_USER = os.environ.get("POSTGRES_USER")
POSTGRES_HOST = os.environ.get("POSTGRES_HOST")
POSTGRES_PORT = os.environ.get("POSTGRES_PORT")

POSTGRES_READY = (
    POSTGRES_DB is not None
    and POSTGRES_PASSWORD is not None
    and POSTGRES_USER is not None
    and POSTGRES_HOST is not None
    and POSTGRES_PORT is not None
)

if POSTGRES_READY:
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            "NAME": POSTGRES_DB,
            "USER": POSTGRES_USER,
            "PASSWORD": POSTGRES_PASSWORD,
            "HOST": POSTGRES_HOST,
            "PORT": POSTGRES_PORT,
        }
    }
```
8. Deploy `https://www.codingforentrepreneurs.com/blog/deploy-django-to-digitalocean-app-platform`

