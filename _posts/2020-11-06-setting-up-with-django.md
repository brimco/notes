---
layout: post
title:  "Setting Up Django on Heroku"
date:   2020-11-06 15:28:00 -0700
categories: django heroku
order: 1
---
[Create the django app]({% post_url 2020-11-05-create-and-run-a-project %}) and commit to a git repository.

# Procfile
Add the file `Procfile` (no extension) at the top level directory (same level as project & app folders) with contents:
{% highlight yaml %}
web: gunicorn project-name.wsgi --log-file -
{% endhighlight %}

# Requirements
Add the file `requirements.txt` at the same level with all the required packages and versions like this:
{% highlight python %}
Django==3.1 	        # always needed
gunicorn==20.0.4 	    # always needed
whitenoise==5.2.0 	    # always needed
psycopg2==2.8.6         # needed for database
dj_database_url==0.5.0	# needed for database
...
{% endhighlight %}

You can find version numbers by running `pip list`.

# Static Files
Update the `settings.py` folder to handle static files right:
{% highlight python %}
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
{% endhighlight %}

{% raw %}
Make sure you use `{% static 'images/logo.png' %}` instead of the hardcoded urls.
{% endraw %}

In `settings.py`, enable `whitenoise` (after pip install, if needed). `whitenoise` serves your static files. It must go after `securitymiddleware` and before all others.
{% highlight python %}
MIDDLEWARE = [
  'django.middleware.security.SecurityMiddleware',
  'whitenoise.middleware.WhiteNoiseMiddleware',
  # ...
]
{% endhighlight %}

# Allowed Hosts

In `settings.py`, add the url of your project to allowed hosts:
{% highlight python %}
ALLOWED_HOSTS = [..., 'app-name.herokuapp.com']
{% endhighlight %}

# Template Settings

In `settings.py`, add the directory for templates:
{% highlight python %}
TEMPLATES['DIRS']: ['appname/templates']
{% endhighlight %}

# Database Settings
In `settings.py`, if you are using a database:
{% highlight python %}
import dj_database_url

db_from_env = dj_database_url.config(conn_max_age=600)
DATABASES['default'].update(db_from_env)
{% endhighlight %}

This sets up the PostgreSQL database when you are using it online, white still using the SQLite3 database locally during development.

# Create the Heroku App
Run in terminal:
{% highlight python %}
heroku login
heroku create app-name
{% endhighlight %}

Add a PostgreSQL database to your app (if needed):
{% highlight python %}
heroku addons:create heroku-postgresql:hobby-dev
{% endhighlight %}

Commit and push to GitHub. 

# Set up Autodeploy from GitHub
On the [Heroku website](https://dashboard.heroku.com/), click the Deploy tab on your app page. Connect to your GitHub, and set up automatic deploys from your main branch.

# Migrating to Heroku
After making changes to `models.py`, these need to be migrated to the PostgreSQL database too. [Make the migrations and migrate]({% post_url 2020-11-05-models-and-databases %}) as usual, then commit and push to GitHub. Wait until those changes are deployed to the Heroku app, then run:
{% highlight python %}
heroku run python manage.py migrate -a app-name
{% endhighlight %}

# Set up Admin Site
After [setting up the admin site]({% post_url 2020-11-05-admin-site %}) as usual, add a superuser on the PostgreSQL database:
{% highlight python %}
heroku run python manage.py createsuperuser -a <appname>
{% endhighlight %}

# Rename Heroku App
{% highlight python %}
heroku apps:rename the-new-name
{% endhighlight %}

# Walkthroughs
[Simple is Better Than Complex](https://simpleisbetterthancomplex.com/tutorial/2016/08/09/how-to-deploy-django-applications-on-heroku.html)

[Whitenoise](http://whitenoise.evans.io/en/stable/django.html)

# Example
[Menu](https://github.com/brimco/heroku-menu)