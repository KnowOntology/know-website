---
sidebar_label: 🎖️ Honorific
---

# 🎖️ Honorific (property)

:::note
https://know.dev/honorific
(`know:honorific`)
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

know:honorific a owl:DatatypeProperty;
  rdfs:label "Hederstitel"@sv,
    "Honorific"@en,
    "Honortitolo"@eo,
    "Kunnianimike"@fi;
  rdfs:comment "The honorific title of this person, if known."@en;
  rdfs:domain know:Person;
  rdfs:range xsd:string;
  rdfs:subPropertyOf owl:topDataProperty;
  know:glyph "🎖️" .

```

</TabItem>
</Tabs>
