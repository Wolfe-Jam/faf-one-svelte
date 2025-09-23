# FafLogo Component Usage Guide 🧡

## Quick Start

```svelte
import FafLogo from '$lib/components/FafLogo.svelte';

<FafLogo size="medium" color="black" />
```

## Size Chart

| Size     | Dot Size | Font Size | Use Case                          |
|----------|----------|-----------|-----------------------------------|
| `tiny`   | 20px     | 2.5rem    | Navigation bars, small headers    |
| `small`  | 30px     | 4rem      | Footers, cards, compact spaces   |
| `medium` | 60px     | 8.8rem    | Splash screens, section headers  |
| `large`  | 80px     | 12rem     | Hero sections, main branding     |
| `huge`   | 100px    | 16rem     | Maximum impact, special pages    |

## Props

| Prop              | Type    | Default   | Description                                |
|-------------------|---------|-----------|---------------------------------------------|
| `size`            | string  | 'medium'  | Preset size or custom object              |
| `color`           | string  | 'white'   | Text color (white/black/orange/cyan)      |
| `dotColor`        | string  | 'orange'  | Smiley dot color                          |
| `animated`        | boolean | false     | Enable zoom-in animation                  |
| `animationDelay`  | number  | 1500      | Delay before letters appear (ms)          |
| `showLettersDelay`| number  | 500       | Delay between each letter (ms)            |
| `dotOnly`         | boolean | false     | Show only the smiley dot                  |
| `className`       | string  | ''        | Additional CSS classes                    |

## Common Usage Examples

### Navigation Bar
```svelte
<FafLogo size="tiny" color="black" />
```

### Hero Section
```svelte
<FafLogo size="large" color="black" />
```

### Footer
```svelte
<FafLogo size="small" color="orange" />
```

### Splash Screen (Animated)
```svelte
<FafLogo 
  size="medium" 
  color="white" 
  animated={true}
  animationDelay={1500}
/>
```

### Custom Size
```svelte
<FafLogo 
  size={{ 
    dot: 50,     // px
    font: 7,     // rem
    gap: 1,      // rem (space between dot and text)
    lift: -1.2   // rem (vertical adjustment)
  }}
  color="black"
/>
```

### Mixed Colors
```svelte
<FafLogo 
  size="medium"
  color="white"      // Text color
  dotColor="cyan"    // Dot color
/>
```

### Dot Only (Minimal)
```svelte
<FafLogo 
  size="large" 
  dotOnly={true}
/>
```

## Current Site Usage

- **Navigation** (`/src/lib/components/Navigation.svelte`): `size="tiny"` 
- **Hero** (`/src/lib/components/Hero.svelte`): `size="large"`
- **Footer** (`/src/lib/components/Footer.svelte`): `size="small"`
- **Splash** (`/src/routes/+page.svelte`): `size="medium"` with animation

## Animation Sequence

When `animated={true}`:
1. Smiley dot zooms in from 10x scale (1.2s)
2. First "f" appears (after `animationDelay`)
3. "a" appears (after `showLettersDelay`)
4. Second "f" appears (after `showLettersDelay`)

Total animation time: ~2.5-3 seconds

## Color Options

### Preset Colors
- `white` - var(--faf-white)
- `black` - var(--faf-black)
- `orange` - var(--faf-orange) #FF6B35
- `cyan` - var(--faf-cyan)
- `cream` - var(--faf-cream)

### Custom Colors
You can also pass any valid CSS color:
```svelte
<FafLogo color="#FF6B35" dotColor="#00F3FF" />
```

## Demo Page

Visit `/logo-demo` to see all variations in action!

---

**Remember**: The dot IS the period in ".faf" - it's not decoration, it's punctuation! 🧡