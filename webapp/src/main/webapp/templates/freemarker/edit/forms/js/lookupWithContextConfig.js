var lookupConfig = {
existingValuesQuery : "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>  SELECT ?object ?label WHERE {?subject ?predicate ?object . ?object rdfs:label ?label .} ORDER BY ?label"
};