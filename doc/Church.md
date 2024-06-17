---
sidebar_label: ⛪ Church
---

# ⛪ Church (class)

:::note
https://know.dev/Church
(`know:Church`)
:::

## Properties

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
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:Church a owl:Class;
  rdfs:label "Church"@en,
    "Kirkko"@fi,
    "Kyrka"@sv;
  rdfs:subClassOf know:Temple;
  owl:equivalentClass schema:Church;
  know:glyph "⛪" .

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
  "@id": "know:Church",
  "@type": "owl:Class",
  "owl:equivalentClass": {
    "@id": "schema:Church"
  },
  "rdfs:subClassOf": {
    "@id": "know:Temple"
  },
  "rdfs:label": [
    {
      "@language": "en",
      "@value": "Church"
    },
    {
      "@language": "fi",
      "@value": "Kirkko"
    },
    {
      "@language": "sv",
      "@value": "Kyrka"
    }
  ],
  "know:glyph": "⛪"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:schema="https://schema.org/" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:Class rdf:about="https://know.dev/Church">
    <owl:equivalentClass rdf:resource="https://schema.org/Church"/>
    <rdfs:subClassOf rdf:resource="https://know.dev/Temple"/>
    <rdfs:label xml:lang="en">Church</rdfs:label>
    <rdfs:label xml:lang="fi">Kirkko</rdfs:label>
    <rdfs:label xml:lang="sv">Kyrka</rdfs:label>
    <know:glyph>⛪</know:glyph>
  </owl:Class>
</rdf:RDF>

```

</TabItem>
</Tabs>

[`Church`]: /Church
