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
</Tabs>
