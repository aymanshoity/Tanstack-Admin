###Base structure + sencopy admin

Ecommerce admin


admin-panel/
├── app/
│   ├── routes/
│   │   ├── __root.tsx                    # Root layout with auth wrapper
│   │   ├── index.tsx                     # Dashboard home
│   │   │
│   │   ├── products/
│   │   │   ├── route.tsx                 # Products layout
│   │   │   ├── index.tsx                 # Products list
│   │   │   ├── new.tsx                   # Create product
│   │   │   ├── $productId/
│   │   │   │   ├── route.tsx             # Product detail layout
│   │   │   │   ├── index.tsx             # Product overview
│   │   │   │   ├── edit.tsx              # Edit product
│   │   │   │   ├── inventory.tsx         # Inventory management
│   │   │   │   └── variants.tsx          # Product variants
│   │   │   └── categories/
│   │   │       ├── index.tsx             # Categories list
│   │   │       └── $categoryId.tsx       # Category detail
│   │   │
│   │   ├── orders/
│   │   │   ├── route.tsx                 # Orders layout
│   │   │   ├── index.tsx                 # Orders list
│   │   │   ├── $orderId/
│   │   │   │   ├── index.tsx             # Order detail
│   │   │   │   ├── edit.tsx              # Edit order
│   │   │   │   └── refund.tsx            # Process refund
│   │   │   └── analytics.tsx             # Order analytics
│   │   │
│   │   ├── customers/
│   │   │   ├── route.tsx                 # Customers layout
│   │   │   ├── index.tsx                 # Customers list
│   │   │   ├── $customerId/
│   │   │   │   ├── index.tsx             # Customer profile
│   │   │   │   ├── orders.tsx            # Customer orders
│   │   │   │   └── analytics.tsx         # Customer insights
│   │   │   └── segments.tsx              # Customer segments
│   │   │
│   │   ├── inventory/
│   │   │   ├── route.tsx                 # Inventory layout
│   │   │   ├── index.tsx                 # Inventory overview
│   │   │   ├── stock.tsx                 # Stock management
│   │   │   ├── suppliers.tsx             # Suppliers
│   │   │   └── warehouses.tsx            # Warehouse management
│   │   │
│   │   ├── marketing/
│   │   │   ├── route.tsx                 # Marketing layout
│   │   │   ├── index.tsx                 # Marketing dashboard
│   │   │   ├── campaigns/
│   │   │   │   ├── index.tsx             # Campaigns list
│   │   │   │   ├── new.tsx               # Create campaign
│   │   │   │   └── $campaignId.tsx       # Campaign detail
│   │   │   ├── discounts/
│   │   │   │   ├── index.tsx             # Discounts list
│   │   │   │   └── new.tsx               # Create discount
│   │   │   └── email.tsx                 # Email marketing
│   │   │
│   │   ├── analytics/
│   │   │   ├── route.tsx                 # Analytics layout
│   │   │   ├── index.tsx                 # Analytics dashboard
│   │   │   ├── sales.tsx                 # Sales analytics
│   │   │   ├── traffic.tsx               # Traffic analytics
│   │   │   └── reports.tsx               # Custom reports
│   │   │
│   │   ├── settings/
│   │   │   ├── route.tsx                 # Settings layout
│   │   │   ├── index.tsx                 # General settings
│   │   │   ├── store.tsx                 # Store settings
│   │   │   ├── shipping.tsx              # Shipping settings
│   │   │   ├── payments.tsx              # Payment settings
│   │   │   ├── taxes.tsx                 # Tax settings
│   │   │   └── users.tsx                 # Admin users
│   │   │
│   │   └── auth/
│   │       ├── login.tsx                 # Login page
│   │       ├── forgot-password.tsx       # Password recovery
│   │       └── reset-password.tsx        # Reset password
│   │
│   ├── router.tsx                        # TanStack Router config
│   └── ssr.tsx                           # Server entry point
│
├── src/
│   ├── features/
│   │   ├── products/
│   │   │   ├── components/
│   │   │   │   ├── ProductCard.tsx
│   │   │   │   ├── ProductForm.tsx
│   │   │   │   ├── ProductFilters.tsx
│   │   │   │   ├── ProductTable.tsx
│   │   │   │   ├── VariantManager.tsx
│   │   │   │   └── ImageUploader.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useProducts.ts
│   │   │   │   ├── useProductMutations.ts
│   │   │   │   └── useProductFilters.ts
│   │   │   ├── api/
│   │   │   │   ├── productQueries.ts
│   │   │   │   ├── productMutations.ts
│   │   │   │   └── productEndpoints.ts
│   │   │   ├── types/
│   │   │   │   └── product.types.ts
│   │   │   ├── utils/
│   │   │   │   ├── productValidation.ts
│   │   │   │   └── productHelpers.ts
│   │   │   └── constants/
│   │   │       └── productConstants.ts
│   │   │
│   │   ├── orders/
│   │   │   ├── components/
│   │   │   │   ├── OrderCard.tsx
│   │   │   │   ├── OrderTable.tsx
│   │   │   │   ├── OrderStatusBadge.tsx
│   │   │   │   ├── OrderTimeline.tsx
│   │   │   │   └── RefundForm.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useOrders.ts
│   │   │   │   └── useOrderMutations.ts
│   │   │   ├── api/
│   │   │   │   └── orderQueries.ts
│   │   │   ├── types/
│   │   │   │   └── order.types.ts
│   │   │   └── utils/
│   │   │       └── orderHelpers.ts
│   │   │
│   │   ├── customers/
│   │   │   ├── components/
│   │   │   │   ├── CustomerCard.tsx
│   │   │   │   ├── CustomerTable.tsx
│   │   │   │   └── CustomerSegments.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useCustomers.ts
│   │   │   ├── api/
│   │   │   │   └── customerQueries.ts
│   │   │   └── types/
│   │   │       └── customer.types.ts
│   │   │
│   │   ├── inventory/
│   │   │   ├── components/
│   │   │   │   ├── StockTable.tsx
│   │   │   │   ├── StockAdjustment.tsx
│   │   │   │   └── LowStockAlert.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useInventory.ts
│   │   │   ├── api/
│   │   │   │   └── inventoryQueries.ts
│   │   │   └── types/
│   │   │       └── inventory.types.ts
│   │   │
│   │   ├── marketing/
│   │   │   ├── components/
│   │   │   │   ├── CampaignCard.tsx
│   │   │   │   ├── DiscountForm.tsx
│   │   │   │   └── EmailEditor.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useMarketing.ts
│   │   │   ├── api/
│   │   │   │   └── marketingQueries.ts
│   │   │   └── types/
│   │   │       └── marketing.types.ts
│   │   │
│   │   ├── analytics/
│   │   │   ├── components/
│   │   │   │   ├── SalesChart.tsx
│   │   │   │   ├── RevenueWidget.tsx
│   │   │   │   ├── TrafficChart.tsx
│   │   │   │   └── MetricsCard.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAnalytics.ts
│   │   │   ├── api/
│   │   │   │   └── analyticsQueries.ts
│   │   │   └── types/
│   │   │       └── analytics.types.ts
│   │   │
│   │   └── auth/
│   │       ├── components/
│   │       │   ├── LoginForm.tsx
│   │       │   └── ProtectedRoute.tsx
│   │       ├── hooks/
│   │       │   └── useAuth.ts
│   │       ├── api/
│   │       │   └── authQueries.ts
│   │       ├── types/
│   │       │   └── auth.types.ts
│   │       └── utils/
│   │           └── authHelpers.ts
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Table.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Dropdown.tsx
│   │   │   │   ├── Tabs.tsx
│   │   │   │   ├── Pagination.tsx
│   │   │   │   └── DatePicker.tsx
│   │   │   ├── layout/
│   │   │   │   ├── AdminLayout.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Breadcrumb.tsx
│   │   │   │   └── Footer.tsx
│   │   │   ├── feedback/
│   │   │   │   ├── Toast.tsx
│   │   │   │   ├── Alert.tsx
│   │   │   │   ├── Spinner.tsx
│   │   │   │   └── EmptyState.tsx
│   │   │   └── forms/
│   │   │       ├── FormField.tsx
│   │   │       ├── FormError.tsx
│   │   │       └── FileUpload.tsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useDebounce.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   ├── usePagination.ts
│   │   │   ├── useToast.ts
│   │   │   └── useDisclosure.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   ├── helpers.ts
│   │   │   ├── constants.ts
│   │   │   └── api.ts
│   │   │
│   │   └── types/
│   │       ├── common.types.ts
│   │       └── api.types.ts
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts              # API client setup
│   │   │   ├── queryClient.ts         # TanStack Query config
│   │   │   └── interceptors.ts        # Request/response interceptors
│   │   │
│   │   ├── validation/
│   │   │   ├── schemas/
│   │   │   │   ├── productSchema.ts
│   │   │   │   ├── orderSchema.ts
│   │   │   │   └── customerSchema.ts
│   │   │   └── index.ts
│   │   │
│   │   └── store/
│   │       ├── index.ts               # Store setup (Zustand/Jotai)
│   │       ├── authStore.ts
│   │       ├── uiStore.ts
│   │       └── cartStore.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── themes/
│   │   │   ├── light.css
│   │   │   └── dark.css
│   │   └── utils.css
│   │
│   └── config/
│       ├── env.ts
│       ├── routes.ts
│       └── constants.ts
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   └── favicon.ico
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   └── utils/
│   ├── integration/
│   │   └── features/
│   └── e2e/
│       └── flows/
│
├── .env.example
├── .env.local
├── tsconfig.json
├── package.json
├── vite.config.ts
└── README.md