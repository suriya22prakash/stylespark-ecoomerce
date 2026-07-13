# StyleSpark 🛍️

A responsive, multi-page front-end e-commerce website for a streetwear/fashion brand. Built as a personal project to practice core web development skills — HTML, CSS (with Tailwind utility classes), and vanilla JavaScript.

> 🧑‍💻 **Note:** I'm an aspiring web developer building this project to sharpen my front-end skills. Feedback and suggestions are always welcome!

---

## 🌐 Live Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with hero slider, about section, new arrivals, brands, top sellers, reviews & newsletter |
| Collections | `collections.html` | Product listing page with live search and category filters |
| Contact | `contact.html` | Contact form with input validation and success/error messaging |

---

## ✨ Features

### 🖼️ Hero Image Slider
- Auto-cycling banner with **next/previous arrow controls**
- Clickable **dot indicators** to jump to any slide
- Smooth CSS transitions between slides

### 🧭 Responsive Navigation
- Sticky top navbar with logo, links, search & cart icons, and Sign In button
- Dismissible promotional announcement bar (20% off / free shipping banner)
- Slide-in **mobile hamburger menu** for smaller screens

### 🆕 Product Sections
- **New Arrivals** and **Most Wanted** product grids with hover animations
- Clickable product cards that route to the Collections page
- **Brands** showcase section with icon-based brand cards

### 🔍 Search & Filter (Collections Page)
- **Live keyword search** — filters products in real time as you type
- **Category checkboxes** (Men / Women / Kids) to filter products by gender/category
- Filters can be combined for a more refined product view

### 📝 Contact Form Validation (Contact Page)
- Custom **regex-based validation** for:
  - Name (letters only)
  - Email (must be a valid Gmail address)
  - Phone number (10 digits)
  - Message (alphanumeric, no leading/trailing symbols)
- Inline **error messages** for invalid fields
- **Success confirmation message** on valid submission, with automatic form reset

### 💌 Newsletter Signup
- Email input with **Gmail-format validation**
- Temporary success message shown on valid subscription

### 📱 Fully Responsive Design
- Optimized layouts for **desktop, tablet, and mobile** using CSS media queries
- Flexible grid/flexbox layouts that adapt across all sections (hero, products, reviews, footer, contact, filters)

### 👣 Footer
- Brand info, social media icon links
- Organized link sections: Shop, Help, Company
- Copyright and "Made in India" tagline

---

## 🛠️ Built With

- **HTML5** – semantic page structure
- **Tailwind CSS** (CDN) – utility classes for layout & spacing
- **Custom CSS** (`style.css`) – styling, animations, responsive media queries
- **Vanilla JavaScript** – slider logic, form validation, search/filter functionality, mobile menu toggle
- **Google Fonts** – TASA Orbiter typeface

---

## 📁 Project Structure

```
stylespark/
│
├── index.html          # Home page
├── collections.html    # Product listing + search/filter
├── contact.html         # Contact form page
│
├── style.css            # Global styles & responsive rules
│
├── index.js             # Slider, newsletter, mobile menu, product redirect
├── collection.js        # Search, category filters, mobile menu
├── contact.js           # Form validation logic
│
└── images/              # Product & banner images
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stylespark.git
   ```
2. Navigate into the project folder:
   ```bash
   cd stylespark
   ```
3. Open `index.html` in your browser — no build tools or server required!

---

## 📚 What I Learned / Practiced

- Building a multi-page static website with shared components (navbar, footer)
- DOM manipulation and event handling in vanilla JavaScript
- Implementing an image carousel/slider from scratch
- Real-time search filtering and multi-checkbox category filtering
- Form validation using regular expressions
- Writing responsive CSS with media queries for multiple breakpoints
- Structuring a front-end project for readability and maintainability

---

## 🔮 Future Improvements

- Add a shopping cart with add/remove functionality
- Connect the contact form and newsletter to a real backend/email service
- Add product detail pages
- Improve accessibility (ARIA labels, keyboard navigation)
- Add dark mode toggle

---

## 📄 License

This project is open source and available for learning purposes. Feel free to fork it and build on it!

---

⭐ If you found this project helpful or interesting, consider giving it a star on GitHub!
