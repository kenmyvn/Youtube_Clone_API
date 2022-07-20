from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('yY13X0BKaUw/', views.get_by_video_id),
]