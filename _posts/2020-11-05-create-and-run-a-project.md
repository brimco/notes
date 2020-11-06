---
layout: post
title:  "Create & Run a Project"
date:   2020-11-05 21:44:00 -0700
categories: django
order: 1
---
# Create the project:
`django-admin startproject project-name`

# Create a New App:
{% highlight python %}
python manage.py startapp app-name   # create the app

# inside project folder, in settings.py:
INSTALLED_APPS = [..., ..., app-name]  # add app to project

# inside project folder, in urls.py:
from django.urls import include
urlpatterns = [..., ..., path("ext-for-app/", include("app-name.urls"))]   
{% endhighlight %}

# Setup URLs
In your app folder, create `urls.py` to link your urls to the right fuction in `views.py`.
{% highlight python %}
# in urls.py:
from django.urls import path
from . import views

app_name = "app-name"
urlpatterns = [
  path("path1", views.function1, name="reference-name1"),
  path("<str:variable-name>", views.function2, name='reference-name2')
]
{% endhighlight %}
The url `path1` will trigger the function `function1` in `views.py`. It is referenced using `reference-name1` when redirecting and other times.

The second path uses a variable. It can be of type `str`, `int`, or `slug`. It will be passed as `variable-name` to `function2` in views. `function2` will have 2 parameters: `request` and `variable-name`.

See [documentation](https://docs.djangoproject.com/en/3.1/topics/http/urls/).

# Setup Views
`views.py` holds the funtions that tell django how/which `html` template files to open.

{% highlight python %}
# single line of html
from django.http import HttpResponse
def function1(request):
  ... 
  return HttpResponse("<html to show>")

# open an html template file
from django.shortcuts import render
def function2(request, variable-name):
  ... 
  return render(request, 'app-name/template-name.html', context)

# redirect to other view
from django.http import HttpResponseRedirect
from django.urls import reverse

def function3(request):
    ...
    return HttpResponseRedirect(reverse("app-name:ref-name"))

# if the url has arguments:
return HttpResponseRedirect(reverse("app-name:ref-name", kwargs={'arg-name': arg-val}))
# or
return HttpResponseREdirect(reverse("app-name:ref-name", (arg-val,)))
{% endhighlight %}

{% raw %}
`context` is a dictionary of keys and values to be used in the template by using `{{ key }}`.

`ref-name` is the reference name you gave the function in the `urls.py` file for the app.
{% endraw %}

# Create Templates
See the [template page]({% post_url 2020-11-05-templates %}) for help.

# Run/view the project:
To run the project locally: 

`python manage.py runserver`

To run on your network:
{% highlight python %}
# get your IP address:
ipconfig

# add your IP address to `settings.py`: 
ALLOWED_HOSTS = [..., 'xxx.xxx.x.x']

# then run
python manage.py runserver xxx.xxx.x.x:8000

{% endhighlight %}

To run everywhere: Heroku