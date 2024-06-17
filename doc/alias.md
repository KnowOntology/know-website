---
sidebar_label: 🔀 Alias
---

# 🔀 Alias (property)

:::note
https://know.dev/alias
(`know:alias`)
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

know:alias a owl:DatatypeProperty;
  rdfs:label "Alias"@en,
    "Alias"@fi,
    "Alias"@sv;
  rdfs:comment "An alias or nickname of this person, if known."@en;
  rdfs:domain know:Person;
  rdfs:range xsd:string;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🔀" .

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
  "@id": "know:alias",
  "@type": "owl:DatatypeProperty",
  "rdfs:subPropertyOf": {
    "@id": "owl:topDataProperty"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "xsd:string"
  },
  "rdfs:comment": {
    "@language": "en",
    "@value": "An alias or nickname of this person, if known."
  },
  "rdfs:label": [
    {
      "@language": "en",
      "@value": "Alias"
    },
    {
      "@language": "fi",
      "@value": "Alias"
    },
    {
      "@language": "sv",
      "@value": "Alias"
    }
  ],
  "know:glyph": "🔀"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/alias">
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:comment xml:lang="en">An alias or nickname of this person, if known.</rdfs:comment>
    <rdfs:label xml:lang="en">Alias</rdfs:label>
    <rdfs:label xml:lang="fi">Alias</rdfs:label>
    <rdfs:label xml:lang="sv">Alias</rdfs:label>
    <know:glyph>🔀</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
