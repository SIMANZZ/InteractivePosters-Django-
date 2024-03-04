from django.db import models

class Test(models.Model):
    correct_answer = models.CharField(max_length=100)

    def __str__(self):
        return self.correct_answe
