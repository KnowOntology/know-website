---
sidebar_label: 🧒 Child
---

# 🧒 Child (property)

:::note
https://know.dev/child
(`know:child`)
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

know:child a owl:ObjectProperty,
    owl:AsymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Child"@en,
    "Lapsi"@fi;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:descendant;
  owl:inverseOf know:parent;
  owl:propertyDisjointWith know:parent;
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
  "@id": "know:child",
  "@type": [
    "owl:ObjectProperty",
    "owl:AsymmetricProperty",
    "owl:IrreflexiveProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:descendant"
  },
  "owl:inverseOf": {
    "@id": "know:parent"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "owl:propertyDisjointWith": {
    "@id": "know:parent"
  },
  "rdfs:label": [
    {
      "@language": "en",
      "@value": "Child"
    },
    {
      "@language": "fi",
      "@value": "Lapsi"
    }
  ],
  "know:glyph": "🧒"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/child">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AsymmetricProperty"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#IrreflexiveProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/descendant"/>
    <owl:inverseOf rdf:resource="https://know.dev/parent"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <owl:propertyDisjointWith rdf:resource="https://know.dev/parent"/>
    <rdfs:label xml:lang="en">Child</rdfs:label>
    <rdfs:label xml:lang="fi">Lapsi</rdfs:label>
    <know:glyph>🧒</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
