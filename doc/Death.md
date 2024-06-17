---
sidebar_label: ⚰️ Death
---

# ⚰️ Death (class)

:::note
https://know.dev/Death
(`know:Death`)
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
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:Death a owl:Class;
  rdfs:label "Death"@en;
  rdfs:subClassOf know:Event;
  know:glyph "⚰️" .

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
  "@id": "know:Death",
  "@type": "owl:Class",
  "rdfs:subClassOf": {
    "@id": "know:Event"
  },
  "rdfs:label": {
    "@language": "en",
    "@value": "Death"
  },
  "know:glyph": "⚰️"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:Class rdf:about="https://know.dev/Death">
    <rdfs:subClassOf rdf:resource="https://know.dev/Event"/>
    <rdfs:label xml:lang="en">Death</rdfs:label>
    <know:glyph>⚰️</know:glyph>
  </owl:Class>
</rdf:RDF>

```

</TabItem>
</Tabs>

[`Death`]: /Death
