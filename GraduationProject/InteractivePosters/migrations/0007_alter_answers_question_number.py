# Generated by Django 5.0.4 on 2024-05-19 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InteractivePosters', '0006_alter_machines_machine_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answers',
            name='question_number',
            field=models.IntegerField(default=0),
        ),
    ]