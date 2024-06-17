---
sidebar_label: 👦 Stepson
---

# 👦 Stepson (property)

:::note
https://know.dev/stepson
(`know:stepson`)
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

know:stepson a owl:ObjectProperty,
    owl:AsymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Poikapuoli"@fi,
    "Stepson"@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:stepchild;
  know:glyph "👦" .

```

</TabItem>
</Tabs>
