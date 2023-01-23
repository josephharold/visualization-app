from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.
import pandas as pd
import matplotlib.pyplot as plt

# ! dengue Dataset 
dengueDataset = pd.read_csv('D:\School\\4th Year\ITD112\DengueDataset\dengue-dataset.csv')

dengueDataset = dengueDataset.drop(dengueDataset.index[0])
dengueDataset['date'] = pd.to_datetime(dengueDataset['date']).dt.date
dengueDataset['loc'] = dengueDataset['loc'].astype('category')
dengueDataset['cases'] = dengueDataset['cases'].astype('float')
dengueDataset['deaths'] = dengueDataset['deaths'].astype('float')
dengueDataset['Region'] = dengueDataset['Region'].astype('category')
dengueDataset = dengueDataset.sort_values(by = 'date')
date_names = dengueDataset['date']
region_names = dengueDataset['Region']
region_names = region_names.unique()


loc_names = dengueDataset['loc']
loc_names = loc_names.unique()


def getDengueDataSet(request):
	# res = dengueDataset[['date']].to_json() 
	# res = [] 
	res = []
	for i in dengueDataset.index:
		res.append({str(dengueDataset['date'][i]): dengueDataset['cases'][i]})
	return JsonResponse(res, safe=False)

def getNumOfCases(request):
	res = [] 
	for i in region_names:
		dct = {}
		sum = dengueDataset.loc[dengueDataset['Region'] == i]['cases'].sum()
		dct['region'] = i   
		dct['cases'] = sum
		res.append(dct)
	res = sorted(res, key=lambda x: x['cases'], reverse = False)
	return JsonResponse(res, safe=False)

def getNumOfDeaths(request):	
	res = [] 
	for i in region_names:
		dct = {}
		sum = dengueDataset.loc[dengueDataset['Region'] == i]['deaths'].sum()
		dct['region'] = i
		dct['deaths'] = sum
		res.append(dct) 
	res = sorted(res, key=lambda x: x['deaths'])
	return JsonResponse(res, safe=False)

def getPercentOfDeaths(request):
	res = [] 
	for i in region_names:
		dct = {}
		deaths = dengueDataset.loc[dengueDataset['Region'] == i]['deaths'].sum()
		cases = dengueDataset.loc[dengueDataset['Region'] == i]['cases'].sum()
		percent =  (deaths / cases)* 100
		dct['region'] = i
		dct['percent'] = round(percent, 2) 
		res.append(dct) 
	res = sorted(res, key=lambda x: x['percent'])
	return JsonResponse(res, safe=False)

# ! floodDataset

floodDataset = pd.read_csv('D:\School\\4th Year\ITD112\\visualization-app\\visualizerApp\datasets\\flooding-dataset.csv')
floodDataset=floodDataset.dropna()
floodDataset= floodDataset[floodDataset['flood_heig'] != 0]
floodDataset= floodDataset[floodDataset['flood_heig'] != 1]
# floodDataset= floodDataset[floodDataset['percipitat'] != 0]

def getFloodDataset(request):
	print(floodDataset.columns)
	lat_names  = floodDataset['lat']
	lon_names  = floodDataset['lon']
	level_names = floodDataset['flood_heig']
	# elev_names = floodDataset['elevation']
	# precip_names = floodDataset['precipitat']
	res = {'lat':[], 'lon': [], 'size': []}
	for i in floodDataset.index:
		lat = lat_names[i]
		long = lon_names[i]
		level = level_names[i]
		res['lat'].append(float(lat))
		res['lon'].append(float(long))
		res['size'].append(float(level))
	return JsonResponse(res, safe=False)

def getFloodDataset_precip(request):

	lat_names  = floodDataset['lat']
	lon_names  = floodDataset['lon']
	level_names = floodDataset['precipitat']
	# elev_names = floodDataset['elevation']
	# precip_names = floodDataset['precipitat']
	res = {'lat':[], 'lon': [], 'size': []}
	for i in floodDataset.index:
		lat = lat_names[i]
		long = lon_names[i]
		level = level_names[i]
		res['lat'].append(float(lat))
		res['lon'].append(float(long))
		res['size'].append(float(level))
	return JsonResponse(res, safe=False)

def index(request):
	return render(request, 'index.html')