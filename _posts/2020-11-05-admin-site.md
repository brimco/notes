---
layout: post
title:  "Admin Site"
date:   2020-11-05 21:44:00 -0700
categories: django
order: 4
---

The Django admin app is an easy way to view and edit the [database]({% post_url 2020-11-05-models-and-databases %}).

# Create Admin Account
`python manage.py createsuperuser`

[Click here to set up on Heroku.]({% post_url 2020-11-06-setting-up-with-django %})

# Add models to Admin App
Under app-name folder, in admin.py:
{% highlight python %}
from .models import model-name
admin.site.register(model-name)
{% endhighlight %}
