# ByeWind Dashboard

A modern, responsive dashboard application built with React, TypeScript, and Tailwind CSS. Features both light and dark themes with pixel-perfect implementation matching the provided Figma designs.

## 🚀 Features

### Core Functionality
- **Dashboard View**: Interactive eCommerce dashboard with metrics, charts, and analytics
- **Orders Management**: Comprehensive order list with filtering, sorting, and pagination
- **Theme Switching**: Seamless light/dark mode toggle with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Search**: Instant filtering across all data
- **Interactive Charts**: Revenue projections, sales analytics, and location-based data

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and microinteractions
- **Recharts**: Beautiful, responsive charts and data visualizations
- **Context API**: Efficient state management
- **Accessibility**: ARIA roles, keyboard navigation, and screen reader support

## 📱 Responsive Design

- **Desktop (1024px+)**: Full sidebar navigation with all features
- **Tablet (768px-1023px)**: Collapsible sidebar with optimized layout
- **Mobile (<768px)**: Hamburger menu with slide-out navigation

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)
- **Gray Scale**: 50-900 range for consistent theming

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive Sizing**: Fluid typography that scales with screen size

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Hover effects and loading states
- **Tables**: Sortable columns with status indicators
- **Charts**: Interactive data visualizations
- **Forms**: Accessible inputs with validation states

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd byewind-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── dashboard/       # Dashboard-specific components
│   ├── orders/         # Orders page components
│   ├── Header.tsx      # Main header component
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── Layout.tsx      # Main layout wrapper
├── contexts/           # React Context providers
│   ├── ThemeContext.tsx    # Theme management
│   └── DashboardContext.tsx # App state management
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard page
│   └── Orders.tsx      # Orders management page
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main app component
└── index.tsx           # App entry point
```

## 🎯 Key Components

### Dashboard Components
- **MetricsCard**: Displays key performance indicators
- **RevenueChart**: Line chart showing revenue trends
- **ProjectionsChart**: Bar chart comparing projections vs actuals
- **RevenueByLocation**: Map visualization with location data
- **TopSellingProducts**: Table of best-performing products
- **TotalSalesChart**: Donut chart showing sales breakdown

### Orders Components
- **OrdersTable**: Sortable, filterable data table
- **OrdersHeader**: Search and action controls
- **OrdersPagination**: Page navigation controls

### Navigation
- **Sidebar**: Desktop navigation with collapsible sections
- **MobileNavigation**: Mobile-friendly slide-out menu
- **Header**: Top navigation with search and user controls

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
REACT_APP_VERSION=1.0.0
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Extended animations
- Responsive breakpoints
- Dark mode support

### TypeScript Configuration
Strict TypeScript configuration with:
- Strict mode enabled
- Path mapping for clean imports
- ESLint integration

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on push to main branch

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🧪 Testing

### Running Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
```bash
npm run test:coverage
# or
yarn test:coverage
```

## 📊 Performance

### Optimization Features
- **Code Splitting**: Lazy loading of components
- **Memoization**: React.memo for expensive components
- **Virtual Scrolling**: For large data sets
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Webpack bundle analyzer

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and roles
- **Color Contrast**: Meets WCAG standards
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading structure

### Accessibility Features
- Skip links for main content
- Alt text for all images
- Form labels and error messages
- High contrast mode support
- Reduced motion preferences

## 🔒 Security

### Security Measures
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Token-based validation
- **Content Security Policy**: Strict CSP headers
- **Dependency Scanning**: Regular security audits

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Standards
- **ESLint**: Enforced code quality
- **Prettier**: Consistent code formatting
- **TypeScript**: Strict type checking
- **Conventional Commits**: Standardized commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Figma**: Design inspiration and specifications
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library
- **Framer Motion**: Animation library
- **Recharts**: Chart visualization library

## 📞 Support

For support, email support@byewind.com or create an issue in the GitHub repository.

---

**Built with ❤️ by the ByeWind Team**
