import json
import numpy
from sklearn.cluster import SpectralClustering

with open("facebook_1912.json", "rb") as f:
    graph = json.load(f)

matrix = numpy.zeros([ len(graph["nodes"]), len(graph["nodes"]) ])

for e in graph["edges"]:
    matrix[e["source"], e["target"]] = 1
    matrix[e["target"], e["source"]] = 1

c = SpectralClustering(affinity = "precomputed")

clusters = c.fit_predict(matrix)

with open("facebook_1912_clusters.json", "wb") as f:
    for node, c in zip(graph["nodes"], clusters):
        node["cluster"] = int(c)
    json.dump(graph, f)

