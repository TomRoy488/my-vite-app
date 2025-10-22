# Quick Start Guide - Refactored Application

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
my-vite-app/
├── public/
│   ├── images/              # Product images (download external images here)
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductMenu.jsx
│   │   ├── ACProductSection.jsx
│   │   ├── QuoteCardContainer.jsx
│   │   └── product/         # 17 product components
│   │
│   ├── data/
│   │   └── productData.js   # ⭐ EDIT THIS for content changes
│   │
│   ├── styles/
│   │   ├── header.css
│   │   ├── product-layout.css
│   │   ├── product-sections.css
│   │   ├── product-usecases.css
│   │   ├── product-ingredients.css
│   │   ├── product-howtouse.css
│   │   ├── product-safety.css
│   │   ├── product-cards.css
│   │   └── product-grantha.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # CSS variables defined here
│
├── index.html              # SEO meta tags added
└── package.json
```

---

## ✏️ How to Update Content

### Edit Product Information
All product content is in `src/data/productData.js`. Simply edit this file:

```javascript
// Example: Change product name
export const productData = {
  name: "Your Product Name Here",
  size: "100Gm",
  subtitle: "Your subtitle...",
  // ... rest of the data
};
```

**No need to touch any component files!**

---

## 🎨 How to Update Styles

### Using CSS Variables
Edit values in `src/index.css`:

```css
:root {
  --color-primary: #5e17eb;     /* Change brand color */
  --spacing-lg: 16px;           /* Adjust spacing */
  --font-size-base: 16px;       /* Change font size */
}
```

### Component-Specific Styles
Edit the relevant CSS module:
- Layout & Menu → `product-layout.css`
- Section headers → `product-sections.css`
- Use cases cards → `product-usecases.css`
- Ingredients → `product-ingredients.css`
- How to use → `product-howtouse.css`
- Safety info → `product-safety.css`
- Quote cards → `product-cards.css`
- Grantha/Mythology → `product-grantha.css`

---

## 📱 Responsive Breakpoints

```css
/* Mobile First (default) - 0-767px */
/* Tablet - 768px-1023px */
@media (max-width: 1024px) { }

/* Mobile - 0-767px */
@media (max-width: 768px) { }

/* Small Mobile - 0-479px */
@media (max-width: 480px) { }
```

---

## 🖼️ Adding Images

1. Download images from external URLs (see `public/images/README.md`)
2. Place them in `public/images/`
3. Update paths in `productData.js`:

```javascript
doshaGuide: {
  imageUrl: "/images/dosha-guide.webp",  // Local path
  // ...
}
```

---

## 🔧 Common Tasks

### Add a New Section
1. Create component in `src/components/product/`
2. Add data to `productData.js`
3. Import and use in `App.jsx`
4. Add menu item in `productData.menuItems`

### Change Colors
Edit CSS variables in `src/index.css`:
```css
--color-primary: #YOUR_COLOR;
--color-accent: #YOUR_COLOR;
```

### Adjust Spacing
Edit spacing variables:
```css
--spacing-lg: 20px;  /* Increase spacing */
```

### Update Menu Items
Edit `productData.menuItems` in `src/data/productData.js`

---

## 🐛 Troubleshooting

### Styles Not Applying
1. Check CSS import order in `src/main.jsx`
2. Verify CSS variable names match (`:root` in `index.css`)
3. Clear browser cache

### Content Not Showing
1. Check `productData.js` structure
2. Verify component is importing `productData`
3. Check browser console for errors

### Images Not Loading
1. Ensure images are in `public/images/`
2. Check file names match exactly
3. Verify paths in `productData.js` start with `/images/`

---

## 📦 Dependencies

### Production
- `react` (19.1.1)
- `react-dom` (19.1.1)
- `lucide-react` (0.546.0)

### Development
- `vite` (7.1.7)
- `eslint` (9.36.0)
- `@vitejs/plugin-react` (5.0.4)

---

## 🚢 Deployment

### Build
```bash
npm run build
```

### Output
Optimized files in `dist/` folder

### Deploy To
- Netlify: Drop `dist` folder
- Vercel: Connect repo
- GitHub Pages: Set up workflow
- Any static hosting

---

## 📚 Additional Resources

- **Full Refactoring Details:** See `REFACTORING_SUMMARY.md`
- **Vite Docs:** https://vite.dev
- **React Docs:** https://react.dev
- **Lucide Icons:** https://lucide.dev

---

## ✅ Quick Checklist

Before going live:
- [ ] Download all external images
- [ ] Update product data
- [ ] Test on mobile
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify all links work
- [ ] Check SEO tags
- [ ] Run `npm run build`
- [ ] Test production build

---

## 💡 Pro Tips

1. **Use CSS Variables** for consistency
2. **Edit productData.js** for content updates
3. **Test responsive** in browser DevTools
4. **Keep images optimized** (WebP format)
5. **Check accessibility** with browser tools

---

## 🎯 Key Files to Know

| File | Purpose |
|------|---------|
| `src/data/productData.js` | All product content |
| `src/index.css` | CSS variables & base styles |
| `src/App.jsx` | Main layout & component assembly |
| `index.html` | SEO meta tags |
| `src/styles/*.css` | Modular stylesheets |

---

Happy coding! 🎉

