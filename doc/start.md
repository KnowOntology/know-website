---
sidebar_label: ▶️ Start
---

# ▶️ Start (property)

:::note
https://know.dev/start
(`know:start`)
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

know:start a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "Alku"@fi,
    "Start"@en,
    "Start"@sv;
  rdfs:domain know:Event;
  rdfs:range xsd:dateTime;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "▶️" .

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
  "@id": "know:start",
  "@type": [
    "owl:DatatypeProperty",
    "owl:FunctionalProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "owl:topDataProperty"
  },
  "rdfs:domain": {
    "@id": "know:Event"
  },
  "rdfs:range": {
    "@id": "xsd:dateTime"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Alku"
    },
    {
      "@language": "en",
      "@value": "Start"
    },
    {
      "@language": "sv",
      "@value": "Start"
    }
  ],
  "know:glyph": "▶️"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/start">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#FunctionalProperty"/>
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Event"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#dateTime"/>
    <rdfs:label xml:lang="fi">Alku</rdfs:label>
    <rdfs:label xml:lang="en">Start</rdfs:label>
    <rdfs:label xml:lang="sv">Start</rdfs:label>
    <know:glyph>▶️</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
