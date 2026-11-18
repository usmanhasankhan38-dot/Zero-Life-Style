import fs from 'fs';
import path from 'path';

export default function HomePage() {
  const filePath = path.join(process.cwd(), 'public', 'clone-body.html');
  const cloneHtml = fs.readFileSync(filePath, 'utf8');

  return (
    <>
      {/* 100% Exact Clone of Zero Lifestyle Landing Page */}
      <div
        id="zero-lifestyle-clone-root"
        dangerouslySetInnerHTML={{ __html: cloneHtml }}
      />

      {/* Floating Live Support Widget */}
      <aside className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/923000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-300 group"
          aria-label="WhatsApp Support"
        >
          <svg
            className="w-7 h-7 fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.825zm-3.423-10.416c-4.417 0-8 3.584-8 8 0 1.488.409 2.88 1.121 4.077l-1.186 4.336 4.457-1.169c1.144.664 2.476 1.042 3.896 1.042 4.417 0 8-3.583 8-8 0-4.418-3.583-8-8.288-8.286z" />
          </svg>
        </a>
      </aside>
    </>
  );
}
