---
layout: post
title:  "Authentication"
date:   2020-11-05 22:59:00 -0700
categories: django
order: 3
---
# Set up User Model
{% highlight python %}
# in models.py:
class User(AbstractUser):
    pass
{% endhighlight %}
See [models page]({% post_url 2020-11-05-models-and-databases %}) if any other fields are needed.

# Set up URLs
{% highlight python %}
# in urls.py for the app:
urlpatterns = [
    ...,
    path('login', views.login_view, name='login'),
    path('logout', views.logout_view, name='logout'),
    path('register', views.register, name='register')
]
{% endhighlight %}


# Set up Views
{% highlight python %}
# in views.py:
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.db import IntegrityError
from .models import User

# redirect home page to login view if not logged in
def index(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse("app-name:login"))
    return render(request, 'app-name/index.html')

# login view
def login_view(request):
    if request.method == 'POST':
        username = request.POST("username")
        password = request.POST("password")
        user = authenticate(request, username=username, password=password)
        if user is not None: # valid user
            login(request, user)
            return HttpResponseRedirect(reverse('app-name:index'))
        else: # invalid user
            return render(request, 'app-name/login.html', 
                {'message': 'Invalid username and/or password.'})
    return render(request, "app-name/login.html")

# logout view
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('app-name:index'))

# register view
def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "app-name/register.html", {
                "message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "app-name/register.html", {
                "message": "Username already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("app-name:index"))
    return render(request, "app-name/register.html")

{% endhighlight %}

Use the `@login_required` decorator right before any function in `views.py` to require the user to be logged in to access it.

# Set up Templates
{% highlight python %}
{% raw %}

# in login.html:
{% if message %}
    <div>{{ message }}</div>
{% endif %}
<form action='{% url "app-name:login" %}' method='post'>
    {% csrf_token %}
    <input type='text' name='username' placeholder='Username'>
    <input type='password' name='password' placeholder='Password'>
    <input type='submit' value='Login'>
</form>

# in register.html:
{% if message %}
    <div>{{ message }}</div>
{% endif %}

<form action="{% url 'app-name:register' %}" method='post'>
    {% csrf_token %}
    <input type='text' name='username' placeholder='Username'>
    <input type='email' name='email' placeholder='Email'>
    <input type='password' name='password' placeholder='Password'>
    <input type='password' name='confirmation' placeholder='Confirm Password'>
    <input type='submit' value="Register">
</form>

# logout button:
<a href='{% url 'logout' %}'>Logout</a>
{% endraw %}
{% endhighlight %}