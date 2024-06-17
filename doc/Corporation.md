---
sidebar_label: 📃 Corporation
---

# 📃 Corporation (class)

:::note
https://know.dev/Corporation
(`know:Corporation`)
:::

## Properties

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
@prefix schema: <https://schema.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:Corporation a owl:Class;
  rdfs:label "Corporation"@en;
  rdfs:subClassOf know:Organization;
  owl:equivalentClass schema:Corporation;
  know:glyph "📃" .

```

</TabItem>
</Tabs>

[`Corporation`]: /Corporation
