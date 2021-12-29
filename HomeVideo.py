#!/usr/bin/python
# -*- coding: UTF-8 -*-

import glob, json

filelist = glob.glob('/mnt/disk01/share/HomeVideos/*.[Mm][Pp]4')

filelistA = []
for filename in filelist:
	filelistA.append(filename.replace('/mnt/disk01/share', ''))

print('Content-type: application/json; charset=utf-8\n')
print(json.dumps(filelistA))
