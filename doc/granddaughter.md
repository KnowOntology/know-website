---
sidebar_label: 👧 Granddaughter
---

# 👧 Granddaughter (property)

:::note
https://know.dev/granddaughter
(`know:granddaughter`)
:::

## Specification

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="turtle" label="Turtle">

```turtle
@prefix know: <https://know.dev/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:granddaughter a owl:ObjectProperty,
    owl:AsymmetricProperty;
  rdfs:label "Granddaughter"@en,
    "Lapsentytär"@fi;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:grandchild;
  know:glyph "👧" .

```

</TabItem>
<TabItem value="jsonld" label="JSON-LD">

```json
{
  "@context": {
    "dcterms": "http://purl.org/dc/terms/",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "know": "https://know.dev/",
    "owl": "http://www.w3.org/2002/07/owl#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "schema": "https://schema.org/",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "know:granddaughter",
  "@type": [
    "owl:ObjectProperty",
    "owl:AsymmetricProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:grandchild"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:label": [
    {
      "@language": "en",
      "@value": "Granddaughter"
    },
    {
      "@language": "fi",
      "@value": "Lapsentytär"
    }
  ],
  "know:glyph": "👧"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/granddaughter">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AsymmetricProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/grandchild"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:label xml:lang="en">Granddaughter</rdfs:label>
    <rdfs:label xml:lang="fi">Lapsentytär</rdfs:label>
    <know:glyph>👧</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
