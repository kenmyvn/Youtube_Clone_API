from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('<id>/', views.get_by_video_id),
]