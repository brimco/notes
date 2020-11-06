---
layout: post
title:  "Models and Databases"
date:   2020-11-05 21:44:00 -0700
categories: django
order: 3
---
# Database
By default, django uses a SQLite database. If you are using this, no other setup is needed.

The [Admin Site]({% post_url 2020-11-05-admin-site %}) is an easy way to view and edit your database.

# Migrations
Migrations tell django how to create and apply changes from your models to the database.

To set up migrations for the app (only the first time):

`python manage.py makemigrations app-name`

Any time you make changes to your models, you need to make the migrations and then migrate them to the database:

{% highlight python %}
python manage.py makemigrations
python manage.py migrate
{% endhighlight %}

# Models
Models are a python class that will be converted by django and saved to a database.

{% highlight python %}
# in models.py
from django.db import models

class MyModel(models.Model):
    field1 = models.CharField(max_length=64)
    field2 = models.IntegerField()
    
    def __str(self):
        return f'{field1}: {field2}'
{% endhighlight %}
`max_length` is required for CharFields.

`__str__` is used to represent the model as a string.

See the [authentication page]({% post_url 2020-11-05-authentication %}) for a User Model.

Other field types can be found in the [documentation](https://docs.djangoproject.com/en/3.1/ref/models/fields/#field-types).

# Many-to-One Fields
Many-to-one fields are made with `ForeignKey`:
{% highlight python %}
class MyModel2(models.Model):
    field3 = models.ForeignKey(MyModel, on_delete=models.CASCADE, related_name='field3')
{% endhighlight %}

`MyModel` is the model you are pointing at.

`on_delete` tells django how to handle when the object you're pointing at is deleted. `CASCADE` means this object will be deleted too.

`related_name` is the name where you can access this object from the one you're pointing at.

# Setting a Field with a Function
In this example, a function is used to find the max Bid on an Item.
{% highlight python %}
# inside the model:
def get_max_bid(self):
	all_bids = Bid.objects.filter(item=self)
	max_amount = all_bids.aggregate(Max('amount'))['amount__max']
	max_bid = Bid.objects.filter(item=self, amount=max_amount).first()
	return max_bid
highest_bid = property(get_max_bid)
{% endhighlight %}
