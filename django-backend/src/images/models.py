from django.db import models
from keras.preprocessing.image import load_img, img_to_array

# Create your models here.


class Image(models.Model):
    picture = models.ImageField()
    classified = models.CharField(max_length=200, blank=True)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Image classified at {}".format(self.uploaded.strftime("%Y-%m-%d %H:%M"))

    def save(self, *args, **kwargs):
        try:
            print('success')
            img = load_img(self.picture, target_size=(299, 299))
            img_array = img_to_array(img)
            print(img_array)
        except:
            print('classification failed')
        super().save(*args, **kwargs)
