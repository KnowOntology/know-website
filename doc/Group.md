---
sidebar_label: 🧑‍🤝‍🧑 Group
---

# 🧑‍🤝‍🧑 Group (class)

:::note
https://know.dev/Group
(`know:Group`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`logo`]          | Logo           | `xsd:anyURI`             |
| [`member`]        | Member         | [`Person`]               |

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

know:Group a owl:Class;
  rdfs:label "Group"@en;
  rdfs:subClassOf know:Thing;
  know:glyph "🧑‍🤝‍🧑" .

```

</TabItem>
</Tabs>

[`Group`]: /Group
[`Person`]: /Person
[`logo`]: /logo
[`member`]: /member
