---
sidebar_label: 💬 Speaks
---

# 💬 Speaks (property)

:::note
https://know.dev/speaks
(`know:speaks`)
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

know:speaks a owl:DatatypeProperty;
  rdfs:label "Puhuu"@fi,
    "Speaks"@en,
    "Talar"@sv;
  rdfs:domain know:Person;
  rdfs:range xsd:language;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "💬" .

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
  "@id": "know:speaks",
  "@type": "owl:DatatypeProperty",
  "rdfs:subPropertyOf": {
    "@id": "owl:topDataProperty"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "xsd:language"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Puhuu"
    },
    {
      "@language": "en",
      "@value": "Speaks"
    },
    {
      "@language": "sv",
      "@value": "Talar"
    }
  ],
  "know:glyph": "💬"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/speaks">
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#language"/>
    <rdfs:label xml:lang="fi">Puhuu</rdfs:label>
    <rdfs:label xml:lang="en">Speaks</rdfs:label>
    <rdfs:label xml:lang="sv">Talar</rdfs:label>
    <know:glyph>💬</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
