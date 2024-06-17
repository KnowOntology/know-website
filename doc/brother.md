---
sidebar_label: 👦 Brother
---

# 👦 Brother (property)

:::note
https://know.dev/brother
(`know:brother`)
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

know:brother a owl:ObjectProperty;
  rdfs:label "Brother"@en,
    "Veli"@fi;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:sibling;
  know:glyph "👦" .

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
  "@id": "know:brother",
  "@type": "owl:ObjectProperty",
  "rdfs:subPropertyOf": {
    "@id": "know:sibling"
  },
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:label": [
    {
      "@language": "en",
      "@value": "Brother"
    },
    {
      "@language": "fi",
      "@value": "Veli"
    }
  ],
  "know:glyph": "👦"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/brother">
    <rdfs:subPropertyOf rdf:resource="https://know.dev/sibling"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:label xml:lang="en">Brother</rdfs:label>
    <rdfs:label xml:lang="fi">Veli</rdfs:label>
    <know:glyph>👦</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
