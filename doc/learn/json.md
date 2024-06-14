---
sidebar_label: JSON
sidebar_position: 1
---

# Getting Started with JSON

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## The JSON Schema

The [JSON Schema] for the ontology is available at
[know.dev/know.schema.json](https://know.dev/know.schema.json).

## Downloading the Schema

<Tabs>
<TabItem value="curl" label="curl">

```curl
$ curl -O https://know.dev/know.schema.json
```

</TabItem>
<TabItem value="wget" label="wget">

```wget
$ wget https://know.dev/know.schema.json
```

</TabItem>
</Tabs>

## Using the Schema

```json title="person.schema.json"
{
  "$id": "https://example.org/person.schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Person",
  "type": "object",
  "$ref": "https://know.dev/know.schema.json#Person"
}
```

## Validating JSON Data

```json title="person.json"
{
  "name": "J. Random Hacker",
  "age": 35,
  "emails": [
    "jhacker@example.org",
    "jhacker@example.com"
  ]
}
```

<Tabs>
<TabItem value="jv" label="jv">

```console
$ jv person.schema.json person.json
```

Install the `jv` tool from the
[santhosh-tekuri/jsonschema](https://github.com/santhosh-tekuri/jsonschema)
repository on GitHub.

</TabItem>
</Tabs>

## Importing the Schema

```json title="my_schema.json"
{
  "$id": "https://example.org/my.schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  ...
}
```

## Extending the Schema

```json title="my_schema.json"
{
  "$id": "https://example.org/my.schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Member",
  "type": "object",
  "allOf": [
    {
      "$ref": "https://know.dev/know.schema.json#Person"
    },
    {
      "properties": {
        "memberID": {
          "title": "Member ID",
          "type": "string"
        }
      },
      "required": ["memberID"]
    }
  ]
}
```

[JSON Schema]: https://json-schema.org
