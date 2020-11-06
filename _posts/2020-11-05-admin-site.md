---
layout: post
title:  "Admin Site"
date:   2020-11-05 21:44:00 -0700
categories: django
order: 4
---

The Django admin app is an easy way to view and edit the database.

# Create Admin Account
`python manage.py createsuperuser`

# Add models to Admin App
Under app-name folder, in admin.py:
{% highlight python %}
from .models import model-name
admin.site.register(model-name)
{% endhighlight %}
