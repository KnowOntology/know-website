---
sidebar_label: 🧑‍🤝‍🧑 Member
---

# 🧑‍🤝‍🧑 Member (property)

:::note
https://know.dev/member
(`know:member`)
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

know:member a owl:ObjectProperty;
  rdfs:label "Jäsen"@fi,
    "Medlem"@sv,
    "Member"@en;
  rdfs:domain know:Group;
  rdfs:range know:Person;
  rdfs:subPropertyOf owl:topObjectProperty;
  owl:inverseOf know:memberOf;
  know:glyph "🧑‍🤝‍🧑" .

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
  "@id": "know:member",
  "@type": "owl:ObjectProperty",
  "rdfs:subPropertyOf": {
    "@id": "owl:topObjectProperty"
  },
  "owl:inverseOf": {
    "@id": "know:memberOf"
  },
  "rdfs:domain": {
    "@id": "know:Group"
  },
  "rdfs:range": {
    "@id": "know:Person"
  },
  "rdfs:label": [
    {
      "@language": "fi",
      "@value": "Jäsen"
    },
    {
      "@language": "sv",
      "@value": "Medlem"
    },
    {
      "@language": "en",
      "@value": "Member"
    }
  ],
  "know:glyph": "🧑‍🤝‍🧑"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:ObjectProperty rdf:about="https://know.dev/member">
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topObjectProperty"/>
    <owl:inverseOf rdf:resource="https://know.dev/memberOf"/>
    <rdfs:domain rdf:resource="https://know.dev/Group"/>
    <rdfs:range rdf:resource="https://know.dev/Person"/>
    <rdfs:label xml:lang="fi">Jäsen</rdfs:label>
    <rdfs:label xml:lang="sv">Medlem</rdfs:label>
    <rdfs:label xml:lang="en">Member</rdfs:label>
    <know:glyph>🧑‍🤝‍🧑</know:glyph>
  </owl:ObjectProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
