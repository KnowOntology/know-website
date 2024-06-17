---
sidebar_label: 🔣 Glyph
---

# 🔣 Glyph (property)

:::note
https://know.dev/glyph
(`know:glyph`)
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

know:glyph a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "Glyfi"@fi,
    "Glyph"@en;
  rdfs:domain know:Thing;
  rdfs:range xsd:string;
  rdfs:subPropertyOf owl:topObjectProperty;
  know:glyph "🔣" .

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
  "@id": "know:glyph",
  "@type": [
    "owl:DatatypeProperty",
    "owl:FunctionalProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "owl:topObjectProperty"
  },
  "rdfs:domain": {
    "@id": "know:Thing"
  },
  "rdfs:range": {
    "@id": "xsd:string"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Glyfi"
    },
    {
      "@language": "en",
      "@value": "Glyph"
    }
  ],
  "know:glyph": "🔣"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/glyph">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#FunctionalProperty"/>
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topObjectProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Thing"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:label xml:lang="fi">Glyfi</rdfs:label>
    <rdfs:label xml:lang="en">Glyph</rdfs:label>
    <know:glyph>🔣</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
