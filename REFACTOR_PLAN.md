# Risk Assessment Svelte Refactor Plan

## Current Issues
- 800+ lines in single component
- Extensive inline styles
- Massive CSS section (~500 lines)
- Not using Svelte's class: directive properly
- No component extraction

## Attack Order

### Phase 1: Component Extraction
Create reusable components:

1. **RiskSlider.svelte**
   - Props: label, value, min, max, step, color, helpText
   - Emits: change event
   - Handles own styling

2. **ImpactDisplay.svelte**
   - Props: multiplier, delayDays
   - Dynamic background (black/red based on delay)
   - Shows multiplier and days late

3. **QualityIndicator.svelte**
   - Props: context
   - Returns quality level, emoji, color
   - Encapsulates quality logic

4. **ComparisonCard.svelte**
   - Props: title, stats, quality, variant (current/optimal)
   - Reusable for both comparison cards

5. **ContextPreview.svelte**
   - Props: aiContext
   - Shows bullet points based on context
   - Self-contained styling

6. **MetricCard.svelte**
   - Props: emoji, label, value
   - For the impact grid items

### Phase 2: Style Refactoring

1. Replace inline styles with class: directives
   - `class:delayed={delayDays > 0}`
   - `class:active={condition}`
   - `class:on-time={delayDays === 0}`

2. Use CSS custom properties for dynamic values
   - `--delay-color: {delayDays > 0 ? 'red' : 'black'}`

3. Reduce CSS by using Svelte features
   - Scoped styles in components
   - Component composition over CSS

### Phase 3: State Management

1. Create a store for project calculations
2. Move all derived calculations to the store
3. Components subscribe to what they need

## Benefits After Refactor

- Main page: ~200 lines (from 850+)
- Each component: 50-100 lines
- CSS reduced by 70%
- Properly testable components
- Reusable across the app
- True Svelte patterns

## Key Conversions

### Before:
```svelte
<div class="multiplier-display" style="background: {delayDays > 0 ? 'gradient...' : 'gradient...'}">
```

### After:
```svelte
<div class="multiplier-display" class:delayed={delayDays > 0}>
```

### Before:
```svelte
<!-- 100 lines of HTML for comparison cards -->
```

### After:
```svelte
<ComparisonCard
  title="Current State"
  {stats}
  {quality}
  variant="current"
/>
```

## Testing Points
- All sliders still reactive
- Calculations remain accurate
- Visual states work correctly
- Mobile responsiveness maintained
- No functionality lost

## Order of Attack
1. ✅ Create component files structure
2. Extract smallest components first (QualityIndicator, MetricCard)
3. Build up to larger components (ComparisonCard, ImpactDisplay)
4. Refactor main page to use components
5. Eliminate inline styles
6. Reduce CSS footprint
7. Test everything works
8. Clean up and optimize