---
sidebar_label: ☸️ Buddhist Temple
---

# ☸️ Buddhist Temple (class)

:::note
https://know.dev/BuddhistTemple
(`know:BuddhistTemple`)
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

know:BuddhistTemple a owl:Class;
  rdfs:label "Buddhist Temple"@en;
  rdfs:subClassOf know:Temple;
  owl:equivalentClass schema:BuddhistTemple;
  know:glyph "☸️" .

```

</TabItem>
</Tabs>

[`BuddhistTemple`]: /BuddhistTemple
