import os
from django.test import TestCase
from django.contrib.auth.password_validation import validate_password

class Test(TestCase):
    def test_secret_key_strength(self):
        SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')

        try:
            is_strong = validate_password(SECRET_KEY)
        except:
            msg = 'The secret key is not strong enough.'
            self.fail(msg)
            
        