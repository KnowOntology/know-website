---
sidebar_label: 👨 Husband
---

# 👨 Husband (property)

:::note
https://know.dev/husband
(`know:husband`)
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

know:husband a owl:ObjectProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Aviomies"@fi,
    "Husband"@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:spouse;
  know:glyph "👨" .

```

</TabItem>
</Tabs>
