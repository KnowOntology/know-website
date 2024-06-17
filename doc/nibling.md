---
sidebar_label: 🧒 Nibling
---

# 🧒 Nibling (property)

:::note
https://know.dev/nibling
(`know:nibling`)
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

know:nibling a owl:ObjectProperty,
    owl:AsymmetricProperty;
  rdfs:label "Nibling"@en;
  rdfs:comment "Niece or nephew."@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:relative;
  owl:inverseOf know:pibling;
  know:glyph "🧒" .

```

</TabItem>
</Tabs>
