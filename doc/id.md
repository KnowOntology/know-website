---
sidebar_label: 🆔 Identifier
---

# 🆔 Identifier (property)

:::note
https://know.dev/id
(`know:id`)
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

know:id a owl:DatatypeProperty;
  rdfs:label "Identificador"@es,
    "Identificador"@pt,
    "Identifier"@en,
    "Identifierare"@sv,
    "Identifikator"@de,
    "Identilo"@eo,
    "Kimlik"@tr,
    "Tunniste"@fi,
    "Ідентифікатор"@uk,
    "معرف"@ar;
  rdfs:domain know:Thing;
  rdfs:range xsd:string;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🆔" .

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
  "@id": "know:id",
  "@type": "owl:DatatypeProperty",
  "rdfs:subPropertyOf": {
    "@id": "owl:topDataProperty"
  },
  "rdfs:domain": {
    "@id": "know:Thing"
  },
  "rdfs:range": {
    "@id": "xsd:string"
  },
  "rdfs:label": [
    {
      "@language": "es",
      "@value": "Identificador"
    },
    {
      "@language": "pt",
      "@value": "Identificador"
    },
    {
      "@language": "en",
      "@value": "Identifier"
    },
    {
      "@language": "sv",
      "@value": "Identifierare"
    },
    {
      "@language": "de",
      "@value": "Identifikator"
    },
    {
      "@language": "eo",
      "@value": "Identilo"
    },
    {
      "@language": "tr",
      "@value": "Kimlik"
    },
    {
      "@language": "fi",
      "@value": "Tunniste"
    },
    {
      "@language": "uk",
      "@value": "Ідентифікатор"
    },
    {
      "@language": "ar",
      "@value": "معرف"
    }
  ],
  "know:glyph": "🆔"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/id">
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Thing"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:label xml:lang="es">Identificador</rdfs:label>
    <rdfs:label xml:lang="pt">Identificador</rdfs:label>
    <rdfs:label xml:lang="en">Identifier</rdfs:label>
    <rdfs:label xml:lang="sv">Identifierare</rdfs:label>
    <rdfs:label xml:lang="de">Identifikator</rdfs:label>
    <rdfs:label xml:lang="eo">Identilo</rdfs:label>
    <rdfs:label xml:lang="tr">Kimlik</rdfs:label>
    <rdfs:label xml:lang="fi">Tunniste</rdfs:label>
    <rdfs:label xml:lang="uk">Ідентифікатор</rdfs:label>
    <rdfs:label xml:lang="ar">معرف</rdfs:label>
    <know:glyph>🆔</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
