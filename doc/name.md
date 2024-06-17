---
sidebar_label: 🎫 Name
---

# 🎫 Name (property)

:::note
https://know.dev/name
(`know:name`)
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

know:name a owl:DatatypeProperty;
  rdfs:label "Ad"@tr,
    "Name"@de,
    "Name"@en,
    "Namn"@sv,
    "Nimi"@fi,
    "Nombre"@es,
    "Nome"@pt,
    "Nomo"@eo,
    "Назва"@uk,
    "اسم"@ar;
  rdfs:domain know:Thing;
  rdfs:range xsd:string;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🎫" .

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
  "@id": "know:name",
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
      "@language": "tr",
      "@value": "Ad"
    },
    {
      "@language": "de",
      "@value": "Name"
    },
    {
      "@language": "en",
      "@value": "Name"
    },
    {
      "@language": "sv",
      "@value": "Namn"
    },
    {
      "@language": "fi",
      "@value": "Nimi"
    },
    {
      "@language": "es",
      "@value": "Nombre"
    },
    {
      "@language": "pt",
      "@value": "Nome"
    },
    {
      "@language": "eo",
      "@value": "Nomo"
    },
    {
      "@language": "uk",
      "@value": "Назва"
    },
    {
      "@language": "ar",
      "@value": "اسم"
    }
  ],
  "know:glyph": "🎫"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <owl:DatatypeProperty rdf:about="https://know.dev/name">
    <rdfs:subPropertyOf rdf:resource="http://www.w3.org/2002/07/owl#topDataProperty"/>
    <rdfs:domain rdf:resource="https://know.dev/Thing"/>
    <rdfs:range rdf:resource="http://www.w3.org/2001/XMLSchema#string"/>
    <rdfs:label xml:lang="tr">Ad</rdfs:label>
    <rdfs:label xml:lang="de">Name</rdfs:label>
    <rdfs:label xml:lang="en">Name</rdfs:label>
    <rdfs:label xml:lang="sv">Namn</rdfs:label>
    <rdfs:label xml:lang="fi">Nimi</rdfs:label>
    <rdfs:label xml:lang="es">Nombre</rdfs:label>
    <rdfs:label xml:lang="pt">Nome</rdfs:label>
    <rdfs:label xml:lang="eo">Nomo</rdfs:label>
    <rdfs:label xml:lang="uk">Назва</rdfs:label>
    <rdfs:label xml:lang="ar">اسم</rdfs:label>
    <know:glyph>🎫</know:glyph>
  </owl:DatatypeProperty>
</rdf:RDF>

```

</TabItem>
</Tabs>
