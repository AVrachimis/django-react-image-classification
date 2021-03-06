from django.db import models
from keras.preprocessing.image import load_img, img_to_array
import numpy as np
from tensorflow.keras.applications.inception_resnet_v2 import InceptionResNetV2, decode_predictions, preprocess_input
# Create your models here.


class Image(models.Model):
    picture = models.ImageField()
    classified = models.CharField(max_length=200, blank=True)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Image classified at {}".format(self.uploaded.strftime("%Y-%m-%d %H:%M"))

    def save(self, *args, **kwargs):
        try:
            print("Classifying...\nPlease Wait")
            img = load_img(self.picture, target_size=(299, 299))
            img_array = img_to_array(img)
            # from299,299,3 to 1,299,299,3
            pred = np.expand_dims(img_array, axis=0)
            prep = preprocess_input(pred)
            model = InceptionResNetV2(weights='imagenet')
            prediction = model.predict(prep)
            decoded_prediction = decode_predictions(prediction)
            self.classified = str(decoded_prediction[0][0][1])
            print('success')

        except Exception as e:
            print('classification failed: ', e)
        super().save(*args, **kwargs)
