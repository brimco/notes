---
layout: post
title:  "Templates"
date:   2020-11-05 21:44:00 -0700
categories: django
order: 2
---
Templates are the html file that will be rendered. 

# File Structure
Inside the app folder, create a folder `templates`. In this folder, create a folder `app-name` (this avoids namespace problems across different apps). Store your `html` template files here. 

# Using Context
{% raw %}
`context` is a dictionary of keys and values that is defined in `views.py` and passed to the template. `context` values can be used in the template by using `{{ key }}`.
{% endraw %}

# Using Blocks
{% raw %}
Use `{% block block-name %}{% endblock %}` for blocks to be filled in with other templates. This is often used for a layout template that is inherited by other templates
{% endraw %}

{% highlight html %}
{% raw %}
<!-- example: layout.html with title and body blocks -->
<html>
    <head>
        <title>{% block title %}{% endblock %}</title>
    </head>
    <body>
        {% block body %}{% endblock %}
    </body>
</html>
{% endraw %}
{% endhighlight %}

In the file you want to inherit to:

{% highlight html %}
{% raw %}
{% extends "app-name/template-name.html" %}

{% block title %}
<html code to add>
{% endblock %}
{% endraw %}
{% endhighlight %}



