---
sidebar_label: 🧒 Child
---

# 🧒 Child (property)

:::note
https://know.dev/child
(`know:child`)
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

know:child a owl:ObjectProperty,
    owl:AsymmetricProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Child"@en,
    "Lapsi"@fi;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:descendant;
  owl:inverseOf know:parent;
  owl:propertyDisjointWith know:parent;
  know:glyph "🧒" .

```

</TabItem>
</Tabs>
