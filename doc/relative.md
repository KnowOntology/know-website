---
sidebar_label: 🧑 Relative
---

# 🧑 Relative (property)

:::note
https://know.dev/relative
(`know:relative`)
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

know:relative a owl:ObjectProperty,
    owl:SymmetricProperty,
    owl:TransitiveProperty,
    owl:ReflexiveProperty;
  rdfs:label "Relative"@en,
    "Släkting"@sv,
    "Sukulainen"@fi;
  rdfs:comment "A person connected by blood or marriage."@en;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf owl:topObjectProperty,
    know:knows;
  know:glyph "🧑" .

```

</TabItem>
</Tabs>
