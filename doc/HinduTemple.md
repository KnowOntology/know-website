---
sidebar_label: 🛕 Hindu Temple
---

# 🛕 Hindu Temple (class)

:::note
https://know.dev/HinduTemple
(`know:HinduTemple`)
:::

## Properties

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

know:HinduTemple a owl:Class;
  rdfs:label "Hindu Temple"@en;
  rdfs:subClassOf know:Temple;
  owl:equivalentClass schema:HinduTemple;
  know:glyph "🛕" .

```

</TabItem>
</Tabs>

[`HinduTemple`]: /HinduTemple
