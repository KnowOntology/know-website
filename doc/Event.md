---
sidebar_label: 📅 Event
---

# 📅 Event (class)

:::note
https://know.dev/Event
(`know:Event`)
:::

## Properties

| Property          | Label (en)     | Range                    |
| :---------------- | :------------- | :----------------------- |
| [`end`]           | End            | `xsd:dateTime`           |
| [`place`]         | Place          | [`Place`]                |
| [`start`]         | Start          | `xsd:dateTime`           |

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

know:Event a owl:Class;
  rdfs:label "Event"@en;
  rdfs:subClassOf know:Thing;
  owl:equivalentClass schema:Event;
  know:glyph "📅" .

```

</TabItem>
</Tabs>

[`Event`]: /Event
[`Place`]: /Place
[`end`]: /end
[`place`]: /place
[`start`]: /start
