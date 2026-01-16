# I AM GLENN · Modernist Digital Experience

A personal website that merges traditional modernist art principles with surrealist paradoxes and contemporary web technology.

## Concept

This website explores the intersection of **modernist art movements**, **surrealism**, and **digital innovation**, featuring "I AM GLENN" as a recurring motif throughout the experience. The site weaves together the rational geometry of modernism with the dreamlike paradoxes of surrealism.

### Art Movement Influences

**Piet Mondrian & De Stijl**
- Primary color palette (red, blue, yellow) with black and white
- Geometric grid systems
- Asymmetrical balance
- Horizontal and vertical emphasis

**Bauhaus**
- "Form follows function" philosophy
- Bold, functional typography
- Clean, geometric shapes
- Emphasis on simplicity and rationality

**Constructivism**
- Dynamic diagonal compositions
- Layered text elements
- Industrial aesthetic
- Revolutionary visual language

**René Magritte & Surrealism**
- Visual paradoxes and impossible scenes
- "Treachery of images" - questioning representation vs reality
- Bowler hat iconography and obscured identities
- Day/night paradoxes in single scenes
- Scale distortions and perspective play
- Frames within frames, windows and mirrors
- Cloud motifs and sky imagery
- Word-image contradictions

## Features

### 🎨 Interactive Components

**Bauhaus Hero**
- Animated entrance with staggered text reveals
- Floating geometric shapes with parallax effects
- Primary color accent system

**Mondrian Grid**
- Interactive grid-based layout inspired by Mondrian's compositions
- Hover effects on individual blocks
- "I AM GLENN" appearing in various treatments within the grid

**Constructivist Section**
- Layered text with offset colors
- Diagonal line elements
- Dynamic rotated typography

**Interactive Typography**
- Auto-rotating text displays
- Multiple variations of "I AM GLENN"
- Click and hover interactions
- Color-shifting animations

**Geometric Shapes**
- Mouse-responsive parallax effect
- Floating geometric elements
- Interactive colored blocks with hover effects

**Magritte-Inspired Sections:**

**Treachery of Glenn**
- "Ceci n'est pas Glenn" - questioning identity and representation
- Framed text like a museum painting
- Magritte-style clouds floating in blue sky
- Serif typography for philosophical statements

**Cloud Typography**
- Large fluffy clouds obscuring and revealing text
- Mouse-responsive parallax cloud movement
- Sky gradient backgrounds
- Metaphor for hidden meaning

**Bowler Hat Glenn**
- Floating bowler hats (Magritte's signature element)
- Hats obscuring parts of "I AM GLENN"
- Dark, mysterious atmosphere
- Silhouetted suited figure
- Animated hat movement

**Day/Night Paradox**
- Split screen showing day and night simultaneously
- Sun and moon visible at once
- Impossible lighting in single scene
- Window frame creating "painting within reality" effect

**Floating Letters**
- Massive scale distortions of individual letters
- Scroll-responsive perspective shifts
- Letters at impossible sizes
- Tiny figure for scale reference (Magritte technique)
- Sand/earth tone palette

**Mirror Window**
- Nested frames within frames
- Museum-style ornate borders
- Paintings within windows within paintings
- Multiple perspectives simultaneously
- Interactive hover effects on nested frames
- Broken frame pieces suggesting fractured reality

### 🚀 Technical Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **CSS Animations** - Custom keyframe animations
- **Intersection Observer** - Scroll-triggered animations

## Design Principles

1. **Bold Typography** - Large, uppercase sans-serif text as a design element
2. **Primary Colors** - Mondrian-inspired red, blue, and yellow palette
3. **Geometric Shapes** - Circles, squares, rectangles, and triangles
4. **Asymmetry** - Balanced but not symmetric compositions
5. **White Space** - Clean, uncluttered layouts
6. **Interactivity** - Engaging user interactions throughout
7. **Motion** - Purposeful animations that enhance the experience

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to the main branch or `claude/personal-website-design-Pql5z`:**
   - The workflow will automatically build and deploy your site
   - Your site will be available at: `https://<username>.github.io/iamglenn-experiment/`

3. **Custom Domain (Optional):**
   - If using a custom domain, uncomment the `basePath` line in `next.config.ts`
   - Add your custom domain in repository Settings → Pages

### Manual Build

```bash
# Build static export locally
npm run build

# Output will be in the ./out directory
```

The site uses Next.js static export (`output: 'export'`) which generates pure HTML/CSS/JS that works on GitHub Pages.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── BauhausHero.tsx           # Hero section with animated text
│   │   ├── MondrianGrid.tsx          # Interactive grid layout
│   │   ├── ConstructivistSection.tsx # Layered text section
│   │   ├── InteractiveTypography.tsx # Rotating typography
│   │   ├── GeometricShapes.tsx       # Parallax shapes
│   │   └── ModernistFooter.tsx       # Footer component
│   ├── globals.css                   # Global styles & animations
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Main page composition
├── public/                           # Static assets
└── package.json
```

## Key Animations

- **Slide In** - Elements entering from different directions
- **Fade & Scale** - Smooth opacity and size transitions
- **Rotate In** - Spinning entrance animations
- **Parallax** - Mouse-responsive movement
- **Hover Effects** - Interactive state changes

## Customization

The design system is built with CSS variables for easy customization:

```css
--mondrian-red: #e01e1e
--mondrian-blue: #0e47cb
--mondrian-yellow: #ffc107
--bauhaus-black: #000000
--bauhaus-white: #ffffff
```

## Performance

- Static site generation for optimal performance
- Intersection Observer for efficient scroll animations
- Optimized component rendering
- No external font dependencies

## Browser Support

Modern browsers with CSS Grid, Flexbox, and Intersection Observer support:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

**Built with Next.js** · Inspired by Modernist Art · Designed for the Digital Age
