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
</Tabs>
