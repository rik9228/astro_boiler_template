---
name: 'component'
description: 'Generate standard Astro component.'
root: 'src'
output: '**/*'
ignore: []
questions:
  module: 'enter directory name（Ex: Button, Drawer ..）'
  name: 'enter component name'
---

# `{{ inputs.module | pascal }}/{{ inputs.name | pascal }}.astro`

```astro
---

---

<></>
```

# `{{ inputs.module | pascal }}/{{ inputs.name | pascal }}.scss`

```scss
// ------------------------------------------- SASS Information
//  Name:      {{ inputs.name | pascal }}.scss
//  Description:
//  Author:    Riku Morishita
// -----------------------------------------------------------

@use '../../../styles/setting/' as *;
```
