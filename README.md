# 📦 Shipping Box App

This application calculates the shipping cost for boxes to specific locations worldwide from **India**. It consists of:  
✅ **A form** to add shipping details  
✅ **A table** to display saved shipping boxes  
✅ **A navbar** to switch between views  

---

## 🛠️ Features & Functionality  

### **📌 View A: Form (Add Box)**
Users can enter shipping details through a form containing:
- **Receiver Name** (Text input)  
- **Weight** (Number input in kilograms)  
- **Box Color** (Color picker, stored in RGB format)  
- **Destination Country** (Dropdown selection)  

**Validation:**  
- ✅ **All fields are required**; errors will be shown if empty  
- ✅ **Negative weight is not allowed**; it defaults to `0` and shows an error message  
- ✅ **Real-time validation** using `react-hook-form`  

**Example Destination Costs:**
| Country | Cost Per Kg (INR) |
|---------|------------------|
| 🇸🇪 Sweden | 7.35 |
| 🇨🇳 China | 11.53 |
| 🇧🇷 Brazil | 15.63 |
| 🇦🇺 Australia | 50.09 |

### 📌 **Calculation:**  

Total Cost = Weight (kg) × Cost Per Kg
---

### **📌 View B: Table (List of Captured Inputs)**
After saving, all shipping boxes are displayed in a **responsive table** with the following columns:
- ✅ **Receiver Name**  
- ✅ **Weight in kilograms**  
- ✅ **Box Color** (Displayed as a colored box)  
- ✅ **Destination Country**  
- ✅ **Calculated Shipping Cost (INR format)**  

---

### **📌 Navbar**
A navigation bar allows users to:
- ✅ **Switch between the form (`/boxes/new`) and table view (`/boxes`)**  
- ✅ **Show active routes for better UX**  

---

## 🚀 Tech Stack & Architecture

- **Frontend:** React (with Vite for fast performance)  
- **State Management:** Redux Toolkit  
- **Form Handling:** react-hook-form (for validation)  
- **Routing:** React Router (for navigation)  
- **Styling:** Tailwind CSS (fully responsive design) 

📌 **MVC Pattern**  
- **Views:** Form (`ShippingForm.jsx`), Table (`ShippingTable.jsx`), and Navbar (`Navbar.jsx`)  
- **State Management:** `shippingSlice.ts` (Redux)  
- **Logic Separation:** Utility functions handle calculations  

---

## 📂 Folder Structure
``` bash
/shipping-box-app
 ├── public/
 ├── src/
 │   ├── components/
 │   │   ├── Navbar.jsx 
 │   │   ├── NoData.jsx
 │   │   ├── ShippingForm.jsx
 │   │   ├── ShippingTable.jsx
 │   ├── pages/
 │   │   ├── FormPage.jsx
 │   │   ├── TablePage.jsx
 │   ├── store/
 │   │   ├── features/
 |   │   │    ├── shippingSlice.js
 │   │   ├── store.js
 │   ├── utils/
 │   │   ├── helpers.js
 │   │   ├── constants.js
 │   ├── App.jsx
 │   ├── App.css
 │   ├── main.jsx
 │   ├── index.css
 │   ├── .env
 ├── package.json
 ├── README.md
 ├── tsconfig.json
 ├── .gitignore
```

---

## 🔄 State Management & API Handling

- **Data is stored locally using Redux Toolkit.**  
- **Shipping cost is dynamically calculated based on the selected country.**  

Endpoints:  
✅ **`/boxes/new`** → Form to add a new box  
✅ **`/boxes`** → View list of saved boxes  
✅ **`/`** → Redirects to `/boxes`  

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/shipping-box.git
cd shipping-box
```
### **2️⃣ Install Dependencies**
```bash
npm install
```
### **3️⃣ Run the Application**
```bash
npm run dev
```
This will start the project at http://localhost:5173/

Deploy the app to Vercel:
npm install -g vercel
vercel

Or use Netlify:
netlify deploy
