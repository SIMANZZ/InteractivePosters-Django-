# Generated by Django 5.0.4 on 2024-05-21 13:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('InteractivePosters', '0007_alter_answers_question_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Texts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('text', models.CharField(max_length=1000)),
            ],
        ),
        migrations.AlterField(
            model_name='answers',
            name='question_number',
            field=models.IntegerField(),
        ),
    ]