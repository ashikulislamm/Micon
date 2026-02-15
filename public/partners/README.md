# Partner Logos

This directory contains logo images for strategic partners displayed in the infinite logo slider on the homepage.

## Image Requirements

- **Format**: PNG or SVG (PNG recommended for consistent display)
- **Dimensions**: 200-400px width recommended
- **Background**: Transparent background preferred
- **Color**: Logo can be full color (grayscale effect applied on hover off)
- **File naming**: Use lowercase with hyphens (e.g., `lafargeholcim.png`)

## Current Partner Logos

Add your partner logo files here:
- `bsrm.png`
- `tvs.png`
- `lafargeholcim.png`
- `ksrm.png`
- `php-group.png`
- Additional partner logos as needed

## Adding New Partners

1. Add the logo image to this directory
2. Update the `partners` array in `/sections/home/Partners.tsx`
3. Add the new partner entry with name and logo path

Example:
```typescript
{ name: "Partner Name", logo: "/partners/partner-name.png" }
```

## Tips for Best Display

- Ensure logos have adequate padding within the image
- Test both light and dark mode appearance
- High-resolution images work best for retina displays
- Keep file sizes optimized (< 100KB per logo)
