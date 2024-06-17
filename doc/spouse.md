---
sidebar_label: 🧑 Spouse
---

# 🧑 Spouse (property)

:::note
https://know.dev/spouse
(`know:spouse`)
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

know:spouse a owl:ObjectProperty,
    owl:SymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Puoliso"@fi,
    "Spouse"@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:partner,
    know:relative;
  know:glyph "🧑" .

```

</TabItem>
</Tabs>
