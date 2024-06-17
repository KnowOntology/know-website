---
sidebar_label: 🧑‍🤝‍🧑 Member
---

# 🧑‍🤝‍🧑 Member (property)

:::note
https://know.dev/member
(`know:member`)
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

know:member a owl:ObjectProperty;
  rdfs:label "Jäsen"@fi,
    "Medlem"@sv,
    "Member"@en;
  rdfs:domain know:Group;
  rdfs:range know:Person;
  rdfs:subPropertyOf owl:topObjectProperty;
  owl:inverseOf know:memberOf;
  know:glyph "🧑‍🤝‍🧑" .

```

</TabItem>
</Tabs>
