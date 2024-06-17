---
sidebar_label: 🧑 Spouse
---

# 🧑 Spouse (property)

:::note
https://know.dev/spouse
(`know:spouse`)
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

know:spouse a owl:ObjectProperty,
    owl:SymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Puoliso"@fi,
    "Spouse"@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:partner,
    know:relative;
  know:glyph "🧑" .

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
  "@id": "know:spouse",
  "@type": [
    "owl:ObjectProperty",
    "owl:SymmetricProperty",
    "owl:IrreflexiveProperty"
  ],
  "rdfs:subPropertyOf": [
    {
      "@id": "know:partner"
    },
    {
      "@id": "know:relative"
    }
  ],
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Puoliso"
    },
    {
      "@language": "en",
      "@value": "Spouse"
    }
  ],
  "know:glyph": "🧑"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/spouse">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#SymmetricProperty"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#IrreflexiveProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/partner"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/relative"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:label xml:lang="fi">Puoliso</rdfs:label>
    <rdfs:label xml:lang="en">Spouse</rdfs:label>
    <know:glyph>🧑</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
