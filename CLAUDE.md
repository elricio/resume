# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a static site with no build tools or tests. The site can be viewed directly in a browser by opening `index.html`.

**Development:**
- Open `index.html` in a browser to view the site
- Edit files in `data/` to update resume content
- Changes are reflected immediately (no build step required)

## Architecture

### Core Structure

- **index.html** - Main entry point that loads all data files and the build script
- **js/build.js** - Minified/bundled JavaScript containing:
  - Custom template engine (art-template)
  - DOM rendering logic
  - UI interactions (scrolling, animations, canvas-based skill visualizations)
  - Event handlers for the case study section
- **data/** - JavaScript files containing resume data (loaded as global variables)
  - `theme.js` - Theme configuration (black/red/blue)
  - `userInfo.js` - Personal information (name, contact, etc.)
  - `skills.js` - Skills with proficiency percentages and descriptions
  - `timeAxis.js` - Work experience timeline
  - `case.js` - Frontend knowledge/case studies
  - `project.js` - Project portfolio
- **css/** - Stylesheets
  - `style.css` - Base styles
  - `different.css` - Theme-specific styles (black/red/blue variants)

### Data Flow

1. HTML loads all data files as global JavaScript variables
2. `build.js` processes and validates data (adds IDs, sets defaults)
3. Template engine renders sections using data objects
4. DOM is updated with rendered HTML
5. Interactive features (scrollbars, animations) are initialized

### Template System

The project uses a custom template engine (art-template) with:
- **Helpers**: `arrayJoin`, `isAddClass`, `mathCeil`
- **Templates**: Embedded in `build.js` (minified) for:
  - Header/Intro section (`hea_intro`)
  - Skills display (two variants: `skills-1` circle, `skills-2` columns)
  - Timeline (`timeAxis-1`)
  - Case studies (`case`, `case_right_temp`)
  - Projects (`project`)
  - Footer (`footer`)

### Theme System

Three color themes controlled by `data/theme.js`:
- **black** (default) - Dark purple/gray theme
- **red** - Red/pink theme
- **blue** - Blue theme

Themes are applied via CSS ID selectors on the body element.

## Key Components

### Skills Visualization

Two display modes (configured in `skills.js`):
- **circle** - Animated circular progress indicators with canvas rendering
- **columns** - Horizontal bar charts with hover tooltips

### Case Studies

Interactive accordion-style section with:
- Collapsible category lists
- Right-side panel showing selected case details
- Custom scrollbars for both left and right panels

### Timeline

Work experience displayed as alternating left/right items with:
- Company logos
- Date ranges
- Job positions and responsibilities

## Development Notes

### No Build Process

This is a static site with no build tools. All JavaScript is pre-minified in `js/build.js`. The source templates are not available in this repository.

### Data Modification

To update resume content, edit the JavaScript files in the `data/` directory:
- Follow the documented data structures in each file's comments
- Add/remove items from arrays as needed
- Update theme setting in `theme.js`

### Browser Compatibility

The code includes IE8 compatibility checks and fallbacks (e.g., `columns` template for IE8). Modern browsers are fully supported.

### Known Issues

- `timeAxis.js` has duplicate entries (same company listed twice)
- Some image paths reference external URLs that may be broken
- Case study thumbnails reference local paths that may not exist

## Common Tasks

### Update Personal Information

Edit `data/userInfo.js` to modify:
- Name, job title, contact info
- Profile photo path
- Motto/quote
- Hobbies, awards, self-assessment

### Add New Skills

Edit `data/skills.js`:
- Add objects to `skillsClassify` array
- Each skill requires: `skillLanguage`, `percent`, `skillTooltip` (array)
- Change `temp` to `"columns"` for bar chart display

### Add Work Experience

Edit `data/timeAxis.js`:
- Add objects to `timeAxisArr` array
- Each entry requires: `startTime`, `endTime`, `companyNam`, `jobPost`, `jonTask`, `jobContent`

### Add Projects

Edit `data/project.js`:
- Add objects to `projects` array
- Each project requires: `projectName`, `projectWebsite`, `startTime`, `endTime`, `projectExplain`, `projectLabel` (array), `projectThumbnail`

### Add Case Studies

Edit `data/case.js`:
- Add objects to `casees` array
- Each category has: `caseName`, `caseList` (array of cases)
- Each case requires: `caseTitle`, `publishTime`, `caseThumbnail`, `caseDescription`, `caseWebsite`

### Change Theme

Edit `data/theme.js`:
- Set `theme` to `"black"`, `"red"`, or `"blue"`

## File Reference

- [index.html](index.html) - Main HTML file
- [js/build.js](js/build.js) - Minified JS with template engine and logic
- [css/style.css](css/style.css) - Base styles
- [css/different.css](css/different.css) - Theme styles
- [data/theme.js](data/theme.js) - Theme configuration
- [data/userInfo.js](data/userInfo.js) - Personal information
- [data/skills.js](data/skills.js) - Skills data
- [data/timeAxis.js](data/timeAxis.js) - Work experience
- [data/case.js](data/case.js) - Case studies
- [data/project.js](data/project.js) - Projects

## Overview

This is a personal resume website built as a static HTML/CSS/JS single-page application. The site dynamically renders resume content from JavaScript data files and uses a custom template engine (art-template) for rendering.

## Architecture

### Core Structure

- **index.html** - Main entry point that loads all data files and the build script
- **js/build.js** - Minified/bundled JavaScript containing:
  - Custom template engine (art-template)
  - DOM rendering logic
  - UI interactions (scrolling, animations, canvas-based skill visualizations)
  - Event handlers for the case study section
- **data/** - JavaScript files containing resume data (loaded as global variables)
  - `theme.js` - Theme configuration (black/red/blue)
  - `userInfo.js` - Personal information (name, contact, etc.)
  - `skills.js` - Skills with proficiency percentages and descriptions
  - `timeAxis.js` - Work experience timeline
  - `case.js` - Frontend knowledge/case studies
  - `project.js` - Project portfolio
- **css/** - Stylesheets
  - `style.css` - Base styles
  - `different.css` - Theme-specific styles (black/red/blue variants)
- **images/** - Assets (not shown in file list but referenced)

### Data Flow

1. HTML loads all data files as global JavaScript variables
2. `build.js` processes and validates data (adds IDs, sets defaults)
3. Template engine renders sections using data objects
4. DOM is updated with rendered HTML
5. Interactive features (scrollbars, animations) are initialized

### Template System

The project uses a custom template engine (art-template) with:
- **Helpers**: `arrayJoin`, `isAddClass`, `mathCeil`
- **Templates**: Embedded in `build.js` (minified) for:
  - Header/Intro section (`hea_intro`)
  - Skills display (two variants: `skills-1` circle, `skills-2` columns)
  - Timeline (`timeAxis-1`)
  - Case studies (`case`, `case_right_temp`)
  - Projects (`project`)
  - Footer (`footer`)

### Theme System

Three color themes controlled by `data/theme.js`:
- **black** (default) - Dark purple/gray theme
- **red** - Red/pink theme
- **blue** - Blue theme

Themes are applied via CSS ID selectors on the body element.

## Key Components

### Skills Visualization

Two display modes (configured in `skills.js`):
- **circle** - Animated circular progress indicators with canvas rendering
- **columns** - Horizontal bar charts with hover tooltips

### Case Studies

Interactive accordion-style section with:
- Collapsible category lists
- Right-side panel showing selected case details
- Custom scrollbars for both left and right panels

### Timeline

Work experience displayed as alternating left/right items with:
- Company logos
- Date ranges
- Job positions and responsibilities

## Development Notes

### No Build Process

This is a static site with no build tools. All JavaScript is pre-minified in `js/build.js`. The source templates are not available in this repository.

### Data Modification

To update resume content, edit the JavaScript files in the `data/` directory:
- Follow the documented data structures in each file's comments
- Add/remove items from arrays as needed
- Update theme setting in `theme.js`

### Browser Compatibility

The code includes IE8 compatibility checks and fallbacks (e.g., `columns` template for IE8). Modern browsers are fully supported.

### Known Issues

- `timeAxis.js` has duplicate entries (same company listed twice)
- Some image paths reference external URLs that may be broken
- Case study thumbnails reference local paths that may not exist

## Common Tasks

### Update Personal Information

Edit `data/userInfo.js` to modify:
- Name, job title, contact info
- Profile photo path
- Motto/quote
- Hobbies, awards, self-assessment

### Add New Skills

Edit `data/skills.js`:
- Add objects to `skillsClassify` array
- Each skill requires: `skillLanguage`, `percent`, `skillTooltip` (array)
- Change `temp` to `"columns"` for bar chart display

### Add Work Experience

Edit `data/timeAxis.js`:
- Add objects to `timeAxisArr` array
- Each entry requires: `startTime`, `endTime`, `companyNam`, `jobPost`, `jonTask`, `jobContent`

### Add Projects

Edit `data/project.js`:
- Add objects to `projects` array
- Each project requires: `projectName`, `projectWebsite`, `startTime`, `endTime`, `projectExplain`, `projectLabel` (array), `projectThumbnail`

### Add Case Studies

Edit `data/case.js`:
- Add objects to `casees` array
- Each category has: `caseName`, `caseList` (array of cases)
- Each case requires: `caseTitle`, `publishTime`, `caseThumbnail`, `caseDescription`, `caseWebsite`

### Change Theme

Edit `data/theme.js`:
- Set `theme` to `"black"`, `"red"`, or `"blue"`

## File Reference

- [index.html](index.html) - Main HTML file
- [js/build.js](js/build.js) - Minified JS with template engine and logic
- [css/style.css](css/style.css) - Base styles
- [css/different.css](css/different.css) - Theme styles
- [data/theme.js](data/theme.js) - Theme configuration
- [data/userInfo.js](data/userInfo.js) - Personal information
- [data/skills.js](data/skills.js) - Skills data
- [data/timeAxis.js](data/timeAxis.js) - Work experience
- [data/case.js](data/case.js) - Case studies
- [data/project.js](data/project.js) - Projects
