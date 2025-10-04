# 🏡 Property Detail Page - Listing Application

## 📖 Project Description

This project implements a **responsive Property Detail Page** for a listing application using **Next.js** and **Tailwind CSS**.  
The page dynamically displays comprehensive property information including images, descriptions, amenities, reviews, and a booking section.

It follows **modern web development practices**, leveraging **reusable components**, **responsive design principles**, and **clean code organization**.

---

## 🎯 Learning Objectives

- Implement **dynamic routing** in Next.js for property detail pages
- Create **reusable React components** for property display
- Structure a **responsive layout** using Tailwind CSS
- Manage **component state and props** effectively
- Implement **interactive elements** like date pickers and tabs
- Display and organize property data in an **intuitive UI**
- Follow **best practices** for component composition

---

## ✅ Requirements

### 🔗 Dynamic Routing

- Implement `[id].tsx` to handle **dynamic property pages**

### 🧩 Component Structure

- **PropertyDetail** → main container component
- **BookingSection** → reservation functionality
- **ReviewSection** → user feedback display

### 📱 Responsive Design

- Ensure proper display across **all screen sizes**

### 📊 Data Handling

- Strong **TypeScript typing** for props and data
- Efficient **state and prop management**

### 🖼️ UI Elements

- Property image **gallery/grid**
- **Amenities** listing with icons
- **Rating** display
- **Booking form** with date selection
- **Review cards** with user info

---

## 🌟 Best Practices

### 🏗️ Component Design

- Follow **Single Responsibility Principle**
- Use **TypeScript typing** for props & data
- Build **reusable UI components**

### 🎨 Styling

- Maintain **consistent spacing & typography**
- Use **mobile-first** approach
- Apply **Tailwind utility classes** properly

### 📂 Code Organization

- Clear **folder structure**
- **Separation of concerns** between components
- Proper **component composition**

### ⚡ Performance

- Optimize **image display**
- Efficient **data handling**
- Use **lazy loading** where appropriate

---

## 🛠️ Implementation Details

### `PropertyDetail.tsx`

Main container component:

- Displays property **header** with name, rating, location
- Shows **image grid** (main image + thumbnails)
- Contains **description** with tabbed format
- Lists **amenities** with icons
- Integrates **BookingSection** and **ReviewSection**

### `BookingSection.tsx`

Handles booking functionality:

- Displays **pricing information**
- Provides **date selection controls**
- Calculates & shows **total cost**
- Includes **reservation CTA button**

### `ReviewSection.tsx`

Manages user reviews:

- Displays all property reviews
- Shows **reviewer avatars & ratings**
- Formats review content properly
- Handles **pagination** if needed

---

## 📌 Expected Outcomes

- A **fully responsive property detail page**
- **Reusable & maintainable** components
- **Clean, best-practice code**
- **Intuitive UI** with all required features
- Strong **TypeScript data handling** throughout

---

## 🚀 Tech Stack

- **Next.js** – Framework for server-rendered React apps
- **React** – Component-based UI library
- **TypeScript** – Static typing for robust code
- **Tailwind CSS** – Utility-first responsive styling

---
