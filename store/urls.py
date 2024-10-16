# store/urls.py

from django.urls import path
from store import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('signin/', views.signin, name='signin'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('shop/', views.shop, name='shop'),  
    path('profile/', views.profile, name='profile'),
    path('blog/', views.blog, name='blog'),
]