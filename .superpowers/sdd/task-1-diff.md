diff --git a/index.html b/index.html
index 31a2878..c884fa5 100644
--- a/index.html
+++ b/index.html
@@ -1,16 +1,19 @@
 <!doctype html>
 <html lang="en">
 
 <head>
   <meta charset="UTF-8" />
   <link rel="icon" type="image/png" sizes="16x16" href="/collection.png">
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Ecommerce</title>
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
 </head>
 
 <body>
   <div id="root"></div>
   <script type="module" src="/src/main.jsx"></script>
 </body>
 
 </html>
\ No newline at end of file
diff --git a/src/index.css b/src/index.css
index 0002cbd..db062e8 100644
--- a/src/index.css
+++ b/src/index.css
@@ -1,131 +1,43 @@
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
 
 @layer base {
-  body {
-    @apply bg-gray-100 text-gray-900;
-  }
   :root {
-
-    --background: 0 0% 100%;
-
-    --foreground: 0 0% 3.9%;
-
-    --card: 0 0% 100%;
-
-    --card-foreground: 0 0% 3.9%;
-
-    --popover: 0 0% 100%;
-
-    --popover-foreground: 0 0% 3.9%;
-
-    --primary: 0 0% 9%;
-
-    --primary-foreground: 0 0% 98%;
-
-    --secondary: 0 0% 96.1%;
-
-    --secondary-foreground: 0 0% 9%;
-
-    --muted: 0 0% 96.1%;
-
-    --muted-foreground: 0 0% 45.1%;
-
-    --accent: 0 0% 96.1%;
-
-    --accent-foreground: 0 0% 9%;
-
-    --destructive: 0 84.2% 60.2%;
-
-    --destructive-foreground: 0 0% 98%;
-
-    --border: 0 0% 89.8%;
-
-    --input: 0 0% 89.8%;
-
-    --ring: 0 0% 3.9%;
-
-    --chart-1: 12 76% 61%;
-
-    --chart-2: 173 58% 39%;
-
-    --chart-3: 197 37% 24%;
-
-    --chart-4: 43 74% 66%;
-
-    --chart-5: 27 87% 67%;
-
-    --radius: 0.5rem
-  }
-  .dark {
-
-    --background: 0 0% 3.9%;
-
-    --foreground: 0 0% 98%;
-
-    --card: 0 0% 3.9%;
-
-    --card-foreground: 0 0% 98%;
-
-    --popover: 0 0% 3.9%;
-
-    --popover-foreground: 0 0% 98%;
-
-    --primary: 0 0% 98%;
-
-    --primary-foreground: 0 0% 9%;
-
-    --secondary: 0 0% 14.9%;
-
-    --secondary-foreground: 0 0% 98%;
-
-    --muted: 0 0% 14.9%;
-
-    --muted-foreground: 0 0% 63.9%;
-
-    --accent: 0 0% 14.9%;
-
-    --accent-foreground: 0 0% 98%;
-
-    --destructive: 0 62.8% 30.6%;
-
-    --destructive-foreground: 0 0% 98%;
-
-    --border: 0 0% 14.9%;
-
-    --input: 0 0% 14.9%;
-
-    --ring: 0 0% 83.1%;
-
-    --chart-1: 220 70% 50%;
-
-    --chart-2: 160 60% 45%;
-
-    --chart-3: 30 80% 55%;
-
-    --chart-4: 280 65% 60%;
-
-    --chart-5: 340 75% 55%
-  }
-}
-
-.active {
-  @apply  text-[#584deb] ;
-}
-
-
-
-@layer base {
-  * {
-    @apply border-border;
-  }
-  body {
-    @apply bg-background text-foreground;
+    --paper: #FAF6F0;
+    --paper-deep: #F1E9DB;
+    --ink: #191410;
+    --persimmon: #E4572E;
+    --olive: #223726;
+    --marigold: #FFB627;
+    --clay: #E7DDCB;
+    --brick: #C1272D;
+    --background: 40 33% 97%;
+    --foreground: 20 20% 8%;
+    --card: 40 33% 97%;
+    --card-foreground: 20 20% 8%;
+    --primary: 14 77% 54%;
+    --primary-foreground: 40 33% 97%;
+    --secondary: 140 25% 17%;
+    --secondary-foreground: 40 33% 97%;
+    --accent: 40 100% 57%;
+    --accent-foreground: 20 20% 8%;
+    --muted: 38 30% 89%;
+    --muted-foreground: 20 10% 35%;
+    --border: 38 30% 82%;
+    --input: 38 30% 82%;
+    --ring: 14 77% 54%;
+    --destructive: 2 66% 44%;
+    --destructive-foreground: 40 33% 97%;
+    --radius: 1rem;
+    --font-display: "Fraunces", Georgia, serif;
+    --font-sans: "Space Grotesk", system-ui, sans-serif;
   }
+  body { @apply bg-[#FAF6F0] text-[#191410]; font-family: var(--font-sans); }
+  .font-display { font-family: var(--font-display); }
+  * { @apply border-border; }
+  .active { @apply text-[#E4572E] underline underline-offset-4; }
+  .hard-shadow { box-shadow: 4px 4px 0 #191410; }
+  .hard-shadow-sm { box-shadow: 2px 2px 0 #191410; }
+  .grain::after { content:""; position:absolute; inset:0; pointer-events:none; opacity:.05; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E"); }
 }
-
-
-
-
-
diff --git a/tailwind.config.js b/tailwind.config.js
index a79ffef..8421868 100644
--- a/tailwind.config.js
+++ b/tailwind.config.js
@@ -1,25 +1,37 @@
 /** @type {import('tailwindcss').Config} */
 module.exports = {
 darkMode: ['class'],
 content: [
 './index.html',
 './src/**/*.{js,ts,jsx,tsx}', 
 ],
 theme: {
-extend: {
+ extend: {
+	fontFamily: {
+		display: ['Fraunces', 'Georgia', 'serif'],
+		sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
+	},
 	borderRadius: {
 		lg: 'var(--radius)',
 		md: 'calc(var(--radius) - 2px)',
 		sm: 'calc(var(--radius) - 4px)'
 	},
 	colors: {
+		paper: '#FAF6F0',
+		'paper-deep': '#F1E9DB',
+		ink: '#191410',
+		persimmon: '#E4572E',
+		olive: '#223726',
+		marigold: '#FFB627',
+		clay: '#E7DDCB',
+		brick: '#C1272D',
 		background: 'hsl(var(--background))',
 		foreground: 'hsl(var(--foreground))',
 		card: {
 			DEFAULT: 'hsl(var(--card))',
 			foreground: 'hsl(var(--card-foreground))'
 		},
 		popover: {
 			DEFAULT: 'hsl(var(--popover))',
 			foreground: 'hsl(var(--popover-foreground))'
 		},
