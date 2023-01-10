import pandas as pd
import matplotlib.pyplot as plt

dataset = pd.read_csv('D:\School\\4th Year\ITD112\DengueDataset\dengue-dataset.csv')

dataset = dataset.drop(dataset.index[0])
dataset['date'] = pd.to_datetime(dataset['date']).dt.date
dataset['loc'] = dataset['loc'].astype('category')
dataset['cases'] = dataset['cases'].astype('float')
dataset['deaths'] = dataset['deaths'].astype('float')
dataset['Region'] = dataset['Region'].astype('category')


region_names = dataset['Region']
region_names = region_names.unique()


loc_names = dataset['loc']
loc_names = loc_names.unique()


def getDengueDataSet():
	res = dataset.to_json()
	return res

def getNumOfCases():
	res = {}
	for i in region_names:
		res[i] = dataset.loc[dataset['Region'] == i]['deaths'].sum()
	return res

def getNumOfDeaths():	
	res = {}
	for i in region_names:
		res[i] = dataset.loc[dataset['Region'] == i]['loc'].sum()
	return res
