---
sidebar_label: 🧑 Pibling
---

# 🧑 Pibling (property)

:::note
https://know.dev/pibling
(`know:pibling`)
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

know:pibling a owl:ObjectProperty,
    owl:AsymmetricProperty;
  rdfs:label "Pibling"@en;
  rdfs:comment "Parent's sibling (aunt or uncle)."@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:relative;
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
  "@id": "know:pibling",
  "@type": [
    "owl:ObjectProperty",
    "owl:AsymmetricProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:relative"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:comment": {
    "@language": "en",
    "@value": "Parent's sibling (aunt or uncle)."
  },
  "rdfs:label": {
    "@language": "en",
    "@value": "Pibling"
  },
  "know:glyph": "🧑"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/pibling">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#AsymmetricProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/relative"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:comment xml:lang="en">Parent's sibling (aunt or uncle).</rdfs:comment>
    <rdfs:label xml:lang="en">Pibling</rdfs:label>
    <know:glyph>🧑</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
