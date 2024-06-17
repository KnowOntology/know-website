---
sidebar_label: 👨 Husband
---

# 👨 Husband (property)

:::note
https://know.dev/husband
(`know:husband`)
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

know:husband a owl:ObjectProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Aviomies"@fi,
    "Husband"@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:spouse;
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
  "@id": "know:husband",
  "@type": [
    "owl:ObjectProperty",
    "owl:IrreflexiveProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:spouse"
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
      "@value": "Aviomies"
    },
    {
      "@language": "en",
      "@value": "Husband"
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
  <owl:ObjectProperty rdf:about="https://know.dev/husband">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#IrreflexiveProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/spouse"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:label xml:lang="fi">Aviomies</rdfs:label>
    <rdfs:label xml:lang="en">Husband</rdfs:label>
    <know:glyph>👨</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
