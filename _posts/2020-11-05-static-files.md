---
layout: post
title:  "Static Files"
date:   2020-11-05 22:23:00 -0700
categories: django
order: 5
---
In `app-name` folder, make folder called `static`. Inside, make the folder `app-name`. Store your static files here.

# Using static files
In an html folder that uses a static page, put at the top:

{% raw %}
`{% load static %}`
{% endraw %}

Then you can link files using:
{% highlight html %}
{% raw %}
<link href="{% static 'app-name/styles.css' %}" rel="stylesheet">
<img src='{% static "app-name/logo.svg" %}'>
{% endraw %}
{% endhighlight %}

