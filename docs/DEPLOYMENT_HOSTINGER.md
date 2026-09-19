# Deploying to Hostinger (Premium Web Hosting Plan)

This guide walks you through deploying your React (Vite) Single Page Application to a Hostinger Premium Web Hosting plan (which runs on a standard PHP/Apache or LiteSpeed environment).

Since React applications are executed entirely in the user's browser, you do **not** need a Node.js server on Hostinger. You simply need to build the static files (HTML, CSS, JS) and upload them to your hosting account.

## Step 1: Build the Application Locally

Before uploading, you need to compile your React application into highly optimized, minified static files.

1. Open your terminal in the root directory of your project (the `arathi` folder).
2. Run the build command:
   ```bash
   npm run build
   ```
3. Once the process completes, you will see a new folder named `dist` in your project directory. This folder contains the production-ready files. **This is the only folder you need to upload.**

## Step 2: Prepare Hostinger (hPanel)

1. Log in to your Hostinger account and navigate to the **hPanel** (Hostinger Control Panel).
2. Go to **Websites** and click on **Manage** next to your domain name.
3. Scroll down to the **Files** section and open the **File Manager**.

## Step 3: Upload Files to `public_html`

1. In the Hostinger File Manager, double-click to open the `public_html` directory. 
   *(Note: `public_html` is the root folder for your live website. If there is a default `default.php` or `index.php` file inside it, you can delete it to make room for your app).*
2. Upload the **contents** of your local `dist` folder directly into the `public_html` directory. 
   - **Do not** upload the `dist` folder itself. Upload the files *inside* it (e.g., `index.html`, `assets/`, `ribbon.png`, `img1.png`, etc.).
   
*Pro Tip: You can ZIP the contents of your `dist` folder, upload the ZIP file to `public_html`, and then use Hostinger's "Extract" button to unzip it quickly.*

## Step 4: Configure Routing (Optional but Recommended)

Because this is a Single Page Application (SPA), if you ever add multiple pages using React Router in the future, refreshing the page on a sub-route (like `yourdomain.com/photos`) will cause Hostinger's Apache/LiteSpeed server to return a 404 Error. 

To future-proof your application and add basic caching, create a file named `.htaccess` inside your `public_html` directory and paste the following code into it:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Caching optimization
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```
*Save the `.htaccess` file.*

## Step 5: Verify Your Deployment

Open your browser and visit your domain name (e.g., `https://yourdomain.com`). 
Your elegant, animated invitation should now be live and accessible to the world!

---

### Troubleshooting
- **Seeing a Blank Screen?** Make sure you uploaded the *contents* of the `dist` folder, not the `dist` folder itself. The `index.html` file must sit directly inside `public_html`.
- **Images not loading?** Ensure that your images were placed inside the `public/` directory before you ran `npm run build`. Vite copies everything in `public/` to the root of your `dist` folder automatically.
