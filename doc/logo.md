---
sidebar_label: 🔶 Logo
---

# 🔶 Logo (property)

:::note
https://know.dev/logo
(`know:logo`)
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

know:logo a owl:DatatypeProperty;
  rdfs:label "Logo"@en,
    "Logo"@fi,
    "Logo"@sv;
  rdfs:domain know:Group;
  rdfs:range xsd:anyURI;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🔶" .

```

</TabItem>
</Tabs>
