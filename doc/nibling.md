---
sidebar_label: 🧒 Nibling
---

# 🧒 Nibling (property)

:::note
https://know.dev/nibling
(`know:nibling`)
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

know:nibling a owl:ObjectProperty,
    owl:AsymmetricProperty;
  rdfs:label "Nibling"@en;
  rdfs:comment "Niece or nephew."@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:relative;
  owl:inverseOf know:pibling;
  know:glyph "🧒" .

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
  "@id": "know:nibling",
  "@type": [
    "owl:ObjectProperty",
    "owl:AsymmetricProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:relative"
  },
  "owl:inverseOf": {
    "@id": "know:pibling"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:comment": {
    "@language": "en",
    "@value": "Niece or nephew."
  },
  "rdfs:label": {
    "@language": "en",
    "@value": "Nibling"
  },
  "know:glyph": "🧒"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/nibling">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AsymmetricProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/relative"/>
    <owl:inverseOf rdf:resource="https://know.dev/pibling"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:comment xml:lang="en">Niece or nephew.</rdfs:comment>
    <rdfs:label xml:lang="en">Nibling</rdfs:label>
    <know:glyph>🧒</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
