---
sidebar_label: ∃ Thing
---

# ∃ Thing (class)

:::note
https://know.dev/Thing
(`know:Thing`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`glyph`]         | Glyph          | `xsd:string`             |
| [`id`]            | Identifier     | `xsd:string`             |
| [`link`]          | Link           | [`Link`]                 |
| [`name`]          | Name           | `xsd:string`             |
| [`note`]          | Note           | `xsd:string`             |
| [`photo`]         | Photo          | `xsd:anyURI`             |
| [`size`]          | Size           | `xsd:string`             |

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
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:Thing a owl:Class;
  rdfs:label "Afero"@eo,
    "Asia"@fi,
    "Coisa"@pt,
    "Cosa"@es,
    "Ding"@de,
    "Sak"@sv,
    "Thing"@en,
    "Şey"@tr,
    "Річ"@uk,
    "شيء"@ar;
  rdfs:subClassOf owl:Thing;
  owl:equivalentClass schema:Thing;
  know:glyph "∃" .

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
  "@id": "know:Thing",
  "@type": "owl:Class",
  "owl:equivalentClass": {
    "@id": "schema:Thing"
  },
  "rdfs:subClassOf": {
    "@id": "owl:Thing"
  },
  "rdfs:label": [
    {
      "@language": "eo",
      "@value": "Afero"
    },
    {
      "@language": "fi",
      "@value": "Asia"
    },
    {
      "@language": "pt",
      "@value": "Coisa"
    },
    {
      "@language": "es",
      "@value": "Cosa"
    },
    {
      "@language": "de",
      "@value": "Ding"
    },
    {
      "@language": "sv",
      "@value": "Sak"
    },
    {
      "@language": "en",
      "@value": "Thing"
    },
    {
      "@language": "tr",
      "@value": "Şey"
    },
    {
      "@language": "uk",
      "@value": "Річ"
    },
    {
      "@language": "ar",
      "@value": "شيء"
    }
  ],
  "know:glyph": "∃"
}
```

</TabItem>
<TabItem value="rdfxml" label="RDF/XML">

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:know="https://know.dev/" xmlns:owl="http://www.w3.org/2002/07/owl#" xmlns:schema="https://schema.org/" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#">
  <owl:Class rdf:about="https://know.dev/Thing">
    <owl:equivalentClass rdf:resource="https://schema.org/Thing"/>
    <rdfs:subClassOf rdf:resource="http://www.w3.org/2002/07/owl#Thing"/>
    <rdfs:label xml:lang="eo">Afero</rdfs:label>
    <rdfs:label xml:lang="fi">Asia</rdfs:label>
    <rdfs:label xml:lang="pt">Coisa</rdfs:label>
    <rdfs:label xml:lang="es">Cosa</rdfs:label>
    <rdfs:label xml:lang="de">Ding</rdfs:label>
    <rdfs:label xml:lang="sv">Sak</rdfs:label>
    <rdfs:label xml:lang="en">Thing</rdfs:label>
    <rdfs:label xml:lang="tr">Şey</rdfs:label>
    <rdfs:label xml:lang="uk">Річ</rdfs:label>
    <rdfs:label xml:lang="ar">شيء</rdfs:label>
    <know:glyph>∃</know:glyph>
  </owl:Class>
</rdf:RDF>

```

</TabItem>
</Tabs>

[`Link`]: /Link
[`Thing`]: /Thing
[`glyph`]: /glyph
[`id`]: /id
[`link`]: /link
[`name`]: /name
[`note`]: /note
[`photo`]: /photo
[`size`]: /size
