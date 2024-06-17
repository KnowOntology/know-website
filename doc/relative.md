---
sidebar_label: 🧑 Relative
---

# 🧑 Relative (property)

:::note
https://know.dev/relative
(`know:relative`)
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

know:relative a owl:ObjectProperty,
    owl:SymmetricProperty,
    owl:TransitiveProperty,
    owl:ReflexiveProperty;
  rdfs:label "Relative"@en,
    "Släkting"@sv,
    "Sukulainen"@fi;
  rdfs:comment "A person connected by blood or marriage."@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf owl:topObjectProperty,
    know:knows;
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
  "@id": "know:relative",
  "@type": [
    "owl:ObjectProperty",
    "owl:SymmetricProperty",
    "owl:TransitiveProperty",
    "owl:ReflexiveProperty"
  ],
  "rdfs:subPropertyOf": [
    {
      "@id": "owl:topObjectProperty"
    },
    {
      "@id": "know:knows"
    }
  ],
  "rdfs:domain": {
    "@id": "know:Person"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:comment": {
    "@language": "en",
    "@value": "A person connected by blood or marriage."
  },
  "rdfs:label": [
    {
      "@language": "en",
      "@value": "Relative"
    },
    {
      "@language": "sv",
      "@value": "Släkting"
    },
    {
      "@language": "fi",
      "@value": "Sukulainen"
    }
  ],
  "know:glyph": "🧑"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/relative">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#SymmetricProperty"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#TransitiveProperty"/>
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#ReflexiveProperty"/>
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topObjectProperty"/>
    <rdfs:subPropertyOf rdf:resource="https://know.dev/knows"/>
    <rdfs:domain rdf:resource="https://know.dev/Person"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:comment xml:lang="en">A person connected by blood or marriage.</rdfs:comment>
    <rdfs:label xml:lang="en">Relative</rdfs:label>
    <rdfs:label xml:lang="sv">Släkting</rdfs:label>
    <rdfs:label xml:lang="fi">Sukulainen</rdfs:label>
    <know:glyph>🧑</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
