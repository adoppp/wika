# wika.

## Table of contents
* [Tailwind](#Tailwind)
* [svg](#svg)

## Tailwind

For use you need to make a space in a className string

```ruby
<Component className=' wk_bg-hotPink_300 '>
    Content
</Component>
```

## svg

### First step:

You need to import your svg in 'utils/svg/imports.ts'

### Second step:

You need to add name of svg to literal type:

```ruby
type Svg =
    'burgerMenu' |
    'globe' |
    'handshake' |
    'apple' |
    'codeMentor' |
    'HERE;
```

### Third step:

add your svg in object:

```ruby
const svg: Readonly<SvgTypes>= {
    burgerMenu: <BurgerMenu />,
    globe: <Globe />,
    handshake: <Handshake />,
    apple: <Apple />,
    codeMentor: <CodeMentor />,
    HERE: <HERE />
};
```

### Fourth step:

import and use!

```ruby
import { svg } from "@/app/utils";

...

export default function Component() {
    return (
        <button>
            {svg.burgerMenu}
        </button>
    )
};
```
