---
sidebar_label: 🧑 Partner
---

# 🧑 Partner (property)

:::note
https://know.dev/partner
(`know:partner`)
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

know:partner a owl:ObjectProperty,
    owl:SymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Kumppani"@fi,
    "Partner"@en,
    "Partner"@sv;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf owl:topObjectProperty,
    know:knows;
  know:glyph "🧑" .

```

</TabItem>
</Tabs>
