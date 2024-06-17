---
sidebar_label: 🍻 Meetup
---

# 🍻 Meetup (class)

:::note
https://know.dev/Meetup
(`know:Meetup`)
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

know:Meetup a owl:Class;
  rdfs:label "Meetup"@en;
  rdfs:subClassOf know:Meeting;
  know:glyph "🍻" .

```

</TabItem>
</Tabs>

[`Meetup`]: /Meetup
