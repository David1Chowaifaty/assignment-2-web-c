# ir-register



<!-- Auto Generated Below -->


## Events

| Event              | Description | Type                     |
| ------------------ | ----------- | ------------------------ |
| `linkLoginClicked` |             | `CustomEvent<any>`       |
| `registerClicked`  |             | `CustomEvent<IRegister>` |


## Dependencies

### Used by

 - [ir-login](../ir-login)

### Depends on

- [ir-card-header](../ir-card-header)
- [ir-input](../ir-input)
- [ir-button](../ir-button)
- [ir-link](../ir-link)

### Graph
```mermaid
graph TD;
  ir-register --> ir-card-header
  ir-register --> ir-input
  ir-register --> ir-button
  ir-register --> ir-link
  ir-login --> ir-register
  style ir-register fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
