from django.urls import path

from .views import activity_list, api_root, auth_status

urlpatterns = [
    path('', api_root, name='api-root'),
    path('auth/status/', auth_status, name='auth-status'),
    path('activities/', activity_list, name='activity-list'),
]
