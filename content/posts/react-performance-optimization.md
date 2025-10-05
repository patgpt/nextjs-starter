---
title: React Performance Optimization Techniques
slug: react-performance-optimization
description: Master React performance optimization with code splitting, memoization, and rendering strategies
date: 2024-01-05
category: tutorial
tags: [react, performance, optimization, hooks, rendering]
---

# React Performance Optimization Techniques

Performance is crucial for user experience. Here are proven techniques to optimize your React applications for better performance and user satisfaction.

## 1. Code Splitting

Break your application into smaller chunks that load on demand.

### Route-Based Code Splitting

```typescript
// ✅ Good
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```

### Component-Based Code Splitting

```typescript
// ✅ Good
const ExpensiveComponent = lazy(() =>
  import('./components/ExpensiveComponent')
);

function Dashboard() {
  const [showExpensive, setShowExpensive] = useState(false);

  return (
    <div>
      <button onClick={() => setShowExpensive(true)}>
        Load Expensive Component
      </button>
      {showExpensive && (
        <Suspense fallback={<div>Loading...</div>}>
          <ExpensiveComponent />
        </Suspense>
      )}
    </div>
  );
}
```

## 2. React.memo and useMemo

### Memoizing Components

```typescript
// ✅ Good
const ExpensiveList = memo(({ items, onItemClick }: Props) => {
  console.log('Rendering ExpensiveList');
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} onClick={onItemClick} />
      ))}
    </ul>
  );
});
```

### Memoizing Expensive Calculations

```typescript
// ✅ Good
function ProductList({ products }: { products: Product[] }) {
  const sortedProducts = useMemo(() =>
    [...products].sort((a, b) => b.price - a.price),
    [products]
  );

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

## 3. useCallback for Stable References

```typescript
// ✅ Good
const handleItemClick = useCallback((itemId: string) => {
  console.log('Item clicked:', itemId);
}, []); // Empty dependency array for stable reference

const ExpensiveList = memo(({ onItemClick }: Props) => {
  return (
    <ul>
      {items.map(item => (
        <button key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </button>
      ))}
    </ul>
  );
});
```

## 4. Virtualization for Large Lists

For lists with thousands of items, use virtualization:

```typescript
import { FixedSizeList as List } from 'react-window';

// ✅ Good for large lists
function LargeList({ items }: { items: Item[] }) {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ListItem item={items[index]} />
        </div>
      )}
    </List>
  );
}
```

## 5. Image Optimization

### Next.js Image Component

```typescript
import Image from 'next/image';

// ✅ Good
function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      loading="lazy"
    />
  );
}
```

## 6. Bundle Analysis

Use tools to analyze your bundle size:

```bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
```

## 7. Performance Monitoring

### Web Vitals

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function reportWebVitals({ name, delta, value, id }: Metric) {
  // Send to analytics service
  console.log({ name, delta, value, id });
}

// Use in your app
useEffect(() => {
  getCLS(reportWebVitals);
  getFID(reportWebVitals);
  getFCP(reportWebVitals);
  getLCP(reportWebVitals);
  getTTFB(reportWebVitals);
}, []);
```

## 8. React DevTools Profiler

Use React DevTools Profiler to identify performance bottlenecks:

1. Open React DevTools
2. Go to Profiler tab
3. Record a profiling session
4. Analyze render times and component tree

## 9. Lazy Loading Components

```typescript
// ✅ Good
const ChartComponent = lazy(() =>
  import('./components/ChartComponent')
);

function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Show Chart
      </button>
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <ChartComponent />
        </Suspense>
      )}
    </div>
  );
}
```

## 10. Optimize Context Usage

### Split Contexts

```typescript
// ✅ Good - Separate concerns
const ThemeContext = createContext('light');
const UserContext = createContext(null);

// ❌ Bad - Combined context
const AppContext = createContext({
  theme: 'light',
  user: null,
  settings: {},
});
```

### Use Context Selectors

```typescript
// ✅ Good
function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Toggle Theme</button>;
}
```

## Best Practices Summary

1. **Measure before optimizing** - Use React DevTools Profiler and Web Vitals
2. **Implement code splitting** for better loading performance
3. **Use React.memo wisely** - Only for components that re-render frequently with same props
4. **Memoize expensive calculations** with useMemo
5. **Stable references** with useCallback for event handlers
6. **Virtualize large lists** to prevent DOM performance issues
7. **Optimize images** with proper loading strategies
8. **Monitor performance** in production with real user metrics

## Common Performance Anti-Patterns

### ❌ Don't do this:

```typescript
// Creating objects in render
function Component() {
  const style = { color: 'red' }; // Creates new object each render
  return <div style={style}>Content</div>;
}

// Inline functions in JSX
function Component({ onClick }) {
  return <button onClick={() => onClick()}>Click me</button>;
}

// Heavy computations without memoization
function Component({ data }) {
  const processed = data.map(item => heavyComputation(item)); // Runs on every render
  return <div>{processed}</div>;
}
```

Remember: **Premature optimization is the root of all evil**. Profile your application first, then optimize the bottlenecks you actually find.

Happy optimizing! 🚀

