---
sidebar_label: 🔀 Alias
---

# 🔀 Alias (property)

:::note
https://know.dev/alias
(`know:alias`)
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

know:alias a owl:DatatypeProperty;
  rdfs:label "Alias"@en,
    "Alias"@fi,
    "Alias"@sv;
  rdfs:comment "An alias or nickname of this person, if known."@en;
  rdfs:domain know:Person;
  rdfs:range xsd:string;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🔀" .

```

</TabItem>
</Tabs>
