---
sidebar_label: 👦 Sibling
---

# 👦 Sibling (property)

:::note
https://know.dev/sibling
(`know:sibling`)
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

know:sibling a owl:ObjectProperty,
    owl:SymmetricProperty;
  rdfs:label "Sibling"@en,
    "Sisarus"@fi;
  rdfs:domain know:Person;
  rdfs:range know:Person;
  rdfs:subPropertyOf know:relative;
  know:glyph "👦" .

```

</TabItem>
</Tabs>
