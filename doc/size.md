---
sidebar_label: 📏 Size
---

# 📏 Size (property)

:::note
https://know.dev/size
(`know:size`)
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

know:size a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "Koko"@fi,
    "Size"@en,
    "Storlek"@sv;
  rdfs:domain know:Thing;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "📏" .

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
  "@id": "know:size",
  "@type": [
    "owl:DatatypeProperty",
    "owl:FunctionalProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "owl:topDataProperty"
  },
  "rdfs:domain": {
    "@id": "know:Thing"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Koko"
    },
    {
      "@language": "en",
      "@value": "Size"
    },
    {
      "@language": "sv",
      "@value": "Storlek"
    }
  ],
  "know:glyph": "📏"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/size">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#FunctionalProperty"/>
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Thing"/>
    <rdfs:label xml:lang="fi">Koko</rdfs:label>
    <rdfs:label xml:lang="en">Size</rdfs:label>
    <rdfs:label xml:lang="sv">Storlek</rdfs:label>
    <know:glyph>📏</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
