## How next works?

1. How next js works?

---

1. git clone https://github.com/Zephyrdoestech/CIT-U-SSG-Website
2. Top directory > `/ssg-app` --> project directory.
3. Many folders is `/ssg-app`, but the really important once for now is:
   - `/app`: contains the pages of the app. Its filesystem is the routing system.
4. Directories (or folders) within and including the `/app` === *a page in app*
5. Each directory in the `/app` have the following files:
   - `page.tsx`: contains the code for the page (or directory) it is in
   - `layout.tsx`: contains the template for the page (or directory) it is in and for the succeeding child pages within it.


citussg.org