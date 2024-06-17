---
sidebar_label: 🎗️ Member Of
---

# 🎗️ Member Of (property)

:::note
https://know.dev/memberOf
(`know:memberOf`)
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

know:memberOf a owl:ObjectProperty,
    owl:TransitiveProperty,
    owl:IrreflexiveProperty;
  rdfs:label "Jäsenyys"@fi,
    "Medlemskap"@sv,
    "Member Of"@en;
  rdfs:domain know:Person;
  rdfs:range know:Group;
  rdfs:subPropertyOf owl:topObjectProperty;
  know:glyph "🎗️" .

```

</TabItem>
</Tabs>
