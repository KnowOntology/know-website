---
sidebar_label: 🏥 Hospital
---

# 🏥 Hospital (class)

:::note
https://know.dev/Hospital
(`know:Hospital`)
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

know:Hospital a owl:Class;
  rdfs:label "Hospital"@en;
  rdfs:subClassOf know:Place;
  owl:equivalentClass schema:Hospital;
  know:glyph "🏥" .

```

</TabItem>
</Tabs>

[`Hospital`]: /Hospital
