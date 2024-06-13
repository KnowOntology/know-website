---
sidebar_label: SPARQL
sidebar_position: 4
---

# Getting Started with SPARQL

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Base URI & Prefix

When working with [SPARQL] queries, the ontology's base URI and recommended
prefix to use are the following:

<Tabs>
<TabItem value="sparql" label="SPARQL">

```sparql
PREFIX know: <https://know.dev/>
```

</TabItem>
</Tabs>

## Linked Data Endpoint

The ontology concepts can be dereferenced in [linked data] form, meaning
they can be easily used in SPARQL queries. Here follows an example using
the [Raptor RDF] toolkit and utilities to execute a SPARQL query:

<Tabs>
<TabItem value="roqet" label="roqet">

```console
$ roqet -e 'SELECT * FROM <https://know.dev/Thing> WHERE { ?s ?p ?o . }'
```

</TabItem>
</Tabs>

[linked data]: https://en.wikipedia.org/wiki/Linked_data
[Raptor RDF]: https://librdf.org/raptor/
[SPARQL]: https://en.wikipedia.org/wiki/SPARQL
