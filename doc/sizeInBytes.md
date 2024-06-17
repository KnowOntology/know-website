---
sidebar_label: 💾 Size in Bytes
---

# 💾 Size in Bytes (property)

:::note
https://know.dev/sizeInBytes
(`know:sizeInBytes`)
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

know:sizeInBytes a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "Koko tavuina"@fi,
    "Size in Bytes"@en,
    "Storlek i byte"@sv;
  rdfs:domain know:File;
  rdfs:range xsd:nonNegativeInteger;
  rdfs:subPropertyOf know:size;
  know:glyph "💾" .

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
  "@id": "know:sizeInBytes",
  "@type": [
    "owl:DatatypeProperty",
    "owl:FunctionalProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "know:size"
  },
  "rdfs:domain": {
    "@id": "know:File"
  },
  "rdfs:range": {
    "@id": "xsd:nonNegativeInteger"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Koko tavuina"
    },
    {
      "@language": "en",
      "@value": "Size in Bytes"
    },
    {
      "@language": "sv",
      "@value": "Storlek i byte"
    }
  ],
  "know:glyph": "💾"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/sizeInBytes">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#FunctionalProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/size"/>
    <rdfs:domain rdf:resource="https://know.dev/File"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#nonNegativeInteger"/>
    <rdfs:label xml:lang="fi">Koko tavuina</rdfs:label>
    <rdfs:label xml:lang="en">Size in Bytes</rdfs:label>
    <rdfs:label xml:lang="sv">Storlek i byte</rdfs:label>
    <know:glyph>💾</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
