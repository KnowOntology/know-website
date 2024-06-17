---
sidebar_label: 📃 Company
---

# 📃 Company (class)

:::note
https://know.dev/Company
(`know:Company`)
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
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

know:Company a owl:Class;
  rdfs:label "Company"@en;
  rdfs:subClassOf know:Organization;
  know:glyph "📃" .

```

</TabItem>
</Tabs>

[`Company`]: /Company
