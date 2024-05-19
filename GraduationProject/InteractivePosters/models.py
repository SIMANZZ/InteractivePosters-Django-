from django.db import models

class Machines(models.Model):
    machine_name = models.CharField(max_length=100, blank=True)
    definition = models.CharField(max_length=500, blank=False, default="none")

    def __str__(self):
        return self.machine_name

class Answers(models.Model):
    machinesID = models.ForeignKey(Machines, blank=False, on_delete=models.CASCADE)
    question_number = models.IntegerField(blank=False)
    correct_answer = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.correct_answer