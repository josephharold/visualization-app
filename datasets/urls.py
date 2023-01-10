from django.urls import path
from . import views


urlpatterns = [
	path('', views.index, name='index'),
	path('dengue/get_dataset', views.getDengueDataSet, name='getDengueDataset'),
	path('dengue/getNumOfCases', views.getNumOfCases, name='getNumOfCases'),
	path('dengue/getNumOfDeaths', views.getNumOfDeaths, name='getNumOfDeaths'),
	path('flood/getFloodDataset', views.getFloodDataset, name='getFloodDataset'),
]