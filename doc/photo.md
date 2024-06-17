---
sidebar_label: 📷 Photo
---

# 📷 Photo (property)

:::note
https://know.dev/photo
(`know:photo`)
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

know:photo a owl:DatatypeProperty;
  rdfs:label "Foto"@sv,
    "Photo"@en,
    "Valokuva"@fi;
  rdfs:domain know:Thing;
  rdfs:range xsd:anyURI;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "📷" .

```

</TabItem>
</Tabs>
