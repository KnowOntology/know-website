---
sidebar_label: 👨 Stepfather
---

# 👨 Stepfather (property)

:::note
https://know.dev/stepfather
(`know:stepfather`)
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

know:stepfather a owl:ObjectProperty,
    owl:AsymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Isäpuoli"@fi,
    "Stepfather"@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:stepparent;
  know:glyph "👨" .

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
  "@id": "know:stepfather",
  "@type": [
    "owl:ObjectProperty",
    "owl:AsymmetricProperty",
    "owl:IrreflexiveProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:stepparent"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Isäpuoli"
    },
    {
      "@language": "en",
      "@value": "Stepfather"
    }
  ],
  "know:glyph": "👨"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/stepfather">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AsymmetricProperty"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#IrreflexiveProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/stepparent"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:label xml:lang="fi">Isäpuoli</rdfs:label>
    <rdfs:label xml:lang="en">Stepfather</rdfs:label>
    <know:glyph>👨</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
