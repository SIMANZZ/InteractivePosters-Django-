# Generated by Django 5.0.4 on 2024-05-28 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InteractivePosters', '0010_alter_texts_definition'),
    ]

    operations = [
        migrations.AlterField(
            model_name='texts',
            name='definition',
            field=models.CharField(max_length=1500),
        ),
    ]