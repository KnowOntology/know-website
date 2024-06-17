---
sidebar_label: 💬 Speaks
---

# 💬 Speaks (property)

:::note
https://know.dev/speaks
(`know:speaks`)
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

know:speaks a owl:DatatypeProperty;
  rdfs:label "Puhuu"@fi,
    "Speaks"@en,
    "Talar"@sv;
  rdfs:domain know:Person;
  rdfs:range xsd:language;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "💬" .

```

</TabItem>
</Tabs>
