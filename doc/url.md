---
sidebar_label: 🔗 URL
---

# 🔗 URL (property)

:::note
https://know.dev/url
(`know:url`)
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

know:url a owl:DatatypeProperty,
    owl:FunctionalProperty;
  rdfs:label "LRU"@es,
    "URL"@de,
    "URL"@en,
    "URL"@eo,
    "URL"@pt,
    "URL"@sv,
    "URL"@tr,
    "URL-osoite"@fi,
    "URL-адреси"@uk,
    "محدد موقع الموارد الموحد"@ar;
  rdfs:domain know:Link;
  rdfs:range xsd:anyURI;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🔗" .

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
  "@id": "know:url",
  "@type": [
    "owl:DatatypeProperty",
    "owl:FunctionalProperty"
  ],
  "rdfs:subPropertyOf": {
    "@id": "owl:topDataProperty"
  },
  "rdfs:domain": {
    "@id": "know:Link"
  },
  "rdfs:range": {
    "@id": "xsd:anyURI"
  },
  "rdfs:label": [
    {
      "@language": "es",
      "@value": "LRU"
    },
    {
      "@language": "de",
      "@value": "URL"
    },
    {
      "@language": "en",
      "@value": "URL"
    },
    {
      "@language": "eo",
      "@value": "URL"
    },
    {
      "@language": "pt",
      "@value": "URL"
    },
    {
      "@language": "sv",
      "@value": "URL"
    },
    {
      "@language": "tr",
      "@value": "URL"
    },
    {
      "@language": "fi",
      "@value": "URL-osoite"
    },
    {
      "@language": "uk",
      "@value": "URL-адреси"
    },
    {
      "@language": "ar",
      "@value": "محدد موقع الموارد الموحد"
    }
  ],
  "know:glyph": "🔗"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/url">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#FunctionalProperty"/>
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Link"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#anyURI"/>
    <rdfs:label xml:lang="es">LRU</rdfs:label>
    <rdfs:label xml:lang="de">URL</rdfs:label>
    <rdfs:label xml:lang="en">URL</rdfs:label>
    <rdfs:label xml:lang="eo">URL</rdfs:label>
    <rdfs:label xml:lang="pt">URL</rdfs:label>
    <rdfs:label xml:lang="sv">URL</rdfs:label>
    <rdfs:label xml:lang="tr">URL</rdfs:label>
    <rdfs:label xml:lang="fi">URL-osoite</rdfs:label>
    <rdfs:label xml:lang="uk">URL-адреси</rdfs:label>
    <rdfs:label xml:lang="ar">محدد موقع الموارد الموحد</rdfs:label>
    <know:glyph>🔗</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
