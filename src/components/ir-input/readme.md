# ir-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `containerStyle` | `container-style` |             | `string`  | `undefined` |
| `icon`           | `icon`            |             | `string`  | `undefined` |
| `inputId`        | `input-id`        |             | `string`  | `undefined` |
| `label`          | `label`           |             | `string`  | `''`        |
| `placeholder`    | `placeholder`     |             | `string`  | `undefined` |
| `required`       | `required`        |             | `boolean` | `undefined` |
| `type`           | `type`            |             | `string`  | `undefined` |
| `value`          | `value`           |             | `string`  | `undefined` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `ontextchange` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ir-login](../ir-login)
 - [ir-register](../ir-register)

### Graph
```mermaid
graph TD;
  ir-login --> ir-input
  ir-register --> ir-input
  style ir-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
